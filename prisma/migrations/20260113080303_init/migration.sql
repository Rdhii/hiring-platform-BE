-- CreateTable
CREATE TABLE "PostJob" (
    "id" SERIAL NOT NULL,
    "jobName" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "candidateNeeded" INTEGER NOT NULL,
    "minimumSalary" INTEGER NOT NULL,
    "maximumSalary" INTEGER NOT NULL,

    CONSTRAINT "PostJob_pkey" PRIMARY KEY ("id")
);
