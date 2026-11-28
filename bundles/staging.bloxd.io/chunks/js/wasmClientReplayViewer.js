export const id = 73;
export const ids = [73];
export const modules = {
  38190: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob,
      h: () => Ub
    });
    var eb = Mb(661),
      Hb = Mb(43),
      pb = Mb(38155);
    const Vb = "replayFileKeptForReload",
      gb = "replayFileKeptForReloadAt",
      lb = "replayFileKeptForReloadTab",
      Lb = 3e5,
      Ib = 5e3;
    async function Ob(bb, wb) {
      const Mb = Date.now(),
        pb = {
          at: Mb,
          bytes: bb,
          source: wb
        },
        Lb = await Promise.race([(async () => await Hb.h.setItem(gb, Mb) && Hb.h.setItem(Vb, pb))(), (0, eb.R)(Ib).then((() => !1))]);
      Lb || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Ob = {
        at: Mb,
        nI: Lb
      };
      Hb.j.setItem(lb, Ob)
    }
    async function Ub() {
      var bb;
      const wb = Hb.j.getItem(lb);
      null !== wb && Hb.j.removeItem(lb);
      const Mb = Date.now(),
        eb = await Hb.h.getItem(gb),
        Ib = null !== wb && Mb - wb.at <= Lb,
        Ob = null !== wb && eb === wb.at;
      let Ub = null;
      if (null !== eb && (Ob || ("number" !== typeof eb || Mb - eb > Lb)) && (Ub = Ib && Ob && wb.nI ? await Hb.h.getItem(Vb) : null, await Promise.all([Hb.h.removeItem(gb), Hb.h.removeItem(Vb)])), !Ib) return null;
      if ((null === (bb = Ub) || void 0 === bb ? void 0 : bb.at) !== wb.at) throw new Error(pb.b.replayNotKept.text);
      return {
        bytes: Ub.bytes,
        source: Ub.source
      }
    }
  },
  38185: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      e: () => pb,
      i: () => Hb
    });
    const eb = [9];

    function Hb(bb) {
      return eb.includes(bb)
    }

    function pb(bb) {
      return null !== bb && bb >= 3 && bb < eb[0]
    }
  },
  38197: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      e: () => Hb
    });
    const eb = "data-replay-ui-active",
      Hb = [{
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
  38203: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Lb,
      h: () => Ob,
      i: () => Ib
    });
    var eb = Mb(26),
      Hb = Mb(29),
      pb = Mb(38197);

    function Vb() {
      const bb = {};
      for (const {
          group: wb
        }
        of pb.e) bb[wb] = !0;
      return bb
    }
    let gb = Vb();

    function lb() {
      Hb.k.iI("replayViewer|uiVisibilityChanged")
    }

    function Lb() {
      return gb
    }

    function Ib(bb, wb) {
      gb[bb] !== wb && (gb = {
        ...gb,
        [bb]: wb
      }, "nametag" === bb && eb.c.set({
        areNametagsHidden: !wb
      }), lb())
    }

    function Ob() {
      gb = Vb(), eb.c.set({
        areNametagsHidden: !1
      }), lb()
    }
  },
  64396: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      HOLD_TIMEOUT_MS: () => Lb,
      ReplayViewer: () => Ob
    });
    var eb = Mb(38155),
      Hb = Mb(38190),
      pb = Mb(38185),
      Vb = Mb(38203),
      gb = Mb(5678),
      lb = Mb(54816);
    const Lb = 1e4,
      Ib = new Set(["LC"]);
    class Ob {
      constructor(bb) {
        var wb;
        this.deps = bb, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (wb = bb.now) && void 0 !== wb ? wb : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== gb.md.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get dg() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? eb.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(bb, wb) {
        var Mb, pb, Vb, lb;
        const {
          client: Lb
        } = this.deps;
        if (!this.playback) {
          if (!Lb.setPlayback(!0)) throw new Error(eb.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Ib = this.epoch;
        let Ob;
        try {
          Ob = await Lb.open(bb, (() => (0, Hb.d)(bb, wb)))
        } finally {
          this.loadingOpens--
        }
        if (Ib !== this.epoch && "reloading" !== Ob) throw new Error(eb.b.coreStopped.text);
        if ("opening" !== Ob) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const bb = function(bb) {
            switch (bb) {
              case "reloading":
                return null;
              case "stopped":
              case gb.ad.ModuleTrap:
                return eb.b.coreStopped;
              case gb.ad.ModuleLoad:
                return eb.b.viewerLoadFailed;
              case gb.ad.TooLarge:
                return eb.b.cantOpen
            }
          }(Ob);
          if (null === bb) return;
          throw new Error(bb.text)
        }
        return this.rejectSave(new Error(eb.b.saveClosed.text)), this.fileName = null !== (Mb = null !== (pb = wb.fileName) && void 0 !== pb ? pb : null === (Vb = wb.fileHandle) || void 0 === Vb ? void 0 : Vb.name) && void 0 !== Mb ? Mb : null, this.fileHandle = null !== (lb = wb.fileHandle) && void 0 !== lb ? lb : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((bb, wb) => {
          this.pendingOpen = {
            resolve: bb,
            reject: wb
          }
        }))
      }
      play() {
        this.holds.has("LC") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("LC")
      }
      seek(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = this.lastView;
        null !== Mb && (wb || bb < Mb.sO) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(bb, wb)
      }
      setSpeed(bb) {
        this.deps.client.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.client.setCameraMode(bb)
      }
      cycleCameraMode() {
        const bb = this.lastView;
        null !== bb && bb.state !== gb.md.None && this.setCameraMode(lb.c[(lb.c.indexOf(bb.cameraMode) + 1) % lb.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(bb) {
        this.edited(this.deps.client.setKeyframe(bb))
      }
      moveKeyframe(bb, wb) {
        this.edited(this.deps.client.moveKeyframe(bb, wb))
      }
      deleteKeyframes(bb, wb) {
        this.edited(this.deps.client.deleteKeyframes(bb, wb))
      }
      setMark(bb) {
        this.edited(this.deps.client.setMark(bb))
      }
      crop(bb, wb) {
        return !(wb <= bb) && (null !== this.pendingSave ? (this.deps.notify(eb.b.saveBusy), !1) : !!this.deps.client.crop(bb, wb) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(eb.b.saveBusy.text)) : new Promise(((bb, wb) => {
          const Mb = {
            resolve: bb,
            reject: wb
          };
          this.pendingSave = Mb, this.editsAtSave = this.edits, this.deps.client.save((0, lb.f)()).then((bb => {
            this.pendingSave === Mb && this.saveStarted(bb)
          }), (bb => {
            this.pendingSave === Mb && this.rejectSave(bb instanceof Error ? bb : new Error(String(bb)))
          }))
        }))
      }
      saveStarted(bb) {
        switch (bb) {
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
      markSaved(bb, wb) {
        var Mb, eb;
        this.fileHandle = bb, this.fileName = null !== (Mb = null !== (eb = null === bb || void 0 === bb ? void 0 : bb.name) && void 0 !== eb ? eb : wb) && void 0 !== Mb ? Mb : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(eb.b.coreStopped.text)), this.rejectSave(new Error(eb.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var bb, wb, Mb;
        const eb = this.deps.client.view(),
          Hb = eb !== this.lastView;
        this.lastView = eb, this.opening && null !== eb && eb.state !== gb.md.None && eb.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Vb.h)()), this.cropAsked ? (this.cropAsked = !1, null !== eb && eb.state === gb.md.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== eb && eb.state !== gb.md.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const pb = 0 === this.settleFrames && 0 === (null !== (bb = null === (wb = (Mb = this.deps).meshPending) || void 0 === wb ? void 0 : wb.call(Mb)) && void 0 !== bb ? bb : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && pb && this.release("opening"), this.holds.has("seek") && pb && this.release("seek"), this.holds.has("crop") && !this.cropRunning && pb && this.release("crop");
        const lb = this.now();
        for (const [Vb, gb] of this.holds) !Ib.has(Vb) && lb - gb >= Lb && this.release(Vb);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Hb && this.deps.onChange()
      }
      cropped() {
        (0, Vb.h)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(bb) {
        switch (bb.reason) {
          case gb.ad.TooLarge:
            break;
          case gb.ad.Open:
          case gb.ad.NothingStaged: {
            this.opening = !1, this.release("opening");
            const wb = (0, pb.e)(bb.version) ? eb.b.replayTooOld : eb.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(wb), this.settleOpen(new Error(wb.text));
            break
          }
          case gb.ad.Crop:
            if (bb.code === gb.Zc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(eb.b.cropFailed);
            break;
          case gb.ad.ModuleTrap:
          case gb.ad.ModuleLoad:
          case gb.ad.Port:
            this.moduleEnded(bb.reason === gb.ad.ModuleTrap ? eb.b.coreStopped : eb.b.cantOpen);
            break;
          case gb.ad.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${bb.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(bb) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(bb), this.settleOpen(new Error(bb.text))
      }
      saveDone(bb) {
        const wb = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === wb || void 0 === wb || wb.resolve(bb)
      }
      saveFailed(bb) {
        this.rejectSave(new Error(bb ? eb.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(bb) {
        bb && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(eb.b.cropBusy.text)) : this.deps.notify(eb.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(bb) {
        const wb = this.pendingOpen;
        this.pendingOpen = null, null === bb ? null === wb || void 0 === wb || wb.resolve() : null === wb || void 0 === wb || wb.reject(bb)
      }
      rejectSave(bb) {
        const wb = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === wb || void 0 === wb || wb.reject(bb)
      }
      hold(bb) {
        const wb = 0 === this.holds.size;
        this.holds.set(bb, this.now()), wb && this.deps.setHoldDraws(!0)
      }
      release(bb) {
        this.holds.delete(bb) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);