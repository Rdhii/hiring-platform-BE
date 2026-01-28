-- CreateTable
CREATE TABLE "ProfileRequired" (
    "id" SERIAL NOT NULL,
    "postJobId" INTEGER NOT NULL,
    "fullName" TEXT NOT NULL DEFAULT 'Mandatory',
    "photoProfile" TEXT NOT NULL DEFAULT 'Mandatory',
    "gender" TEXT NOT NULL DEFAULT 'Optional',
    "domicile" TEXT NOT NULL DEFAULT 'Optional',
    "email" TEXT NOT NULL DEFAULT 'Mandatory',
    "phoneNumber" TEXT NOT NULL DEFAULT 'Mandatory',
    "linkedinLink" TEXT NOT NULL DEFAULT 'Optional',
    "dateOfBirth" TEXT NOT NULL DEFAULT 'Optional',

    CONSTRAINT "ProfileRequired_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProfileRequired" ADD CONSTRAINT "ProfileRequired_postJobId_fkey" FOREIGN KEY ("postJobId") REFERENCES "PostJob"("id") ON DELETE CASCADE ON UPDATE CASCADE;
