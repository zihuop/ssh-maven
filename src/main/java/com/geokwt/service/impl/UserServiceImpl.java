package com.geokwt.service.impl;

import com.geokwt.service.UserService;
import org.springframework.stereotype.Service;

/**
 * Created by admin on 2015/6/19.
 */
@Service("UserService")
public class UserServiceImpl implements UserService {
    public void test() {
        System.out.println("Hello,World!");
    }

    public String print() {
        System.out.println("Print Demo.....");
        return "Honley";
    }
}
