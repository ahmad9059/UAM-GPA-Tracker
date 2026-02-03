import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userEmail = "ahmadhassan9059@gmail.com";

  // Find the user
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
  });

  if (!user) {
    console.error(`User with email ${userEmail} not found!`);
    process.exit(1);
  }

  console.log(`Found user: ${user.name || user.email}`);

  // Delete existing semesters for this user (to avoid duplicates)
  await prisma.semester.deleteMany({
    where: { userId: user.id },
  });

  console.log("Cleared existing semesters...");

  // Semester 1 - Fall 2023
  const semester1 = await prisma.semester.create({
    data: {
      name: "Fall 2023",
      userId: user.id,
      courses: {
        create: [
          {
            name: "Introduction to Programming",
            creditHours: 4,
            totalMarks: 100,
            obtainedMarks: 88,
          },
          {
            name: "Calculus I",
            creditHours: 3,
            totalMarks: 100,
            obtainedMarks: 75,
          },
          {
            name: "English Composition",
            creditHours: 3,
            totalMarks: 100,
            obtainedMarks: 82,
          },
          {
            name: "Physics I",
            creditHours: 4,
            totalMarks: 100,
            obtainedMarks: 70,
          },
          {
            name: "Islamic Studies",
            creditHours: 2,
            totalMarks: 100,
            obtainedMarks: 90,
          },
          {
            name: "Computer Fundamentals Lab",
            creditHours: 1,
            totalMarks: 40,
            obtainedMarks: 35,
          },
        ],
      },
    },
  });

  console.log(`Created semester: ${semester1.name}`);

  // Semester 2 - Spring 2024
  const semester2 = await prisma.semester.create({
    data: {
      name: "Spring 2024",
      userId: user.id,
      courses: {
        create: [
          {
            name: "Object Oriented Programming",
            creditHours: 4,
            totalMarks: 100,
            obtainedMarks: 85,
          },
          {
            name: "Calculus II",
            creditHours: 3,
            totalMarks: 100,
            obtainedMarks: 68,
          },
          {
            name: "Discrete Mathematics",
            creditHours: 3,
            totalMarks: 100,
            obtainedMarks: 78,
          },
          {
            name: "Digital Logic Design",
            creditHours: 3,
            totalMarks: 100,
            obtainedMarks: 82,
          },
          {
            name: "Pakistan Studies",
            creditHours: 2,
            totalMarks: 100,
            obtainedMarks: 85,
          },
          {
            name: "OOP Lab",
            creditHours: 1,
            totalMarks: 40,
            obtainedMarks: 38,
          },
        ],
      },
    },
  });

  console.log(`Created semester: ${semester2.name}`);

  // Semester 3 - Fall 2024
  const semester3 = await prisma.semester.create({
    data: {
      name: "Fall 2024",
      userId: user.id,
      courses: {
        create: [
          {
            name: "Data Structures & Algorithms",
            creditHours: 4,
            totalMarks: 100,
            obtainedMarks: 92,
          },
          {
            name: "Database Systems",
            creditHours: 3,
            totalMarks: 100,
            obtainedMarks: 88,
          },
          {
            name: "Computer Organization",
            creditHours: 3,
            totalMarks: 100,
            obtainedMarks: 75,
          },
          {
            name: "Linear Algebra",
            creditHours: 3,
            totalMarks: 100,
            obtainedMarks: 72,
          },
          {
            name: "Technical Writing",
            creditHours: 2,
            totalMarks: 100,
            obtainedMarks: 80,
          },
          {
            name: "DSA Lab",
            creditHours: 1,
            totalMarks: 40,
            obtainedMarks: 36,
          },
        ],
      },
    },
  });

  console.log(`Created semester: ${semester3.name}`);

  console.log("\n✅ Seed completed successfully!");
  console.log("Created 3 semesters with 6 courses each for Computer Science degree.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
