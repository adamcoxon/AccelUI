function getTimelineHtml(data) {

    //var conversationId = data.result.ConversationId;
    //var messages = data.result.Messages;
    var result = "";

    if (true) {
        var index = 0
        for (i = 0; i < data.result.aggregatedResults.speechToText.length; i++) {
            //for (i = 0; i < messages.length; i++) {
            var stt = data.result.aggregatedResults.speechToText[i]
            var pii = data.result.aggregatedResults.recognizePiiEntities.items[0].results.documents[i]
            //if (messages[i].EventType === "MessageFromBotOrAgent" || messages[i].EventType === "MessageFromUser") {
           

                var sender = `Speaker: ${stt.speaker}`;
                var position = "direction-r";
                //if (messages[i].EventType === "MessageFromBotOrAgent") {
                //    sender = "Agent";
                //    position = "direction-l";
                //}

                var messageTime = moment().format("LLL");
                var messageText = pii.redactedText

                var starTime = stt.offsetInTicks / 10000000;
                var endTime = starTime + (stt.durationInTicks / 10000000);
                var audioPath = null;

                //var referenceId = "abc123";
                //var userMessageObject = messages.filter(x => x.Id === referenceId);
                //var userMessage = null;
                //if (userMessageObject.length > 0) {
                //    userMessage = userMessageObject[0].Value;
                //}

                var item = `<li>
                        <div class="${position}">
                            <div class="flag-wrapper">
                                <span class="hexa"></span>
                                <span class="flag">${sender}</span>
                                <span class="time-wrapper"><span class="time">${messageTime}</span></span>
                            </div>
                        
                            <div id="abc123" class="desc">
                                ${messageText}
                            </div>
                         </div>
                         </li>`;

                //if (audioPath !== undefined) {
                //    item += `
                //                <audio controls preload="none">
                //                    <source type="audio/wav" src="${audioPath}#t=${starTime},${endTime}">
                //                </audio>`;
                //}
                //item += `</div>`;
                console.log(item)
                result += item;
                console.log(result)

            //    if (stt !== undefined && stt.sentiment !== undefined && stt.sentiment !== null) {

            //        var sentimentItem = `<div class="direction-r-intent">
            //                                    <div class="desc-intent desc"><i>Sentiment: <b>${stt.sentiment}</b></i></div>
            //                                 </div>`;

            //        result += sentimentItem;
            //    }

            //    if (stt !== undefined && stt.mainScenario !== undefined && stt.currentScenario !== undefined) {

            //        var scenario = `<div class="direction-l-intent">
            //                                <div class="desc-intent desc">
            //                                    <i>Current Scenario: <b>${stt.currentScenario}</b></i>
            //                                    <br/>
            //                                    <i>Main Scenario: <b>${stt.mainScenario}</b></i>
            //                                    <br/>`;

            //        //if (messages[i].EventType === "MessageFromBotOrAgent") {
            //        //    scenario += `<i>User message: <b style="color: #0078d7;">${userMessage}</b></i> `;
            //        //}

            //        scenario += `</div>
            //                            </div>`;

            //        result += scenario;
            //}

        }
    }

    result += `</div ></li >`;

    return result;
}





function saveIntent(intent, message, conversationId, messageId) {
    messageText = document.getElementById(message).innerHTML;
    // Save selected intent
    $.post('/home/SaveIntent',
        {
            intent: intent,
            message: messageText,
            conversationId: conversationId,
            messageId: messageId
        },
        function (data) {
            alert(`intent "${intent}" saved for message "${messageText}"`);
        });
}