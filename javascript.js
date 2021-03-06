const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const voiceSearch = $('.voice-search');
const modalVoice = $('.modal-micro');
const closeModalVoice = $('.modal-micro .close');
const backgroundModal = $('.modal-micro .background-modal');
const openMenuMobile = $('.open-menu');
const menuLeft = $('.sidebar');
const menuDesk = $('.sidebar .items');
const menuMobile = $('.items-mobile');
const menuItems = $$('.menu-left .items .item');
const createVideo = $('.create-video');
const popupCreateVideo = $('.popup-create-video');
const listApp = $('.list-app');
const popupListApp = $('.popup-list-app');
const btnNotification = $('.notification');
const popupNotification = $('.popup-notification');
const btnInfoAccount = $('.info-account');
const popupInfo = $('.popup-info');
const btnDropdownTrigger = $('.dropdown-trigger');
const popupDropdownTrigger = $('.popup-dropdown-trigger');

openMenuMobile.onclick = () => {
    menuLeft.classList.toggle('mobile');
    menuMobile.classList.toggle('active');
    menuDesk.classList.toggle('disabled');
};

createVideo.onclick = () => {
    popupCreateVideo.classList.toggle('active');
    popupListApp.classList.remove('active');
    popupNotification.classList.remove('active');
    popupInfo.classList.remove('active');
    popupDropdownTrigger.classList.remove('active');
};

listApp.onclick = () => {
    popupListApp.classList.toggle('active');
    popupCreateVideo.classList.remove('active');
    popupNotification.classList.remove('active');
    popupInfo.classList.remove('active');
    popupDropdownTrigger.classList.remove('active');
};

btnNotification.onclick = () => {
    popupNotification.classList.toggle('active');
    popupCreateVideo.classList.remove('active');
    popupListApp.classList.remove('active');
    popupInfo.classList.remove('active');
    popupDropdownTrigger.classList.remove('active');
};

btnInfoAccount.onclick = () => {
    popupInfo.classList.toggle('active');
    popupCreateVideo.classList.remove('active');
    popupListApp.classList.remove('active');
    popupNotification.classList.remove('active');
    popupDropdownTrigger.classList.remove('active');
};

if (btnDropdownTrigger) {
    btnDropdownTrigger.onclick = () => {
        popupDropdownTrigger.classList.toggle('active');
        popupCreateVideo.classList.remove('active');
        popupListApp.classList.remove('active');
        popupNotification.classList.remove('active');
        popupInfo.classList.remove('active');
    };
}

window.addEventListener('click', ({ target }) => {
    const popup = target.closest('.popup');
    if (!popup) {
        popupCreateVideo.classList.remove('active');
        popupListApp.classList.remove('active');
        popupNotification.classList.remove('active');
        popupInfo.classList.remove('active');
        if (btnDropdownTrigger) popupDropdownTrigger.classList.remove('active');
    }
});

function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, '<a target="_blank" href="$1">$1</a>')
}

// Render list video

