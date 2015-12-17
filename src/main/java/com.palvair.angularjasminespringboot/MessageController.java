package com.palvair.angularjasminespringboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by PALVAIRR on 17/12/2015.
 */
@RestController
public class MessageController {


    @RequestMapping(value = "/getAllMessages", method = RequestMethod.GET)
    public List<Message> getAllMessages() {
        return new ArrayList<Message>() {{
            add(new Message("test"));
        }};
    }


    public static class Message {

        private String content;

        public Message(String value) {
            this.content = value;
        }

        public String getContent() {
            return this.content;
        }

        public void setContent(String content) {
            this.content = content;
        }
    }
}
