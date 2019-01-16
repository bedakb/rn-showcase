package com.showcase;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;
import com.webtrekk.webtrekksdk.Webtrekk;

import java.util.Map;
import java.util.HashMap;

public class WebtrekkModule extends ReactContextBaseJavaModule {

    private Webtrekk instance = Webtrekk.getInstance();

    public WebtrekkModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNWebtrekk";
    }

    @ReactMethod
    public void init() {
        try {
            instance.initWebtrekk(getReactApplicationContext());
        } catch (Exception e) {
            throw e;
        }
    }

    @ReactMethod
    public void getVersion(Callback successCallback) {
        successCallback.invoke(instance.getVersion());
    }

}