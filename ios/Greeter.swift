//
//  Greeter.swift
//  showcase
//
//  Created by Belmin Bedak on 14.01.19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import Webtrekk

@objc(Greeter)
class Greeter: NSObject {
  
  // let instance = WebtrekkTracking.instance()
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc func setup(_ callback: RCTResponseSenderBlock) {
    try! WebtrekkTracking.initTrack()
    callback(["done"])
  }
  
  
//  @objc func setup(_ callback: RCTResponseSenderBlock) {
//    var parser: XMLParser?
//    if let path = Bundle.main.path(forResource: "webtrekk_config", ofType: "xml") {
//      parser = XMLParser(contentsOf: URL(fileURLWithPath: path))
//      if parser?.parse() ?? false {
//        callback(["fine"])
//      } else {
//        callback(["Unable to parse"])
//      }
//    } else {
//      callback(["file read error"])
//    }
//  }

}
