import Card from './components/card';

const jobOpenings = [
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTo3-7hEo5B0u5CTAkUh3QdVd6z4ty-9itlvxHcjftg&s=10",
    companyName: "Amazon",
    time: "5 days ago",
    position: "Senior UI/UX Designer",
    tag1: "Full-time",
    tag2: "Senior-level",
    salary: "$120/hr",
    location: "Lahore, Pakistan"
  },
  {
    companyLogo: "data:image/png;base64,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",
    companyName: "Google",
    time: "6 days ago",
    position: "Graphics Designer",
    tag1: "Part-time",
    tag2: "Junior-level",
    salary: "$80/hr",
    location: "Lahore, Pakistan"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQXQtCsC0Xcj4T5zQG0L5fBqM4UzxEXZD65pTcZEA5w&s=10",
    companyName: "Dribbble",
    time: "2 days ago",
    position: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Senior-level",
    salary: "$100/hr",
    location: "Karachi, Pakistan"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRU5H998rYo129W48um8j_SP5gxrDpfo9l0H1Ghpe8qw&s=10",
    companyName: "Apple",
    time: "4 days ago",
    position: "Product Designer",
    tag1: "Full-time",
    tag2: "Senior-level",
    salary: "$150/hr",
    location: "Islamabad, Pakistan"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAkOU5dJEO2PUvKR2xy4kqBo5bc4ZsADcZueNxqIeZA&s=10",
    companyName: "Figma",
    time: "1 day ago",
    position: "Visual Designer",
    tag1: "Part-time",
    tag2: "Junior-level",
    salary: "$70/hr",
    location: "Lahore, Pakistan"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJANb0XItp3xw1MB-dF4ccHxxCtgDc7auj-nAXlk-vw&s=10",
    companyName: "Microsoft",
    time: "7 days ago",
    position: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Senior-level",
    salary: "$130/hr",
    location: "Lahore, Pakistan"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsuOnnoslszvvrtJmJ6uhtxoYY83ahryslpCWuAS_kw&s=10",
    companyName: "Meta",
    time: "3 days ago",
    position: "UX Researcher",
    tag1: "Full-time",
    tag2: "Junior-level",
    salary: "$90/hr",
    location: "Karachi, Pakistan"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VUZ_IS4ORclF51iXFkNjNZDCM3bD_U-RSvC2vhVHug&s=10",
    companyName: "Adobe",
    time: "8 days ago",
    position: "Graphic Designer",
    tag1: "Part-time",
    tag2: "Junior-level",
    salary: "$65/hr",
    location: "Islamabad, Pakistan"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPND1gzuX-XconUqe_R0cziing8DUo0TcRyJFTjV53g&s=10",
    companyName: "Netflix",
    time: "5 days ago",
    position: "Motion Graphics Designer",
    tag1: "Full-time",
    tag2: "Senior-level",
    salary: "$110/hr",
    location: "Lahore, Pakistan"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4Etwn9YseNZjBn99AHtkQXAkeDoT7UKtSsRUVz0ldA&s=10",
    companyName: "Spotify",
    time: "2 days ago",
    position: "Product UI Designer",
    tag1: "Part-time",
    tag2: "Junior-level",
    salary: "$75/hr",
    location: "Lahore, Pakistan"
  }
];

const App = () => {
  return (
    <>
    <div className="parent">
{jobOpenings.map((job) => {
   return <Card companyName={job.companyName} companyLogo={job.companyLogo} time={job.time} position ={job.position} tag1={job.tag1} tag2={job.tag2} salary={job.salary} location={job.location}/>
})}

    </div>
   </>
  
  )
}

export default App
