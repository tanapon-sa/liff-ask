window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me'
        });
    });

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        liff.sendMessages([{
            "type": "flex",
            "altText": "Flex Message",
            "contents": {
                "type": "bubble",
                "direction": "ltr",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "Summary",
                            "size": "lg",
                            "weight": "bold",
                            "color": "#6771AA"
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "฿ 59,810",
                                    "flex": 4,
                                    "size": "xxl",
                                    "weight": "bold"
                                },
                                {
                                    "type": "text",
                                    "text": "ค่างวด",
                                    "flex": 1,
                                    "color": "#999395"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "2019.07.01 09.00น.",
                                    "flex": 10,
                                    "size": "xs",
                                    "align": "start",
                                    "color": "#C1C1C1"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Hire purchase",
                                    "flex": 4,
                                    "align": "start"
                                },
                                {
                                    "type": "text",
                                    "text": "Apply Complete.",
                                    "flex": 5,
                                    "size": "sm",
                                    "align": "end",
                                    "weight": "bold",
                                    "color": "#0B9809"
                                }
                            ]
                        },
                        {
                            "type": "separator",
                            "margin": "lg",
                            "color": "#0C0C0C"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "spacer",
                                    "size": "md"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "New Truck",
                                    "flex": 4,
                                    "size": "sm",
                                    "align": "start"
                                },
                                {
                                    "type": "text",
                                    "text": "12WHEELS TRUCK ISUZU - บรรทุก12ล้อ",
                                    "flex": 6,
                                    "size": "sm",
                                    "align": "end",
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "ยอดจัด (Inc.)",
                                    "flex": 4,
                                    "color": "#A8A1A1"
                                },
                                {
                                    "type": "text",
                                    "text": "฿2,840,000.00",
                                    "flex": 3,
                                    "align": "end"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "ดาว์น (Inc.)",
                                    "flex": 4,
                                    "color": "#A8A1A1"
                                },
                                {
                                    "type": "text",
                                    "text": "฿149,500.00 / 5%",
                                    "flex": 5,
                                    "align": "end"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "ดอกเบี้ย",
                                    "flex": 4,
                                    "color": "#A8A1A1"
                                },
                                {
                                    "type": "text",
                                    "text": "4%",
                                    "flex": 5,
                                    "align": "end"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "ระยะเวลา",
                                    "flex": 4,
                                    "color": "#A8A1A1"
                                },
                                {
                                    "type": "text",
                                    "text": "60 งวด",
                                    "flex": 5,
                                    "align": "end"
                                }
                            ]
                        },
                        {
                            "type": "separator",
                            "margin": "lg",
                            "color": "#0C0C0C"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "spacer"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "text": "View Detail",
                            "color": "#370CDD",
                            "action": {
                                "type": "uri",
                                "label": "รายละเอียด",
                                "uri": "https://www.ask.co.th"
                            }
                        }
                    ]
                }
            }
        }]).then(function () {
            // window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });

    // get access token
    document.getElementById('getaccesstoken').addEventListener('click', function () {
        const accessToken = liff.getAccessToken();
        document.getElementById('accesstokenfield').textContent = accessToken;
        toggleAccessToken();
    });

    // get profile call
    document.getElementById('getprofilebutton').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById('useridprofilefield').textContent = profile.userId;
            document.getElementById('displaynamefield').textContent = profile.displayName;

            const profilePictureDiv = document.getElementById('profilepicturediv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            const img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = "Profile Picture";
            profilePictureDiv.appendChild(img);

            document.getElementById('statusmessagefield').textContent = profile.statusMessage;
            toggleProfileData();
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}

function toggleAccessToken() {
    toggleElement('accesstokendata');
}

function toggleProfileData() {
    toggleElement('profileinfo');
}

function toggleElement(elementId) {
    const elem = document.getElementById(elementId);
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}