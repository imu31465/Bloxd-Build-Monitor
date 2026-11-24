export const id = 60;
export const ids = [60];
export const modules = {
  37026: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => tk,
      e: () => Zk
    });
    var Xk = Ik(628),
      Tk = Ik(41),
      ik = Ik(36985);
    const yk = "replayFileKeptForReload",
      lk = "replayFileKeptForReloadAt",
      ak = "replayFileKeptForReloadTab",
      qk = 3e5,
      Lk = 5e3;
    async function tk(kk, Fk) {
      const Ik = Date.now(),
        ik = {
          at: Ik,
          bytes: kk,
          source: Fk
        },
        qk = await Promise.race([(async () => await Tk.g.setItem(lk, Ik) && Tk.g.setItem(yk, ik))(), (0, Xk.U)(Lk).then((() => !1))]);
      qk || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const tk = {
        at: Ik,
        Gj: qk
      };
      Tk.m.setItem(ak, tk)
    }
    async function Zk() {
      var kk;
      const Fk = Tk.m.getItem(ak);
      null !== Fk && Tk.m.removeItem(ak);
      const Ik = Date.now(),
        Xk = await Tk.g.getItem(lk),
        Lk = null !== Fk && Ik - Fk.at <= qk,
        tk = null !== Fk && Xk === Fk.at;
      let Zk = null;
      if (null !== Xk && (tk || ("number" !== typeof Xk || Ik - Xk > qk)) && (Zk = Lk && tk && Fk.Gj ? await Tk.g.getItem(yk) : null, await Promise.all([Tk.g.removeItem(lk), Tk.g.removeItem(yk)])), !Lk) return null;
      if ((null === (kk = Zk) || void 0 === kk ? void 0 : kk.at) !== Fk.at) throw new Error(ik.b.replayNotKept.text);
      return {
        bytes: Zk.bytes,
        source: Zk.source
      }
    }
  },
  37021: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      f: () => ik,
      g: () => Tk
    });
    const Xk = [9];

    function Tk(kk) {
      return Xk.includes(kk)
    }

    function ik(kk) {
      return null !== kk && kk >= 3 && kk < Xk[0]
    }
  },
  37034: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk,
      i: () => Tk
    });
    const Xk = "data-replay-ui-active",
      Tk = [{
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
  37042: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk,
      f: () => tk,
      j: () => Lk
    });
    var Xk = Ik(25),
      Tk = Ik(34),
      ik = Ik(37034);

    function yk() {
      const kk = {};
      for (const {
          group: Fk
        }
        of ik.i) kk[Fk] = !0;
      return kk
    }
    let lk = yk();

    function ak() {
      Tk.g.GL("replayViewer|uiVisibilityChanged")
    }

    function qk() {
      return lk
    }

    function Lk(kk, Fk) {
      lk[kk] !== Fk && (lk = {
        ...lk,
        [kk]: Fk
      }, "nametag" === kk && Xk.d.set({
        areNametagsHidden: !Fk
      }), ak())
    }

    function tk() {
      lk = yk(), Xk.d.set({
        areNametagsHidden: !1
      }), ak()
    }
  },
  60609: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      HOLD_TIMEOUT_MS: () => qk,
      ReplayViewer: () => tk
    });
    var Xk = Ik(36985),
      Tk = Ik(37026),
      ik = Ik(37021),
      yk = Ik(37042),
      lk = Ik(4797),
      ak = Ik(42586);
    const qk = 1e4,
      Lk = new Set(["ke"]);
    class tk {
      constructor(kk) {
        var Fk;
        this.deps = kk, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Fk = kk.now) && void 0 !== Fk ? Fk : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== lk.kd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get eq() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Xk.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(kk, Fk) {
        var Ik, ik, yk, ak;
        const {
          client: qk
        } = this.deps;
        if (!this.playback) {
          if (!qk.setPlayback(!0)) throw new Error(Xk.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Lk = this.epoch;
        let tk;
        try {
          tk = await qk.open(kk, (() => (0, Tk.c)(kk, Fk)))
        } finally {
          this.loadingOpens--
        }
        if (Lk !== this.epoch && "reloading" !== tk) throw new Error(Xk.b.coreStopped.text);
        if ("opening" !== tk) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const kk = function(kk) {
            switch (kk) {
              case "reloading":
                return null;
              case "stopped":
              case lk.ad.ModuleTrap:
                return Xk.b.coreStopped;
              case lk.ad.ModuleLoad:
                return Xk.b.viewerLoadFailed;
              case lk.ad.TooLarge:
                return Xk.b.cantOpen
            }
          }(tk);
          if (null === kk) return;
          throw new Error(kk.text)
        }
        return this.rejectSave(new Error(Xk.b.saveClosed.text)), this.fileName = null !== (Ik = null !== (ik = Fk.fileName) && void 0 !== ik ? ik : null === (yk = Fk.fileHandle) || void 0 === yk ? void 0 : yk.name) && void 0 !== Ik ? Ik : null, this.fileHandle = null !== (ak = Fk.fileHandle) && void 0 !== ak ? ak : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((kk, Fk) => {
          this.pendingOpen = {
            resolve: kk,
            reject: Fk
          }
        }))
      }
      play() {
        this.holds.has("ke") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("ke")
      }
      seek(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ik = this.lastView;
        null !== Ik && (Fk || kk < Ik.Dt) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(kk, Fk)
      }
      setSpeed(kk) {
        this.deps.client.setSpeed(kk)
      }
      setCameraMode(kk) {
        this.deps.client.setCameraMode(kk)
      }
      cycleCameraMode() {
        const kk = this.lastView;
        null !== kk && kk.state !== lk.kd.None && this.setCameraMode(ak.d[(ak.d.indexOf(kk.cameraMode) + 1) % ak.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(kk) {
        this.edited(this.deps.client.setKeyframe(kk))
      }
      moveKeyframe(kk, Fk) {
        this.edited(this.deps.client.moveKeyframe(kk, Fk))
      }
      deleteKeyframes(kk, Fk) {
        this.edited(this.deps.client.deleteKeyframes(kk, Fk))
      }
      setMark(kk) {
        this.edited(this.deps.client.setMark(kk))
      }
      crop(kk, Fk) {
        return !(Fk <= kk) && (null !== this.pendingSave ? (this.deps.notify(Xk.b.saveBusy), !1) : !!this.deps.client.crop(kk, Fk) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Xk.b.saveBusy.text)) : new Promise(((kk, Fk) => {
          const Ik = {
            resolve: kk,
            reject: Fk
          };
          this.pendingSave = Ik, this.editsAtSave = this.edits, this.deps.client.save((0, ak.h)()).then((kk => {
            this.pendingSave === Ik && this.saveStarted(kk)
          }), (kk => {
            this.pendingSave === Ik && this.rejectSave(kk instanceof Error ? kk : new Error(String(kk)))
          }))
        }))
      }
      saveStarted(kk) {
        switch (kk) {
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
      markSaved(kk, Fk) {
        var Ik, Xk;
        this.fileHandle = kk, this.fileName = null !== (Ik = null !== (Xk = null === kk || void 0 === kk ? void 0 : kk.name) && void 0 !== Xk ? Xk : Fk) && void 0 !== Ik ? Ik : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Xk.b.coreStopped.text)), this.rejectSave(new Error(Xk.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var kk, Fk, Ik;
        const Xk = this.deps.client.view(),
          Tk = Xk !== this.lastView;
        this.lastView = Xk, this.opening && null !== Xk && Xk.state !== lk.kd.None && Xk.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yk.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Xk && Xk.state === lk.kd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Xk && Xk.state !== lk.kd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const ik = 0 === this.settleFrames && 0 === (null !== (kk = null === (Fk = (Ik = this.deps).meshPending) || void 0 === Fk ? void 0 : Fk.call(Ik)) && void 0 !== kk ? kk : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && ik && this.release("opening"), this.holds.has("seek") && ik && this.release("seek"), this.holds.has("crop") && !this.cropRunning && ik && this.release("crop");
        const ak = this.now();
        for (const [yk, lk] of this.holds) !Lk.has(yk) && ak - lk >= qk && this.release(yk);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Tk && this.deps.onChange()
      }
      cropped() {
        (0, yk.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(kk) {
        switch (kk.reason) {
          case lk.ad.TooLarge:
            break;
          case lk.ad.Open:
          case lk.ad.NothingStaged: {
            this.opening = !1, this.release("opening");
            const Fk = (0, ik.f)(kk.version) ? Xk.b.replayTooOld : Xk.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(Fk), this.settleOpen(new Error(Fk.text));
            break
          }
          case lk.ad.Crop:
            if (kk.code === lk._c.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Xk.b.cropFailed);
            break;
          case lk.ad.ModuleTrap:
          case lk.ad.ModuleLoad:
          case lk.ad.Port:
            this.moduleEnded(kk.reason === lk.ad.ModuleTrap ? Xk.b.coreStopped : Xk.b.cantOpen);
            break;
          case lk.ad.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${kk.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(kk) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(kk), this.settleOpen(new Error(kk.text))
      }
      saveDone(kk) {
        const Fk = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Fk || void 0 === Fk || Fk.resolve(kk)
      }
      saveFailed(kk) {
        this.rejectSave(new Error(kk ? Xk.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(kk) {
        kk && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Xk.b.cropBusy.text)) : this.deps.notify(Xk.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(kk) {
        const Fk = this.pendingOpen;
        this.pendingOpen = null, null === kk ? null === Fk || void 0 === Fk || Fk.resolve() : null === Fk || void 0 === Fk || Fk.reject(kk)
      }
      rejectSave(kk) {
        const Fk = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Fk || void 0 === Fk || Fk.reject(kk)
      }
      hold(kk) {
        const Fk = 0 === this.holds.size;
        this.holds.set(kk, this.now()), Fk && this.deps.setHoldDraws(!0)
      }
      release(kk) {
        this.holds.delete(kk) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);