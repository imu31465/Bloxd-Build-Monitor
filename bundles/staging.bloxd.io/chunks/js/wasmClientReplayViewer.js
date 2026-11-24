export const id = 61;
export const ids = [61];
export const modules = {
  37009: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => hB,
      c: () => zB
    });
    var TB = ZB(665),
      JB = ZB(36),
      oB = ZB(36969);
    const GB = "replayFileKeptForReload",
      vB = "replayFileKeptForReloadAt",
      kB = "replayFileKeptForReloadTab",
      cB = 3e5,
      nB = 5e3;
    async function hB(BB, IB) {
      const ZB = Date.now(),
        oB = {
          at: ZB,
          bytes: BB,
          source: IB
        },
        cB = await Promise.race([(async () => await JB.i.setItem(vB, ZB) && JB.i.setItem(GB, oB))(), (0, TB.Q)(nB).then((() => !1))]);
      cB || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const hB = {
        at: ZB,
        XF: cB
      };
      JB.n.setItem(kB, hB)
    }
    async function zB() {
      var BB;
      const IB = JB.n.getItem(kB);
      null !== IB && JB.n.removeItem(kB);
      const ZB = Date.now(),
        TB = await JB.i.getItem(vB),
        nB = null !== IB && ZB - IB.at <= cB,
        hB = null !== IB && TB === IB.at;
      let zB = null;
      if (null !== TB && (hB || ("number" !== typeof TB || ZB - TB > cB)) && (zB = nB && hB && IB.XF ? await JB.i.getItem(GB) : null, await Promise.all([JB.i.removeItem(vB), JB.i.removeItem(GB)])), !nB) return null;
      if ((null === (BB = zB) || void 0 === BB ? void 0 : BB.at) !== IB.at) throw new Error(oB.b.replayNotKept.text);
      return {
        bytes: zB.bytes,
        source: zB.source
      }
    }
  },
  37003: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      e: () => oB,
      f: () => JB
    });
    const TB = [9];

    function JB(BB) {
      return TB.includes(BB)
    }

    function oB(BB) {
      return null !== BB && BB >= 3 && BB < TB[0]
    }
  },
  37019: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      d: () => JB
    });
    const TB = "data-replay-ui-active",
      JB = [{
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
  37024: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => cB,
      f: () => hB,
      h: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(37019);

    function GB() {
      const BB = {};
      for (const {
          group: IB
        }
        of oB.d) BB[IB] = !0;
      return BB
    }
    let vB = GB();

    function kB() {
      JB.l.Gq("replayViewer|uiVisibilityChanged")
    }

    function cB() {
      return vB
    }

    function nB(BB, IB) {
      vB[BB] !== IB && (vB = {
        ...vB,
        [BB]: IB
      }, "nametag" === BB && TB.d.set({
        areNametagsHidden: !IB
      }), kB())
    }

    function hB() {
      vB = GB(), TB.d.set({
        areNametagsHidden: !1
      }), kB()
    }
  },
  60677: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      HOLD_TIMEOUT_MS: () => cB,
      ReplayViewer: () => hB
    });
    var TB = ZB(36969),
      JB = ZB(37009),
      oB = ZB(37003),
      GB = ZB(37024),
      vB = ZB(4969),
      kB = ZB(42581);
    const cB = 1e4,
      nB = new Set(["oN"]);
    class hB {
      constructor(BB) {
        var IB;
        this.deps = BB, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (IB = BB.now) && void 0 !== IB ? IB : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== vB.sd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get sv() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? TB.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(BB, IB) {
        var ZB, oB, GB, kB;
        const {
          client: cB
        } = this.deps;
        if (!this.playback) {
          if (!cB.setPlayback(!0)) throw new Error(TB.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const nB = this.epoch;
        let hB;
        try {
          hB = await cB.open(BB, (() => (0, JB.b)(BB, IB)))
        } finally {
          this.loadingOpens--
        }
        if (nB !== this.epoch && "reloading" !== hB) throw new Error(TB.b.coreStopped.text);
        if ("opening" !== hB) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const BB = function(BB) {
            switch (BB) {
              case "reloading":
                return null;
              case "stopped":
              case vB.jd.ModuleTrap:
                return TB.b.coreStopped;
              case vB.jd.ModuleLoad:
                return TB.b.viewerLoadFailed;
              case vB.jd.TooLarge:
                return TB.b.cantOpen
            }
          }(hB);
          if (null === BB) return;
          throw new Error(BB.text)
        }
        return this.rejectSave(new Error(TB.b.saveClosed.text)), this.fileName = null !== (ZB = null !== (oB = IB.fileName) && void 0 !== oB ? oB : null === (GB = IB.fileHandle) || void 0 === GB ? void 0 : GB.name) && void 0 !== ZB ? ZB : null, this.fileHandle = null !== (kB = IB.fileHandle) && void 0 !== kB ? kB : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((BB, IB) => {
          this.pendingOpen = {
            resolve: BB,
            reject: IB
          }
        }))
      }
      play() {
        this.holds.has("oN") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("oN")
      }
      seek(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = this.lastView;
        null !== ZB && (IB || BB < ZB.Iz) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(BB, IB)
      }
      setSpeed(BB) {
        this.deps.client.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.client.setCameraMode(BB)
      }
      cycleCameraMode() {
        const BB = this.lastView;
        null !== BB && BB.state !== vB.sd.None && this.setCameraMode(kB.d[(kB.d.indexOf(BB.cameraMode) + 1) % kB.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(BB) {
        this.edited(this.deps.client.setKeyframe(BB))
      }
      moveKeyframe(BB, IB) {
        this.edited(this.deps.client.moveKeyframe(BB, IB))
      }
      deleteKeyframes(BB, IB) {
        this.edited(this.deps.client.deleteKeyframes(BB, IB))
      }
      setMark(BB) {
        this.edited(this.deps.client.setMark(BB))
      }
      crop(BB, IB) {
        return !(IB <= BB) && (null !== this.pendingSave ? (this.deps.notify(TB.b.saveBusy), !1) : !!this.deps.client.crop(BB, IB) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(TB.b.saveBusy.text)) : new Promise(((BB, IB) => {
          const ZB = {
            resolve: BB,
            reject: IB
          };
          this.pendingSave = ZB, this.editsAtSave = this.edits, this.deps.client.save((0, kB.g)()).then((BB => {
            this.pendingSave === ZB && this.saveStarted(BB)
          }), (BB => {
            this.pendingSave === ZB && this.rejectSave(BB instanceof Error ? BB : new Error(String(BB)))
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
      markSaved(BB, IB) {
        var ZB, TB;
        this.fileHandle = BB, this.fileName = null !== (ZB = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.name) && void 0 !== TB ? TB : IB) && void 0 !== ZB ? ZB : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(TB.b.coreStopped.text)), this.rejectSave(new Error(TB.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var BB, IB, ZB;
        const TB = this.deps.client.view(),
          JB = TB !== this.lastView;
        this.lastView = TB, this.opening && null !== TB && TB.state !== vB.sd.None && TB.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, GB.f)()), this.cropAsked ? (this.cropAsked = !1, null !== TB && TB.state === vB.sd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== TB && TB.state !== vB.sd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const oB = 0 === this.settleFrames && 0 === (null !== (BB = null === (IB = (ZB = this.deps).meshPending) || void 0 === IB ? void 0 : IB.call(ZB)) && void 0 !== BB ? BB : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && oB && this.release("opening"), this.holds.has("seek") && oB && this.release("seek"), this.holds.has("crop") && !this.cropRunning && oB && this.release("crop");
        const kB = this.now();
        for (const [GB, vB] of this.holds) !nB.has(GB) && kB - vB >= cB && this.release(GB);
        this.saveRefused && !this.cropping && this.saveFailed(!1), JB && this.deps.onChange()
      }
      cropped() {
        (0, GB.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(BB) {
        switch (BB.reason) {
          case vB.jd.TooLarge:
            break;
          case vB.jd.Open:
          case vB.jd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const IB = (0, oB.e)(BB.version) ? TB.b.replayTooOld : TB.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(IB), this.settleOpen(new Error(IB.text));
            break
          }
          case vB.jd.Crop:
            if (BB.code === vB.id.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(TB.b.cropFailed);
            break;
          case vB.jd.ModuleTrap:
          case vB.jd.ModuleLoad:
          case vB.jd.Port:
            this.moduleEnded(BB.reason === vB.jd.ModuleTrap ? TB.b.coreStopped : TB.b.cantOpen);
            break;
          case vB.jd.NotLive:
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
        const IB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === IB || void 0 === IB || IB.resolve(BB)
      }
      saveFailed(BB) {
        this.rejectSave(new Error(BB ? TB.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(BB) {
        BB && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(TB.b.cropBusy.text)) : this.deps.notify(TB.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(BB) {
        const IB = this.pendingOpen;
        this.pendingOpen = null, null === BB ? null === IB || void 0 === IB || IB.resolve() : null === IB || void 0 === IB || IB.reject(BB)
      }
      rejectSave(BB) {
        const IB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === IB || void 0 === IB || IB.reject(BB)
      }
      hold(BB) {
        const IB = 0 === this.holds.size;
        this.holds.set(BB, this.now()), IB && this.deps.setHoldDraws(!0)
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