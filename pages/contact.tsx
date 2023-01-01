import { Button, TextField } from '@mui/material'
import { useAppSelector } from 'hooks'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { RegistForm } from 'types/form'
import { motion } from 'framer-motion'
import { ShowupMotion, FlipHorizontalMotion } from 'motion'
import { NextPage } from 'next'

const Container = styled.section<{ isdark: boolean }>`
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 100%;
  line-height: 2;

  .contact__intro-illust {
    display: flex;
    justify-items: center;
    align-items: center;
    position: relative;

    .illust-circle {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      background: ${(props) =>
        props.isdark ? 'rgba(255, 255, 255, 0.2)' : ' rgba(0, 0, 0, 0.3)'};
      width: 200px;
      height: 200px;
      border-radius: 100%;
    }
    img {
      flex: 1;
      transform: rotateY(180deg);
    }
  }

  form {
    width: 60%;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding: 30px;
    button {
      width: 200px;
      border: 2px solid ${(props) => props.theme.text.basic};
      color: ${(props) => props.theme.text.basic};
      font-weight: 600;
    }

    @media (max-width: 750px) {
      width: 100%;
    }
  }
`

const CustomInput = styled(TextField)`
  width: 100%;
  background-color: ${(props) => props.theme.background.basic};
  label {
    color: ${(props) => props.theme.text.basic};
  }
  .MuiInputBase-root {
    &::before {
      border-bottom: 2px solid ${(props) => props.theme.text.basic} !important;
    }
    input,
    textarea {
      color: ${(props) => props.theme.text.basic};
      &::placeholder {
        color: ${(props) => props.theme.text.basic};
        font-size: 14px;
      }
    }
    #outlined-multiline-flexible {
      height: 200px !important;
      overflow: auto !important;
    }
  }
`

const Contact: NextPage = () => {
  const isDark = useAppSelector((state) => state.theme.value)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistForm>()
  const onSubmit = (valid: RegistForm) => {
    alert('메일이 전송되었습니다!')
  }
  return (
    <Container isdark={isDark}>
      <div className='contact__intro-illust'>
        <div className='illust-circle'></div>
        <motion.img
          src='/static/contact.svg'
          width={300}
          height={300}
          alt='contact'
          initial='start'
          whileInView='end'
          variants={FlipHorizontalMotion}
          transition={{
            duration: 1,
          }}
        />
      </div>
      <motion.p variants={ShowupMotion} initial='start' whileInView='end'>
        채용 혹은 궁금한 점이 있으시다면 <br />
        아래 폼에서 메일을 보내주세요 :)
      </motion.p>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        variants={ShowupMotion}
        initial='start'
        whileInView='end'
        transition={{
          duration: 0.5,
        }}
      >
        <CustomInput
          id='outlined-required'
          label='E-Mail'
          type='email'
          color='warning'
          variant='filled'
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='이메일을 입력해주세요'
          {...register('email', {
            required: 'Email을 입력해주세요',
            pattern: {
              value: /[\w-_.]+@[\w]+\.[\w.]+/,
              message: '이메일 형식에 맞게 입력해 주세요',
            },
          })}
        />
        <CustomInput
          id='outlined-multiline-flexible'
          multiline
          type='textarea'
          maxRows={5}
          label='Message'
          color='warning'
          variant='filled'
          InputLabelProps={{
            shrink: true,
          }}
          {...register('message', {
            required: '메세지를 입력해주세요',
          })}
        />

        <Button type='submit'>Send</Button>
      </motion.form>
    </Container>
  )
}

export default Contact
