import React, {useState} from 'react';
import s from './contacts.module.scss'
import {Title} from "../common/title/title";
import {Info} from "./info/Info";
import {Input} from "../common/input/Input";
import {Fade} from "react-awesome-reveal";
import BackText from "../common/backText/BackText";
import {useFormik} from "formik";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

export const Contacts = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().max(50, 'Max length 50 symbols').required('name required'),
      subject: Yup.string().max(50, 'Max length 50 symbols').required('subject required'),
      email: Yup.string().email('Invalid email address').required('email required'),
      message: Yup.string().max(1000, 'Max length 1000 symbols').required('message required')
    }),
    onSubmit: (values) => {
        emailjs.send('service_52jvkpf', 'template_sktadie', values, '0fMID6Bv7g460VKuX')
          .then(res => {
            formik.resetForm()
            alert('successes')
          })

      }
  })

  const [info, setInfo] = useState([
    {
      id: 1,
      title: 'Address',
      text: 'Belarus, Hrodna',
      icon: 'map'
    },
    {
      id: 2,
      title: 'Email',
      text: 'Steem287@gmail.com',
      icon: 'envelope'
    },
    {
      id: 3,
      title: 'Phone',
      text: '+375 29 287-85-05',
      icon: 'phone'
    },
  ])

  const infoMapping = info.map(el =>
    <Info
      key={el.id}
      title={el.title}
      text={el.text}
      icon={el.icon}
    />)

  return (
    <div id={'contacts'} className={s.mainContainer}>
      <div className={s.contactsContainer}>
        <Fade cascade={true} triggerOnce={true}>
          <Title title={'Contacts'} prePostTitle={`Let's`} postTitle={'Talk About Ideas'}/>
          <div className={s.formAndInfo}>
            <div className={s.infoContainer}>
              <div>
                {infoMapping}
              </div>
            </div>
            <form style={{width: '100%'}} onSubmit={formik.handleSubmit}>
              <div className={s.form}>

                <div className={s.oneFloor}>
                  <Input
                    text={'your full name'}
                    size={{
                      width: '100%',
                      height: '60px'
                    }}
                    formikProps={formik.getFieldProps('name')}
                  />
                  {formik.touched.name && formik.errors.name && <div style={{color: 'red'}}>{formik.errors.name}</div>}
                  <Input
                    text={'your email address'}
                    size={{
                      width: '100%',
                      height: '60px'
                    }}
                    formikProps={formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                </div>
                <Input
                  text={'your subject'}
                  size={{
                    width: '100%',
                    height: '60px'
                  }}
                  formikProps={formik.getFieldProps('subject')}
                />
                {formik.touched.subject && formik.errors.subject && <div style={{color: 'red'}}>{formik.errors.subject}</div>}
                <Input
                  text={'your message'}
                  size={{
                    width: '100%',
                    height: '140px'
                  }}
                  formikProps={formik.getFieldProps('message')}
                />
                {formik.touched.message && formik.errors.message && <div style={{color: 'red'}}>{formik.errors.message}</div>}
                <div className={s.buttons}>
                  <button type='submit'>send message</button>
                </div>
              </div>
            </form>
          </div>
        </Fade>
        <BackText title={'Contacts'}/>
      </div>
    </div>
  );
};