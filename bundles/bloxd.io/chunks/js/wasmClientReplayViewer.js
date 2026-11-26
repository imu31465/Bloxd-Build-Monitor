export const id = 72;
export const ids = [72];
export const modules = {
  37685: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      c: () => zB
    });
    var YB = GB(641),
      DB = GB(31),
      QB = GB(37641);
    const oB = "replayFileKeptForReload",
      jB = "replayFileKeptForReloadAt",
      yB = "replayFileKeptForReloadTab",
      JB = 3e5,
      MB = 5e3;
    async function PB(BB, OB) {
      const GB = Date.now(),
        QB = {
          at: GB,
          bytes: BB,
          source: OB
        },
        JB = await Promise.race([(async () => await DB.d.setItem(jB, GB) && DB.d.setItem(oB, QB))(), (0, YB.U)(MB).then((() => !1))]);
      JB || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const PB = {
        at: GB,
        GP: JB
      };
      DB.i.setItem(yB, PB)
    }
    async function zB() {
      var BB;
      const OB = DB.i.getItem(yB);
      null !== OB && DB.i.removeItem(yB);
      const GB = Date.now(),
        YB = await DB.d.getItem(jB),
        MB = null !== OB && GB - OB.at <= JB,
        PB = null !== OB && YB === OB.at;
      let zB = null;
      if (null !== YB && (PB || ("number" !== typeof YB || GB - YB > JB)) && (zB = MB && PB && OB.GP ? await DB.d.getItem(oB) : null, await Promise.all([DB.d.removeItem(jB), DB.d.removeItem(oB)])), !MB) return null;
      if ((null === (BB = zB) || void 0 === BB ? void 0 : BB.at) !== OB.at) throw new Error(QB.e.replayNotKept.text);
      return {
        bytes: zB.bytes,
        source: zB.source
      }
    }
  },
  37682: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      g: () => QB,
      k: () => DB
    });
    const YB = [9];

    function DB(BB) {
      return YB.includes(BB)
    }

    function QB(BB) {
      return null !== BB && BB >= 3 && BB < YB[0]
    }
  },
  37692: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      c: () => DB
    });
    const YB = "data-replay-ui-active",
      DB = [{
        group: "middleTextTop",
        dataAttr: "data-replay-hide-middle-text-top",
        label: "Middle text top"
      }, {
        group: "middleTextUpper",
        dataAttr: "data-replay-hide-middle-text-upper",
        label: "Middle text upper"
      }, {
        group: "middleTextLower",
        dataAttr: "data-replay-hide-middle-text-lower",
        label: "Middle text lower"
      }, {
        group: "rightInfoText",
        dataAttr: "data-replay-hide-right-info-text",
        label: "Right info text"
      }, {
        group: "crosshair",
        dataAttr: "data-replay-hide-crosshair",
        label: "Crosshair"
      }, {
        group: "flyingMiddleText",
        dataAttr: "data-replay-hide-flying-middle-text",
        label: "Flying middle text"
      }, {
        group: "hotbar",
        dataAttr: "data-replay-hide-hotbar",
        label: "Hotbar (shop, inventory, item name)"
      }, {
        group: "auraBar",
        dataAttr: "data-replay-hide-aura-bar",
        label: "Aura XP bar"
      }, {
        group: "healthAndShield",
        dataAttr: "data-replay-hide-health-and-shield",
        label: "Health bar and shield bar"
      }, {
        group: "effectInfo",
        dataAttr: "data-replay-hide-effect-info",
        label: "Effect info"
      }, {
        group: "nametag",
        dataAttr: null,
        label: "Nametags"
      }, {
        group: "everythingElse",
        dataAttr: "data-replay-hide-everything-else",
        label: "Everything else"
      }]
  },
  37694: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB,
      f: () => PB,
      i: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(37692);

    function oB() {
      const BB = {};
      for (const {
          group: OB
        }
        of QB.c) BB[OB] = !0;
      return BB
    }
    let jB = oB();

    function yB() {
      DB.o.tM("replayViewer|uiVisibilityChanged")
    }

    function JB() {
      return jB
    }

    function MB(BB, OB) {
      jB[BB] !== OB && (jB = {
        ...jB,
        [BB]: OB
      }, "nametag" === BB && YB.c.set({
        areNametagsHidden: !OB
      }), yB())
    }

    function PB() {
      jB = oB(), YB.c.set({
        areNametagsHidden: !1
      }), yB()
    }
  },
  63857: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      HOLD_TIMEOUT_MS: () => JB,
      ReplayViewer: () => PB
    });
    var YB = GB(37641),
      DB = GB(37685),
      QB = GB(37682),
      oB = GB(37694),
      jB = GB(5281),
      yB = GB(53993);
    const JB = 1e4,
      MB = new Set(["zp"]);
    class PB {
      constructor(BB) {
        var OB;
        this.deps = BB, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (OB = BB.now) && void 0 !== OB ? OB : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== jB.sd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get sJ() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? YB.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(BB, OB) {
        var GB, QB, oB, yB;
        const {
          client: JB
        } = this.deps;
        if (!this.playback) {
          if (!JB.setPlayback(!0)) throw new Error(YB.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const MB = this.epoch;
        let PB;
        try {
          PB = await JB.open(BB, (() => (0, DB.b)(BB, OB)))
        } finally {
          this.loadingOpens--
        }
        if (MB !== this.epoch && "reloading" !== PB) throw new Error(YB.e.coreStopped.text);
        if ("opening" !== PB) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const BB = function(BB) {
            switch (BB) {
              case "reloading":
                return null;
              case "stopped":
              case jB.jd.ModuleTrap:
                return YB.e.coreStopped;
              case jB.jd.ModuleLoad:
                return YB.e.viewerLoadFailed;
              case jB.jd.TooLarge:
                return YB.e.cantOpen
            }
          }(PB);
          if (null === BB) return;
          throw new Error(BB.text)
        }
        return this.rejectSave(new Error(YB.e.saveClosed.text)), this.fileName = null !== (GB = null !== (QB = OB.fileName) && void 0 !== QB ? QB : null === (oB = OB.fileHandle) || void 0 === oB ? void 0 : oB.name) && void 0 !== GB ? GB : null, this.fileHandle = null !== (yB = OB.fileHandle) && void 0 !== yB ? yB : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((BB, OB) => {
          this.pendingOpen = {
            resolve: BB,
            reject: OB
          }
        }))
      }
      play() {
        this.holds.has("zp") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("zp")
      }
      seek(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = this.lastView;
        null !== GB && (OB || BB < GB.kP) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(BB, OB)
      }
      setSpeed(BB) {
        this.deps.client.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.client.setCameraMode(BB)
      }
      cycleCameraMode() {
        const BB = this.lastView;
        null !== BB && BB.state !== jB.sd.None && this.setCameraMode(yB.b[(yB.b.indexOf(BB.cameraMode) + 1) % yB.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(BB) {
        this.edited(this.deps.client.setKeyframe(BB))
      }
      moveKeyframe(BB, OB) {
        this.edited(this.deps.client.moveKeyframe(BB, OB))
      }
      deleteKeyframes(BB, OB) {
        this.edited(this.deps.client.deleteKeyframes(BB, OB))
      }
      setMark(BB) {
        this.edited(this.deps.client.setMark(BB))
      }
      crop(BB, OB) {
        return !(OB <= BB) && (null !== this.pendingSave ? (this.deps.notify(YB.e.saveBusy), !1) : !!this.deps.client.crop(BB, OB) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(YB.e.saveBusy.text)) : new Promise(((BB, OB) => {
          const GB = {
            resolve: BB,
            reject: OB
          };
          this.pendingSave = GB, this.editsAtSave = this.edits, this.deps.client.save((0, yB.d)()).then((BB => {
            this.pendingSave === GB && this.saveStarted(BB)
          }), (BB => {
            this.pendingSave === GB && this.rejectSave(BB instanceof Error ? BB : new Error(String(BB)))
          }))
        }))
      }
      saveStarted(BB) {
        switch (BB) {
          case "sealing":
            return;
          case "busy":
            return void this.saveFailed(!0);
          case "refused":
            return void(this.saveRefused = !0);
          case "tooLarge":
            return void this.saveFailed(!1)
        }
      }
      markSaved(BB, OB) {
        var GB, YB;
        this.fileHandle = BB, this.fileName = null !== (GB = null !== (YB = null === BB || void 0 === BB ? void 0 : BB.name) && void 0 !== YB ? YB : OB) && void 0 !== GB ? GB : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(YB.e.coreStopped.text)), this.rejectSave(new Error(YB.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var BB, OB, GB;
        const YB = this.deps.client.view(),
          DB = YB !== this.lastView;
        this.lastView = YB, this.opening && null !== YB && YB.state !== jB.sd.None && YB.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, oB.f)()), this.cropAsked ? (this.cropAsked = !1, null !== YB && YB.state === jB.sd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== YB && YB.state !== jB.sd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const QB = 0 === this.settleFrames && 0 === (null !== (BB = null === (OB = (GB = this.deps).meshPending) || void 0 === OB ? void 0 : OB.call(GB)) && void 0 !== BB ? BB : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && QB && this.release("opening"), this.holds.has("seek") && QB && this.release("seek"), this.holds.has("crop") && !this.cropRunning && QB && this.release("crop");
        const yB = this.now();
        for (const [oB, jB] of this.holds) !MB.has(oB) && yB - jB >= JB && this.release(oB);
        this.saveRefused && !this.cropping && this.saveFailed(!1), DB && this.deps.onChange()
      }
      cropped() {
        (0, oB.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(BB) {
        switch (BB.reason) {
          case jB.jd.TooLarge:
            break;
          case jB.jd.Open:
          case jB.jd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const OB = (0, QB.g)(BB.version) ? YB.e.replayTooOld : YB.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(OB), this.settleOpen(new Error(OB.text));
            break
          }
          case jB.jd.Crop:
            if (BB.code === jB.fd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(YB.e.cropFailed);
            break;
          case jB.jd.ModuleTrap:
          case jB.jd.ModuleLoad:
          case jB.jd.Port:
            this.moduleEnded(BB.reason === jB.jd.ModuleTrap ? YB.e.coreStopped : YB.e.cantOpen);
            break;
          case jB.jd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${BB.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(BB) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(BB), this.settleOpen(new Error(BB.text))
      }
      saveDone(BB) {
        const OB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === OB || void 0 === OB || OB.resolve(BB)
      }
      saveFailed(BB) {
        this.rejectSave(new Error(BB ? YB.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(BB) {
        BB && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(YB.e.cropBusy.text)) : this.deps.notify(YB.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(BB) {
        const OB = this.pendingOpen;
        this.pendingOpen = null, null === BB ? null === OB || void 0 === OB || OB.resolve() : null === OB || void 0 === OB || OB.reject(BB)
      }
      rejectSave(BB) {
        const OB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === OB || void 0 === OB || OB.reject(BB)
      }
      hold(BB) {
        const OB = 0 === this.holds.size;
        this.holds.set(BB, this.now()), OB && this.deps.setHoldDraws(!0)
      }
      release(BB) {
        this.holds.delete(BB) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);