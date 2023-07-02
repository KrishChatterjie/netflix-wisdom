const images = [
"Screenshot_20210715.jpg",
"Screenshot_20210725-015115_Netflix.png",
"Screenshot_20210729-180133_Pixel_Launcher.png",
"Screenshot_20210729-225847_Pixel_Launcher.png",
"Screenshot_20210730-005808_Pixel_Launcher.png",
"Screenshot_20210731-211547_Pixel_Launcher.png",
"Screenshot_20210801-003952_Pixel_Launcher.png",
"Screenshot_20210811-103007_Pixel_Launcher.png",
"Screenshot_20210812-110416_Pixel_Launcher.png",
"Screenshot_20210812-125410_Pixel_Launcher.png",
"Screenshot_20210812-125629_Pixel_Launcher.png",
"Screenshot_20210812-130202_Pixel_Launcher.png",
"Screenshot_20210812-130347_Pixel_Launcher.png",
"Screenshot_20210812-130625_Pixel_Launcher.png",
"Screenshot_20210812-160725_Pixel_Launcher.png",
"Screenshot_20210813-002742_Pixel_Launcher.png",
"Screenshot_20210813-003723_Pixel_Launcher.png",
"Screenshot_20210813-003847_Pixel_Launcher.png",
"Screenshot_20210813-120235_Pixel_Launcher.png",
"Screenshot_20210813-121047_Pixel_Launcher.png",
"Screenshot_20210813-121559_Pixel_Launcher.png",
"Screenshot_20210813-161955_Pixel_Launcher.png",
"Screenshot_20210813-162031_Pixel_Launcher.png",
"Screenshot_20210813-162342_Pixel_Launcher.png",
"Screenshot_20210813-164042_Pixel_Launcher.png",
"Screenshot_20210815-143015_Pixel_Launcher.png",
"Screenshot_20210815-143056_Pixel_Launcher.png",
"Screenshot_20210815-143223_Pixel_Launcher.png",
"Screenshot_20210815-150027_Pixel_Launcher.png",
"Screenshot_20210815-151216_Pixel_Launcher.png",
"Screenshot_20210815-151239_Pixel_Launcher.png",
"Screenshot_20210815-200128_Pixel_Launcher.png",
"Screenshot_20210815-223221_Pixel_Launcher.png",
"Screenshot_20210815-233404_Pixel_Launcher.png",
"Screenshot_20210816-154040_Pixel_Launcher.png",
"Screenshot_20210816-154429_Pixel_Launcher.png",
"Screenshot_20210816-154443_Pixel_Launcher.png",
"Screenshot_20210817-114932_Pixel_Launcher.png",
"Screenshot_20210817-180914_Pixel_Launcher.png",
"Screenshot_20210817-234300_Pixel_Launcher.png",
"Screenshot_20210817-234326_Pixel_Launcher.png",
"Screenshot_20210818-113409_Pixel_Launcher.png",
"Screenshot_20210818-113454_Pixel_Launcher.png",
"Screenshot_20210818-114221_Pixel_Launcher.png",
"Screenshot_20210818-225722_Pixel_Launcher.png",
"Screenshot_20210819-022550_Pixel_Launcher.png",
"Screenshot_20210820-021844_Pixel_Launcher.png",
"Screenshot_20210821-013238_Pixel_Launcher.png",
"Screenshot_20210821-013711_Pixel_Launcher.png",
"Screenshot_20210821-015756_Pixel_Launcher.png",
"Screenshot_20210822-112013_Pixel_Launcher.png",
"Screenshot_20210822-233043_Pixel_Launcher.png",
"Screenshot_20210824-153135_Pixel_Launcher.png",
"Screenshot_20210824-172120_Pixel_Launcher.png",
"Screenshot_20210824-174115_Pixel_Launcher.png",
"Screenshot_20210824-191940_Pixel_Launcher.png",
"Screenshot_20210824-192327_Pixel_Launcher.png",
"Screenshot_20210824-192341_Pixel_Launcher.png",
"Screenshot_20210824-192656_Pixel_Launcher.png",
"Screenshot_20210825-100416_Pixel_Launcher.png",
"Screenshot_20210825-113900_Pixel_Launcher.png",
"Screenshot_20210825-123748_Pixel_Launcher.png",
"Screenshot_20210825-123805_Pixel_Launcher.png",
"Screenshot_20210826-132457_Pixel_Launcher.png",
"Screenshot_20210829-135109_Pixel_Launcher.png",
"Screenshot_20210829-194421_Pixel_Launcher.png",
"Screenshot_20210830-142412_Pixel_Launcher.png",
"Screenshot_20210830-142511_Pixel_Launcher.png",
"Screenshot_20210831-170402_Pixel_Launcher.png",
"Screenshot_20210902-154551_Pixel_Launcher.png",
"Screenshot_20210902-175650_Pixel_Launcher.png",
"Screenshot_20210902-180118_Pixel_Launcher.png",
"Screenshot_20210903-223412_Pixel_Launcher.png",
"Screenshot_20210903-225851_Pixel_Launcher.png",
"Screenshot_20210904-203202_Pixel_Launcher.png",
"Screenshot_20210904-203226_Pixel_Launcher.png",
"Screenshot_20210904-203935_Pixel_Launcher.png",
"Screenshot_20210904-204235_Pixel_Launcher.png",
"Screenshot_20210904-205437_Pixel_Launcher.png",
"Screenshot_20210904-221625_Pixel_Launcher.png",
"Screenshot_20210904-223357_Pixel_Launcher.png",
"Screenshot_20210906-175218_Pixel_Launcher.png",
"Screenshot_20210906-180016_Pixel_Launcher.png",
"Screenshot_20210907-102607_Pixel_Launcher.png",
"Screenshot_20210910-015317_Pixel_Launcher.png",
"Screenshot_20210910-231209_Pixel_Launcher.png",
"Screenshot_20210910-233116_Pixel_Launcher.png",
"Screenshot_20210912-122216_Pixel_Launcher.png",
"Screenshot_20210912-122249_Pixel_Launcher.png",
"Screenshot_20210912-123439_Pixel_Launcher.png",
"Screenshot_20210912-125953_Pixel_Launcher.png",
"Screenshot_20210912-153734_Pixel_Launcher.png",
"Screenshot_20210912-153941_Pixel_Launcher.png",
"Screenshot_20210912-162444_Pixel_Launcher.png",
"Screenshot_20210912-162640_Pixel_Launcher.png",
"Screenshot_20210912-230105_Pixel_Launcher.png",
"Screenshot_20210912-230359_Pixel_Launcher.png",
"Screenshot_20210912-230707_Pixel_Launcher.png",
"Screenshot_20210912-231536_Pixel_Launcher.png",
"Screenshot_20210914-014948_Pixel_Launcher.png",
"Screenshot_20210914-110036_Pixel_Launcher.png",
"Screenshot_20210914-121545_Pixel_Launcher.png",
"Screenshot_20210917-143130_Pixel_Launcher.png",
"Screenshot_20210917-144128_Pixel_Launcher.png",
"Screenshot_20210918-131928_Pixel_Launcher.png",
"Screenshot_20210918-131949_Pixel_Launcher.png",
"Screenshot_20210918-132001_Pixel_Launcher.png",
"Screenshot_20210918-132015_Pixel_Launcher.png",
"Screenshot_20210918-133004_Pixel_Launcher.png",
"Screenshot_20210918-184200_Pixel_Launcher.png",
"Screenshot_20210919-161539_Pixel_Launcher.png",
"Screenshot_20210920-002739_Pixel_Launcher.png",
"Screenshot_20210920-151528_Pixel_Launcher.png",
"Screenshot_20210920-211016_Pixel_Launcher.png",
"Screenshot_20210920-230743_Pixel_Launcher.png",
"Screenshot_20210921-004813_Pixel_Launcher.png",
"Screenshot_20210921-164410_Pixel_Launcher.png",
"Screenshot_20210922-002836_Pixel_Launcher.png",
"Screenshot_20210922-003028_Pixel_Launcher.png",
"Screenshot_20210922-003205_Pixel_Launcher.png",
"Screenshot_20210923-004635_Pixel_Launcher.png",
"Screenshot_20210923-004939_Pixel_Launcher.png",
"Screenshot_20210923-144755_Pixel_Launcher.png",
"Screenshot_20210923-211245_Pixel_Launcher.png",
"Screenshot_20210924-010300_Pixel_Launcher.png",
"Screenshot_20210924-010352_Pixel_Launcher.png",
"Screenshot_20210924-142034_Pixel_Launcher.png",
"Screenshot_20210924-231031_Pixel_Launcher.png",
"Screenshot_20210924-231049_Pixel_Launcher.png",
"Screenshot_20210924-235647_Pixel_Launcher.png",
"Screenshot_20210925-011613_Pixel_Launcher.png",
"Screenshot_20210927-181242_Pixel_Launcher.png",
"Screenshot_20210928-014250_Pixel_Launcher.png",
"Screenshot_20210928-105504_Pixel_Launcher.png",
"Screenshot_20210929-025945_Pixel_Launcher.png",
"Screenshot_20210929-213315_Pixel_Launcher.png",
"Screenshot_20211001-130442_Pixel_Launcher.png",
"Screenshot_20211004-152113_Pixel_Launcher.png",
"Screenshot_20211015-003507_Pixel_Launcher.png",
"Screenshot_20211017-182342_Pixel_Launcher.png",
"Screenshot_20211017-211407_Pixel_Launcher.png",
"Screenshot_20211018-181705_Pixel_Launcher.png",
"Screenshot_20211027-203940_Pixel_Launcher.png",
"Screenshot_20211028-212022_Pixel_Launcher.png",
"Screenshot_20211028-233803_Pixel_Launcher.png",
"Screenshot_20211029-122751_Pixel_Launcher.png",
"Screenshot_20211031-195440_Pixel_Launcher.png",
"Screenshot_20211101-002745_Pixel_Launcher.png",
"Screenshot_20211102-170442_Pixel_Launcher.png",
"Screenshot_20211102-171440_Pixel_Launcher.png",
"Screenshot_20211103-221157_Pixel_Launcher.png",
"Screenshot_20211103-221208_Pixel_Launcher.png",
"Screenshot_20211104-150829_Pixel_Launcher.png",
"Screenshot_20211104-152535_Pixel_Launcher.png",
"Screenshot_20211109-180639_Pixel_Launcher.png",
"Screenshot_20211110-133114_Pixel_Launcher.png",
"Screenshot_20211110-133131_Pixel_Launcher.png",
"Screenshot_20211117-140909_Pixel_Launcher.png",
"Screenshot_20211118-235245_Pixel_Launcher.png",
"Screenshot_20211206-194527_Pixel_Launcher.png"
]

