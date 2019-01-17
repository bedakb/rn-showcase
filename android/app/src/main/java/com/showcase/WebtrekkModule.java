package com.showcase;

import android.app.Application;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.webtrekk.webtrekksdk.Webtrekk;
import com.webtrekk.webtrekksdk.TrackingParameter;
import com.webtrekk.webtrekksdk.TrackingParameter.Parameter;

public class WebtrekkModule extends ReactContextBaseJavaModule {

    private Webtrekk instance;
    private TrackingParameter tp = new TrackingParameter();

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
            instance  = Webtrekk.getInstance();
            instance.initWebtrekk((Application) getReactApplicationContext().getApplicationContext());
        } catch (Exception e) {
            throw e;
        }
    }

    @ReactMethod
    public void addTrackingParameter(String parameter, String index, String value, Promise promise) {
        try {
            tp.add(Parameter.getParameterByName(parameter), index, value);
            instance.track(tp);
            promise.resolve(parameter);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getEverId(Promise promise) {
        try {
            promise.resolve(instance.getEverId());
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getVersion(Promise promise) {
        try {
            promise.resolve(instance.getVersion());
        } catch (IllegalViewOperationException e) {
            promise.reject(e);
        }
    }


}