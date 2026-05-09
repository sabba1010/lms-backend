// Test enrollment endpoint
const testEnrollment = async () => {
  const BASE_URL = 'http://localhost:5000';

  try {
    // First get a user and course
    const usersRes = await fetch(`${BASE_URL}/api/users`);
    const users = await usersRes.json();
    const user = users[0]; // Get first user

    const coursesRes = await fetch(`${BASE_URL}/api/courses`);
    const courses = await coursesRes.json();
    const course = courses[0]; // Get first course

    console.log('Testing enrollment...');
    console.log('User ID:', user._id);
    console.log('Course ID:', course._id);

    // Test enrollment
    const enrollRes = await fetch(`${BASE_URL}/api/payments/enroll`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user._id,
        courseIds: [course._id]
      }),
    });

    const result = await enrollRes.json();
    console.log('Enrollment result:', result);

    // Check enrolled courses
    const enrolledRes = await fetch(`${BASE_URL}/api/payments/enrolled/${user._id}`);
    const enrolled = await enrolledRes.json();
    console.log('Enrolled courses:', enrolled);

  } catch (err) {
    console.error('Test failed:', err);
  }
};

testEnrollment();