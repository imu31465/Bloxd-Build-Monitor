export const id = 234;
export const ids = [234, 241, 244];
export const modules = {
  40431: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      g: () => dt
    });
    var Ot = Vt(38899),
      qt = Vt(40230),
      Dt = Vt(40409),
      mt = {};
    class dt {
      constructor(tt) {
        this.attachedToElement = !1, this.attached = {}, this.camera = tt, this.checkInputs = () => {}
      }
      add(tt) {
        const et = tt.getSimpleName();
        this.attached[et] ? Ot.d.Warn("camera input of type " + et + " already exists on camera") : (this.attached[et] = tt, tt.camera = this.camera, tt.checkInputs && (this.checkInputs = this._addCheckInputs(tt.checkInputs.bind(tt))), this.attachedToElement && tt.attachControl(this.noPreventDefault))
      }
      remove(tt) {
        for (const et in this.attached) {
          const Vt = this.attached[et];
          if (Vt === tt) return Vt.detachControl(), Vt.camera = null, delete this.attached[et], void this.rebuildInputCheck()
        }
      }
      removeByType(tt) {
        for (const et in this.attached) {
          const Vt = this.attached[et];
          Vt.getClassName() === tt && (Vt.detachControl(), Vt.camera = null, delete this.attached[et], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(tt) {
        const et = this.checkInputs;
        return () => {
          et(), tt()
        }
      }
      attachInput(tt) {
        this.attachedToElement && tt.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          tt = !Dt.c.ForceAttachControlToAlwaysPreventDefault && tt, this.attachedToElement = !0, this.noPreventDefault = tt;
          for (const et in this.attached) this.attached[et].attachControl(tt)
        }
      }
      detachElement() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const et in this.attached) this.attached[et].detachControl(), tt && (this.attached[et].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const tt in this.attached) {
          const et = this.attached[tt];
          et.checkInputs && (this.checkInputs = this._addCheckInputs(et.checkInputs.bind(et)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(tt) {
        const et = {};
        for (const Vt in this.attached) {
          const tt = this.attached[Vt],
            Ot = qt.d.Serialize(tt);
          et[tt.getClassName()] = Ot
        }
        tt.inputsmgr = et
      }
      parse(tt) {
        const et = tt.inputsmgr;
        if (et) {
          this.clear();
          for (const tt in et) {
            const Vt = mt[tt];
            if (Vt) {
              const Ot = et[tt],
                Dt = qt.d.Parse((() => new Vt), Ot, null);
              this.add(Dt)
            }
          }
        } else
          for (const Vt in this.attached) {
            const et = mt[this.attached[Vt].getClassName()];
            if (et) {
              const Ot = qt.d.Parse((() => new et), tt, null);
              this.remove(this.attached[Vt]), this.add(Ot)
            }
          }
      }
    }
  },
  40433: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot.b
    });
    var Ot = Vt(40438);
    (0, Ot.f)()
  },
  40438: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Xt,
      f: () => lt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(37336),
      mt = Vt(37513),
      dt = Vt(40445),
      jt = Vt(40415),
      Ht = Vt(37390);
    let Xt = (() => {
        var tt;
        let et, Vt, jt = dt.e,
          Ht = [],
          Xt = [],
          Qt = [],
          lt = [];
        return tt = class extends jt {
          constructor(tt, et, Vt, qt) {
            super(tt, Vt, qt), this.groundColor = (0, Ot.m)(this, Ht, new mt.b(0, 0, 0)), this.direction = ((0, Ot.m)(this, Xt), (0, Ot.m)(this, Qt, void 0)), (0, Ot.m)(this, lt), this.direction = et || Dt.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(tt) {
            return this.direction = Dt.n.Normalize(tt.subtract(Dt.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(tt, et) {
            const Vt = Dt.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Vt.x, Vt.y, Vt.z, 0, et), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), et), this
          }
          transferToNodeMaterialEffect(tt, et) {
            const Vt = Dt.n.Normalize(this.direction);
            return tt.setFloat3(et, Vt.x, Vt.y, Vt.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Dt.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return dt.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(tt, et) {
            tt["HEMILIGHT" + et] = !0
          }
        }, (() => {
          const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(jt[Symbol.metadata] ?? null) : void 0;
          et = [(0, qt.t)()], Vt = [(0, qt.M)()], (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "groundColor" in tt,
              get: tt => tt.groundColor,
              set: (tt, et) => {
                tt.groundColor = et
              }
            },
            metadata: Dt
          }, Ht, Xt), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: tt => "direction" in tt,
              get: tt => tt.direction,
              set: (tt, et) => {
                tt.direction = et
              }
            },
            metadata: Dt
          }, Qt, lt), Dt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dt
          })
        })(), tt
      })(),
      Qt = !1;

    function lt() {
      Qt || (Qt = !0, jt.d.AddNodeConstructor("Light_Type_3", ((tt, et) => () => new Xt(tt, Dt.n.Zero(), et))), (0, Ht.i)("BABYLON.HemisphericLight", Xt))
    }
  },
  37510: (tt, et, Vt) => {
    Vt.d(et, {
      Color3: () => Ot.b,
      e: () => Ot.c
    });
    var Ot = Vt(37513);
    (0, Ot.e)()
  },
  38009: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(38016);
    class qt {
      static GetPlanes(tt) {
        const et = [];
        for (let Vt = 0; Vt < 6; Vt++) et.push(new Ot.b(0, 0, 0, 0));
        return qt.GetPlanesToRef(tt, et), et
      }
      static GetNearPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[2], et.normal.y = Vt[7] + Vt[6], et.normal.z = Vt[11] + Vt[10], et.d = Vt[15] + Vt[14], et.normalize()
      }
      static GetFarPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[2], et.normal.y = Vt[7] - Vt[6], et.normal.z = Vt[11] - Vt[10], et.d = Vt[15] - Vt[14], et.normalize()
      }
      static GetLeftPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[0], et.normal.y = Vt[7] + Vt[4], et.normal.z = Vt[11] + Vt[8], et.d = Vt[15] + Vt[12], et.normalize()
      }
      static GetRightPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[0], et.normal.y = Vt[7] - Vt[4], et.normal.z = Vt[11] - Vt[8], et.d = Vt[15] - Vt[12], et.normalize()
      }
      static GetTopPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[1], et.normal.y = Vt[7] - Vt[5], et.normal.z = Vt[11] - Vt[9], et.d = Vt[15] - Vt[13], et.normalize()
      }
      static GetBottomPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[1], et.normal.y = Vt[7] + Vt[5], et.normal.z = Vt[11] + Vt[9], et.d = Vt[15] + Vt[13], et.normalize()
      }
      static GetPlanesToRef(tt, et) {
        qt.GetNearPlaneToRef(tt, et[0]), qt.GetFarPlaneToRef(tt, et[1]), qt.GetLeftPlaneToRef(tt, et[2]), qt.GetRightPlaneToRef(tt, et[3]), qt.GetTopPlaneToRef(tt, et[4]), qt.GetBottomPlaneToRef(tt, et[5])
      }
      static IsPointInFrustum(tt, et) {
        for (let Vt = 0; Vt < 6; Vt++)
          if (et[Vt].dotCoordinate(tt) < 0) return !1;
        return !0
      }
    }
  },
  38016: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = Vt(37336);
    class qt {
      constructor(tt, et, Vt, qt) {
        this.normal = new Ot.n(tt, et, Vt), this.d = qt
      }
      GOt() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new qt(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let tt = this.normal.getHashCode();
        return tt = 397 * tt ^ this.d, tt
      }
      normalize() {
        const tt = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let et = 0;
        return 0 !== tt && (et = 1 / tt), this.normal.x *= et, this.normal.y *= et, this.normal.z *= et, this.d *= et, this
      }
      transform(tt) {
        const et = qt._TmpMatrix;
        tt.invertToRef(et);
        const Vt = et.m,
          Ot = this.normal.x,
          Dt = this.normal.y,
          mt = this.normal.z,
          dt = this.d,
          jt = Ot * Vt[0] + Dt * Vt[1] + mt * Vt[2] + dt * Vt[3],
          Ht = Ot * Vt[4] + Dt * Vt[5] + mt * Vt[6] + dt * Vt[7],
          Xt = Ot * Vt[8] + Dt * Vt[9] + mt * Vt[10] + dt * Vt[11],
          Qt = Ot * Vt[12] + Dt * Vt[13] + mt * Vt[14] + dt * Vt[15];
        return new qt(jt, Ht, Xt, Qt)
      }
      dotCoordinate(tt) {
        return this.normal.x * tt.x + this.normal.y * tt.y + this.normal.z * tt.z + this.d
      }
      copyFromPoints(tt, et, Vt) {
        const Ot = et.x - tt.x,
          qt = et.y - tt.y,
          Dt = et.z - tt.z,
          mt = Vt.x - tt.x,
          dt = Vt.y - tt.y,
          jt = Vt.z - tt.z,
          Ht = qt * jt - Dt * dt,
          Xt = Dt * mt - Ot * jt,
          Qt = Ot * dt - qt * mt,
          lt = Math.sqrt(Ht * Ht + Xt * Xt + Qt * Qt);
        let Et;
        return Et = 0 !== lt ? 1 / lt : 0, this.normal.x = Ht * Et, this.normal.y = Xt * Et, this.normal.z = Qt * Et, this.d = -(this.normal.x * tt.x + this.normal.y * tt.y + this.normal.z * tt.z), this
      }
      isFrontFacingTo(tt, et) {
        return Ot.n.Dot(this.normal, tt) <= et
      }
      signedDistanceTo(tt) {
        return Ot.n.Dot(tt, this.normal) + this.d
      }
      static FromArray(tt) {
        return new qt(tt[0], tt[1], tt[2], tt[3])
      }
      static FromPoints(tt, et, Vt) {
        const Ot = new qt(0, 0, 0, 0);
        return Ot.copyFromPoints(tt, et, Vt), Ot
      }
      static FromPositionAndNormal(tt, et) {
        const Vt = new qt(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(tt, et, Vt)
      }
      static FromPositionAndNormalToRef(tt, et, Vt) {
        return Vt.normal.rK(et), Vt.normal.normalize(), Vt.d = -tt.dot(Vt.normal), Vt
      }
      static SignedDistanceToPlaneFromPositionAndNormal(tt, et, Vt) {
        const qt = -(et.x * tt.x + et.y * tt.y + et.z * tt.z);
        return Ot.n.Dot(Vt, et) + qt
      }
    }
    qt._TmpMatrix = Ot.c.Identity()
  },
  37331: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      Matrix: () => Ot.c,
      Quaternion: () => Ot.e,
      RegisterMathVector: () => Ot.h,
      TmpVectors: () => Ot.k,
      Vector2: () => Ot.m,
      uf: () => Ot.n,
      Vector4: () => Ot.r
    });
    var Ot = Vt(37336);
    (0, Ot.h)()
  },
  38340: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    class Ot {
      constructor(tt, et, Vt, Ot) {
        this.x = tt, this.y = et, this.width = Vt, this.height = Ot
      }
      toGlobal(tt, et) {
        return new Ot(this.x * tt, this.y * et, this.width * tt, this.height * et)
      }
      toGlobalToRef(tt, et, Vt) {
        return Vt.x = this.x * tt, Vt.y = this.y * et, Vt.width = this.width * tt, Vt.height = this.height * et, this
      }
      clone() {
        return new Ot(this.x, this.y, this.width, this.height)
      }
    }
  },
  40595: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht
    });
    var Ot = Vt(37336),
      qt = Vt(37513),
      Dt = Vt(40601),
      mt = Vt(40608),
      dt = Vt(40628);

    function jt(tt) {
      let et = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const Vt = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Dt = [],
        jt = tt.width || tt.size || 1,
        Ht = tt.height || tt.size || 1,
        Xt = tt.depth || tt.size || 1,
        Qt = tt.wrap || !1;
      let lt = void 0 === tt.topBaseAt ? 1 : tt.topBaseAt,
        Et = void 0 === tt.bottomBaseAt ? 0 : tt.bottomBaseAt;
      lt = (lt + 4) % 4, Et = (Et + 4) % 4;
      let ft = [2, 0, 3, 1][lt],
        wt = [2, 0, 1, 3][Et],
        yt = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Qt) {
        et = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], yt = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let tt = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          Vt = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Ot = [17, 18, 19, 16],
          qt = [22, 23, 20, 21];
        for (; ft > 0;) tt.unshift(tt.pop()), Ot.unshift(Ot.pop()), ft--;
        for (; wt > 0;) Vt.unshift(Vt.pop()), qt.unshift(qt.pop()), wt--;
        tt = tt.flat(), Vt = Vt.flat(), yt = yt.concat(tt).concat(Vt), et.push(Ot[0], Ot[2], Ot[3], Ot[0], Ot[1], Ot[2]), et.push(qt[0], qt[2], qt[3], qt[0], qt[1], qt[2])
      }
      const Nt = [jt / 2, Ht / 2, Xt / 2],
        Mt = yt.reduce(((tt, et, Vt) => tt.concat(et * Nt[Vt % 3])), []),
        bt = 0 === tt.sideOrientation ? 0 : tt.sideOrientation || mt.d.DEFAULTSIDE,
        Jt = tt.faceUV || new Array(6),
        Ct = tt.faceColors,
        ut = [];
      for (let mt = 0; mt < 6; mt++) void 0 === Jt[mt] && (Jt[mt] = new Ot.r(0, 0, 1, 1)), Ct && void 0 === Ct[mt] && (Ct[mt] = new qt.c(1, 1, 1, 1));
      for (let Ot = 0; Ot < 6; Ot++)
        if (Dt.push(Jt[Ot].z, dt.b ? 1 - Jt[Ot].w : Jt[Ot].w), Dt.push(Jt[Ot].x, dt.b ? 1 - Jt[Ot].w : Jt[Ot].w), Dt.push(Jt[Ot].x, dt.b ? 1 - Jt[Ot].y : Jt[Ot].y), Dt.push(Jt[Ot].z, dt.b ? 1 - Jt[Ot].y : Jt[Ot].y), Ct)
          for (let tt = 0; tt < 4; tt++) ut.push(Ct[Ot].r, Ct[Ot].g, Ct[Ot].b, Ct[Ot].a);
      mt.d._ComputeSides(bt, Mt, et, Vt, Dt, tt.frontUVs, tt.backUVs);
      const Kt = new mt.d;
      if (Kt.indices = et, Kt.positions = Mt, Kt.normals = Vt, Kt.uvs = Dt, Ct) {
        const tt = bt === mt.d.DOUBLESIDE ? ut.concat(ut) : ut;
        Kt.colors = tt
      }
      return Kt
    }

    function Ht(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Ot = new Dt.d(tt, Vt);
      et.sideOrientation = Dt.d._GetDefaultSideOrientation(et.sideOrientation), Ot._originalBuilderSideOrientation = et.sideOrientation;
      return jt(et).applyToMesh(Ot, et.updatable), Ot
    }
    let Xt = !1;
    Xt || (Xt = !0, mt.d.CreateBox = jt, Dt.d.CreateBox = function(tt, et) {
      return Ht(tt, {
        size: et,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40644: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt
    });
    var Ot = Vt(37336),
      qt = Vt(40601),
      Dt = Vt(40608),
      mt = Vt(40650),
      dt = Vt(40343),
      jt = Vt(38899);

    function Ht(tt) {
      const et = [],
        Vt = [],
        Ot = tt.lines,
        qt = tt.colors,
        mt = [];
      let dt = 0;
      for (let Dt = 0; Dt < Ot.length; Dt++) {
        const tt = Ot[Dt];
        for (let Ot = 0; Ot < tt.length; Ot++) {
          const {
            x: jt,
            y: Ht,
            z: Xt
          } = tt[Ot];
          if (Vt.push(jt, Ht, Xt), qt) {
            const tt = qt[Dt],
              {
                r: et,
                g: Vt,
                b: dt,
                a: jt
              } = tt[Ot];
            mt.push(et, Vt, dt, jt)
          }
          Ot > 0 && (et.push(dt - 1), et.push(dt)), dt++
        }
      }
      const jt = new Dt.d;
      return jt.indices = et, jt.positions = Vt, qt && (jt.colors = mt), jt
    }

    function Xt(tt) {
      const et = tt.dashSize || 3,
        Vt = tt.gapSize || 1,
        qt = tt.dashNb || 200,
        mt = tt.points,
        dt = [],
        jt = [],
        Ht = Ot.n.Zero();
      let Xt, Qt, lt, Et = 0,
        ft = 0;
      for (lt = 0; lt < mt.length - 1; lt++) mt[lt + 1].subtractToRef(mt[lt], Ht), Et += Ht.length();
      const wt = Et / qt,
        yt = et * wt / (et + Vt);
      for (lt = 0; lt < mt.length - 1; lt++) {
        mt[lt + 1].subtractToRef(mt[lt], Ht), Xt = Math.floor(Ht.length() / wt), Ht.normalize();
        for (let tt = 0; tt < Xt; tt++) Qt = wt * tt, dt.push(mt[lt].x + Qt * Ht.x, mt[lt].y + Qt * Ht.y, mt[lt].z + Qt * Ht.z), dt.push(mt[lt].x + (Qt + yt) * Ht.x, mt[lt].y + (Qt + yt) * Ht.y, mt[lt].z + (Qt + yt) * Ht.z), jt.push(ft, ft + 1), ft += 2
      }
      const Nt = new Dt.d;
      return Nt.positions = dt, Nt.indices = jt, Nt
    }

    function Qt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Ot = et.instance,
        qt = et.lines,
        Dt = et.colors;
      if (Ot) {
        const tt = Ot.getVerticesData(dt.m.PositionKind);
        let et, Vt;
        Dt && (et = Ot.getVerticesData(dt.m.ColorKind));
        let mt = 0,
          jt = 0;
        for (let Ot = 0; Ot < qt.length; Ot++) {
          const dt = qt[Ot];
          for (let qt = 0; qt < dt.length; qt++) tt[mt] = dt[qt].x, tt[mt + 1] = dt[qt].y, tt[mt + 2] = dt[qt].z, Dt && et && (Vt = Dt[Ot], et[jt] = Vt[qt].r, et[jt + 1] = Vt[qt].g, et[jt + 2] = Vt[qt].b, et[jt + 3] = Vt[qt].a, jt += 4), mt += 3
        }
        return Ot.updateVerticesData(dt.m.PositionKind, tt, !1, !1), Dt && et && Ot.updateVerticesData(dt.m.ColorKind, et, !1, !1), Ot.refreshBoundingInfo(), Ot
      }
      const jt = !!Dt,
        Xt = new mt.b(tt, Vt, null, void 0, void 0, jt, et.useVertexAlpha, et.material);
      return Ht(et).applyToMesh(Xt, et.updatable), Xt
    }

    function lt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Ot = et.colors ? [et.colors] : null;
      return Qt(tt, {
        lines: [et.points],
        updatable: et.updatable,
        instance: et.instance,
        colors: Ot,
        useVertexAlpha: et.useVertexAlpha,
        material: et.material
      }, Vt)
    }

    function Et(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Dt = et.points,
        dt = et.instance,
        Ht = et.gapSize || 1,
        Qt = et.dashSize || 3;
      if (dt) {
        const tt = tt => {
          const et = Ot.n.Zero(),
            Vt = tt.length / 6;
          let qt, mt, jt, Ht, Xt = 0,
            Qt = 0;
          for (jt = 0; jt < Dt.length - 1; jt++) Dt[jt + 1].subtractToRef(Dt[jt], et), Xt += et.length();
          const lt = Xt / Vt,
            Et = dt._creationDataStorage.dashSize,
            ft = Et * lt / (Et + dt._creationDataStorage.gapSize);
          for (jt = 0; jt < Dt.length - 1; jt++)
            for (Dt[jt + 1].subtractToRef(Dt[jt], et), qt = Math.floor(et.length() / lt), et.normalize(), Ht = 0; Ht < qt && Qt < tt.length;) mt = lt * Ht, tt[Qt] = Dt[jt].x + mt * et.x, tt[Qt + 1] = Dt[jt].y + mt * et.y, tt[Qt + 2] = Dt[jt].z + mt * et.z, tt[Qt + 3] = Dt[jt].x + (mt + ft) * et.x, tt[Qt + 4] = Dt[jt].y + (mt + ft) * et.y, tt[Qt + 5] = Dt[jt].z + (mt + ft) * et.z, Qt += 6, Ht++;
          for (; Qt < tt.length;) tt[Qt] = Dt[jt].x, tt[Qt + 1] = Dt[jt].y, tt[Qt + 2] = Dt[jt].z, Qt += 3
        };
        return (et.dashNb || et.dashSize || et.gapSize || et.useVertexAlpha || et.material) && jt.d.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), dt.updateMeshPositions(tt, !1), dt
      }
      const lt = new mt.b(tt, Vt, null, void 0, void 0, void 0, et.useVertexAlpha, et.material);
      return Xt(et).applyToMesh(lt, et.updatable), lt._creationDataStorage = new qt.k, lt._creationDataStorage.dashSize = Qt, lt._creationDataStorage.gapSize = Ht, lt
    }
    let ft = !1;
    ft || (ft = !0, Dt.d.CreateLineSystem = Ht, Dt.d.CreateDashedLines = Xt, qt.d.CreateLines = function(tt, et) {
      return lt(tt, {
        points: et,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, qt.d.CreateDashedLines = function(tt, et, Vt, Ot, qt) {
      return Et(tt, {
        points: et,
        dashSize: Vt,
        gapSize: Ot,
        dashNb: qt,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40650: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt,
      e: () => wt
    });
    var Ot, qt, Dt = Vt(37513),
      mt = Vt(40343),
      dt = Vt(40601),
      jt = Vt(40656),
      Ht = Vt(40474),
      Xt = Vt(40659),
      Qt = Vt(40080);
    class lt extends dt.d {
      _isShaderMaterial(tt) {
        return !!tt && "ShaderMaterial" === tt.getClassName()
      }
      constructor(tt) {
        let et = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ot = arguments.length > 5 ? arguments[5] : void 0,
          qt = arguments.length > 6 ? arguments[6] : void 0,
          dt = arguments.length > 7 ? arguments[7] : void 0;
        super(tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, et, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Ot, this.useVertexAlpha = qt, this.color = new Dt.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, et && (this.color = et.color.clone(), this.alpha = et.alpha, this.useVertexColor = et.useVertexColor, this.useVertexAlpha = et.useVertexAlpha), this.intersectionThreshold = .1;
        const jt = {
          attributes: [mt.m.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? jt.defines.push("#define VERTEXALPHA") : jt.needAlphaBlending = !1, this.useVertexColor ? (jt.defines.push("#define VERTEXCOLOR"), jt.attributes.push(mt.m.ColorKind)) : (jt.uniforms.push("color"), this._color4 = new Dt.c), dt) this.material = dt;
        else {
          this.vI().Jf().isWebGPU && !lt.ForceGLSL && (this._shaderLanguage = 1), jt.shaderLanguage = this._shaderLanguage, jt.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Vt.e(349).then((() => Vt(42798))), Vt.e(355).then((() => Vt(42805)))]) : await Promise.all([Vt.e(331).then((() => Vt(42814))), Vt.e(337).then((() => Vt(42818)))])
          };
          const tt = new Xt.o("colorShader", this.vI(), "color", jt, !1);
          tt.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(tt)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(tt) {
        const et = this.material;
        if (et === tt) return;
        const Vt = et && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(tt), Vt && et?.dispose()
      }
      _setInternalMaterial(tt) {
        this._setMaterial(tt), this.material && (this.material.fillMode = Ht.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(tt) {}
      _bind(tt, et) {
        if (!this._geometry) return this;
        const Vt = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(et, Vt) : this._geometry._bind(et, Vt, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: tt,
            g: et,
            b: Vt
          } = this.color;
          this._color4.set(tt, et, Vt, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(tt, et, Vt) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Ot = this.vI().Jf();
        return this._unIndexed ? Ot.drawArraysType(Ht.c.LineListDrawMode, tt.verticesStart, tt.verticesCount, Vt) : Ot.drawElementsType(Ht.c.LineListDrawMode, tt.indexStart, tt.indexCount, Vt), this
      }
      dispose(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || et) && this.material?.dispose(!1, !1, !0), super.dispose(tt)
      }
      clone(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        if (et && void 0 === et._addToSceneRootNodes) {
          const Vt = et;
          return Vt.source = this, new lt(tt, this.vI(), Vt.parent, Vt.source, Vt.doNotCloneChildren)
        }
        return new lt(tt, this.vI(), et, this, Vt)
      }
      createInstance(tt) {
        const et = new Et(tt, this);
        if (this.qL) {
          et.qL = {};
          for (const tt in this.qL) et.qL[tt] = this.qL[tt]
        }
        return et
      }
      serialize(tt) {
        super.serialize(tt), tt.color = this.color.GOt(), tt.alpha = this.alpha
      }
      static Parse(tt, et) {
        const Vt = new lt(tt.name, et);
        return Vt.color = Dt.b.FromArray(tt.color), Vt.alpha = tt.alpha, Vt
      }
    }
    lt.ForceGLSL = !1;
    class Et extends jt.b {
      constructor(tt, et) {
        super(tt, et), this.intersectionThreshold = et.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let ft = !1;

    function wt() {
      ft || (ft = !0, dt.d._LinesMeshParser = (tt, et) => lt.Parse(tt, et))
    }(Ot = lt.prototype).enableEdgesRendering ?? (Ot.enableEdgesRendering = (0, Qt.d)("LinesMesh", "enableEdgesRendering")), (qt = Et.prototype).enableEdgesRendering ?? (qt.enableEdgesRendering = (0, Qt.d)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38897: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt
    });
    var Ot = Vt(38899);
    const qt = (tt, et, Vt) => tt ? tt.getClassName && "Mesh" === tt.getClassName() ? null : !tt.getClassName || "SubMesh" !== tt.getClassName() && "PhysicsBody" !== tt.getClassName() ? tt.clone ? tt.clone() : Array.isArray(tt) ? tt.slice() : Vt && "object" === typeof tt ? {
      ...tt
    } : null : tt.clone(et) : null;
    class Dt {
      static DeepCopy(tt, et, Vt, Dt) {
        let mt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const dt = function(tt) {
          const et = [];
          do {
            const Vt = Object.getOwnPropertyNames(tt);
            for (const tt of Vt) - 1 === et.indexOf(tt) && et.push(tt)
          } while (tt = Object.getPrototypeOf(tt));
          return et
        }(tt);
        for (const Ht of dt) {
          if ("_" === Ht[0] && (!Dt || -1 === Dt.indexOf(Ht))) continue;
          if (Ht.endsWith("Observable")) continue;
          if (Vt && -1 !== Vt.indexOf(Ht)) continue;
          const dt = tt[Ht],
            Xt = typeof dt;
          if ("function" !== Xt) try {
            if ("object" === Xt)
              if (dt instanceof Uint8Array) et[Ht] = Uint8Array.from(dt);
              else if (dt instanceof Array) {
              if (et[Ht] = [], dt.length > 0)
                if ("object" == typeof dt[0])
                  for (let tt = 0; tt < dt.length; tt++) {
                    const Vt = qt(dt[tt], et, mt); - 1 === et[Ht].indexOf(Vt) && et[Ht].push(Vt)
                  } else et[Ht] = dt.slice(0)
            } else et[Ht] = qt(dt, et, mt);
            else et[Ht] = dt
          } catch (jt) {
            Ot.d.Warn(jt.message)
          }
        }
      }
    }
  },
  38159: (tt, et, Vt) => {
    function Ot() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (tt => {
        const et = 16 * Math.random() | 0;
        return ("x" === tt ? et : 3 & et | 8).toString(16)
      }))
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  38899: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    class Ot {
      static _CheckLimit(tt, et) {
        let Vt = Ot._LogLimitOutputs[tt];
        return Vt ? Vt.current++ : (Vt = {
          limit: et,
          current: 1
        }, Ot._LogLimitOutputs[tt] = Vt), Vt.current <= Vt.limit
      }
      static _GenerateLimitMessage(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Vt = Ot._LogLimitOutputs[tt];
        if (!Vt || !Ot.MessageLimitReached) return;
        const qt = this._Levels[et];
        Vt.current === Vt.limit && Ot[qt.name](Ot.MessageLimitReached.replace(/%LIMIT%/g, "" + Vt.limit).replace(/%TYPE%/g, qt.name ?? ""))
      }
      static _AddLogEntry(tt) {
        Ot._LogCache = tt + Ot._LogCache, Ot.OnNewCacheEntry && Ot.OnNewCacheEntry(tt)
      }
      static _FormatMessage(tt) {
        const et = tt => tt < 10 ? "0" + tt : "" + tt,
          Vt = new Date;
        return "[" + et(Vt.getHours()) + ":" + et(Vt.getMinutes()) + ":" + et(Vt.getSeconds()) + "]: " + tt
      }
      static _LogDisabled(tt, et) {}
      static _LogEnabled() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const qt = Array.isArray(et) ? et[0] : et;
        if (void 0 !== Vt && !Ot._CheckLimit(qt, Vt)) return;
        const Dt = Ot._FormatMessage(qt),
          mt = this._Levels[tt],
          dt = Array.isArray(et) ? et.slice(1) : [];
        mt.logFunc && mt.logFunc("BJS - " + Dt, ...dt);
        const jt = `<div style='color:${mt.color}'>${Dt}</div><br>`;
        Ot._AddLogEntry(jt), Ot._GenerateLimitMessage(qt, tt)
      }
      static get LogCache() {
        return Ot._LogCache
      }
      static ClearLogCache() {
        Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot.errorsCount = 0
      }
      static set LogLevels(tt) {
        Ot.Log = Ot._LogDisabled, Ot.Warn = Ot._LogDisabled, Ot.Error = Ot._LogDisabled;
        const et = [Ot.MessageLogLevel, Ot.WarningLogLevel, Ot.ErrorLogLevel];
        for (const Vt of et)
          if ((tt & Vt) === Vt) {
            const tt = this._Levels[Vt];
            Ot[tt.name] = Ot._LogEnabled.bind(Ot, Vt)
          }
      }
    }
    Ot.NoneLogLevel = 0, Ot.MessageLogLevel = 1, Ot.WarningLogLevel = 2, Ot.ErrorLogLevel = 4, Ot.AllLogLevel = 7, Ot.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot._Levels = [{}, {
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
    }], Ot.errorsCount = 0, Ot.Log = Ot._LogEnabled.bind(Ot, Ot.MessageLogLevel), Ot.Warn = Ot._LogEnabled.bind(Ot, Ot.WarningLogLevel), Ot.Error = Ot._LogEnabled.bind(Ot, Ot.ErrorLogLevel)
  },
  40289: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot.d
    });
    var Ot = Vt(40296);
    (0, Ot.b)()
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);