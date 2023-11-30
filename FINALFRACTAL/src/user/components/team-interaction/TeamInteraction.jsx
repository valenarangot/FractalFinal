import React, {useState} from 'react';
import { ModalTeam } from '../team-modal/ModalTeam';
import { TeamCard } from '../team-card/TeamCard';
import { membersData } from '../../../data/membersData';
import { useMembers } from '../../hooks/useMembers';
import styles from './TeamInteraction.module.css'
import { useFilters } from '../../hooks/useFilters'

export function TeamInteraction (){
    const { 
        setselectedMemberFilter,
      } = useFilters()

    const { members, imageMembers} = useMembers()
    
    const [selectedMember,setSelectedMember] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (member, imageMember) => {
        setSelectedMember(member);
        setSelectedImage(imageMember);
        setselectedMemberFilter(member.name)
        
        // const TeamCarrousel = document.getElementById("TeamCarrousel")
        // document.TeamCarrousel.classList.add('modal-open')
    };
    
    const closeModal = () => {
        setSelectedMember(null);
        setSelectedImage(null);
        // document.body.classList.remove('modal-open');
    };

    console.log(members)
    return(
        
        <div className={styles.modalAction}>
            <h1>Our team</h1>
            <div className={styles.carrouselTeam}>
            {members.map((member)=>{
                const firstName = member.name.split(' ') [0]
                const imageMember = imageMembers.find((img) =>
                img.includes(firstName))
                return(
                    <TeamCard key={member.id} member={member} imageMember={imageMember} onClick={() => openModal(member, imageMember)}/>
                )
            }
                
  
            )}   
            </div>
            {selectedMember && <ModalTeam member={selectedMember} image={selectedImage} onClose={closeModal}/>}
        
        </div>
    )
}