// https://imgur.com/a/OuJLBRB

const imgUrls = [
  "https://i.imgur.com/cuatfU5.jpg",
  "https://i.imgur.com/al4RqvY.png",
  "https://i.imgur.com/qKNikc3.png",
  "https://i.imgur.com/ojlZXRm.png",
  "https://i.imgur.com/eFuh5qH.png",
  "https://i.imgur.com/iQ8kCiK.png",
  "https://i.imgur.com/16pIxdB.png",
  "https://i.imgur.com/G2YpiT2.png",
  "https://i.imgur.com/yRW0GTj.png",
  "https://i.imgur.com/HqvMQQc.png",
  "https://i.imgur.com/IKlqpGH.png",
  "https://i.imgur.com/cBjvtjy.png",
  "https://i.imgur.com/WQPM7wb.png",
  "https://i.imgur.com/azUp0Hw.png",
  "https://i.imgur.com/sjWsOil.png",
  "https://i.imgur.com/b0DOZwh.png",
  "https://i.imgur.com/Tsuy626.png",
  "https://i.imgur.com/ypsUBdm.png",
  "https://i.imgur.com/gKAEwBT.png",
  "https://i.imgur.com/4A0d2EX.png",
  "https://i.imgur.com/R4HbPsg.png",
  "https://i.imgur.com/pyyljwg.png",
  "https://i.imgur.com/Ph8cspZ.png",
  "https://i.imgur.com/G3QoM3j.png",
  "https://i.imgur.com/BKoSBp4.png",
  "https://i.imgur.com/6TrYhpM.png",
  "https://i.imgur.com/KwI61cH.png",
  "https://i.imgur.com/6UPKWp9.png",
  "https://i.imgur.com/8aMIoG6.png",
  "https://i.imgur.com/v6ybvyK.png",
  "https://i.imgur.com/v4HOUu0.png",
  "https://i.imgur.com/PiXGh1R.png",
  "https://i.imgur.com/fi6Rqm7.png",
  "https://i.imgur.com/1lSp6SC.png",
  "https://i.imgur.com/gKST74G.png",
  "https://i.imgur.com/HS42Xmu.png",
  "https://i.imgur.com/OBPAuN9.png",
  "https://i.imgur.com/Dlbd6Qg.png",
  "https://i.imgur.com/xw9eKz6.png",
  "https://i.imgur.com/UOWj4c0.png",
  "https://i.imgur.com/vbp6ZN8.png",
  "https://i.imgur.com/QB5zLXj.png",
  "https://i.imgur.com/X93Yg22.png",
  "https://i.imgur.com/tHj1uBY.png",
  "https://i.imgur.com/a2o4NwC.png",
  "https://i.imgur.com/UuiX4av.png",
  "https://i.imgur.com/wcYQXAr.png",
  "https://i.imgur.com/XfgPDxm.png",
  "https://i.imgur.com/4jurO3T.png",
  "https://i.imgur.com/9IJRgVs.png",
  "https://i.imgur.com/WVQ4vzm.png",
  "https://i.imgur.com/QoCf5CR.png",
  "https://i.imgur.com/99VGrXh.png",
  "https://i.imgur.com/VsS2xzW.png",
  "https://i.imgur.com/q5x9nv3.png",
  "https://i.imgur.com/Y3yEv0z.png",
  "https://i.imgur.com/4ED4Azr.png",
  "https://i.imgur.com/FIvAM55.png",
  "https://i.imgur.com/Ie08kH6.png",
  "https://i.imgur.com/CPiMG12.png",
  "https://i.imgur.com/tK5JTiv.png",
  "https://i.imgur.com/nwqy02G.png",
  "https://i.imgur.com/NoMz2Is.png",
  "https://i.imgur.com/ULuwCXg.png",
  "https://i.imgur.com/Wy7BjZM.png",
  "https://i.imgur.com/nNcVo1V.png",
  "https://i.imgur.com/s3YYq9D.png",
  "https://i.imgur.com/sfsUG1F.png",
  "https://i.imgur.com/Jin1ue9.png",
  "https://i.imgur.com/Uo9x2hs.png",
  "https://i.imgur.com/iKIEhgd.png",
  "https://i.imgur.com/p3RM0az.png",
  "https://i.imgur.com/JYCa3hJ.png",
  "https://i.imgur.com/DJtNjyK.png",
  "https://i.imgur.com/SR3LU5H.png",
  "https://i.imgur.com/5X4qPzV.png",
  "https://i.imgur.com/XogQPmd.png",
  "https://i.imgur.com/RFsDzkS.png",
  "https://i.imgur.com/BUSCfCF.png",
  "https://i.imgur.com/fWEvmjW.png",
  "https://i.imgur.com/6MqhS3H.png",
  "https://i.imgur.com/gaT7yE7.png",
  "https://i.imgur.com/uCXZZAA.png",
  "https://i.imgur.com/vMlk0XJ.png",
  "https://i.imgur.com/GrjL6qR.png",
  "https://i.imgur.com/SRqa2sy.png",
  "https://i.imgur.com/NehTgxu.png",
  "https://i.imgur.com/9mn1klL.png",
  "https://i.imgur.com/AFKOsi3.png",
  "https://i.imgur.com/nrKLz3s.png",
  "https://i.imgur.com/H7m0SZi.png",
  "https://i.imgur.com/9A6Parp.png",
  "https://i.imgur.com/T0dteKe.png",
  "https://i.imgur.com/sj2ozoM.png",
  "https://i.imgur.com/MVIWIJg.png",
  "https://i.imgur.com/WxaeOS1.png",
  "https://i.imgur.com/iyo4rjC.png",
  "https://i.imgur.com/FvUOS6j.png",
  "https://i.imgur.com/yqM0d7Z.png",
  "https://i.imgur.com/Oge9PjU.png",
  "https://i.imgur.com/ydELVXJ.png",
  "https://i.imgur.com/t8sT8Qt.png",
  "https://i.imgur.com/fL2ZL2a.png",
  "https://i.imgur.com/QYCk4Pe.png",
  "https://i.imgur.com/0seNIfG.png",
  "https://i.imgur.com/nVIOJlf.png",
  "https://i.imgur.com/C8WxLeT.png",
  "https://i.imgur.com/WzXBzSS.png",
  "https://i.imgur.com/EtM0ium.png",
  "https://i.imgur.com/cuF6EKc.png",
  "https://i.imgur.com/Ze9n1Qt.png",
  "https://i.imgur.com/58u2sll.png",
  "https://i.imgur.com/dsc0GWz.png",
  "https://i.imgur.com/o3shSEz.png",
  "https://i.imgur.com/xR1YGoX.png",
  "https://i.imgur.com/FXsFQJQ.png",
  "https://i.imgur.com/ZvUKIIn.png",
  "https://i.imgur.com/ctREGGO.png",
  "https://i.imgur.com/g4qsdXt.png",
  "https://i.imgur.com/xYKCVD4.png",
  "https://i.imgur.com/Tpjuwp5.png",
  "https://i.imgur.com/Ht1WkM9.png",
  "https://i.imgur.com/10AEhRU.png",
  "https://i.imgur.com/gF3emuQ.png",
  "https://i.imgur.com/NvgPSKm.png",
  "https://i.imgur.com/zfATdiW.png",
  "https://i.imgur.com/4cwwcNw.png",
  "https://i.imgur.com/LaDuQOW.png",
  "https://i.imgur.com/gMR5RPB.png",
  "https://i.imgur.com/v4RCLvJ.png",
  "https://i.imgur.com/u6lU5UN.png",
  "https://i.imgur.com/rNTT3MC.png",
  "https://i.imgur.com/hRuf41S.png",
  "https://i.imgur.com/ahrcWzj.png",
  "https://i.imgur.com/Oc6a3ce.png",
  "https://i.imgur.com/82QUvzg.png",
  "https://i.imgur.com/1ncnLvz.png",
  "https://i.imgur.com/JfhDFTK.png",
  "https://i.imgur.com/WdJWY93.png",
  "https://i.imgur.com/u9cAV5y.png",
  "https://i.imgur.com/3HpdJ3D.png",
  "https://i.imgur.com/e2ATLzh.png",
  "https://i.imgur.com/sdCKEPa.png",
  "https://i.imgur.com/l9Le2PZ.png",
  "https://i.imgur.com/00zYqbB.png",
  "https://i.imgur.com/P3hUdnL.png",
  "https://i.imgur.com/m17zhA3.png",
  "https://i.imgur.com/rSwmpDU.png",
  "https://i.imgur.com/3qz8VLC.png",
  "https://i.imgur.com/FGycvUX.png",
  "https://i.imgur.com/yw769d4.png",
  "https://i.imgur.com/kK2LGTf.png",
  "https://i.imgur.com/QSUNBK6.png",
  "https://i.imgur.com/zE5mwip.png",
  "https://i.imgur.com/G9QY6GC.png",
  "https://i.imgur.com/ebmHbfD.png",
  "https://i.imgur.com/2rSr5QK.png",
  "https://i.imgur.com/Xo5fv94.png",
  "https://i.imgur.com/tt1eAlD.png",
  "https://i.imgur.com/ZgnFIjL.png"
]

