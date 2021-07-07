//@ts-nocheck
import styles from './index.less';
import { useState, useEffect } from 'react';
export default function IndexPage() {
  const [key, setKey] = useState('');
  const [lightflag, setLightflag] = useState(false);
  const [lightlist,setLightlist] = useState([]);
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      setKey(event?.key);
    });
    // document.addEventListener('mousemove', (event) => {
    //   setMouseX(event?.clientX);
    //   setMouseY(event?.clientY);
    // });
  });
  useEffect(()=>{
    // setArr(randomCoding());  
  },[key])
  
  //随机生成
 const randomCoding=()=>{
    //创建26个字母数组
    let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let idvalue =[];
    let n = 20;//这个值可以改变的，对应的生成多少个字母，根据自己需求所改
    for(var i=0;i<n;i++){
       idvalue.push(arr[Math.floor(Math.random()*26)]);
    }
    return idvalue;
  }
  
  const wordLight =()=>{
    setLightflag(true);
    setLightlist(randomCoding())
  }
  
  const closeAll = () =>{
    setLightflag(false)
  }
  return (
    <div className={styles.bodys}>
      <div className={styles.btnGroup}>
       <div onClick={closeAll} className={styles.btn}>全部关闭</div>
       <div onClick={wordLight} className={styles.btn}>数字流星</div>
      </div>
      {
        lightflag?
        lightlist.length?lightlist.map((item,index)=>{
          const Xcol = 100/lightlist.length;
          let x = Xcol*index + '%';
          let fz = Math.floor(10+Math.random()*20)+'px';
          let fast = `${Math.floor(1+Math.random()*10)}s`;
          let deg = `rotate(${Math.floor(Math.random()*360)}deg)`;
          let color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
          return (
            <div className={styles.light} style={{left:x,fontSize:fz,animationDuration:fast,color:color}} key={index}>
            <div className={styles.word} style={{transform:deg}}>
            {item}
            </div>
          </div>
          )
        })
        :null
        :null
         }
      {
        
      }
    </div>
  );
}
