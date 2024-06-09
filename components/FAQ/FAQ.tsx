import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <div className={styles.faq}>
      <h1>Frequently Asked Questions (FAQ):</h1>
      <h3>General Questions:</h3>
      <ol>
        <li>What is your tutoring style?</li>
        <p>
          My general approach to tutoring is personalized to each student. I
          begin by understanding your goals and assessing your current knowledge
          through conversation and informal testing. From there, I build on the
          concepts you find challenging, using patterns and examples to simplify
          complex ideas.
        </p>
        <li>Do you teach online/in-person?</li>
        <p>
          Yes I do both! Please refer to the appropriate sections in the FAQ to
          learn more about in-person or online learning.
        </p>
        <li>
          Can I come in just to learn or get a head start on a particular topic?
        </li>
        <p>
          Yes! You can come in to learn about a topic that I have expertise in.
        </p>
        <li>Can I leave any feedback?</li>
        <p>
          Yes! I would really appreciate feedback. Feel free to send me an email
          with your suggestions after a tutoring session. I am working on
          including a suggestions section on this site.
        </p>
        <li>Do you provide tutoring during holidays and school breaks?</li>
        <p>
          I do not offer tutoring services on some major holidays. You can check
          my availability by clicking on the availability tab or by scheduling a
          session with me. I will also email as early as possible to alert you
          if there is a possibility of my absence.
        </p>
        <li>
          Can I contact you for a lesson on the same day without making an
          appoinment?
        </li>
        <p>To secure a time slot, please schedule a day in advance.</p>
        <li>
          How much time in advance should I contact you to guarentee a session?
        </li>
        <p>
          If you would like to secure a time slot, please schedule a day in
          advance.
        </p>
        <li>How do you handle rescheduling a session?</li>
        <p>
          If you need to reschedule a session, please contact me as soon as
          possible. I will do my best to acommodate your new preferred time.
        </p>
        <li>Can parents sit in on tutoring sessions?</li>
        <p>
          Yes, parents are welcome to sit in on sessions, especially for younger
          students. This can help them understand the tutoring process and how
          to support their child's learning at home.
        </p>
        <li>Do you offer group tutoring sessions?</li>
        <p>
          Currently, I am not offering group tutoring sessions. If there is
          enough demand, I may consider offering them at a discounted price.
          This service would only be available in-person and for those with a
          source of transportation.
        </p>
        <li>What materials do I need to bring to a tutoring session?</li>
        <p>
          For in-person sessions, please bring any relevant textbooks,
          notebooks, and assignment instructions. For online sessions, ensure
          you have a stable internet connection, a computer with a camera and
          microphone, and any necessary study materials. The more prepared you
          come in the more I can accomplish during our session!
        </p>
        <li>When was your last background check?</li>
        <p>
          My last background check was done with Providence Little Company of
          Mary Medical Center (Feburary 2024).
        </p>
        <li>Can I add you on social media?</li>
        <p>
          I do not actively use most of my social media accounts. For
          professionalism, I will only allow students who have graduated from
          high school to add me on accounts outside of those related to
          tutoring.
        </p>
      </ol>
      <h3>Payments:</h3>
      <ol>
        <li>How will you take payments?</li>
        <p>
          I accept payments through PayPal, Venmo, or Zelle. I also take cash
          for in-person lessons. Payments will be made after the lesson.
        </p>
        <li>When do I need to make a payment?</li>
        <p>Right after the lesson.</p>
        <li>Do you offer discounted rates?</li>
        <p>
          If I feel that the service was not up to par, I will offer a
          discounted rate or sometimes not ask for a payment.
        </p>
        <li>Are there trial sessions?</li>
        <p>
          No, I do not offer any trial sessions. However, I do NOT charge for
          setting up a session or for very simple questions.
        </p>
      </ol>
      <h3>Online Learning: </h3>
      <ol>
        <li>What platforms and tools do you use to teach online?</li>
        <p>
          I use Zoom, Discord, Skype, or Slack (my personal preference would be
          Discord). I use Krita to draw and display concepts over video.
        </p>
        <li>
          What should I do if I have technical issues during an online session?
        </li>
        <p>
          If you encounter technical issues, please inform me immediately. We
          can reschedule the session or find an alternative solution to ensure
          you receive the help you need. I will NOT charge for technical issues
          (unless if a good portion of the session has already been completed)
        </p>
      </ol>
      <h3>In-person Learning:</h3>
      <ol>
        <li>Where do in-person tutoring sessions take place?</li>
        <p>
          A location can be discussed. If requested, I will open up my home for
          tutoring sessions, which may be preferred to have access to supplies
          such as a whiteboard. A session at my location would mean that there
          is no travel fee attached.
        </p>
      </ol>
      <h3>Computer Science:</h3>
      <ol>
        <li>What computer science languages/tech stack do you teach?</li>
        <p>
          I am well versed in web development. This area involves the tech stack
          of HTML, CSS, JavaScript, React, Express, and MongoDB. I can also
          teach the basics of Computer Science and C++. For elementary to middle
          school students, I would teach using a beginner friendly language:
          Scratch.
        </p>
      </ol>
    </div>
  );
}
