package com.geokwt.service.impl;

import com.geokwt.service.UserService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by admin on 2015/6/19.
 */
public class UserServiceImplTest {
    UserService userService;


    @Test
    public void testTest1() throws Exception {
        userService.test();
    }

    @Test
    public void testPrint() throws Exception {
        String result = userService.print();

        Assert.assertEquals(result, "Honley");

    }

    @Before
    public void setUp() throws Exception {
        ApplicationContext context = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
        userService = (UserService) context.getBean("UserService");
    }
}