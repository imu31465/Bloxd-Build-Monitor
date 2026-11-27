export const id = 73;
export const ids = [73];
export const modules = {
  38450: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => xr,
      g: () => mr
    });
    var Zr = Qr(688),
      Wr = Qr(43),
      ar = Qr(38411);
    const jr = "replayFileKeptForReload",
      Ir = "replayFileKeptForReloadAt",
      fr = "replayFileKeptForReloadTab",
      Er = 3e5,
      pr = 5e3;
    async function xr(rr, Sr) {
      const Qr = Date.now(),
        ar = {
          at: Qr,
          bytes: rr,
          source: Sr
        },
        Er = await Promise.race([(async () => await Wr.h.setItem(Ir, Qr) && Wr.h.setItem(jr, ar))(), (0, Zr.T)(pr).then((() => !1))]);
      Er || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const xr = {
        at: Qr,
        sp: Er
      };
      Wr.n.setItem(fr, xr)
    }
    async function mr() {
      var rr;
      const Sr = Wr.n.getItem(fr);
      null !== Sr && Wr.n.removeItem(fr);
      const Qr = Date.now(),
        Zr = await Wr.h.getItem(Ir),
        pr = null !== Sr && Qr - Sr.at <= Er,
        xr = null !== Sr && Zr === Sr.at;
      let mr = null;
      if (null !== Zr && (xr || ("number" !== typeof Zr || Qr - Zr > Er)) && (mr = pr && xr && Sr.sp ? await Wr.h.getItem(jr) : null, await Promise.all([Wr.h.removeItem(Ir), Wr.h.removeItem(jr)])), !pr) return null;
      if ((null === (rr = mr) || void 0 === rr ? void 0 : rr.at) !== Sr.at) throw new Error(ar.d.replayNotKept.text);
      return {
        bytes: mr.bytes,
        source: mr.source
      }
    }
  },
  38446: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      e: () => ar,
      f: () => Wr
    });
    const Zr = [9];

    function Wr(rr) {
      return Zr.includes(rr)
    }

    function ar(rr) {
      return null !== rr && rr >= 3 && rr < Zr[0]
    }
  },
  38462: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      e: () => Wr
    });
    const Zr = "data-replay-ui-active",
      Wr = [{
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
  38464: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er,
      d: () => xr,
      e: () => pr
    });
    var Zr = Qr(26),
      Wr = Qr(34),
      ar = Qr(38462);

    function jr() {
      const rr = {};
      for (const {
          group: Sr
        }
        of ar.e) rr[Sr] = !0;
      return rr
    }
    let Ir = jr();

    function fr() {
      Wr.i.Jp("replayViewer|uiVisibilityChanged")
    }

    function Er() {
      return Ir
    }

    function pr(rr, Sr) {
      Ir[rr] !== Sr && (Ir = {
        ...Ir,
        [rr]: Sr
      }, "nametag" === rr && Zr.c.set({
        areNametagsHidden: !Sr
      }), fr())
    }

    function xr() {
      Ir = jr(), Zr.c.set({
        areNametagsHidden: !1
      }), fr()
    }
  },
  64584: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      HOLD_TIMEOUT_MS: () => Er,
      ReplayViewer: () => xr
    });
    var Zr = Qr(38411),
      Wr = Qr(38450),
      ar = Qr(38446),
      jr = Qr(38464),
      Ir = Qr(5610),
      fr = Qr(55093);
    const Er = 1e4,
      pr = new Set(["zU"]);
    class xr {
      constructor(rr) {
        var Sr;
        this.deps = rr, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Sr = rr.now) && void 0 !== Sr ? Sr : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Ir.yd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get wI() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Zr.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(rr, Sr) {
        var Qr, ar, jr, fr;
        const {
          client: Er
        } = this.deps;
        if (!this.playback) {
          if (!Er.setPlayback(!0)) throw new Error(Zr.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const pr = this.epoch;
        let xr;
        try {
          xr = await Er.open(rr, (() => (0, Wr.d)(rr, Sr)))
        } finally {
          this.loadingOpens--
        }
        if (pr !== this.epoch && "reloading" !== xr) throw new Error(Zr.d.coreStopped.text);
        if ("opening" !== xr) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const rr = function(rr) {
            switch (rr) {
              case "reloading":
                return null;
              case "stopped":
              case Ir.kd.ModuleTrap:
                return Zr.d.coreStopped;
              case Ir.kd.ModuleLoad:
                return Zr.d.viewerLoadFailed;
              case Ir.kd.TooLarge:
                return Zr.d.cantOpen
            }
          }(xr);
          if (null === rr) return;
          throw new Error(rr.text)
        }
        return this.rejectSave(new Error(Zr.d.saveClosed.text)), this.fileName = null !== (Qr = null !== (ar = Sr.fileName) && void 0 !== ar ? ar : null === (jr = Sr.fileHandle) || void 0 === jr ? void 0 : jr.name) && void 0 !== Qr ? Qr : null, this.fileHandle = null !== (fr = Sr.fileHandle) && void 0 !== fr ? fr : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((rr, Sr) => {
          this.pendingOpen = {
            resolve: rr,
            reject: Sr
          }
        }))
      }
      play() {
        this.holds.has("zU") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("zU")
      }
      seek(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = this.lastView;
        null !== Qr && (Sr || rr < Qr.lx) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(rr, Sr)
      }
      setSpeed(rr) {
        this.deps.client.setSpeed(rr)
      }
      setCameraMode(rr) {
        this.deps.client.setCameraMode(rr)
      }
      cycleCameraMode() {
        const rr = this.lastView;
        null !== rr && rr.state !== Ir.yd.None && this.setCameraMode(fr.c[(fr.c.indexOf(rr.cameraMode) + 1) % fr.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(rr) {
        this.edited(this.deps.client.setKeyframe(rr))
      }
      moveKeyframe(rr, Sr) {
        this.edited(this.deps.client.moveKeyframe(rr, Sr))
      }
      deleteKeyframes(rr, Sr) {
        this.edited(this.deps.client.deleteKeyframes(rr, Sr))
      }
      setMark(rr) {
        this.edited(this.deps.client.setMark(rr))
      }
      crop(rr, Sr) {
        return !(Sr <= rr) && (null !== this.pendingSave ? (this.deps.notify(Zr.d.saveBusy), !1) : !!this.deps.client.crop(rr, Sr) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Zr.d.saveBusy.text)) : new Promise(((rr, Sr) => {
          const Qr = {
            resolve: rr,
            reject: Sr
          };
          this.pendingSave = Qr, this.editsAtSave = this.edits, this.deps.client.save((0, fr.d)()).then((rr => {
            this.pendingSave === Qr && this.saveStarted(rr)
          }), (rr => {
            this.pendingSave === Qr && this.rejectSave(rr instanceof Error ? rr : new Error(String(rr)))
          }))
        }))
      }
      saveStarted(rr) {
        switch (rr) {
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
      markSaved(rr, Sr) {
        var Qr, Zr;
        this.fileHandle = rr, this.fileName = null !== (Qr = null !== (Zr = null === rr || void 0 === rr ? void 0 : rr.name) && void 0 !== Zr ? Zr : Sr) && void 0 !== Qr ? Qr : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Zr.d.coreStopped.text)), this.rejectSave(new Error(Zr.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var rr, Sr, Qr;
        const Zr = this.deps.client.view(),
          Wr = Zr !== this.lastView;
        this.lastView = Zr, this.opening && null !== Zr && Zr.state !== Ir.yd.None && Zr.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, jr.d)()), this.cropAsked ? (this.cropAsked = !1, null !== Zr && Zr.state === Ir.yd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Zr && Zr.state !== Ir.yd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const ar = 0 === this.settleFrames && 0 === (null !== (rr = null === (Sr = (Qr = this.deps).meshPending) || void 0 === Sr ? void 0 : Sr.call(Qr)) && void 0 !== rr ? rr : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && ar && this.release("opening"), this.holds.has("seek") && ar && this.release("seek"), this.holds.has("crop") && !this.cropRunning && ar && this.release("crop");
        const fr = this.now();
        for (const [jr, Ir] of this.holds) !pr.has(jr) && fr - Ir >= Er && this.release(jr);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Wr && this.deps.onChange()
      }
      cropped() {
        (0, jr.d)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(rr) {
        switch (rr.reason) {
          case Ir.kd.TooLarge:
            break;
          case Ir.kd.Open:
          case Ir.kd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const Sr = (0, ar.e)(rr.version) ? Zr.d.replayTooOld : Zr.d.cantOpen;
            null === this.pendingOpen && this.deps.notify(Sr), this.settleOpen(new Error(Sr.text));
            break
          }
          case Ir.kd.Crop:
            if (rr.code === Ir.jd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Zr.d.cropFailed);
            break;
          case Ir.kd.ModuleTrap:
          case Ir.kd.ModuleLoad:
          case Ir.kd.Port:
            this.moduleEnded(rr.reason === Ir.kd.ModuleTrap ? Zr.d.coreStopped : Zr.d.cantOpen);
            break;
          case Ir.kd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${rr.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(rr) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(rr), this.settleOpen(new Error(rr.text))
      }
      saveDone(rr) {
        const Sr = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Sr || void 0 === Sr || Sr.resolve(rr)
      }
      saveFailed(rr) {
        this.rejectSave(new Error(rr ? Zr.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(rr) {
        rr && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Zr.d.cropBusy.text)) : this.deps.notify(Zr.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(rr) {
        const Sr = this.pendingOpen;
        this.pendingOpen = null, null === rr ? null === Sr || void 0 === Sr || Sr.resolve() : null === Sr || void 0 === Sr || Sr.reject(rr)
      }
      rejectSave(rr) {
        const Sr = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Sr || void 0 === Sr || Sr.reject(rr)
      }
      hold(rr) {
        const Sr = 0 === this.holds.size;
        this.holds.set(rr, this.now()), Sr && this.deps.setHoldDraws(!0)
      }
      release(rr) {
        this.holds.delete(rr) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);