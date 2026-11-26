export const id = 260;
export const ids = [260];
export const modules = {
  37796: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(37802);
    class DB {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    DB.Instances = [], DB.OnEnginesDisposedObservable = new YB.b, DB._LastCreatedScene = null, DB.UseFallbackTexture = !0, DB.FallbackTexture = ""
  },
  39358: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(39366);
    const DB = (BB, OB, GB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : GB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(OB) : null;
    class QB {
      static DeepCopy(BB, OB, GB, QB) {
        let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const jB = function(BB) {
          const OB = [];
          do {
            const GB = Object.getOwnPropertyNames(BB);
            for (const BB of GB) - 1 === OB.indexOf(BB) && OB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return OB
        }(BB);
        for (const JB of jB) {
          if ("_" === JB[0] && (!QB || -1 === QB.indexOf(JB))) continue;
          if (JB.endsWith("Observable")) continue;
          if (GB && -1 !== GB.indexOf(JB)) continue;
          const jB = BB[JB],
            MB = typeof jB;
          if ("function" !== MB) try {
            if ("object" === MB)
              if (jB instanceof Uint8Array) OB[JB] = Uint8Array.from(jB);
              else if (jB instanceof Array) {
              if (OB[JB] = [], jB.length > 0)
                if ("object" == typeof jB[0])
                  for (let BB = 0; BB < jB.length; BB++) {
                    const GB = DB(jB[BB], OB, oB); - 1 === OB[JB].indexOf(GB) && OB[JB].push(GB)
                  } else OB[JB] = jB.slice(0)
            } else OB[JB] = DB(jB, OB, oB);
            else OB[JB] = jB
          } catch (yB) {
            YB.b.Warn(yB.message)
          }
        }
      }
    }
  },
  38589: (BB, OB, GB) => {
    function YB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const OB = 16 * Math.random() | 0;
        return ("x" === BB ? OB : 3 & OB | 8).toString(16)
      }))
    }
    GB.d(OB, {
      e: () => YB
    })
  },
  39366: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      static _CheckLimit(BB, OB) {
        let GB = YB._LogLimitOutputs[BB];
        return GB ? GB.current++ : (GB = {
          limit: OB,
          current: 1
        }, YB._LogLimitOutputs[BB] = GB), GB.current <= GB.limit
      }
      static _GenerateLimitMessage(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GB = YB._LogLimitOutputs[BB];
        if (!GB || !YB.MessageLimitReached) return;
        const DB = this._Levels[OB];
        GB.current === GB.limit && YB[DB.name](YB.MessageLimitReached.replace(/%LIMIT%/g, "" + GB.limit).replace(/%TYPE%/g, DB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        YB._LogCache = BB + YB._LogCache, YB.OnNewCacheEntry && YB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const OB = BB => BB < 10 ? "0" + BB : "" + BB,
          GB = new Date;
        return "[" + OB(GB.getHours()) + ":" + OB(GB.getMinutes()) + ":" + OB(GB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, OB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const DB = Array.isArray(OB) ? OB[0] : OB;
        if (void 0 !== GB && !YB._CheckLimit(DB, GB)) return;
        const QB = YB._FormatMessage(DB),
          oB = this._Levels[BB],
          jB = Array.isArray(OB) ? OB.slice(1) : [];
        oB.logFunc && oB.logFunc("BJS - " + QB, ...jB);
        const yB = `<div style='color:${oB.color}'>${QB}</div><br>`;
        YB._AddLogEntry(yB), YB._GenerateLimitMessage(DB, BB)
      }
      static get LogCache() {
        return YB._LogCache
      }
      static ClearLogCache() {
        YB._LogCache = "", YB._LogLimitOutputs = {}, YB.errorsCount = 0
      }
      static set LogLevels(BB) {
        YB.Log = YB._LogDisabled, YB.Warn = YB._LogDisabled, YB.Error = YB._LogDisabled;
        const OB = [YB.MessageLogLevel, YB.WarningLogLevel, YB.ErrorLogLevel];
        for (const GB of OB)
          if ((BB & GB) === GB) {
            const BB = this._Levels[GB];
            YB[BB.name] = YB._LogEnabled.bind(YB, GB)
          }
      }
    }
    YB.NoneLogLevel = 0, YB.MessageLogLevel = 1, YB.WarningLogLevel = 2, YB.ErrorLogLevel = 4, YB.AllLogLevel = 7, YB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", YB._LogCache = "", YB._LogLimitOutputs = {}, YB._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], YB.errorsCount = 0, YB.Log = YB._LogEnabled.bind(YB, YB.MessageLogLevel), YB.Warn = YB._LogEnabled.bind(YB, YB.WarningLogLevel), YB.Error = YB._LogEnabled.bind(YB, YB.ErrorLogLevel)
  },
  37802: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB
    });
    const YB = "undefined" !== typeof WeakRef;
    class DB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(BB, OB, GB, YB)
      }
      initialize(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = BB, this.skipNextObservers = OB, this.target = GB, this.currentTarget = YB, this
      }
    }
    class QB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = BB, this.mask = OB, this.scope = GB, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(BB)
      }
    }
    class oB {
      static FromPromise(BB, OB) {
        const GB = new oB;
        return BB.then((BB => {
          GB.notifyObservers(BB)
        })).catch((BB => {
          if (!OB) throw BB;
          OB.notifyObservers(BB)
        })), GB
      }
      get observers() {
        return this._observers
      }
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = OB, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new DB(0), BB && (this._onObserverAdded = BB)
      }
      add(BB) {
        let OB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          GB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!BB) return null;
        const DB = new QB(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        DB.unregisterOnNextCall = GB, OB ? this._observers.unshift(DB) : this._observers.push(DB), this._onObserverAdded && this._onObserverAdded(DB), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(DB, this._lastNotifiedValue);
        const oB = YB ? new WeakRef(this) : {
          deref: () => this
        };
        return DB._remove = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const OB = oB.deref();
          OB && (BB ? OB.remove(DB) : OB._remove(DB))
        }, DB
      }
      addOnce(BB) {
        return this.add(BB, void 0, void 0, void 0, !0)
      }
      remove(BB) {
        if (!BB) return !1;
        BB._remove = null;
        return -1 !== this._observers.indexOf(BB) && (this._deferUnregister(BB), !0)
      }
      removeCallback(BB, OB) {
        for (let GB = 0; GB < this._observers.length; GB++) {
          const YB = this._observers[GB];
          if (!YB._willBeUnregistered && (YB.callback === BB && (!OB || OB === YB.scope))) return this._deferUnregister(YB), !0
        }
        return !1
      }
      _deferUnregister(BB) {
        BB._willBeUnregistered || (this._numObserversMarkedAsDeleted++, BB.unregisterOnNextCall = !1, BB._willBeUnregistered = !0, setTimeout((() => {
          this._remove(BB)
        }), 0))
      }
      _remove(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB) return !1;
        const GB = this._observers.indexOf(BB);
        return -1 !== GB && (OB && this._numObserversMarkedAsDeleted--, this._observers.splice(GB, 1), !0)
      }
      makeObserverTopPriority(BB) {
        this._remove(BB, !1), this._observers.unshift(BB)
      }
      makeObserverBottomPriority(BB) {
        this._remove(BB, !1), this._observers.push(BB)
      }
      notifyObservers(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 ? arguments[3] : void 0,
          DB = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = BB), !this._observers.length) return !0;
        const QB = this._eventState;
        QB.mask = OB, QB.target = GB, QB.currentTarget = YB, QB.skipNextObservers = !1, QB.lastReturnValue = BB, QB.userInfo = DB;
        for (const oB of this._observers)
          if (!oB._willBeUnregistered && (oB.mask & OB && (oB.unregisterOnNextCall && this._deferUnregister(oB), oB.scope ? QB.lastReturnValue = oB.callback.apply(oB.scope, [BB, QB]) : QB.lastReturnValue = oB.callback(BB, QB)), QB.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = OB), BB._willBeUnregistered) return;
        const YB = this._eventState;
        YB.mask = GB, YB.skipNextObservers = !1, BB.unregisterOnNextCall && this._deferUnregister(BB), BB.callback(OB, YB)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const BB = this._observers.pop();
          BB && (BB._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const BB = new oB;
        return BB._observers = this._observers.slice(0), BB
      }
      hasSpecificMask() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const OB of this._observers)
          if (OB.mask & BB || OB.mask === BB) return !0;
        return !1
      }
    }
  },
  63864: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      AsyncLoop: () => YB.b,
      RegisterTools: () => YB.f,
      Tools: () => YB.j,
      className: () => YB.k
    });
    var YB = GB(41097);
    (0, YB.f)()
  },
  37823: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      f: () => DB
    });
    const YB = {};

    function DB(BB, OB) {
      YB[BB] = OB
    }

    function QB(BB) {
      return YB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);