const checkMobile = () => {
  if(window.innerWidth < 1200 || window.innerHeight < 700) {
    document.querySelector('main').style.display = 'none';
    document.querySelector('.mobile').style.display = 'flex';
  }
}
window.addEventListener('resize', checkMobile())

let mainDiv = document.querySelector("main");
const floaters = document.querySelectorAll('.floater');
const positions = [];
const floatMoveFactors = [];


document.addEventListener("mousemove", (e) => {
  const moveFactor = 0.2;
  if (document.getElementById('modal-div') != null) return
  mainDiv.style.left = `calc(-12.5% + ${(window.innerWidth / 2 - e.clientX) * moveFactor}px)`;
  mainDiv.style.top = `calc(-12.5% + ${(window.innerHeight / 2 - e.clientY) * moveFactor}px)`;

  floaters.forEach((floater, index) => {
    floater.style.left = `calc(${(positions[index][0])}px - ${((window.innerWidth / 2 - e.clientX) * floatMoveFactors[index])}px)`;
    floater.style.top = `calc(${(positions[index][1])}px - ${((window.innerHeight / 2 - e.clientY) * floatMoveFactors[index])}px)`;
  })
});

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const marksX = [50, window.innerWidth * 1.35 / 3, window.innerWidth * 1.35 * 2 / 3, window.innerWidth * 1.35 - 50];
const marksY = [50, window.innerHeight * 1.35 / 3, window.innerHeight * 1.35 * 2 / 3, window.innerHeight * 1.35 - 50];
const sectors = [0, 0, 0, 0, 1, 0, 0, 0, 0];

