import React, { FC, useState } from 'react';
import axios from 'axios';
import {
    StyledFormContainer,
    StyledIntro,
    StyledLeftPane,
    StyledLogo, StyledQuestionWrapper,
    StyledRegister,
    StyledRightPane
} from '../styled/styledRegister';
import { TimeLine } from '../../../sharedComponents/timeline/components/TimeLine';
import { TextBoxList } from '../../../sharedComponents/textBox/components/TextBoxList';
import { Data, InputType } from '../types/Register';
import Question from '../../../common/assets/question.png';

const DefaultFormData: Data = {
    email: '',
    password: '',
    status: '',
    bank: '',
    id: '',
}

export const Register: FC = () => {
    const [formData, setFormData] = useState<Data>(DefaultFormData);
    const [active, setActive] = useState(0);
    const [prevActive, setPreActive] = useState(0);
    const handleClick = (index: number) => {
        setPreActive(active);
        setActive(index);
    }
    const update = (type: InputType, value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [type]: value
        }))
    }
    const handleSave = async () => {
        try {
            await axios.post('http://localhost:5000/save', formData);
        } catch ( e ) {
            alert(e.message);
        }
    }
    return (
        <StyledRegister>
            <StyledLeftPane>
                <StyledLogo>
                    beforepay
                </StyledLogo>
                <StyledIntro>
                    Enter your employment details
                </StyledIntro>
                <StyledIntro>
                    Please ensure these details are correct because we'll use these to set up your account
                </StyledIntro>
            </StyledLeftPane>
            <StyledRightPane>
                <TimeLine active={active} prevActive={prevActive} handleClick={handleClick}/>
                <StyledFormContainer>
                    <TextBoxList data={formData} active={active} prevActive={prevActive} handleClick={handleClick} update={update} handleSave={handleSave} />
                </StyledFormContainer>
            </StyledRightPane>
            <StyledQuestionWrapper>
                <img src={Question} alt="question"/>
            </StyledQuestionWrapper>
        </StyledRegister>
    )
}
