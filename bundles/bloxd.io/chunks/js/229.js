export const id = 229;
export const ids = [229, 235, 238];
export const modules = {
  40340: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      g: () => wm
    });
    var hm = fm(38766),
      Am = fm(40129),
      am = fm(40319),
      xm = {};
    class wm {
      constructor(mm) {
        this.attachedToElement = !1, this.attached = {}, this.camera = mm, this.checkInputs = () => {}
      }
      add(mm) {
        const Tm = mm.getSimpleName();
        this.attached[Tm] ? hm.b.Warn("camera input of type " + Tm + " already exists on camera") : (this.attached[Tm] = mm, mm.camera = this.camera, mm.checkInputs && (this.checkInputs = this._addCheckInputs(mm.checkInputs.bind(mm))), this.attachedToElement && mm.attachControl(this.noPreventDefault))
      }
      remove(mm) {
        for (const Tm in this.attached) {
          const fm = this.attached[Tm];
          if (fm === mm) return fm.detachControl(), fm.camera = null, delete this.attached[Tm], void this.rebuildInputCheck()
        }
      }
      removeByType(mm) {
        for (const Tm in this.attached) {
          const fm = this.attached[Tm];
          fm.getClassName() === mm && (fm.detachControl(), fm.camera = null, delete this.attached[Tm], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(mm) {
        const Tm = this.checkInputs;
        return () => {
          Tm(), mm()
        }
      }
      attachInput(mm) {
        this.attachedToElement && mm.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          mm = !am.b.ForceAttachControlToAlwaysPreventDefault && mm, this.attachedToElement = !0, this.noPreventDefault = mm;
          for (const Tm in this.attached) this.attached[Tm].attachControl(mm)
        }
      }
      detachElement() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Tm in this.attached) this.attached[Tm].detachControl(), mm && (this.attached[Tm].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const mm in this.attached) {
          const Tm = this.attached[mm];
          Tm.checkInputs && (this.checkInputs = this._addCheckInputs(Tm.checkInputs.bind(Tm)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(mm) {
        const Tm = {};
        for (const fm in this.attached) {
          const mm = this.attached[fm],
            hm = Am.d.Serialize(mm);
          Tm[mm.getClassName()] = hm
        }
        mm.inputsmgr = Tm
      }
      parse(mm) {
        const Tm = mm.inputsmgr;
        if (Tm) {
          this.clear();
          for (const mm in Tm) {
            const fm = xm[mm];
            if (fm) {
              const hm = Tm[mm],
                am = Am.d.Parse((() => new fm), hm, null);
              this.add(am)
            }
          }
        } else
          for (const fm in this.attached) {
            const Tm = xm[this.attached[fm].getClassName()];
            if (Tm) {
              const hm = Am.d.Parse((() => new Tm), mm, null);
              this.remove(this.attached[fm]), this.add(hm)
            }
          }
      }
    }
  },
  40344: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm.e
    });
    var hm = fm(40347);
    (0, hm.g)()
  },
  40347: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm,
      g: () => Em
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(37185),
      xm = fm(37336),
      wm = fm(40355),
      Dm = fm(40326),
      im = fm(37224);
    let Rm = (() => {
        var mm;
        let Tm, fm, Dm = wm.e,
          im = [],
          Rm = [],
          pm = [],
          Em = [];
        return mm = class extends Dm {
          constructor(mm, Tm, fm, Am) {
            super(mm, fm, Am), this.groundColor = (0, hm.i)(this, im, new xm.b(0, 0, 0)), this.direction = ((0, hm.i)(this, Rm), (0, hm.i)(this, pm, void 0)), (0, hm.i)(this, Em), this.direction = Tm || am.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(mm) {
            return this.direction = am.p.Normalize(mm.subtract(am.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(mm, Tm) {
            const fm = am.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", fm.x, fm.y, fm.z, 0, Tm), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Tm), this
          }
          transferToNodeMaterialEffect(mm, Tm) {
            const fm = am.p.Normalize(this.direction);
            return mm.setFloat3(Tm, fm.x, fm.y, fm.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = am.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return wm.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(mm, Tm) {
            mm["HEMILIGHT" + Tm] = !0
          }
        }, (() => {
          const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(Dm[Symbol.metadata] ?? null) : void 0;
          Tm = [(0, Am.k)()], fm = [(0, Am.F)()], (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "groundColor" in mm,
              get: mm => mm.groundColor,
              set: (mm, Tm) => {
                mm.groundColor = Tm
              }
            },
            metadata: am
          }, im, Rm), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: mm => "direction" in mm,
              get: mm => mm.direction,
              set: (mm, Tm) => {
                mm.direction = Tm
              }
            },
            metadata: am
          }, pm, Em), am && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: am
          })
        })(), mm
      })(),
      pm = !1;

    function Em() {
      pm || (pm = !0, Dm.c.AddNodeConstructor("Light_Type_3", ((mm, Tm) => () => new Rm(mm, am.p.Zero(), Tm))), (0, im.d)("BABYLON.HemisphericLight", Rm))
    }
  },
  37330: (mm, Tm, fm) => {
    fm.d(Tm, {
      Color3: () => hm.b,
      e: () => hm.c
    });
    var hm = fm(37336);
    (0, hm.d)()
  },
  37813: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = fm(37821);
    class Am {
      static GetPlanes(mm) {
        const Tm = [];
        for (let fm = 0; fm < 6; fm++) Tm.push(new hm.d(0, 0, 0, 0));
        return Am.GetPlanesToRef(mm, Tm), Tm
      }
      static GetNearPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[2], Tm.normal.y = fm[7] + fm[6], Tm.normal.z = fm[11] + fm[10], Tm.d = fm[15] + fm[14], Tm.normalize()
      }
      static GetFarPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[2], Tm.normal.y = fm[7] - fm[6], Tm.normal.z = fm[11] - fm[10], Tm.d = fm[15] - fm[14], Tm.normalize()
      }
      static GetLeftPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[0], Tm.normal.y = fm[7] + fm[4], Tm.normal.z = fm[11] + fm[8], Tm.d = fm[15] + fm[12], Tm.normalize()
      }
      static GetRightPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[0], Tm.normal.y = fm[7] - fm[4], Tm.normal.z = fm[11] - fm[8], Tm.d = fm[15] - fm[12], Tm.normalize()
      }
      static GetTopPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[1], Tm.normal.y = fm[7] - fm[5], Tm.normal.z = fm[11] - fm[9], Tm.d = fm[15] - fm[13], Tm.normalize()
      }
      static GetBottomPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[1], Tm.normal.y = fm[7] + fm[5], Tm.normal.z = fm[11] + fm[9], Tm.d = fm[15] + fm[13], Tm.normalize()
      }
      static GetPlanesToRef(mm, Tm) {
        Am.GetNearPlaneToRef(mm, Tm[0]), Am.GetFarPlaneToRef(mm, Tm[1]), Am.GetLeftPlaneToRef(mm, Tm[2]), Am.GetRightPlaneToRef(mm, Tm[3]), Am.GetTopPlaneToRef(mm, Tm[4]), Am.GetBottomPlaneToRef(mm, Tm[5])
      }
      static IsPointInFrustum(mm, Tm) {
        for (let fm = 0; fm < 6; fm++)
          if (Tm[fm].dotCoordinate(mm) < 0) return !1;
        return !0
      }
    }
  },
  37821: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am
    });
    var hm = fm(37185);
    class Am {
      constructor(mm, Tm, fm, Am) {
        this.normal = new hm.p(mm, Tm, fm), this.d = Am
      }
      ahm() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Am(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let mm = this.normal.getHashCode();
        return mm = 397 * mm ^ this.d, mm
      }
      normalize() {
        const mm = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Tm = 0;
        return 0 !== mm && (Tm = 1 / mm), this.normal.x *= Tm, this.normal.y *= Tm, this.normal.z *= Tm, this.d *= Tm, this
      }
      transform(mm) {
        const Tm = Am._TmpMatrix;
        mm.invertToRef(Tm);
        const fm = Tm.m,
          hm = this.normal.x,
          am = this.normal.y,
          xm = this.normal.z,
          wm = this.d,
          Dm = hm * fm[0] + am * fm[1] + xm * fm[2] + wm * fm[3],
          im = hm * fm[4] + am * fm[5] + xm * fm[6] + wm * fm[7],
          Rm = hm * fm[8] + am * fm[9] + xm * fm[10] + wm * fm[11],
          pm = hm * fm[12] + am * fm[13] + xm * fm[14] + wm * fm[15];
        return new Am(Dm, im, Rm, pm)
      }
      dotCoordinate(mm) {
        return this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z + this.d
      }
      copyFromPoints(mm, Tm, fm) {
        const hm = Tm.x - mm.x,
          Am = Tm.y - mm.y,
          am = Tm.z - mm.z,
          xm = fm.x - mm.x,
          wm = fm.y - mm.y,
          Dm = fm.z - mm.z,
          im = Am * Dm - am * wm,
          Rm = am * xm - hm * Dm,
          pm = hm * wm - Am * xm,
          Em = Math.sqrt(im * im + Rm * Rm + pm * pm);
        let om;
        return om = 0 !== Em ? 1 / Em : 0, this.normal.x = im * om, this.normal.y = Rm * om, this.normal.z = pm * om, this.d = -(this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z), this
      }
      isFrontFacingTo(mm, Tm) {
        return hm.p.Dot(this.normal, mm) <= Tm
      }
      signedDistanceTo(mm) {
        return hm.p.Dot(mm, this.normal) + this.d
      }
      static FromArray(mm) {
        return new Am(mm[0], mm[1], mm[2], mm[3])
      }
      static FromPoints(mm, Tm, fm) {
        const hm = new Am(0, 0, 0, 0);
        return hm.copyFromPoints(mm, Tm, fm), hm
      }
      static FromPositionAndNormal(mm, Tm) {
        const fm = new Am(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(mm, Tm, fm)
      }
      static FromPositionAndNormalToRef(mm, Tm, fm) {
        return fm.normal.ZZ(Tm), fm.normal.normalize(), fm.d = -mm.dot(fm.normal), fm
      }
      static SignedDistanceToPlaneFromPositionAndNormal(mm, Tm, fm) {
        const Am = -(Tm.x * mm.x + Tm.y * mm.y + Tm.z * mm.z);
        return hm.p.Dot(fm, Tm) + Am
      }
    }
    Am._TmpMatrix = hm.e.Identity()
  },
  37181: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      Matrix: () => hm.e,
      Quaternion: () => hm.h,
      RegisterMathVector: () => hm.i,
      TmpVectors: () => hm.j,
      Vector2: () => hm.l,
      WO: () => hm.p,
      Vector4: () => hm.t
    });
    var hm = fm(37185);
    (0, hm.i)()
  },
  38151: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      constructor(mm, Tm, fm, hm) {
        this.x = mm, this.y = Tm, this.width = fm, this.height = hm
      }
      toGlobal(mm, Tm) {
        return new hm(this.x * mm, this.y * Tm, this.width * mm, this.height * Tm)
      }
      toGlobalToRef(mm, Tm, fm) {
        return fm.x = this.x * mm, fm.y = this.y * Tm, fm.width = this.width * mm, fm.height = this.height * Tm, this
      }
      clone() {
        return new hm(this.x, this.y, this.width, this.height)
      }
    }
  },
  40505: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => im
    });
    var hm = fm(37185),
      Am = fm(37336),
      am = fm(40513),
      xm = fm(40527),
      wm = fm(40540);

    function Dm(mm) {
      let Tm = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const fm = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        am = [],
        Dm = mm.width || mm.size || 1,
        im = mm.height || mm.size || 1,
        Rm = mm.depth || mm.size || 1,
        pm = mm.wrap || !1;
      let Em = void 0 === mm.topBaseAt ? 1 : mm.topBaseAt,
        om = void 0 === mm.bottomBaseAt ? 0 : mm.bottomBaseAt;
      Em = (Em + 4) % 4, om = (om + 4) % 4;
      let Om = [2, 0, 3, 1][Em],
        Ym = [2, 0, 1, 3][om],
        qm = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (pm) {
        Tm = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], qm = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let mm = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          fm = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const hm = [17, 18, 19, 16],
          Am = [22, 23, 20, 21];
        for (; Om > 0;) mm.unshift(mm.pop()), hm.unshift(hm.pop()), Om--;
        for (; Ym > 0;) fm.unshift(fm.pop()), Am.unshift(Am.pop()), Ym--;
        mm = mm.flat(), fm = fm.flat(), qm = qm.concat(mm).concat(fm), Tm.push(hm[0], hm[2], hm[3], hm[0], hm[1], hm[2]), Tm.push(Am[0], Am[2], Am[3], Am[0], Am[1], Am[2])
      }
      const jm = [Dm / 2, im / 2, Rm / 2],
        Vm = qm.reduce(((mm, Tm, fm) => mm.concat(Tm * jm[fm % 3])), []),
        Im = 0 === mm.sideOrientation ? 0 : mm.sideOrientation || xm.c.DEFAULTSIDE,
        Km = mm.faceUV || new Array(6),
        Qm = mm.faceColors,
        nm = [];
      for (let xm = 0; xm < 6; xm++) void 0 === Km[xm] && (Km[xm] = new hm.t(0, 0, 1, 1)), Qm && void 0 === Qm[xm] && (Qm[xm] = new Am.c(1, 1, 1, 1));
      for (let hm = 0; hm < 6; hm++)
        if (am.push(Km[hm].z, wm.c ? 1 - Km[hm].w : Km[hm].w), am.push(Km[hm].x, wm.c ? 1 - Km[hm].w : Km[hm].w), am.push(Km[hm].x, wm.c ? 1 - Km[hm].y : Km[hm].y), am.push(Km[hm].z, wm.c ? 1 - Km[hm].y : Km[hm].y), Qm)
          for (let mm = 0; mm < 4; mm++) nm.push(Qm[hm].r, Qm[hm].g, Qm[hm].b, Qm[hm].a);
      xm.c._ComputeSides(Im, Vm, Tm, fm, am, mm.frontUVs, mm.backUVs);
      const Jm = new xm.c;
      if (Jm.indices = Tm, Jm.positions = Vm, Jm.normals = fm, Jm.uvs = am, Qm) {
        const mm = Im === xm.c.DOUBLESIDE ? nm.concat(nm) : nm;
        Jm.colors = mm
      }
      return Jm
    }

    function im(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const hm = new am.d(mm, fm);
      Tm.sideOrientation = am.d._GetDefaultSideOrientation(Tm.sideOrientation), hm._originalBuilderSideOrientation = Tm.sideOrientation;
      return Dm(Tm).applyToMesh(hm, Tm.updatable), hm
    }
    let Rm = !1;
    Rm || (Rm = !0, xm.c.CreateBox = Dm, am.d.CreateBox = function(mm, Tm) {
      return im(mm, {
        size: Tm,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40558: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => pm
    });
    var hm = fm(37185),
      Am = fm(40513),
      am = fm(40527),
      xm = fm(40565),
      wm = fm(40251),
      Dm = fm(38766);

    function im(mm) {
      const Tm = [],
        fm = [],
        hm = mm.lines,
        Am = mm.colors,
        xm = [];
      let wm = 0;
      for (let am = 0; am < hm.length; am++) {
        const mm = hm[am];
        for (let hm = 0; hm < mm.length; hm++) {
          const {
            x: Dm,
            y: im,
            z: Rm
          } = mm[hm];
          if (fm.push(Dm, im, Rm), Am) {
            const mm = Am[am],
              {
                r: Tm,
                g: fm,
                b: wm,
                a: Dm
              } = mm[hm];
            xm.push(Tm, fm, wm, Dm)
          }
          hm > 0 && (Tm.push(wm - 1), Tm.push(wm)), wm++
        }
      }
      const Dm = new am.c;
      return Dm.indices = Tm, Dm.positions = fm, Am && (Dm.colors = xm), Dm
    }

    function Rm(mm) {
      const Tm = mm.dashSize || 3,
        fm = mm.gapSize || 1,
        Am = mm.dashNb || 200,
        xm = mm.points,
        wm = [],
        Dm = [],
        im = hm.p.Zero();
      let Rm, pm, Em, om = 0,
        Om = 0;
      for (Em = 0; Em < xm.length - 1; Em++) xm[Em + 1].subtractToRef(xm[Em], im), om += im.length();
      const Ym = om / Am,
        qm = Tm * Ym / (Tm + fm);
      for (Em = 0; Em < xm.length - 1; Em++) {
        xm[Em + 1].subtractToRef(xm[Em], im), Rm = Math.floor(im.length() / Ym), im.normalize();
        for (let mm = 0; mm < Rm; mm++) pm = Ym * mm, wm.push(xm[Em].x + pm * im.x, xm[Em].y + pm * im.y, xm[Em].z + pm * im.z), wm.push(xm[Em].x + (pm + qm) * im.x, xm[Em].y + (pm + qm) * im.y, xm[Em].z + (pm + qm) * im.z), Dm.push(Om, Om + 1), Om += 2
      }
      const jm = new am.c;
      return jm.positions = wm, jm.indices = Dm, jm
    }

    function pm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const hm = Tm.instance,
        Am = Tm.lines,
        am = Tm.colors;
      if (hm) {
        const mm = hm.getVerticesData(wm.m.PositionKind);
        let Tm, fm;
        am && (Tm = hm.getVerticesData(wm.m.ColorKind));
        let xm = 0,
          Dm = 0;
        for (let hm = 0; hm < Am.length; hm++) {
          const wm = Am[hm];
          for (let Am = 0; Am < wm.length; Am++) mm[xm] = wm[Am].x, mm[xm + 1] = wm[Am].y, mm[xm + 2] = wm[Am].z, am && Tm && (fm = am[hm], Tm[Dm] = fm[Am].r, Tm[Dm + 1] = fm[Am].g, Tm[Dm + 2] = fm[Am].b, Tm[Dm + 3] = fm[Am].a, Dm += 4), xm += 3
        }
        return hm.updateVerticesData(wm.m.PositionKind, mm, !1, !1), am && Tm && hm.updateVerticesData(wm.m.ColorKind, Tm, !1, !1), hm.refreshBoundingInfo(), hm
      }
      const Dm = !!am,
        Rm = new xm.e(mm, fm, null, void 0, void 0, Dm, Tm.useVertexAlpha, Tm.material);
      return im(Tm).applyToMesh(Rm, Tm.updatable), Rm
    }

    function Em(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const hm = Tm.colors ? [Tm.colors] : null;
      return pm(mm, {
        lines: [Tm.points],
        updatable: Tm.updatable,
        instance: Tm.instance,
        colors: hm,
        useVertexAlpha: Tm.useVertexAlpha,
        material: Tm.material
      }, fm)
    }

    function om(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const am = Tm.points,
        wm = Tm.instance,
        im = Tm.gapSize || 1,
        pm = Tm.dashSize || 3;
      if (wm) {
        const mm = mm => {
          const Tm = hm.p.Zero(),
            fm = mm.length / 6;
          let Am, xm, Dm, im, Rm = 0,
            pm = 0;
          for (Dm = 0; Dm < am.length - 1; Dm++) am[Dm + 1].subtractToRef(am[Dm], Tm), Rm += Tm.length();
          const Em = Rm / fm,
            om = wm._creationDataStorage.dashSize,
            Om = om * Em / (om + wm._creationDataStorage.gapSize);
          for (Dm = 0; Dm < am.length - 1; Dm++)
            for (am[Dm + 1].subtractToRef(am[Dm], Tm), Am = Math.floor(Tm.length() / Em), Tm.normalize(), im = 0; im < Am && pm < mm.length;) xm = Em * im, mm[pm] = am[Dm].x + xm * Tm.x, mm[pm + 1] = am[Dm].y + xm * Tm.y, mm[pm + 2] = am[Dm].z + xm * Tm.z, mm[pm + 3] = am[Dm].x + (xm + Om) * Tm.x, mm[pm + 4] = am[Dm].y + (xm + Om) * Tm.y, mm[pm + 5] = am[Dm].z + (xm + Om) * Tm.z, pm += 6, im++;
          for (; pm < mm.length;) mm[pm] = am[Dm].x, mm[pm + 1] = am[Dm].y, mm[pm + 2] = am[Dm].z, pm += 3
        };
        return (Tm.dashNb || Tm.dashSize || Tm.gapSize || Tm.useVertexAlpha || Tm.material) && Dm.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), wm.updateMeshPositions(mm, !1), wm
      }
      const Em = new xm.e(mm, fm, null, void 0, void 0, void 0, Tm.useVertexAlpha, Tm.material);
      return Rm(Tm).applyToMesh(Em, Tm.updatable), Em._creationDataStorage = new Am.i, Em._creationDataStorage.dashSize = pm, Em._creationDataStorage.gapSize = im, Em
    }
    let Om = !1;
    Om || (Om = !0, am.c.CreateLineSystem = im, am.c.CreateDashedLines = Rm, Am.d.CreateLines = function(mm, Tm) {
      return Em(mm, {
        points: Tm,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Am.d.CreateDashedLines = function(mm, Tm, fm, hm, Am) {
      return om(mm, {
        points: Tm,
        dashSize: fm,
        gapSize: hm,
        dashNb: Am,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40565: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Em,
      i: () => Ym
    });
    var hm, Am, am = fm(37336),
      xm = fm(40251),
      wm = fm(40513),
      Dm = fm(40574),
      im = fm(40383),
      Rm = fm(40577),
      pm = fm(39993);
    class Em extends wm.d {
      _isShaderMaterial(mm) {
        return !!mm && "ShaderMaterial" === mm.getClassName()
      }
      constructor(mm) {
        let Tm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          hm = arguments.length > 5 ? arguments[5] : void 0,
          Am = arguments.length > 6 ? arguments[6] : void 0,
          wm = arguments.length > 7 ? arguments[7] : void 0;
        super(mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Tm, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = hm, this.useVertexAlpha = Am, this.color = new am.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Tm && (this.color = Tm.color.clone(), this.alpha = Tm.alpha, this.useVertexColor = Tm.useVertexColor, this.useVertexAlpha = Tm.useVertexAlpha), this.intersectionThreshold = .1;
        const Dm = {
          attributes: [xm.m.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Dm.defines.push("#define VERTEXALPHA") : Dm.needAlphaBlending = !1, this.useVertexColor ? (Dm.defines.push("#define VERTEXCOLOR"), Dm.attributes.push(xm.m.ColorKind)) : (Dm.uniforms.push("color"), this._color4 = new am.c), wm) this.material = wm;
        else {
          this.wG().dO().isWebGPU && !Em.ForceGLSL && (this._shaderLanguage = 1), Dm.shaderLanguage = this._shaderLanguage, Dm.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([fm.e(344).then((() => fm(42593))), fm.e(350).then((() => fm(42600)))]) : await Promise.all([fm.e(326).then((() => fm(42606))), fm.e(332).then((() => fm(42615)))])
          };
          const mm = new Rm.n("colorShader", this.wG(), "color", Dm, !1);
          mm.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(mm)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(mm) {
        const Tm = this.material;
        if (Tm === mm) return;
        const fm = Tm && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(mm), fm && Tm?.dispose()
      }
      _setInternalMaterial(mm) {
        this._setMaterial(mm), this.material && (this.material.fillMode = im.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(mm) {}
      _bind(mm, Tm) {
        if (!this._geometry) return this;
        const fm = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Tm, fm) : this._geometry._bind(Tm, fm, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: mm,
            g: Tm,
            b: fm
          } = this.color;
          this._color4.set(mm, Tm, fm, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(mm, Tm, fm) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const hm = this.wG().dO();
        return this._unIndexed ? hm.drawArraysType(im.d.LineListDrawMode, mm.verticesStart, mm.verticesCount, fm) : hm.drawElementsType(im.d.LineListDrawMode, mm.indexStart, mm.indexCount, fm), this
      }
      dispose(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Tm) && this.material?.dispose(!1, !1, !0), super.dispose(mm)
      }
      clone(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        if (Tm && void 0 === Tm._addToSceneRootNodes) {
          const fm = Tm;
          return fm.source = this, new Em(mm, this.wG(), fm.parent, fm.source, fm.doNotCloneChildren)
        }
        return new Em(mm, this.wG(), Tm, this, fm)
      }
      createInstance(mm) {
        const Tm = new om(mm, this);
        if (this.RP) {
          Tm.RP = {};
          for (const mm in this.RP) Tm.RP[mm] = this.RP[mm]
        }
        return Tm
      }
      serialize(mm) {
        super.serialize(mm), mm.color = this.color.ahm(), mm.alpha = this.alpha
      }
      static Parse(mm, Tm) {
        const fm = new Em(mm.name, Tm);
        return fm.color = am.b.FromArray(mm.color), fm.alpha = mm.alpha, fm
      }
    }
    Em.ForceGLSL = !1;
    class om extends Dm.b {
      constructor(mm, Tm) {
        super(mm, Tm), this.intersectionThreshold = Tm.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Om = !1;

    function Ym() {
      Om || (Om = !0, wm.d._LinesMeshParser = (mm, Tm) => Em.Parse(mm, Tm))
    }(hm = Em.prototype).enableEdgesRendering ?? (hm.enableEdgesRendering = (0, pm.f)("LinesMesh", "enableEdgesRendering")), (Am = om.prototype).enableEdgesRendering ?? (Am.enableEdgesRendering = (0, pm.f)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38764: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(38766);
    const Am = (mm, Tm, fm) => mm ? mm.getClassName && "Mesh" === mm.getClassName() ? null : !mm.getClassName || "SubMesh" !== mm.getClassName() && "PhysicsBody" !== mm.getClassName() ? mm.clone ? mm.clone() : Array.isArray(mm) ? mm.slice() : fm && "object" === typeof mm ? {
      ...mm
    } : null : mm.clone(Tm) : null;
    class am {
      static DeepCopy(mm, Tm, fm, am) {
        let xm = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const wm = function(mm) {
          const Tm = [];
          do {
            const fm = Object.getOwnPropertyNames(mm);
            for (const mm of fm) - 1 === Tm.indexOf(mm) && Tm.push(mm)
          } while (mm = Object.getPrototypeOf(mm));
          return Tm
        }(mm);
        for (const im of wm) {
          if ("_" === im[0] && (!am || -1 === am.indexOf(im))) continue;
          if (im.endsWith("Observable")) continue;
          if (fm && -1 !== fm.indexOf(im)) continue;
          const wm = mm[im],
            Rm = typeof wm;
          if ("function" !== Rm) try {
            if ("object" === Rm)
              if (wm instanceof Uint8Array) Tm[im] = Uint8Array.from(wm);
              else if (wm instanceof Array) {
              if (Tm[im] = [], wm.length > 0)
                if ("object" == typeof wm[0])
                  for (let mm = 0; mm < wm.length; mm++) {
                    const fm = Am(wm[mm], Tm, xm); - 1 === Tm[im].indexOf(fm) && Tm[im].push(fm)
                  } else Tm[im] = wm.slice(0)
            } else Tm[im] = Am(wm, Tm, xm);
            else Tm[im] = wm
          } catch (Dm) {
            hm.b.Warn(Dm.message)
          }
        }
      }
    }
  },
  37970: (mm, Tm, fm) => {
    function hm() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (mm => {
        const Tm = 16 * Math.random() | 0;
        return ("x" === mm ? Tm : 3 & Tm | 8).toString(16)
      }))
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  38766: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      static _CheckLimit(mm, Tm) {
        let fm = hm._LogLimitOutputs[mm];
        return fm ? fm.current++ : (fm = {
          limit: Tm,
          current: 1
        }, hm._LogLimitOutputs[mm] = fm), fm.current <= fm.limit
      }
      static _GenerateLimitMessage(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const fm = hm._LogLimitOutputs[mm];
        if (!fm || !hm.MessageLimitReached) return;
        const Am = this._Levels[Tm];
        fm.current === fm.limit && hm[Am.name](hm.MessageLimitReached.replace(/%LIMIT%/g, "" + fm.limit).replace(/%TYPE%/g, Am.name ?? ""))
      }
      static _AddLogEntry(mm) {
        hm._LogCache = mm + hm._LogCache, hm.OnNewCacheEntry && hm.OnNewCacheEntry(mm)
      }
      static _FormatMessage(mm) {
        const Tm = mm => mm < 10 ? "0" + mm : "" + mm,
          fm = new Date;
        return "[" + Tm(fm.getHours()) + ":" + Tm(fm.getMinutes()) + ":" + Tm(fm.getSeconds()) + "]: " + mm
      }
      static _LogDisabled(mm, Tm) {}
      static _LogEnabled() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const Am = Array.isArray(Tm) ? Tm[0] : Tm;
        if (void 0 !== fm && !hm._CheckLimit(Am, fm)) return;
        const am = hm._FormatMessage(Am),
          xm = this._Levels[mm],
          wm = Array.isArray(Tm) ? Tm.slice(1) : [];
        xm.logFunc && xm.logFunc("BJS - " + am, ...wm);
        const Dm = `<div style='color:${xm.color}'>${am}</div><br>`;
        hm._AddLogEntry(Dm), hm._GenerateLimitMessage(Am, mm)
      }
      static get LogCache() {
        return hm._LogCache
      }
      static ClearLogCache() {
        hm._LogCache = "", hm._LogLimitOutputs = {}, hm.errorsCount = 0
      }
      static set LogLevels(mm) {
        hm.Log = hm._LogDisabled, hm.Warn = hm._LogDisabled, hm.Error = hm._LogDisabled;
        const Tm = [hm.MessageLogLevel, hm.WarningLogLevel, hm.ErrorLogLevel];
        for (const fm of Tm)
          if ((mm & fm) === fm) {
            const mm = this._Levels[fm];
            hm[mm.name] = hm._LogEnabled.bind(hm, fm)
          }
      }
    }
    hm.NoneLogLevel = 0, hm.MessageLogLevel = 1, hm.WarningLogLevel = 2, hm.ErrorLogLevel = 4, hm.AllLogLevel = 7, hm.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hm._LogCache = "", hm._LogLimitOutputs = {}, hm._Levels = [{}, {
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
    }], hm.errorsCount = 0, hm.Log = hm._LogEnabled.bind(hm, hm.MessageLogLevel), hm.Warn = hm._LogEnabled.bind(hm, hm.WarningLogLevel), hm.Error = hm._LogEnabled.bind(hm, hm.ErrorLogLevel)
  },
  40196: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm.f
    });
    var hm = fm(40199);
    (0, hm.e)()
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);