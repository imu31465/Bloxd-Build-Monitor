export const id = 60;
export const ids = [60];
export const modules = {
  37087: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => pm,
      i: () => Em
    });
    var hm = fm(653),
      Am = fm(37),
      am = fm(37048);
    const xm = "replayFileKeptForReload",
      wm = "replayFileKeptForReloadAt",
      Dm = "replayFileKeptForReloadTab",
      im = 3e5,
      Rm = 5e3;
    async function pm(mm, Tm) {
      const fm = Date.now(),
        am = {
          at: fm,
          bytes: mm,
          source: Tm
        },
        im = await Promise.race([(async () => await Am.e.setItem(wm, fm) && Am.e.setItem(xm, am))(), (0, hm.L)(Rm).then((() => !1))]);
      im || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const pm = {
        at: fm,
        mO: im
      };
      Am.k.setItem(Dm, pm)
    }
    async function Em() {
      var mm;
      const Tm = Am.k.getItem(Dm);
      null !== Tm && Am.k.removeItem(Dm);
      const fm = Date.now(),
        hm = await Am.e.getItem(wm),
        Rm = null !== Tm && fm - Tm.at <= im,
        pm = null !== Tm && hm === Tm.at;
      let Em = null;
      if (null !== hm && (pm || ("number" !== typeof hm || fm - hm > im)) && (Em = Rm && pm && Tm.mO ? await Am.e.getItem(xm) : null, await Promise.all([Am.e.removeItem(wm), Am.e.removeItem(xm)])), !Rm) return null;
      if ((null === (mm = Em) || void 0 === mm ? void 0 : mm.at) !== Tm.at) throw new Error(am.e.replayNotKept.text);
      return {
        bytes: Em.bytes,
        source: Em.source
      }
    }
  },
  37084: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm,
      c: () => am,
      g: () => Am
    });
    const hm = [9];

    function Am(mm) {
      return hm.includes(mm)
    }

    function am(mm) {
      return null !== mm && mm >= 3 && mm < hm[0]
    }
  },
  37099: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      h: () => Am
    });
    const hm = "data-replay-ui-active",
      Am = [{
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
  37101: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => im,
      d: () => pm,
      f: () => Rm
    });
    var hm = fm(23),
      Am = fm(31),
      am = fm(37099);

    function xm() {
      const mm = {};
      for (const {
          group: Tm
        }
        of am.h) mm[Tm] = !0;
      return mm
    }
    let wm = xm();

    function Dm() {
      Am.j.gp("replayViewer|uiVisibilityChanged")
    }

    function im() {
      return wm
    }

    function Rm(mm, Tm) {
      wm[mm] !== Tm && (wm = {
        ...wm,
        [mm]: Tm
      }, "nametag" === mm && hm.c.set({
        areNametagsHidden: !Tm
      }), Dm())
    }

    function pm() {
      wm = xm(), hm.c.set({
        areNametagsHidden: !1
      }), Dm()
    }
  },
  60682: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      HOLD_TIMEOUT_MS: () => im,
      ReplayViewer: () => pm
    });
    var hm = fm(37048),
      Am = fm(37087),
      am = fm(37084),
      xm = fm(37101),
      wm = fm(4732),
      Dm = fm(42628);
    const im = 1e4,
      Rm = new Set(["KO"]);
    class pm {
      constructor(mm) {
        var Tm;
        this.deps = mm, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Tm = mm.now) && void 0 !== Tm ? Tm : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== wm.ld.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get ni() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? hm.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(mm, Tm) {
        var fm, am, xm, Dm;
        const {
          client: im
        } = this.deps;
        if (!this.playback) {
          if (!im.setPlayback(!0)) throw new Error(hm.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Rm = this.epoch;
        let pm;
        try {
          pm = await im.open(mm, (() => (0, Am.e)(mm, Tm)))
        } finally {
          this.loadingOpens--
        }
        if (Rm !== this.epoch && "reloading" !== pm) throw new Error(hm.e.coreStopped.text);
        if ("opening" !== pm) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const mm = function(mm) {
            switch (mm) {
              case "reloading":
                return null;
              case "stopped":
              case wm.bd.ModuleTrap:
                return hm.e.coreStopped;
              case wm.bd.ModuleLoad:
                return hm.e.viewerLoadFailed;
              case wm.bd.TooLarge:
                return hm.e.cantOpen
            }
          }(pm);
          if (null === mm) return;
          throw new Error(mm.text)
        }
        return this.rejectSave(new Error(hm.e.saveClosed.text)), this.fileName = null !== (fm = null !== (am = Tm.fileName) && void 0 !== am ? am : null === (xm = Tm.fileHandle) || void 0 === xm ? void 0 : xm.name) && void 0 !== fm ? fm : null, this.fileHandle = null !== (Dm = Tm.fileHandle) && void 0 !== Dm ? Dm : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((mm, Tm) => {
          this.pendingOpen = {
            resolve: mm,
            reject: Tm
          }
        }))
      }
      play() {
        this.holds.has("KO") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("KO")
      }
      seek(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = this.lastView;
        null !== fm && (Tm || mm < fm.DE) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(mm, Tm)
      }
      setSpeed(mm) {
        this.deps.client.setSpeed(mm)
      }
      setCameraMode(mm) {
        this.deps.client.setCameraMode(mm)
      }
      cycleCameraMode() {
        const mm = this.lastView;
        null !== mm && mm.state !== wm.ld.None && this.setCameraMode(Dm.b[(Dm.b.indexOf(mm.cameraMode) + 1) % Dm.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(mm) {
        this.edited(this.deps.client.setKeyframe(mm))
      }
      moveKeyframe(mm, Tm) {
        this.edited(this.deps.client.moveKeyframe(mm, Tm))
      }
      deleteKeyframes(mm, Tm) {
        this.edited(this.deps.client.deleteKeyframes(mm, Tm))
      }
      setMark(mm) {
        this.edited(this.deps.client.setMark(mm))
      }
      crop(mm, Tm) {
        return !(Tm <= mm) && (null !== this.pendingSave ? (this.deps.notify(hm.e.saveBusy), !1) : !!this.deps.client.crop(mm, Tm) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(hm.e.saveBusy.text)) : new Promise(((mm, Tm) => {
          const fm = {
            resolve: mm,
            reject: Tm
          };
          this.pendingSave = fm, this.editsAtSave = this.edits, this.deps.client.save((0, Dm.c)()).then((mm => {
            this.pendingSave === fm && this.saveStarted(mm)
          }), (mm => {
            this.pendingSave === fm && this.rejectSave(mm instanceof Error ? mm : new Error(String(mm)))
          }))
        }))
      }
      saveStarted(mm) {
        switch (mm) {
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
      markSaved(mm, Tm) {
        var fm, hm;
        this.fileHandle = mm, this.fileName = null !== (fm = null !== (hm = null === mm || void 0 === mm ? void 0 : mm.name) && void 0 !== hm ? hm : Tm) && void 0 !== fm ? fm : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(hm.e.coreStopped.text)), this.rejectSave(new Error(hm.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var mm, Tm, fm;
        const hm = this.deps.client.view(),
          Am = hm !== this.lastView;
        this.lastView = hm, this.opening && null !== hm && hm.state !== wm.ld.None && hm.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, xm.d)()), this.cropAsked ? (this.cropAsked = !1, null !== hm && hm.state === wm.ld.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== hm && hm.state !== wm.ld.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const am = 0 === this.settleFrames && 0 === (null !== (mm = null === (Tm = (fm = this.deps).meshPending) || void 0 === Tm ? void 0 : Tm.call(fm)) && void 0 !== mm ? mm : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && am && this.release("opening"), this.holds.has("seek") && am && this.release("seek"), this.holds.has("crop") && !this.cropRunning && am && this.release("crop");
        const Dm = this.now();
        for (const [xm, wm] of this.holds) !Rm.has(xm) && Dm - wm >= im && this.release(xm);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Am && this.deps.onChange()
      }
      cropped() {
        (0, xm.d)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(mm) {
        switch (mm.reason) {
          case wm.bd.TooLarge:
            break;
          case wm.bd.Open:
          case wm.bd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const Tm = (0, am.c)(mm.version) ? hm.e.replayTooOld : hm.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(Tm), this.settleOpen(new Error(Tm.text));
            break
          }
          case wm.bd.Crop:
            if (mm.code === wm._c.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(hm.e.cropFailed);
            break;
          case wm.bd.ModuleTrap:
          case wm.bd.ModuleLoad:
          case wm.bd.Port:
            this.moduleEnded(mm.reason === wm.bd.ModuleTrap ? hm.e.coreStopped : hm.e.cantOpen);
            break;
          case wm.bd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${mm.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(mm) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(mm), this.settleOpen(new Error(mm.text))
      }
      saveDone(mm) {
        const Tm = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Tm || void 0 === Tm || Tm.resolve(mm)
      }
      saveFailed(mm) {
        this.rejectSave(new Error(mm ? hm.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(mm) {
        mm && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(hm.e.cropBusy.text)) : this.deps.notify(hm.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(mm) {
        const Tm = this.pendingOpen;
        this.pendingOpen = null, null === mm ? null === Tm || void 0 === Tm || Tm.resolve() : null === Tm || void 0 === Tm || Tm.reject(mm)
      }
      rejectSave(mm) {
        const Tm = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Tm || void 0 === Tm || Tm.reject(mm)
      }
      hold(mm) {
        const Tm = 0 === this.holds.size;
        this.holds.set(mm, this.now()), Tm && this.deps.setHoldDraws(!0)
      }
      release(mm) {
        this.holds.delete(mm) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);