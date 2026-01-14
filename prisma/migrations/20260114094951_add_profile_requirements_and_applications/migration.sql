-- AlterTable
ALTER TABLE "PostJob" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dateOfBirthRequired" TEXT NOT NULL DEFAULT 'Optional',
ADD COLUMN     "domicileRequired" TEXT NOT NULL DEFAULT 'Optional',
ADD COLUMN     "emailRequired" TEXT NOT NULL DEFAULT 'Mandatory',
ADD COLUMN     "fullNameRequired" TEXT NOT NULL DEFAULT 'Mandatory',
ADD COLUMN     "genderRequired" TEXT NOT NULL DEFAULT 'Optional',
ADD COLUMN     "linkedinLinkRequired" TEXT NOT NULL DEFAULT 'Optional',
ADD COLUMN     "phoneNumberRequired" TEXT NOT NULL DEFAULT 'Mandatory',
ADD COLUMN     "photoProfileRequired" TEXT NOT NULL DEFAULT 'Mandatory',
ALTER COLUMN "minimumSalary" DROP NOT NULL,
ALTER COLUMN "maximumSalary" DROP NOT NULL;
