import Mentor from "@/components/Mentor"

const Mentors = () => {
  return (
    <>
      <h2 className="px-4 font-semibold uppercase text-2xl my-4">Available Mentors</h2>
      <hr />
      <div className="px-4 py-2 flex flex-wrap gap-4 justify-normal">
        <Mentor />
        <Mentor />
        <Mentor />
        <Mentor />
        <Mentor />
        <Mentor />
        <Mentor />
        <Mentor />
      </div>
    </>
  )
}

export default Mentors