export const id = 58;
export const ids = [58];
export const modules = {
  37050: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq,
      e: () => lq
    });
    const Yq = "data-replay-ui-active",
      lq = [{
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
  37054: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq,
      e: () => Bq,
      i: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(37050);

    function mq() {
      const qq = {};
      for (const {
          group: Eq
        }
        of Oq.e) qq[Eq] = !0;
      return qq
    }
    let xq = mq();

    function Aq() {
      lq.i.TV("replayViewer|uiVisibilityChanged")
    }

    function cq() {
      return xq
    }

    function uq(qq, Eq) {
      xq[qq] !== Eq && (xq = {
        ...xq,
        [qq]: Eq
      }, "nametag" === qq && Yq.b.set({
        areNametagsHidden: !Eq
      }), Aq())
    }

    function Bq() {
      xq = mq(), Yq.b.set({
        areNametagsHidden: !1
      }), Aq()
    }
  },
  42375: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      HOLD_TIMEOUT_MS: () => xq,
      ReplayViewer: () => cq
    });
    var Yq = gq(37033),
      lq = gq(37054),
      Oq = gq(4622),
      mq = gq(42344);
    const xq = 1e4,
      Aq = new Set(["pN"]);
    class cq {
      constructor(qq) {
        var Eq;
        this.deps = qq, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Eq = qq.now) && void 0 !== Eq ? Eq : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Oq.rd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Fc() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Yq.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(qq, Eq) {
        var gq, lq, mq, xq;
        const {
          client: Aq
        } = this.deps;
        if (!this.playback) {
          if (!Aq.setPlayback(!0)) throw new Error(Yq.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const cq = this.epoch;
        let uq;
        try {
          uq = await Aq.open(qq)
        } finally {
          this.loadingOpens--
        }
        if (cq !== this.epoch) throw new Error(Yq.d.coreStopped.text);
        if ("opening" !== uq) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const qq = function(qq) {
            switch (qq) {
              case "reloading":
                return null;
              case "stopped":
              case Oq.gd.ModuleTrap:
                return Yq.d.coreStopped;
              case Oq.gd.ModuleLoad:
                return Yq.d.viewerLoadFailed;
              case Oq.gd.TooLarge:
                return Yq.d.cantOpen
            }
          }(uq);
          if (null === qq) return;
          throw new Error(qq.text)
        }
        return this.rejectSave(new Error(Yq.d.saveClosed.text)), this.fileName = null !== (gq = null !== (lq = Eq.fileName) && void 0 !== lq ? lq : null === (mq = Eq.fileHandle) || void 0 === mq ? void 0 : mq.name) && void 0 !== gq ? gq : null, this.fileHandle = null !== (xq = Eq.fileHandle) && void 0 !== xq ? xq : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((qq, Eq) => {
          this.pendingOpen = {
            resolve: qq,
            reject: Eq
          }
        }))
      }
      play() {
        this.holds.has("pN") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("pN")
      }
      seek(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = this.lastView;
        null !== gq && (Eq || qq < gq.SB) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(qq, Eq)
      }
      setSpeed(qq) {
        this.deps.client.setSpeed(qq)
      }
      setCameraMode(qq) {
        this.deps.client.setCameraMode(qq)
      }
      cycleCameraMode() {
        const qq = this.lastView;
        null !== qq && qq.state !== Oq.rd.None && this.setCameraMode(mq.e[(mq.e.indexOf(qq.cameraMode) + 1) % mq.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(qq) {
        this.edited(this.deps.client.setKeyframe(qq))
      }
      moveKeyframe(qq, Eq) {
        this.edited(this.deps.client.moveKeyframe(qq, Eq))
      }
      deleteKeyframes(qq, Eq) {
        this.edited(this.deps.client.deleteKeyframes(qq, Eq))
      }
      setMark(qq) {
        this.edited(this.deps.client.setMark(qq))
      }
      crop(qq, Eq) {
        return !(Eq <= qq) && (null !== this.pendingSave ? (this.deps.notify(Yq.d.saveBusy), !1) : !!this.deps.client.crop(qq, Eq) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Yq.d.saveBusy.text)) : new Promise(((qq, Eq) => {
          const gq = {
            resolve: qq,
            reject: Eq
          };
          this.pendingSave = gq, this.editsAtSave = this.edits, this.deps.client.save((0, mq.i)()).then((qq => {
            this.pendingSave === gq && this.saveStarted(qq)
          }), (qq => {
            this.pendingSave === gq && this.rejectSave(qq instanceof Error ? qq : new Error(String(qq)))
          }))
        }))
      }
      saveStarted(qq) {
        switch (qq) {
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
      markSaved(qq, Eq) {
        var gq, Yq;
        this.fileHandle = qq, this.fileName = null !== (gq = null !== (Yq = null === qq || void 0 === qq ? void 0 : qq.name) && void 0 !== Yq ? Yq : Eq) && void 0 !== gq ? gq : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Yq.d.coreStopped.text)), this.rejectSave(new Error(Yq.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var qq, Eq, gq;
        const Yq = this.deps.client.view(),
          mq = Yq !== this.lastView;
        this.lastView = Yq, this.opening && null !== Yq && Yq.state !== Oq.rd.None && Yq.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, lq.e)()), this.cropAsked ? (this.cropAsked = !1, null !== Yq && Yq.state === Oq.rd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Yq && Yq.state !== Oq.rd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const cq = 0 === this.settleFrames && 0 === (null !== (qq = null === (Eq = (gq = this.deps).meshPending) || void 0 === Eq ? void 0 : Eq.call(gq)) && void 0 !== qq ? qq : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && cq && this.release("opening"), this.holds.has("seek") && cq && this.release("seek"), this.holds.has("crop") && !this.cropRunning && cq && this.release("crop");
        const uq = this.now();
        for (const [lq, Oq] of this.holds) !Aq.has(lq) && uq - Oq >= xq && (this.release(lq), "opening" === lq && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), mq && this.deps.onChange()
      }
      cropped() {
        (0, lq.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(qq) {
        switch (qq.reason) {
          case Oq.gd.TooLarge:
            break;
          case Oq.gd.Open:
          case Oq.gd.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Yq.d.cantOpen), this.settleOpen(new Error(Yq.d.cantOpen.text));
            break;
          case Oq.gd.Crop:
            if (qq.code === Oq.dd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Yq.d.cropFailed);
            break;
          case Oq.gd.ModuleTrap:
          case Oq.gd.ModuleLoad:
          case Oq.gd.Port:
            this.moduleEnded(qq.reason === Oq.gd.ModuleTrap ? Yq.d.coreStopped : Yq.d.cantOpen);
            break;
          case Oq.gd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${qq.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(qq) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(qq), this.settleOpen(new Error(qq.text))
      }
      saveDone(qq) {
        const Eq = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Eq || void 0 === Eq || Eq.resolve(qq)
      }
      saveFailed(qq) {
        this.rejectSave(new Error(qq ? Yq.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(qq) {
        qq && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Yq.d.cropBusy.text)) : this.deps.notify(Yq.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(qq) {
        const Eq = this.pendingOpen;
        this.pendingOpen = null, null === qq ? null === Eq || void 0 === Eq || Eq.resolve() : null === Eq || void 0 === Eq || Eq.reject(qq)
      }
      rejectSave(qq) {
        const Eq = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Eq || void 0 === Eq || Eq.reject(qq)
      }
      hold(qq) {
        const Eq = 0 === this.holds.size;
        this.holds.set(qq, this.now()), Eq && this.deps.setHoldDraws(!0)
      }
      release(qq) {
        this.holds.delete(qq) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);