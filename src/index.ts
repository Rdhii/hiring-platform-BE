import { prisma } from "./lib/prisma";

async function main() {
    const newJob = await prisma.postJob.create({
        data: {
            jobName: "Software Engineer",
            jobType: "Full-time",
            jobDescription: "Develop and maintain software applications.",
            candidateNeeded: 3,
            minimumSalary: 60000,
            maximumSalary: 120000
        },
    })
    console.log("Created PostJob:", newJob);

    const allJobs = await prisma.postJob.findMany();
    console.log("All jobs:", JSON.stringify(allJobs, null, 2));

      const job = await prisma.postJob.findUnique({
    where: {
      id: newJob.id,
    },
  })
  console.log('Job by ID:', job)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })