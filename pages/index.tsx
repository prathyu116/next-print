import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRef } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const print = () => window.print();
  // const print = () => {
  //   const printSectionRef = document.getElementById('printsection2');
  //   console.log(printSectionRef)
  //   if (printSectionRef) {
  //     const content = printSectionRef.innerHTML;
  //     const newWindow = window.open('', '_blank');

  //     newWindow.document.write(content);
  //     newWindow.print();
  //     newWindow.close();
  //   }
  // };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>


      <main className={`${styles.main} ${styles.bodyy}`}>
        <h1>hellow</h1>
        <button className={styles.btn} onClick={print}>Print</button>

        <div className={styles.printsection}
          id='printsection2' >
          <header className={styles.header}>Header content here</header>

          <h3>
            <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
            </i>  </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus odio earum veritatis quaerat quibusdam consequatur numquam voluptate beatae necessitatibus! Eaque reprehenderit perspiciatis hic itaque totam sequi autem, et quibusdam!
          </h3>

          <footer

          >
            Footer content here
          </footer>
        </div>
        <h1>dfdfdfdsf</h1>
        <h1>dfdfdfdsf</h1>
        <h1>dfdfdfdsf</h1>
        <h1>dfdfdfdsf</h1>
      </main>



    </>
  )
}
