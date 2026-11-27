export const id = 72;
export const ids = [72];
export const modules = {
  37813: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re,
      g: () => ke
    });
    var ye = He(610),
      be = He(35),
      Me = He(37775);
    const Ke = "replayFileKeptForReload",
      Ue = "replayFileKeptForReloadAt",
      Fe = "replayFileKeptForReloadTab",
      Je = 3e5,
      oe = 5e3;
    async function Re(ee, ie) {
      const He = Date.now(),
        Me = {
          at: He,
          bytes: ee,
          source: ie
        },
        Je = await Promise.race([(async () => await be.e.setItem(Ue, He) && be.e.setItem(Ke, Me))(), (0, ye.U)(oe).then((() => !1))]);
      Je || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Re = {
        at: He,
        KR: Je
      };
      be.m.setItem(Fe, Re)
    }
    async function ke() {
      var ee;
      const ie = be.m.getItem(Fe);
      null !== ie && be.m.removeItem(Fe);
      const He = Date.now(),
        ye = await be.e.getItem(Ue),
        oe = null !== ie && He - ie.at <= Je,
        Re = null !== ie && ye === ie.at;
      let ke = null;
      if (null !== ye && (Re || ("number" !== typeof ye || He - ye > Je)) && (ke = oe && Re && ie.KR ? await be.e.getItem(Ke) : null, await Promise.all([be.e.removeItem(Ue), be.e.removeItem(Ke)])), !oe) return null;
      if ((null === (ee = ke) || void 0 === ee ? void 0 : ee.at) !== ie.at) throw new Error(Me.d.replayNotKept.text);
      return {
        bytes: ke.bytes,
        source: ke.source
      }
    }
  },
  37807: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      g: () => Me,
      j: () => be
    });
    const ye = [9];

    function be(ee) {
      return ye.includes(ee)
    }

    function Me(ee) {
      return null !== ee && ee >= 3 && ee < ye[0]
    }
  },
  37825: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye,
      d: () => be
    });
    const ye = "data-replay-ui-active",
      be = [{
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
  37828: (ee, ie, He) => {
    He.d(ie, {
      e: () => Je,
      h: () => Re,
      i: () => oe
    });
    var ye = He(18),
      be = He(27),
      Me = He(37825);

    function Ke() {
      const ee = {};
      for (const {
          group: ie
        }
        of Me.d) ee[ie] = !0;
      return ee
    }
    let Ue = Ke();

    function Fe() {
      be.h.yR("replayViewer|uiVisibilityChanged")
    }

    function Je() {
      return Ue
    }

    function oe(ee, ie) {
      Ue[ee] !== ie && (Ue = {
        ...Ue,
        [ee]: ie
      }, "nametag" === ee && ye.e.set({
        areNametagsHidden: !ie
      }), Fe())
    }

    function Re() {
      Ue = Ke(), ye.e.set({
        areNametagsHidden: !1
      }), Fe()
    }
  },
  63791: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      HOLD_TIMEOUT_MS: () => Je,
      ReplayViewer: () => Re
    });
    var ye = He(37775),
      be = He(37813),
      Me = He(37807),
      Ke = He(37828),
      Ue = He(5271),
      Fe = He(54196);
    const Je = 1e4,
      oe = new Set(["Zf"]);
    class Re {
      constructor(ee) {
        var ie;
        this.deps = ee, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (ie = ee.now) && void 0 !== ie ? ie : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Ue.Yc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get lJ() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? ye.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(ee, ie) {
        var He, Me, Ke, Fe;
        const {
          client: Je
        } = this.deps;
        if (!this.playback) {
          if (!Je.setPlayback(!0)) throw new Error(ye.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const oe = this.epoch;
        let Re;
        try {
          Re = await Je.open(ee, (() => (0, be.c)(ee, ie)))
        } finally {
          this.loadingOpens--
        }
        if (oe !== this.epoch && "reloading" !== Re) throw new Error(ye.d.coreStopped.text);
        if ("opening" !== Re) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const ee = function(ee) {
            switch (ee) {
              case "reloading":
                return null;
              case "stopped":
              case Ue.Rc.ModuleTrap:
                return ye.d.coreStopped;
              case Ue.Rc.ModuleLoad:
                return ye.d.viewerLoadFailed;
              case Ue.Rc.TooLarge:
                return ye.d.cantOpen
            }
          }(Re);
          if (null === ee) return;
          throw new Error(ee.text)
        }
        return this.rejectSave(new Error(ye.d.saveClosed.text)), this.fileName = null !== (He = null !== (Me = ie.fileName) && void 0 !== Me ? Me : null === (Ke = ie.fileHandle) || void 0 === Ke ? void 0 : Ke.name) && void 0 !== He ? He : null, this.fileHandle = null !== (Fe = ie.fileHandle) && void 0 !== Fe ? Fe : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((ee, ie) => {
          this.pendingOpen = {
            resolve: ee,
            reject: ie
          }
        }))
      }
      play() {
        this.holds.has("Zf") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Zf")
      }
      seek(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = this.lastView;
        null !== He && (ie || ee < He.YR) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(ee, ie)
      }
      setSpeed(ee) {
        this.deps.client.setSpeed(ee)
      }
      setCameraMode(ee) {
        this.deps.client.setCameraMode(ee)
      }
      cycleCameraMode() {
        const ee = this.lastView;
        null !== ee && ee.state !== Ue.Yc.None && this.setCameraMode(Fe.b[(Fe.b.indexOf(ee.cameraMode) + 1) % Fe.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(ee) {
        this.edited(this.deps.client.setKeyframe(ee))
      }
      moveKeyframe(ee, ie) {
        this.edited(this.deps.client.moveKeyframe(ee, ie))
      }
      deleteKeyframes(ee, ie) {
        this.edited(this.deps.client.deleteKeyframes(ee, ie))
      }
      setMark(ee) {
        this.edited(this.deps.client.setMark(ee))
      }
      crop(ee, ie) {
        return !(ie <= ee) && (null !== this.pendingSave ? (this.deps.notify(ye.d.saveBusy), !1) : !!this.deps.client.crop(ee, ie) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(ye.d.saveBusy.text)) : new Promise(((ee, ie) => {
          const He = {
            resolve: ee,
            reject: ie
          };
          this.pendingSave = He, this.editsAtSave = this.edits, this.deps.client.save((0, Fe.e)()).then((ee => {
            this.pendingSave === He && this.saveStarted(ee)
          }), (ee => {
            this.pendingSave === He && this.rejectSave(ee instanceof Error ? ee : new Error(String(ee)))
          }))
        }))
      }
      saveStarted(ee) {
        switch (ee) {
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
      markSaved(ee, ie) {
        var He, ye;
        this.fileHandle = ee, this.fileName = null !== (He = null !== (ye = null === ee || void 0 === ee ? void 0 : ee.name) && void 0 !== ye ? ye : ie) && void 0 !== He ? He : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(ye.d.coreStopped.text)), this.rejectSave(new Error(ye.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var ee, ie, He;
        const ye = this.deps.client.view(),
          be = ye !== this.lastView;
        this.lastView = ye, this.opening && null !== ye && ye.state !== Ue.Yc.None && ye.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Ke.h)()), this.cropAsked ? (this.cropAsked = !1, null !== ye && ye.state === Ue.Yc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== ye && ye.state !== Ue.Yc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Me = 0 === this.settleFrames && 0 === (null !== (ee = null === (ie = (He = this.deps).meshPending) || void 0 === ie ? void 0 : ie.call(He)) && void 0 !== ee ? ee : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Me && this.release("opening"), this.holds.has("seek") && Me && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Me && this.release("crop");
        const Fe = this.now();
        for (const [Ke, Ue] of this.holds) !oe.has(Ke) && Fe - Ue >= Je && this.release(Ke);
        this.saveRefused && !this.cropping && this.saveFailed(!1), be && this.deps.onChange()
      }
      cropped() {
        (0, Ke.h)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(ee) {
        switch (ee.reason) {
          case Ue.Rc.TooLarge:
            break;
          case Ue.Rc.Open:
          case Ue.Rc.NothingStaged: {
            this.opening = !1, this.release("opening");
            const ie = (0, Me.g)(ee.version) ? ye.d.replayTooOld : ye.d.cantOpen;
            null === this.pendingOpen && this.deps.notify(ie), this.settleOpen(new Error(ie.text));
            break
          }
          case Ue.Rc.Crop:
            if (ee.code === Ue.Qc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(ye.d.cropFailed);
            break;
          case Ue.Rc.ModuleTrap:
          case Ue.Rc.ModuleLoad:
          case Ue.Rc.Port:
            this.moduleEnded(ee.reason === Ue.Rc.ModuleTrap ? ye.d.coreStopped : ye.d.cantOpen);
            break;
          case Ue.Rc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${ee.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(ee) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(ee), this.settleOpen(new Error(ee.text))
      }
      saveDone(ee) {
        const ie = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ie || void 0 === ie || ie.resolve(ee)
      }
      saveFailed(ee) {
        this.rejectSave(new Error(ee ? ye.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(ee) {
        ee && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(ye.d.cropBusy.text)) : this.deps.notify(ye.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(ee) {
        const ie = this.pendingOpen;
        this.pendingOpen = null, null === ee ? null === ie || void 0 === ie || ie.resolve() : null === ie || void 0 === ie || ie.reject(ee)
      }
      rejectSave(ee) {
        const ie = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ie || void 0 === ie || ie.reject(ee)
      }
      hold(ee) {
        const ie = 0 === this.holds.size;
        this.holds.set(ee, this.now()), ie && this.deps.setHoldDraws(!0)
      }
      release(ee) {
        this.holds.delete(ee) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);