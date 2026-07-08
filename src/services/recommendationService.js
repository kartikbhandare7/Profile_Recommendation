const repository = require("../repositories/recommendationRepository");
const itemRepository = require("../repositories/itemRepository");

async function recommend(profile) {

    const jobs = await repository.getActiveJobs();

    const scoredJobs = [];

    const WEIGHTS = {
    AGE: 20,
    EXPERIENCE: 20,
    CATEGORY: 15,
    LOCATION: 15,
    SALARY: 10,
    SKILL: 5
    };

    for (const job of jobs) {

        let score = 0;
        let reasons = [];

        // Age
        if (
            profile.age >= job.min_age &&
            profile.age <= job.max_age
        ) {
            score += WEIGHTS.AGE;
            reasons.push("Age matches eligibility criteria.");
        }

        // Experience
        if (profile.experience >= job.min_experience) {
            score += WEIGHTS.EXPERIENCE;
            reasons.push("Experience requirement satisfied.");
        }

        // Category
        if (
            profile.preferredCategory.toLowerCase() ===
            job.category.toLowerCase()
        ) {
            score += WEIGHTS.CATEGORY;
            reasons.push("Preferred category matches.");
        }

        // Location
        if (
            profile.location.toLowerCase() ===
            job.location.toLowerCase()
        ) {
            score += WEIGHTS.LOCATION;
            reasons.push("Preferred location matches.");
        }

        // Salary
        if (profile.salaryExpectation <= job.salary) {
            score += WEIGHTS.SALARY;
            reasons.push("Salary expectation fits.");
        }

        // Skills
        const requiredSkills = job.required_skills
            .split(",")
            .map(skill => skill.trim().toLowerCase());

        const userSkills = profile.skills.map(skill =>
            skill.toLowerCase()
        );

        const matchedSkills = [];

        requiredSkills.forEach(skill => {

            if (userSkills.includes(skill)) {

                score += WEIGHTS.SKILL;
                matchedSkills.push(skill);

            }

        });

        if (matchedSkills.length > 0) {

            reasons.push(
                `Matching skills: ${matchedSkills.join(", ")}.`
            );

        }

        scoredJobs.push({

            ...job,
            score,
            reason: reasons.join(" ")

        });

    }

    const filteredJobs = scoredJobs.filter(
        job => job.score > 0
    );

    filteredJobs.sort((a, b) => b.score - a.score);

    return filteredJobs.slice(0, 3);

}

async function explainItem(id) {

    const item = await itemRepository.getItemById(id);

    if (!item) {
        throw new Error("Item not found");
    }

    return {
        itemId: item.id,
        title: item.title,
        eligibility: {
            age: `${item.min_age} - ${item.max_age}`,
            minimumExperience: `${item.min_experience} years`,
            requiredSkills: item.required_skills.split(","),
            location: item.location,
            salary: `${item.salary} LPA`
        },
        explanation:
            `Candidates between ${item.min_age} and ${item.max_age} years of age with at least ${item.min_experience} years of experience and skills in ${item.required_skills} are eligible. The role is located in ${item.location} and offers ${item.salary} LPA.`
    };

}
module.exports = {
    recommend,
    explainItem
};