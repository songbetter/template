## Intl
![image](https://user-images.githubusercontent.com/75013112/207220084-097741d2-4bb3-4c7a-81ea-a774b40d657d.png)
- 초기 설정값은 urlLocaleKey, cookieLocaleKey 에서 가져온 navigator의 language로 합니다.
- selector 선택 시 search pameter를 변경하여 이것을 감지해 번역 파일을 제공하거나 데이터를 불러올 수 있습니다.
- 통화는 Intl.NumberFormat을 이용하여 변환하며, Language를 변경하더라도 locale(navigator.language)의 설정을 따릅니다.
    - NumberFormat
        
        ```jsx
        Intl.NumberFormat(language, {
              style: 'currency',
              currency: currency[language],
            }).format(price),
        ```
        

- intl.get

    ```jsx
    {intl.get(`nav_${data.label}`).d(data.label)}
    ```
- intl.getHTML
    
    ```jsx
    const messages = {
    	"footer_contactus": "Contact us: <a href={link} style='color:red'>{cs_channel}</a> to chat with our customer service (10:00am ~ 18:00pm)",
    	"footer_cs": "Click here",
    	"link"
    }
    
    <div className="text-base">
    	{intl.getHTML('footer_contactus', {
               cs_channel: intl.get('footer_cs'),
               link: intl.get('footer_link'),
    	})}
    </div>
    ```
    ![image](https://user-images.githubusercontent.com/75013112/207220563-ee6f6cf8-a78e-456f-846e-a37a8b63d79b.png)
