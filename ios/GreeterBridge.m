//
//  GreeterBridge.m
//  showcase
//
//  Created by Belmin Bedak on 14.01.19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Greeter, NSObject)

RCT_EXTERN_METHOD(greet:(NSString *)message)

@end
