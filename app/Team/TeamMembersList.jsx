//components
import MemberCard from "../Components/UI/MemberCard";
import { members } from "../Database/members";

//images

export default function TeamMembersList() {
  return members.map((member) => (
    <MemberCard
      key={member.name}
      image={member.Image}
      name={member.name}
      post={member.post}
      alt={member.name}
      description={member.description}
      linkedin={member.linkedin}
    />
  ));
}