function renderVideos() {
    const listVideos = [
        {
            id: 1,
            linkVideo: 'https://www.youtube.com/embed/0_EOoFnqEN4?autoplay=1',
            thumbnail: 'https://i.ytimg.com/vi/0_EOoFnqEN4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBUi6ztX3g2Ead87YCUVgypU4rbQ',
            time: '2:15:43',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_2.jpg',
            hashTag: '#Nonolive #Tr???cTi???pGameNonolive',
            title: '12 MINUTES #1: 12 PH??T ????? C???U GIA ????NH KH???I K??? L??? M???T !!! Game C???T TRUY???N hay nh???t 2021 !!!',
            author: 'Tr???c Ti???p Game',
            view: '1.832.715 l?????t xem',
            date: '27 thg 5, 2021',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
        {
            id: 2,
            linkVideo: 'https://www.youtube.com/embed/QDTO4Knbl4A?autoplay=1',
            thumbnail: 'https://i.ytimg.com/vi/QDTO4Knbl4A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4W76duzzkSV3JkRADWA7CdHmbUA',
            time: '2:04:02',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_2.jpg',
            hashTag: '#Nonolive #Tr???cTi???pGameNonolive',
            title: '(Full Kh??ng Che) C??NG KRATOS ????NH B???I TR??M CU???I SAU... G???N 30 L???N =))) - GHOST OF TSUSHIMA 2 #4 END',
            author: 'Tr???c Ti???p Game',
            view: '1.832.715 l?????t xem',
            date: '27 thg 5, 2021',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
        {
            id: 3,
            linkVideo: 'https://www.youtube.com/embed/fr_MjrhihI8?autoplay=1',
            thumbnail: 'https://i.ytimg.com/vi/fr_MjrhihI8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrc1uoRTFwbunICyd7j1LdN_Tf-A',
            time: '1:29:26',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_2.jpg',
            hashTag: '#Nonolive #Tr???cTi???pGameNonolive',
            title: 'TH???N TR??NG S??? CH??? C?? GI?? 75K V?? AE ?????NG COI N?? L?? GOTY HAY SI??U PH???M G?? C??? ??? !!! - Chuy???n ????m Mu???n',
            author: 'Tr???c Ti???p Game',
            view: '1.832.715 l?????t xem',
            date: '27 thg 5, 2021',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
        {
            id: 4,
            linkVideo: 'https://www.youtube.com/embed/TzZmzpp77Gk?autoplay=1',
            thumbnail: 'https://i.ytimg.com/vi/TzZmzpp77Gk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZMnhQmDjxq_2m_dknanQ1_nBEJA',
            time: '2:15:43',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_2.jpg',
            hashTag: '#Nonolive #Tr???cTi???pGameNonolive',
            title: 'SAMURAI M???NH NH???T L???CH S???, C??N ??C M???NG C???A M??NG C??? B???T ?????U !!! - GHOST OF TSUSHIMA 2 #3',
            author: 'Tr???c Ti???p Game',
            view: '1.832.715 l?????t xem',
            date: '27 thg 5, 2021',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
        {
            id: 5,
            linkVideo: 'https://www.youtube.com/embed/AGGfPWL7JmI?autoplay=1',
            thumbnail: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/thumb_1.jpg',
            time: '37:53',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_1.jpg',
            hashTag: '#freakd #lofi #lofichill',
            title: '???????ng T??i Ch??? Em V???, T??nh Y??u M??u H???ng...| Nh???c Lofi Freak D Mix Nh??? Nh??ng C???c Chill #17',
            author: 'Freak D Music',
            view: '1.832.715 l?????t xem',
            date: '27 thg 5, 2021',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
        {
            id: 6,
            linkVideo: 'https://www.youtube.com/embed/ydoiX39piTc?autoplay=1',
            thumbnail: 'https://i.ytimg.com/vi/ydoiX39piTc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLhpS_ZRmpJU_nuBJ1Fp4VnrEX9A',
            time: '43:43',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_1.jpg',
            hashTag: '#freakd #lofi #lofichill',
            title: '????nh M???t Em Lofi, Anh M???t R???i Lofi...| Nh???c Lofi Bu???n Hay Nh???t C???a FREAK D #5',
            author: 'Freak D Music',
            view: '19.649.735 l?????t xem',
            date: '4 thg 10, 2020',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
        {
            id: 7,
            linkVideo: 'https://www.youtube.com/embed/AaquFXNAd0w?autoplay=1',
            thumbnail: 'https://i.ytimg.com/vi/AaquFXNAd0w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsS9wyPpAvkTpV2-3s3xk1mDfStQ',
            time: '36:12',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_1.jpg',
            hashTag: '#freakd #lofi #lofichill',
            title: '???????ng T??i Ch??? Em V???, Ng??n Lang...| Nh???c Lofi Freak D Mix Nh??? Nh??ng C???c Chill #20',
            author: 'Freak D Music',
            view: '156.939 l?????t xem',
            date: '26 thg 7, 2021',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
        {
            id: 8,
            linkVideo: 'https://www.youtube.com/embed/AGGfPWL7JmI?autoplay=1',
            thumbnail: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/thumb_1.jpg',
            time: '37:53',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_1.jpg',
            hashTag: '#freakd #lofi #lofichill',
            title: '???????ng T??i Ch??? Em V???, T??nh Y??u M??u H???ng...| Nh???c Lofi Freak D Mix Nh??? Nh??ng C???c Chill #17',
            author: 'Freak D Music',
            view: '1.832.715 l?????t xem',
            date: '27 thg 5, 2021',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
        {
            id: 9,
            linkVideo: 'https://www.youtube.com/embed/srBO2D4-y1g?autoplay=1',
            thumbnail: 'https://i.ytimg.com/vi/srBO2D4-y1g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-wqPb6H8-QyzMcNQatHSUO_4LvA',
            time: '43:48',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_1.jpg',
            hashTag: '#freakd #lofi #lofichill',
            title: 'B??? Em V??o Balo, ???????ng T??i Ch??? Em V???...| Nh???c Lofi Freak D Mix Nh??? Nh??ng C???c Chill #19',
            author: 'Freak D Music',
            view: '1.832.715 l?????t xem',
            date: '27 thg 5, 2021',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
        {
            id: 10,
            linkVideo: 'https://www.youtube.com/embed/K7YDc3nutcg?autoplay=1',
            thumbnail: 'https://i.ytimg.com/vi/K7YDc3nutcg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFl4mtfH234Cmtwy24tPvdQeuH2Q',
            time: '38:22',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_1.jpg',
            hashTag: '#freakd #lofi #lofichill',
            title: '??nh Chi???u T??n, T??nh Y??u M??u H???ng...| Nh???c Lofi Freak D Mix Nh??? Nh??ng C???c Chill #16',
            author: 'Freak D Music',
            view: '1.832.715 l?????t xem',
            date: '27 thg 5, 2021',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
        {
            id: 11,
            linkVideo: 'https://www.youtube.com/embed/9TSFY3i83HY?autoplay=1',
            thumbnail: 'https://i.ytimg.com/vi/9TSFY3i83HY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiqtw2nBba9E1xQAk3nwze9KMC9w',
            time: '40:29',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_1.jpg',
            hashTag: '#freakd #lofi #lofichill',
            title: 'R??ng Kh??n, T??nh Y??u M??u H???ng...| Nh???c Lofi Chill Nh??? Nh??ng Hay Nh???t C???a FREAK D #15',
            author: 'Freak D Music',
            view: '1.832.715 l?????t xem',
            date: '27 thg 5, 2021',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
        {
            id: 12,
            linkVideo: 'https://www.youtube.com/embed/-_ELvnWwTPY?autoplay=1',
            thumbnail: 'https://i.ytimg.com/vi/-_ELvnWwTPY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwu0KwLTUXp1ueun5WXWr6T-FTZg',
            time: '40:43',
            channelAvatar: 'https://raw.githubusercontent.com/Hieu1998/youtube/main/images/avatar_1.jpg',
            hashTag: '#freakd #lofi #lofichill',
            title: 'T??nh Y??u M??u H???ng, Ph???i Ch??ng Em ???? Y??u,...| Nh???c Lofi Chill Nh??? Nh??ng Hay Nh???t C???a FREAK D #14',
            author: 'Freak D Music',
            view: '1.832.715 l?????t xem',
            date: '27 thg 5, 2021',
            like: '14 N',
            dislike: '249',
            subscribers: '1,6 Tr',
            description: `????y l?? game Twelve Minutes - 12 Ph??t ch??i tr??n k??nh Tr???c Ti???p Game c???a t??i - D??ng CT. R???t mong nh???n ???????c s??? ???ng h??? c???a ae. <br>
            ++ ????ng k?? theo d??i k??nh t???i ????y: https://goo.gl/A7BCZV <br>
            <br>
            ++ ID K??NH TR???C TI???P GAME NONOLIVE: 69696969 <br>
            <br>
            ++ Download  Nonolive tr??n mobile t???i: http://nonolive.com/ (cho c??? iOS l???n Android). Ho???c anh em c?? th??? xem tr??n web t???i ?????a ch???: https://www.nonolive.com/room/69696969). <br>
            <br>
            ++ DONATE ????? TTG MUA ???????C NHI???U GAME H??N T???I: <br>
            - https://playerduo.com/tructiepgame <br>
            - https://streamlabs.com/tructiepgamevn <br>
            <br>
            ++ MUA/THU?? GAME B???N QUY???N GI?? R??? T???I: <br>
            Website: http://divineshop.vn <br>
            Fanpage: https://www.facebook.com/Divine.Shop....`,
            countComment: '617 b??nh lu???n',
            comments: [
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRX__dcnUxgUGmrBsLwRp4sEO-uk-m2r2fCTA=s88-c-k-c0x00ffffff-no-rj',
                    name: 'H???i ?????',
                    content: 'Game N??o Hay c??ng d??? G??y Tranh C??i',
                    time: '1 tu???n tr?????c',
                    like: 190,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/Vv9txHUp-10HaWTOtOJMC7jFotTllU6WMdqjuLh6zDkiEL-x65nGjKnIuYctPHxgFSR7-gKIcYs=s88-c-k-c0x00ffffff-no-rj',
                    name: 'L.K.2.8',
                    content: '53:32 d??ng b??? b??p c???',
                    time: '6 ng??y tr?????c',
                    like: 120,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLQcOJM09Xvkqi7CCYHzLbe_98IjQrablTq2xhec74M=s88-c-k-c0x00ffffff-no-rj',
                    name: 'KittyNa Gamer',
                    content: 'Game hay qu?? coi kh??ng x??t ph??t n??o :))',
                    time: '2 ng??y tr?????c',
                    like: 110,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/nc-JdNm-6Vi0-Bn1bOf6dJ6AkYnSlGIC7IyRRdHnea7IS26vnRlmcQ1Cd7cMsWbBtf3QteVbYw=s88-c-k-c0x00ffffff-no-rj',
                    name: 'Tayytenn 257',
                    content: 'Mong ??ng D??ng ch??i ti???p game n??y game n??y v???a cu???n m?? v???a h??i =)))))',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
                {
                    avatar: 'https://yt3.ggpht.com/ytc/AKedOLRiQ85XemxyAx2upeRwsBSnqu2cqP5aAZqbCUxa=s88-c-k-c0x00ffffff-no-rj',
                    name: 'vodich duydeptrai',
                    content: 'L??n top th???nh h??nh cho game lu??n ,?????nh vl',
                    time: '1 ng??y tr?????c',
                    like: 170,
                    dislike: '',
                },
            ]
        },
    ]

    // Render video in homepage
    const content = $('.contents');
    let video = '';
    for(getVideo of listVideos) {
        video += `
            <div class="content__item">
                <a href="./watch?id=${getVideo.id}">
                    <div class="item__img">
                        <img src="${getVideo.thumbnail}" alt="">
                        <div class="watch-later">
                            <i class="far fa-clock"></i>
                        </div>
                        <div class="add-list-wait">
                            <i class="fas fa-stream"></i>
                        </div>
                        <div class="time-video">
                            <span>${getVideo.time}</span>
                        </div>
                    </div>
                </a>
                <div class="item__body">
                    <a href="./watch?id=${getVideo.id}">
                        <img src="${getVideo.channelAvatar}" alt="">
                    </a>
                    <div class="details">
                        <a href="./watch?id=${getVideo.id}">
                            <h1 class="name-video">${getVideo.title}</h1>
                        </a>
                        <h3>${getVideo.author} <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z" class="style-scope yt-icon"></path></g></svg></h3>
                        <div class="info">
                            <span class="views">${getVideo.view}</span>
                            <div class="time">${getVideo.date}</div>
                        </div>
                    </div>
                    <button class="option"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z" class="style-scope yt-icon"></path></g></svg></button>
                </div>
            </div>
        `
    }

    if (content) content.innerHTML = video;

    // Get id video
    const currentLink = window.location.href;
    const url = new URL(currentLink);
    const id = url.searchParams.get('id');

    // Render current video in details page
    if (id) {
        const primary = $('.primary__video');
        let getCurrentVideo = listVideos.find(obj => obj.id == id);
        let currentVideo = '';

        currentVideo = `
            <div class="video">
                <iframe width="100%" height="520" src="${getCurrentVideo.linkVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `

        if (primary) primary.innerHTML = currentVideo;
    
        // Render secondary info video
        const secondaryInfo = $('.secondary-info');
        let info = '';

        info = `
            <div class="top-row row">
                <a href="#">
                    <img src="${getCurrentVideo.channelAvatar}" alt="">
                </a>
                <div class="upload-info item">
                    <div class="body">
                        <a href="#">
                            <h3>${getCurrentVideo.author} <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z" class="style-scope yt-icon"></path></g></svg></h3>
                        </a>
                        <div class="info">
                            <span class="subcribers">${getCurrentVideo.subscribers} ng?????i ????ng k??</span>
                        </div>
                    </div>
                </div>
                <button class="btn btn-unsubcribe subcribe active">???? ????ng k??</button>
                <button class="btn btn-subcribe subcribe">????ng k??</button>
                <button class="btn notification"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon"></path></g></svg></button>
            </div>
            <div class="collapse">${urlify(getCurrentVideo.description)}</div>
            <div class="more">
                <a class="show-more active">Hi???n th??m</a>
                <a class="hide-more">???n b???t</a>
            </div>
        `

        if (secondaryInfo) secondaryInfo.innerHTML = info;

        // Render comment video
        const commentItem = $('.body-comments');
        let commentList = '';

        for(getComment of getCurrentVideo.comments) {
            commentList += `
                <div class="comment-item">
                    <a href="#">
                        <img src="${getComment.avatar}" alt="">
                    </a>
                    <div class="item">
                        <div class="body">
                            <a href="#">
                                <h3>${getComment.name} <a href="#" class="time-add-comment">${getComment.time}</a></h3>
                            </a>
                            <div class="content-text">
                                <p>${getComment.content}</p>
                            </div>
                            <div class="action-btn">
                                <div class="button-like-dislike">
                                    <a href="#" class="like">
                                        <button class="btn icon-like">
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" class="style-scope yt-icon"></path></g></svg>
                                        </button>
                                        <span class="count-like">${getComment.like}</span>
                                    </a>
                                    <a href="#" class="dislike">
                                        <button class="btn icon-dislike">
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z" class="style-scope yt-icon"></path></g></svg>
                                        </button>
                                        <span class="count-dislike">${getComment.dislike}</span>
                                    </a>
                                    <button class="btn btn-feedback">Ph???n h???i</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }

        if (commentItem) commentItem.innerHTML = commentList;
        
    
        const showMore = $('.show-more');
        const hideMore = $('.hide-more');
        const collapse = $('.collapse');
        const btnUnsubcribe = $('.btn-unsubcribe');
        const btnSubcribe = $('.btn-subcribe');

        showMore.onclick = () => {
            showMore.classList.remove('active');
            hideMore.classList.toggle('active');
            collapse.style.maxHeight = 'none';

        };

        hideMore.onclick = () => {
            hideMore.classList.remove('active');
            showMore.classList.toggle('active');
            collapse.style.maxHeight = '70px';
        };

        btnUnsubcribe.onclick = () => {
            btnUnsubcribe.classList.remove('active');
            btnSubcribe.classList.toggle('active');

        };

        btnSubcribe.onclick = () => {
            btnSubcribe.classList.remove('active');
            btnUnsubcribe.classList.toggle('active');
        };
    }

    // Render List Video Suggest
    const secondary = $('.secondary');
    let listVideo = '';

    const listVideoFound = listVideos.filter(function(item){
        return item.id !== id;
    });

    for(getVideo of listVideoFound) {
        listVideo += `
            <div class="item">
                <div class="thumbnail">
                    <a href="./watch?id=${getVideo.id}">
                        <img src="${getVideo.thumbnail}" alt="">
                        <div class="time-video">
                            <span>${getVideo.time}</span>
                        </div>
                    </a>
                </div>
                <div class="body">
                    <div class="title">
                        <a href="./watch?id=${getVideo.id}">
                            <h3>${getVideo.title}</h3>
                        </a>
                    </div>
                    <h3>${getVideo.author} <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z" class="style-scope yt-icon"></path></g></svg></h3>
                    <div class="info">
                        <span class="views">${getVideo.view}</span>
                        <div class="time">${getVideo.date}</div>
                    </div>
                    <button class="option"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z" class="style-scope yt-icon"></path></g></svg></button>
                </div>
            </div>
        `
    }

    if (secondary) secondary.innerHTML = listVideo;

}

renderVideos();

const loaddingProgressBar = $('.progress-bar-loadding');
window.onload = () =>  {
    loaddingProgressBar.style.display = 'none';
};

// Voice search
const btnMicro = $('.microphone-container');
const listening = $('.header__text h3');
const MicrophoneLabel = $('.microphone-label');

// T???o m???t phi??n b???n SpeechRecognition m???i
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition();

// c??i ?????t ng??n ng???
recognition.lang = 'vi-VI';
// ?????t ti???p t???c nghe hay t???t sau khi nghe ti???p ??m thanh.
recognition.continuous = true;
// ?????t c?? cho ph??p k???t qu??? t???m th???i hay kh??ng. K???t qu??? t???m th???i l?? qu?? tr??nh nh???n d???ng trung gian.
recognition.interimResults = true;
// Start voice after click button voice search
voiceSearch.onclick = () => {
    modalVoice.classList.toggle('active');
    speechRecognitionApi();
};

backgroundModal.onclick = () => {
    stopSpeechRecognition();
    modalVoice.classList.toggle('active');
};

closeModalVoice.onclick = () => {
    stopSpeechRecognition();
    modalVoice.classList.toggle('active');
};

btnMicro.onclick = () =>  {
    btnMicro.classList.toggle('active');
    if (btnMicro.classList.contains('active')) {
        speechRecognitionApi();
    } else {
        
        listening.innerHTML = 'Mi-cr?? ??ang t???t. M???i b???n n??i l???i.';
        MicrophoneLabel.innerHTML = 'Nh???n v??o micr?? ????? th??? l???i';
    }
};

function speechRecognitionApi() {
    // start
    recognition.start();
    listening.innerHTML = '??ang nghe...';
    recognition.onresult = function(e) { 
        let resultIndex = e.resultIndex;
        let transcript = e.results[resultIndex][0].transcript;
        if (transcript.length  > 0) {
            listening.innerHTML = transcript
            stopSpeechRecognition();
            setTimeout(function() {
                modalVoice.classList.remove('active');
                $('#input_search_text').value = transcript
            }, 800);
        }
    }
}

function stopSpeechRecognition() {
    // stop
    recognition.stop();
}