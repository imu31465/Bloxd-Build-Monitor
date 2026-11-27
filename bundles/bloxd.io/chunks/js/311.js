export const id = 311;
export const ids = [311];
export const modules = {
  42945: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      openMobLineupPreview: () => or,
      openMobPreview: () => Fr,
      openPetPreview: () => br
    });
    var Zr = Qr(41725),
      Wr = Qr(41934),
      ar = Qr(42949),
      jr = Qr(38679),
      Ir = Qr(38555),
      fr = Qr(42085),
      Er = Qr(42966),
      pr = Qr(39969),
      xr = Qr(38650),
      mr = Qr(38625),
      Nr = Qr(38552),
      Ur = Qr(39853),
      tr = Qr(39845),
      hr = Qr(39609),
      zr = Qr(38656),
      Yr = Qr(2383),
      nr = Qr(42974),
      er = Qr(3139);
    const Kr = new Map;

    function yr(rr, Sr) {
      const Qr = function(rr) {
        return rr.flatMap((rr => {
          var Sr;
          let [Qr, Zr] = rr;
          const Wr = void 0 === Zr || null === (Sr = (0, er.k)(Qr, Zr)) || void 0 === Sr ? void 0 : Sr.attachments;
          return null !== Wr && void 0 !== Wr ? Wr : []
        }))
      }(Sr).map((Sr => function(rr, Sr) {
        let {
          modelGlb: Qr,
          texture: Zr,
          animation: Wr
        } = Sr;
        const ar = void 0 !== Wr,
          jr = `${(0,zr.l)(Qr,Zr)}|${ar}`;
        let Ir = Kr.get(jr);
        return Ir || (Ir = (0, nr.f)(rr, Qr, Zr, {
          keepTransforms: ar,
          backFaceCulling: !1
        }).then(nr.g, (rr => {
          throw Kr.delete(jr), rr
        })), Kr.set(jr, Ir)), Ir
      }(rr, Sr).then((rr => ({
        attachment: Sr,
        nodes: rr
      })), (rr => (console.error(`Mob preview: could not load ${Sr.modelGlb}`, rr), null)))));
      return Promise.all(Qr).then((rr => rr.filter((rr => null !== rr))))
    }
    var Br = Qr(39646),
      Tr = Qr(39622),
      vr = Qr(39286),
      Or = Qr(39128);
    Qr(42980), Qr(42318), Qr(42986);
    const Lr = 22,
      lr = 13,
      Xr = Math.PI - Math.PI / 16,
      Pr = 6,
      Hr = Math.PI / 4;
    let qr = null;
    const Rr = {},
      gr = new Map;

    function Cr() {
      if (null !== qr) return qr;
      const rr = document.createElement("canvas");
      rr.classList.add("MobPreviewCanvas");
      const Sr = new Zr.d(rr, !0, {
        preserveDrawingBuffer: !0
      });
      Sr.JZr = (0, Yr.e)().Ox.engine.JZr;
      const Qr = new Wr.c(Sr);
      Qr.clearColor = new jr.d(0, 0, 0, 0), Qr.ambientColor = new jr.Color3(1, 1, 1);
      const Er = new ar.d("fz", Math.PI / 2, Math.PI / 2, Lr, Ir.kU.Zero(), Qr),
        pr = new fr.b("light", new Ir.kU(-.1, 1, -.3), Qr);
      return pr.diffuse = new jr.Color3(1, 1, 1), pr.specular = new jr.Color3(1, 1, 1), pr.groundColor = new jr.Color3(.5, .5, .5), qr = {
        engine: Sr,
        Dt: Qr,
        canvas: rr,
        camera: Er
      }, qr
    }

    function Mr(rr) {
      return Rr[rr] ??= (0, hr.s)(rr, Cr().Dt, !0).catch((Sr => {
        throw delete Rr[rr], Sr
      })), Rr[rr]
    }

    function Gr(rr) {
      let Sr = gr.get(rr);
      return Sr || (Sr = vr.x[rr].loadModel(Cr().Dt, !1).then((rr => (rr.VK(!1), rr)), (Sr => {
        throw gr.delete(rr), Sr
      })), gr.set(rr, Sr)), Sr
    }

    function kr() {
      return 2 * Lr * Math.tan(Cr().camera.fov / 2)
    }

    function Ar(rr) {
      var Sr, Qr, Zr;
      let {
        mobType: Wr,
        variation: ar,
        animation: jr
      } = rr, fr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, er = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Kr = null !== (Sr = null === fr || void 0 === fr ? void 0 : fr.size) && void 0 !== Sr ? Sr : 1,
        Lr = null !== (Qr = null === fr || void 0 === fr ? void 0 : fr.cosmetics) && void 0 !== Qr ? Qr : [],
        Pr = null !== (Zr = null === fr || void 0 === fr ? void 0 : fr.jB) && void 0 !== Zr ? Zr : null;
      let Hr = !1,
        qr = null,
        Rr = null;
      const {
        engine: gr,
        Dt: Ar
      } = Cr(), Vr = Ar.onBeforeRenderObservable.add((() => {
        var rr;
        null === (rr = Rr) || void 0 === rr || rr.render(gr.getDeltaTime())
      })), ir = null === Pr ? null : Gr(Pr).catch((rr => (console.error(`Mob preview: could not load ${Pr}`, rr), null)));
      return Promise.all([Mr(Wr), ir, yr(Cr().Dt, Lr)]).then((rr => {
        var Sr, Qr, Zr, yr;
        let [gr, Mr, Gr] = rr;
        if (Hr) return;
        const Ar = (0, Yr.e)().Ox.bC,
          {
            hitBoxDimensions: Vr
          } = (0, pr.c)(Wr),
          ir = lr / Math.max(Vr.height, Vr.width);
        if (qr = (0, hr.i)(Wr, ir * Kr, !0, !0), Ar.setPosition(qr, er, -Vr.height * ir / 2 + (null !== (Sr = null === fr || void 0 === fr ? void 0 : fr.lift) && void 0 !== Sr ? Sr : 0) * kr(), 0), Ar.setRotationEulerY(qr, Xr), gr.meshApi instanceof Tr.e && Lr.length > 0) {
          for (const [rr, Sr] of Lr) gr.meshApi.updatePlayerCosmetic(null, qr, rr, Sr, !0);
          ! function(rr, Sr) {
            const Qr = (0, Yr.e)().Ox.bC;
            for (const {
                attachment: Zr,
                nodes: Wr
              }
              of rr) {
              const rr = Wr.get(Zr.modelNode);
              rr ? (0, nr.m)((0, zr.e)(rr, `${rr.name}Worn`), Zr, Qr, Sr) : console.error(`Mob preview: attachment node ${Zr.modelNode} not found in ${Zr.modelGlb}`)
            }
          }(Gr, qr)
        } else gr.meshApi.updateVariation(qr, Wr, null !== ar && void 0 !== ar ? ar : "default");
        null !== Pr && null !== Mr && function(rr, Sr, Qr, Zr) {
          var Wr;
          const ar = vr.x[rr],
            jr = (0, Ur.m)();
          (0, Ur.g)(ar, null === (Wr = (0, Br.d)(Qr).meshMetadata.heldItemPositionParams) || void 0 === Wr ? void 0 : Wr.itemOffset, jr);
          const fr = Or.c * jr.Tx.y,
            pr = jr.usesQuaternion ? jr.quaternion : Ir.Quaternion.FromEulerVector(jr.rotation),
            xr = new Er.b(`${Sr.name}Hand`, Cr().Dt);
          xr.position.iH((0, tr.e)(jr.position, pr, fr, ar.heldModelOffsetY())), xr.rotationQuaternion = pr, xr.Tx.set(jr.Tx.x, fr, jr.Tx.z), Sr.clone(`${Sr.name}Held`, xr).VK(!0);
          const mr = (0, Yr.e)().Ox.bC;
          mr.attachTransformNode(xr, Zr, mr.getNamedNode(Zr, "ArmRightMesh"))
        }(Pr, Mr, Wr, qr), Ar.set(qr, "aOpacity", 1);
        const wr = null !== (Qr = (0, Br.d)(Wr).meshMetadata.lifeformTypeForModelOverride) && void 0 !== Qr ? Qr : Wr;
        Rr = new Nr.AnimatorState, Rr.thinInstMgr = Ar, Rr.JC = qr, Rr.tZr = Ar.lZr(qr, 0), Rr.modelLifeformType = wr, Rr.nodeNameAliases = null !== (Zr = null === (yr = (0, xr.c)(wr)) || void 0 === yr ? void 0 : yr.nodeNameAliases) && void 0 !== Zr ? Zr : null, Rr.startAnimation(jr, mr.i.Movement)
      })).catch((rr => {
        console.error(`Mob preview: could not load ${Wr}`, rr)
      })), () => {
        Hr = !0, Ar.onBeforeRenderObservable.remove(Vr), null !== qr && (0, Yr.e)().Ox.bC.delete(qr)
      }
    }

    function Vr(rr, Sr) {
      return Ar({
        mobType: "NPC",
        variation: null,
        animation: rr.animation
      }, rr, Sr)
    }

    function ir(rr) {
      let {
        mobType: Sr,
        variation: Qr,
        metaInfo: Zr,
        tamed: Wr
      } = rr, ar = !1, jr = null, Ir = 0;
      const fr = (0, Yr.e)(),
        Er = fr.Ox.bC,
        pr = rr => {
          Ir += Hr * (rr / 1e3) % (2 * Math.PI), Er.setRotationEulerY(jr, Ir)
        };
      return Mr(Sr).then((rr => {
        if (ar) return;
        jr = (0, hr.i)(Sr, Pr, !0, !0), Er.setPosition(jr, 0, -Pr, 0), rr.meshApi.updateVariation(jr, Sr, Qr);
        const Ir = {
          wool: "Sheared" !== Zr,
          saddle: "Saddled" === Zr,
          antlers: "Antlers" === Zr,
          collar: Wr
        };
        for (const [Sr, Qr] of Object.entries(Ir)) Er.hasGroup(jr, Sr) && rr.meshApi.setMeshGroupVisibility(jr, Sr, Qr);
        Er.set(jr, "aOpacity", 1), fr.on("renderTickBegin", pr)
      })).catch((rr => {
        console.error(`Pet preview: could not load ${Sr}`, rr)
      })), () => {
        ar = !0, fr.off("renderTickBegin", pr), null !== jr && Er.delete(jr)
      }
    }
    class wr {
      constructor(rr, Sr) {
        this.place = Sr, this.remove = null;
        const {
          engine: Qr,
          Dt: Zr,
          canvas: Wr
        } = Cr();
        rr.appendChild(Wr), Qr.resize(), Qr.runRenderLoop((() => {
          Zr.render()
        }))
      }
      show(rr) {
        var Sr;
        null === (Sr = this.remove) || void 0 === Sr || Sr.call(this), this.remove = this.place(rr)
      }
      resize(rr, Sr) {
        const {
          engine: Qr,
          canvas: Zr
        } = Cr();
        Zr.width = rr, Zr.height = Sr, Qr.resize()
      }
      close() {
        var rr;
        Cr().engine.stopRenderLoop(), null === (rr = this.remove) || void 0 === rr || rr.call(this), this.remove = null
      }
    }
    class cr {
      constructor(rr) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new wr(rr, (() => () => {}))
      }
      show(rr) {
        rr.figures !== this.view.figures && this.preload(rr.figures), this.view = rr, this.place()
      }
      resize(rr, Sr) {
        this.preview.resize(rr, Sr), this.aspect = rr / Sr, this.place()
      }
      close() {
        this.preview.close();
        for (const rr of this.placed) null === rr || void 0 === rr || rr.remove();
        this.placed = []
      }
      preload(rr) {
        const Sr = () => {};
        Mr("NPC").catch(Sr);
        for (const {
            jB: Qr,
            cosmetics: Zr
          }
          of rr) null !== Qr && Gr(Qr).catch(Sr), yr(Cr().Dt, Zr).catch(Sr)
      }
      place() {
        const {
          figures: rr,
          shown: Sr
        } = this.view, Qr = rr.map(((Qr, Zr) => {
          var Wr;
          const ar = null !== (Wr = this.placed[Zr]) && void 0 !== Wr ? Wr : null;
          if (!Sr[Zr]) return null === ar || void 0 === ar || ar.remove(), null;
          const jr = (Ir = (Zr + .5) / rr.length, fr = this.aspect, (.5 - Ir) * kr() * fr);
          var Ir, fr;
          return null !== ar && ar.figure === Qr && ar.x === jr ? ar : (null === ar || void 0 === ar || ar.remove(), {
            figure: Qr,
            x: jr,
            remove: Vr(Qr, jr)
          })
        }));
        for (const Zr of this.placed.slice(rr.length)) null === Zr || void 0 === Zr || Zr.remove();
        this.placed = Qr
      }
    }

    function Fr(rr) {
      return new wr(rr, Ar)
    }

    function or(rr) {
      return new cr(rr)
    }

    function br(rr) {
      return new wr(rr, ir)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);