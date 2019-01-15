//
//  Greeter.swift
//  showcase
//
//  Created by Belmin Bedak on 14.01.19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(Greeter)
class Greeter: NSObject {
  
  @objc static func requiresMainQueueSetup() -> Bool {
      return true
  }
  
  @objc func greet(_ callback: RCTResponseSenderBlock) {
    callback(["Hello there from Swift"])
  }
}
