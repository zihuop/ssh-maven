package com.geokwt.struts;

import com.geokwt.service.UserService;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by admin on 2015/6/19.
 */
@ParentPackage("basePackage")
@Action(value = "userAction")
@Namespace("/")
public class UserAction {
    @Autowired
    private UserService userService;

    public String findData() {
        System.out.println("Action test.");
        userService.test();
        return null;
    }
}