const getPosition = (sector) => {
  const x = sector % 3;
  const y = Math.floor(sector / 3);
  const width = floaters[0].clientWidth;
  const height = floaters[0].clientHeight;
  let posx, posy;
  posx = getRandom(marksX[x], marksX[x+1] - width);
  posy = getRandom(marksY[y], marksY[y+1] - height);

  return [posx, posy];
}

const removeRandom = () => {
  const random = Math.floor(Math.random() * images.length);
  const el = images.splice(random, 1)[0];
  return el
}

window.addEventListener('load', () => {
  checkMobile();

  for (let i = 1; i <= floaters.length; i++) {
    floatMoveFactors.push(Math.random() * -0.175)

    let sector = Math.floor(Math.random() * 9);
    while (sectors[sector] != 0) {
      sector = Math.floor(Math.random() * 9);
    }
    sectors[sector] = 1;
    positions.push(getPosition(sector));
  }

  floaters.forEach((floater, index) => {
    floater.style.left = `${positions[index][0]}px`;
    floater.style.top = `${positions[index][1]}px`;
    const img = floater.getElementsByTagName('img')[0];
    img.src = `./assets/${removeRandom()}`;
    // img.src = `${removeRandom()}`;
    // floater.innerHTML = `${floatMoveFactors[index]}`;
  })

  particleground(document.querySelector('.bg'), {
    dotColor: '#ffffff',
    lineColor: '#000000',
    particleRadius: 3,
    lineWidth: 0.001,
    density: 10000,
    parallaxMultiplier: 7,
    // parallax: false,
    minSpeedX: 0,
    maxSpeedX: 0.05,
    minSpeedY: 0,
    maxSpeedY: 0.05,
  })
})

floaters.forEach((floater, index) => {
  floater.addEventListener('click', () => {
    if (floater.getAttribute('id', 'modal-div')) {
      document.querySelector('#modal').style.display = 'none';
      document.querySelector('#modal-div').setAttribute('id', '');
      return;
    }
    document.querySelector('#modal').style.display = 'block';
    floater.setAttribute('id', 'modal-div');
    mainDiv.style.left = `-12.5%`;
    mainDiv.style.top = `-12.5%`;
  })
})

document.querySelector('#modal').addEventListener('click', () => {
  document.querySelector('#modal').style.display = 'none';
  document.querySelector('#modal-div').setAttribute('id', '');
})