$(function(){

    



    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
      });

    
    //메뉴 열림

    $('.btn-menu').click(function(e){
        e.preventDefault();
        if($('.side-menu').hasClass('active')){
            $('.side-menu').removeClass('active')
            $('body').removeClass('hidden')
            motion1.reverse()
        } else{
            $('.side-menu').removeClass('active')
            $('.side-menu').addClass('active')
            $('body').addClass('hidden')
            motion1.restart()
        }
    })




    //사이드 메뉴 텍스트 페이드업
    // gsap.set('.menu-left .gnb-item',{overflow:'hidden', opacity:0})
    // gsap.set('.menu-left .gnb-item a',{yPercent:100})

    const motion1 = gsap.from('.side-menu .gnb-item a',{
        yPercent:100,
        stagger:0.3,
        opacity:0,
        paused:true,
    })



    //메인 텍스트 효과
    gsap.set('.sc-about .txt',{overflow:'hidden'})
    gsap.set('.sc-about .txt span',{yPercent:100})

    const mainTxt = gsap.to('.sc-about .txt span',{
        yPercent:0,
        // delay:3,
        // paused:true
    })


    //서브 텍스트 효과
    gsap.set('.sc-about .sub-txt',{overflow:'hidden', opacity:0})
    gsap.set('.sc-about .sub-txt',{yPercent:100})

    const subTxt = gsap.to('.sc-about .sub-txt',{
        yPercent:0,
        // delay:3,
        opacity:1
    })

    //메인 비주얼 이미지 줌아웃 효과
    gsap.set('.sc-about .main-visual',{overflow:'hidden',opacity:0})
    gsap.set('.sc-about .main-visual',{yPercent:100})

    const mainImg = gsap.to('.sc-about .main-visual',{
        yPercent:0,
        // delay:3,
        duration:1,
        ease: Power4,
        opacity:1,
    })

    gsap.set('.sc-about .main-visual img',{transform: 'scale(1.5)'})

    gsap.to('.sc-about .main-visual img',{
        scale: 1,
        scrollTrigger:{
            trigger: '.sc-about .sub-txt',
            start:"top 30%", //트리거, 윈도우 시작점이 만나야 실행`
            end:"+=80%", //bottom top은 기본값, scrub있을 때만 변경 필요
            // markers:true,
            scrub:1,
            // pin:true
        },
    })
    
    //썸네일 개별 영역 줌아웃
    $('[data-img]').each(function(i,l){
        gsap.from(l,{
            scrollTrigger:{
                trigger: l,
                start:"0 50%", //트리거, 윈도우 시작점이 만나야 실행`
                end:"+=80%", //bottom top은 기본값, scrub있을 때만 변경 필요
                // markers:true,
                scrub:1,
                // pin:true
            },
            scale:1.3,
        })
    })

    //sc-work 텍스트
    gsap.set('.sc-work .headline',{overflow:'hidden', opacity:0})
    gsap.set('.sc-work .headline',{yPercent:100})

    const hdTxt = gsap.to('.sc-work .headline',{
        scrollTrigger:{
            trigger: '.scroll01',
            start:"center 60%", //트리거, 윈도우 시작점이 만나야 실행`
            end:"bottom 70%", //bottom top은 기본값, scrub있을 때만 변경 필요
            // markers:true,
            delay:1,
            scrub:1,
            // pin:true
        },
        yPercent:0,
        delay:1,
        opacity:1
    })

    //sc-work 프로젝트 이름 영역
    $('[data-name]').each(function(i,n){
        gsap.from(n,{
            scrollTrigger:{
                trigger: n,
                start:"top 50%", //트리거, 윈도우 시작점이 만나야 실행`
                end:"0% 30%", //bottom top은 기본값, scrub있을 때만 변경 필요
                // markers:true,
                scrub:1,
                // pin:true
            },
            yPercent: 100,
            opacity:0
        })
    })
    


    
})