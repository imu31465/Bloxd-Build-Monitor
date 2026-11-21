export const id = 224;
export const ids = [224, 230, 233];
export const modules = {
  40223: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      g: () => Zd
    });
    var pd = kd(38812),
      Nd = kd(39983),
      Wd = kd(40199),
      Pd = {};
    class Zd {
      constructor(dd) {
        this.attachedToElement = !1, this.attached = {}, this.camera = dd, this.checkInputs = () => {}
      }
      add(dd) {
        const Jd = dd.getSimpleName();
        this.attached[Jd] ? pd.c.Warn("camera input of type " + Jd + " already exists on camera") : (this.attached[Jd] = dd, dd.camera = this.camera, dd.checkInputs && (this.checkInputs = this._addCheckInputs(dd.checkInputs.bind(dd))), this.attachedToElement && dd.attachControl(this.noPreventDefault))
      }
      remove(dd) {
        for (const Jd in this.attached) {
          const kd = this.attached[Jd];
          if (kd === dd) return kd.detachControl(), kd.camera = null, delete this.attached[Jd], void this.rebuildInputCheck()
        }
      }
      removeByType(dd) {
        for (const Jd in this.attached) {
          const kd = this.attached[Jd];
          kd.getClassName() === dd && (kd.detachControl(), kd.camera = null, delete this.attached[Jd], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(dd) {
        const Jd = this.checkInputs;
        return () => {
          Jd(), dd()
        }
      }
      attachInput(dd) {
        this.attachedToElement && dd.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          dd = !Wd.e.ForceAttachControlToAlwaysPreventDefault && dd, this.attachedToElement = !0, this.noPreventDefault = dd;
          for (const Jd in this.attached) this.attached[Jd].attachControl(dd)
        }
      }
      detachElement() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Jd in this.attached) this.attached[Jd].detachControl(), dd && (this.attached[Jd].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const dd in this.attached) {
          const Jd = this.attached[dd];
          Jd.checkInputs && (this.checkInputs = this._addCheckInputs(Jd.checkInputs.bind(Jd)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(dd) {
        const Jd = {};
        for (const kd in this.attached) {
          const dd = this.attached[kd],
            pd = Nd.c.Serialize(dd);
          Jd[dd.getClassName()] = pd
        }
        dd.inputsmgr = Jd
      }
      parse(dd) {
        const Jd = dd.inputsmgr;
        if (Jd) {
          this.clear();
          for (const dd in Jd) {
            const kd = Pd[dd];
            if (kd) {
              const pd = Jd[dd],
                Wd = Nd.c.Parse((() => new kd), pd, null);
              this.add(Wd)
            }
          }
        } else
          for (const kd in this.attached) {
            const Jd = Pd[this.attached[kd].getClassName()];
            if (Jd) {
              const pd = Nd.c.Parse((() => new Jd), dd, null);
              this.remove(this.attached[kd]), this.add(pd)
            }
          }
      }
    }
  },
  40226: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd.d
    });
    var pd = kd(40234);
    (0, pd.e)()
  },
  40234: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd,
      e: () => ld
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(37251),
      Pd = kd(37443),
      Zd = kd(40243),
      gd = kd(40205),
      Cd = kd(37303);
    let Kd = (() => {
        var dd;
        let Jd, kd, gd = Zd.d,
          Cd = [],
          Kd = [],
          od = [],
          ld = [];
        return dd = class extends gd {
          constructor(dd, Jd, kd, Nd) {
            super(dd, kd, Nd), this.groundColor = (0, pd.i)(this, Cd, new Pd.c(0, 0, 0)), this.direction = ((0, pd.i)(this, Kd), (0, pd.i)(this, od, void 0)), (0, pd.i)(this, ld), this.direction = Jd || Wd.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(dd) {
            return this.direction = Wd.n.Normalize(dd.subtract(Wd.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(dd, Jd) {
            const kd = Wd.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", kd.x, kd.y, kd.z, 0, Jd), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Jd), this
          }
          transferToNodeMaterialEffect(dd, Jd) {
            const kd = Wd.n.Normalize(this.direction);
            return dd.setFloat3(Jd, kd.x, kd.y, kd.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Wd.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Zd.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(dd, Jd) {
            dd["HEMILIGHT" + Jd] = !0
          }
        }, (() => {
          const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(gd[Symbol.metadata] ?? null) : void 0;
          Jd = [(0, Nd.n)()], kd = [(0, Nd.F)()], (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "groundColor" in dd,
              get: dd => dd.groundColor,
              set: (dd, Jd) => {
                dd.groundColor = Jd
              }
            },
            metadata: Wd
          }, Cd, Kd), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: dd => "direction" in dd,
              get: dd => dd.direction,
              set: (dd, Jd) => {
                dd.direction = Jd
              }
            },
            metadata: Wd
          }, od, ld), Wd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wd
          })
        })(), dd
      })(),
      od = !1;

    function ld() {
      od || (od = !0, gd.c.AddNodeConstructor("Light_Type_3", ((dd, Jd) => () => new Kd(dd, Wd.n.Zero(), Jd))), (0, Cd.h)("BABYLON.HemisphericLight", Kd))
    }
  },
  37438: (dd, Jd, kd) => {
    kd.d(Jd, {
      Color3: () => pd.c,
      c: () => pd.g
    });
    var pd = kd(37443);
    (0, pd.k)()
  },
  37966: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd
    });
    var pd = kd(37969);
    class Nd {
      static GetPlanes(dd) {
        const Jd = [];
        for (let kd = 0; kd < 6; kd++) Jd.push(new pd.c(0, 0, 0, 0));
        return Nd.GetPlanesToRef(dd, Jd), Jd
      }
      static GetNearPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[2], Jd.normal.y = kd[7] + kd[6], Jd.normal.z = kd[11] + kd[10], Jd.d = kd[15] + kd[14], Jd.normalize()
      }
      static GetFarPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[2], Jd.normal.y = kd[7] - kd[6], Jd.normal.z = kd[11] - kd[10], Jd.d = kd[15] - kd[14], Jd.normalize()
      }
      static GetLeftPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[0], Jd.normal.y = kd[7] + kd[4], Jd.normal.z = kd[11] + kd[8], Jd.d = kd[15] + kd[12], Jd.normalize()
      }
      static GetRightPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[0], Jd.normal.y = kd[7] - kd[4], Jd.normal.z = kd[11] - kd[8], Jd.d = kd[15] - kd[12], Jd.normalize()
      }
      static GetTopPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[1], Jd.normal.y = kd[7] - kd[5], Jd.normal.z = kd[11] - kd[9], Jd.d = kd[15] - kd[13], Jd.normalize()
      }
      static GetBottomPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[1], Jd.normal.y = kd[7] + kd[5], Jd.normal.z = kd[11] + kd[9], Jd.d = kd[15] + kd[13], Jd.normalize()
      }
      static GetPlanesToRef(dd, Jd) {
        Nd.GetNearPlaneToRef(dd, Jd[0]), Nd.GetFarPlaneToRef(dd, Jd[1]), Nd.GetLeftPlaneToRef(dd, Jd[2]), Nd.GetRightPlaneToRef(dd, Jd[3]), Nd.GetTopPlaneToRef(dd, Jd[4]), Nd.GetBottomPlaneToRef(dd, Jd[5])
      }
      static IsPointInFrustum(dd, Jd) {
        for (let kd = 0; kd < 6; kd++)
          if (Jd[kd].dotCoordinate(dd) < 0) return !1;
        return !0
      }
    }
  },
  37969: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    var pd = kd(37251);
    class Nd {
      constructor(dd, Jd, kd, Nd) {
        this.normal = new pd.n(dd, Jd, kd), this.d = Nd
      }
      spd() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Nd(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let dd = this.normal.getHashCode();
        return dd = 397 * dd ^ this.d, dd
      }
      normalize() {
        const dd = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Jd = 0;
        return 0 !== dd && (Jd = 1 / dd), this.normal.x *= Jd, this.normal.y *= Jd, this.normal.z *= Jd, this.d *= Jd, this
      }
      transform(dd) {
        const Jd = Nd._TmpMatrix;
        dd.invertToRef(Jd);
        const kd = Jd.m,
          pd = this.normal.x,
          Wd = this.normal.y,
          Pd = this.normal.z,
          Zd = this.d,
          gd = pd * kd[0] + Wd * kd[1] + Pd * kd[2] + Zd * kd[3],
          Cd = pd * kd[4] + Wd * kd[5] + Pd * kd[6] + Zd * kd[7],
          Kd = pd * kd[8] + Wd * kd[9] + Pd * kd[10] + Zd * kd[11],
          od = pd * kd[12] + Wd * kd[13] + Pd * kd[14] + Zd * kd[15];
        return new Nd(gd, Cd, Kd, od)
      }
      dotCoordinate(dd) {
        return this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z + this.d
      }
      copyFromPoints(dd, Jd, kd) {
        const pd = Jd.x - dd.x,
          Nd = Jd.y - dd.y,
          Wd = Jd.z - dd.z,
          Pd = kd.x - dd.x,
          Zd = kd.y - dd.y,
          gd = kd.z - dd.z,
          Cd = Nd * gd - Wd * Zd,
          Kd = Wd * Pd - pd * gd,
          od = pd * Zd - Nd * Pd,
          ld = Math.sqrt(Cd * Cd + Kd * Kd + od * od);
        let Qd;
        return Qd = 0 !== ld ? 1 / ld : 0, this.normal.x = Cd * Qd, this.normal.y = Kd * Qd, this.normal.z = od * Qd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
      }
      isFrontFacingTo(dd, Jd) {
        return pd.n.Dot(this.normal, dd) <= Jd
      }
      signedDistanceTo(dd) {
        return pd.n.Dot(dd, this.normal) + this.d
      }
      static FromArray(dd) {
        return new Nd(dd[0], dd[1], dd[2], dd[3])
      }
      static FromPoints(dd, Jd, kd) {
        const pd = new Nd(0, 0, 0, 0);
        return pd.copyFromPoints(dd, Jd, kd), pd
      }
      static FromPositionAndNormal(dd, Jd) {
        const kd = new Nd(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(dd, Jd, kd)
      }
      static FromPositionAndNormalToRef(dd, Jd, kd) {
        return kd.normal.Fs(Jd), kd.normal.normalize(), kd.d = -dd.dot(kd.normal), kd
      }
      static SignedDistanceToPlaneFromPositionAndNormal(dd, Jd, kd) {
        const Nd = -(Jd.x * dd.x + Jd.y * dd.y + Jd.z * dd.z);
        return pd.n.Dot(kd, Jd) + Nd
      }
    }
    Nd._TmpMatrix = pd.b.Identity()
  },
  37245: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      Matrix: () => pd.b,
      Quaternion: () => pd.d,
      RegisterMathVector: () => pd.f,
      TmpVectors: () => pd.h,
      Vector2: () => pd.k,
      IL: () => pd.n,
      Vector4: () => pd.o
    });
    var pd = kd(37251);
    (0, pd.f)()
  },
  38281: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      constructor(dd, Jd, kd, pd) {
        this.x = dd, this.y = Jd, this.width = kd, this.height = pd
      }
      toGlobal(dd, Jd) {
        return new pd(this.x * dd, this.y * Jd, this.width * dd, this.height * Jd)
      }
      toGlobalToRef(dd, Jd, kd) {
        return kd.x = this.x * dd, kd.y = this.y * Jd, kd.width = this.width * dd, kd.height = this.height * Jd, this
      }
      clone() {
        return new pd(this.x, this.y, this.width, this.height)
      }
    }
  },
  40388: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd
    });
    var pd = kd(37251),
      Nd = kd(37443),
      Wd = kd(40393),
      Pd = kd(40402),
      Zd = kd(40419);

    function gd(dd) {
      let Jd = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const kd = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Wd = [],
        gd = dd.width || dd.size || 1,
        Cd = dd.height || dd.size || 1,
        Kd = dd.depth || dd.size || 1,
        od = dd.wrap || !1;
      let ld = void 0 === dd.topBaseAt ? 1 : dd.topBaseAt,
        Qd = void 0 === dd.bottomBaseAt ? 0 : dd.bottomBaseAt;
      ld = (ld + 4) % 4, Qd = (Qd + 4) % 4;
      let Ld = [2, 0, 3, 1][ld],
        Od = [2, 0, 1, 3][Qd],
        ed = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (od) {
        Jd = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], ed = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let dd = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          kd = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const pd = [17, 18, 19, 16],
          Nd = [22, 23, 20, 21];
        for (; Ld > 0;) dd.unshift(dd.pop()), pd.unshift(pd.pop()), Ld--;
        for (; Od > 0;) kd.unshift(kd.pop()), Nd.unshift(Nd.pop()), Od--;
        dd = dd.flat(), kd = kd.flat(), ed = ed.concat(dd).concat(kd), Jd.push(pd[0], pd[2], pd[3], pd[0], pd[1], pd[2]), Jd.push(Nd[0], Nd[2], Nd[3], Nd[0], Nd[1], Nd[2])
      }
      const Rd = [gd / 2, Cd / 2, Kd / 2],
        Id = ed.reduce(((dd, Jd, kd) => dd.concat(Jd * Rd[kd % 3])), []),
        Gd = 0 === dd.sideOrientation ? 0 : dd.sideOrientation || Pd.c.DEFAULTSIDE,
        vd = dd.faceUV || new Array(6),
        xd = dd.faceColors,
        qd = [];
      for (let Pd = 0; Pd < 6; Pd++) void 0 === vd[Pd] && (vd[Pd] = new pd.o(0, 0, 1, 1)), xd && void 0 === xd[Pd] && (xd[Pd] = new Nd.g(1, 1, 1, 1));
      for (let pd = 0; pd < 6; pd++)
        if (Wd.push(vd[pd].z, Zd.d ? 1 - vd[pd].w : vd[pd].w), Wd.push(vd[pd].x, Zd.d ? 1 - vd[pd].w : vd[pd].w), Wd.push(vd[pd].x, Zd.d ? 1 - vd[pd].y : vd[pd].y), Wd.push(vd[pd].z, Zd.d ? 1 - vd[pd].y : vd[pd].y), xd)
          for (let dd = 0; dd < 4; dd++) qd.push(xd[pd].r, xd[pd].g, xd[pd].b, xd[pd].a);
      Pd.c._ComputeSides(Gd, Id, Jd, kd, Wd, dd.frontUVs, dd.backUVs);
      const Bd = new Pd.c;
      if (Bd.indices = Jd, Bd.positions = Id, Bd.normals = kd, Bd.uvs = Wd, xd) {
        const dd = Gd === Pd.c.DOUBLESIDE ? qd.concat(qd) : qd;
        Bd.colors = dd
      }
      return Bd
    }

    function Cd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const pd = new Wd.b(dd, kd);
      Jd.sideOrientation = Wd.b._GetDefaultSideOrientation(Jd.sideOrientation), pd._originalBuilderSideOrientation = Jd.sideOrientation;
      return gd(Jd).applyToMesh(pd, Jd.updatable), pd
    }
    let Kd = !1;
    Kd || (Kd = !0, Pd.c.CreateBox = gd, Wd.b.CreateBox = function(dd, Jd) {
      return Cd(dd, {
        size: Jd,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40444: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => od
    });
    var pd = kd(37251),
      Nd = kd(40393),
      Wd = kd(40402),
      Pd = kd(40448),
      Zd = kd(40115),
      gd = kd(38812);

    function Cd(dd) {
      const Jd = [],
        kd = [],
        pd = dd.lines,
        Nd = dd.colors,
        Pd = [];
      let Zd = 0;
      for (let Wd = 0; Wd < pd.length; Wd++) {
        const dd = pd[Wd];
        for (let pd = 0; pd < dd.length; pd++) {
          const {
            x: gd,
            y: Cd,
            z: Kd
          } = dd[pd];
          if (kd.push(gd, Cd, Kd), Nd) {
            const dd = Nd[Wd],
              {
                r: Jd,
                g: kd,
                b: Zd,
                a: gd
              } = dd[pd];
            Pd.push(Jd, kd, Zd, gd)
          }
          pd > 0 && (Jd.push(Zd - 1), Jd.push(Zd)), Zd++
        }
      }
      const gd = new Wd.c;
      return gd.indices = Jd, gd.positions = kd, Nd && (gd.colors = Pd), gd
    }

    function Kd(dd) {
      const Jd = dd.dashSize || 3,
        kd = dd.gapSize || 1,
        Nd = dd.dashNb || 200,
        Pd = dd.points,
        Zd = [],
        gd = [],
        Cd = pd.n.Zero();
      let Kd, od, ld, Qd = 0,
        Ld = 0;
      for (ld = 0; ld < Pd.length - 1; ld++) Pd[ld + 1].subtractToRef(Pd[ld], Cd), Qd += Cd.length();
      const Od = Qd / Nd,
        ed = Jd * Od / (Jd + kd);
      for (ld = 0; ld < Pd.length - 1; ld++) {
        Pd[ld + 1].subtractToRef(Pd[ld], Cd), Kd = Math.floor(Cd.length() / Od), Cd.normalize();
        for (let dd = 0; dd < Kd; dd++) od = Od * dd, Zd.push(Pd[ld].x + od * Cd.x, Pd[ld].y + od * Cd.y, Pd[ld].z + od * Cd.z), Zd.push(Pd[ld].x + (od + ed) * Cd.x, Pd[ld].y + (od + ed) * Cd.y, Pd[ld].z + (od + ed) * Cd.z), gd.push(Ld, Ld + 1), Ld += 2
      }
      const Rd = new Wd.c;
      return Rd.positions = Zd, Rd.indices = gd, Rd
    }

    function od(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const pd = Jd.instance,
        Nd = Jd.lines,
        Wd = Jd.colors;
      if (pd) {
        const dd = pd.getVerticesData(Zd.j.PositionKind);
        let Jd, kd;
        Wd && (Jd = pd.getVerticesData(Zd.j.ColorKind));
        let Pd = 0,
          gd = 0;
        for (let pd = 0; pd < Nd.length; pd++) {
          const Zd = Nd[pd];
          for (let Nd = 0; Nd < Zd.length; Nd++) dd[Pd] = Zd[Nd].x, dd[Pd + 1] = Zd[Nd].y, dd[Pd + 2] = Zd[Nd].z, Wd && Jd && (kd = Wd[pd], Jd[gd] = kd[Nd].r, Jd[gd + 1] = kd[Nd].g, Jd[gd + 2] = kd[Nd].b, Jd[gd + 3] = kd[Nd].a, gd += 4), Pd += 3
        }
        return pd.updateVerticesData(Zd.j.PositionKind, dd, !1, !1), Wd && Jd && pd.updateVerticesData(Zd.j.ColorKind, Jd, !1, !1), pd.refreshBoundingInfo(), pd
      }
      const gd = !!Wd,
        Kd = new Pd.e(dd, kd, null, void 0, void 0, gd, Jd.useVertexAlpha, Jd.material);
      return Cd(Jd).applyToMesh(Kd, Jd.updatable), Kd
    }

    function ld(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const pd = Jd.colors ? [Jd.colors] : null;
      return od(dd, {
        lines: [Jd.points],
        updatable: Jd.updatable,
        instance: Jd.instance,
        colors: pd,
        useVertexAlpha: Jd.useVertexAlpha,
        material: Jd.material
      }, kd)
    }

    function Qd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Wd = Jd.points,
        Zd = Jd.instance,
        Cd = Jd.gapSize || 1,
        od = Jd.dashSize || 3;
      if (Zd) {
        const dd = dd => {
          const Jd = pd.n.Zero(),
            kd = dd.length / 6;
          let Nd, Pd, gd, Cd, Kd = 0,
            od = 0;
          for (gd = 0; gd < Wd.length - 1; gd++) Wd[gd + 1].subtractToRef(Wd[gd], Jd), Kd += Jd.length();
          const ld = Kd / kd,
            Qd = Zd._creationDataStorage.dashSize,
            Ld = Qd * ld / (Qd + Zd._creationDataStorage.gapSize);
          for (gd = 0; gd < Wd.length - 1; gd++)
            for (Wd[gd + 1].subtractToRef(Wd[gd], Jd), Nd = Math.floor(Jd.length() / ld), Jd.normalize(), Cd = 0; Cd < Nd && od < dd.length;) Pd = ld * Cd, dd[od] = Wd[gd].x + Pd * Jd.x, dd[od + 1] = Wd[gd].y + Pd * Jd.y, dd[od + 2] = Wd[gd].z + Pd * Jd.z, dd[od + 3] = Wd[gd].x + (Pd + Ld) * Jd.x, dd[od + 4] = Wd[gd].y + (Pd + Ld) * Jd.y, dd[od + 5] = Wd[gd].z + (Pd + Ld) * Jd.z, od += 6, Cd++;
          for (; od < dd.length;) dd[od] = Wd[gd].x, dd[od + 1] = Wd[gd].y, dd[od + 2] = Wd[gd].z, od += 3
        };
        return (Jd.dashNb || Jd.dashSize || Jd.gapSize || Jd.useVertexAlpha || Jd.material) && gd.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Zd.updateMeshPositions(dd, !1), Zd
      }
      const ld = new Pd.e(dd, kd, null, void 0, void 0, void 0, Jd.useVertexAlpha, Jd.material);
      return Kd(Jd).applyToMesh(ld, Jd.updatable), ld._creationDataStorage = new Nd.g, ld._creationDataStorage.dashSize = od, ld._creationDataStorage.gapSize = Cd, ld
    }
    let Ld = !1;
    Ld || (Ld = !0, Wd.c.CreateLineSystem = Cd, Wd.c.CreateDashedLines = Kd, Nd.b.CreateLines = function(dd, Jd) {
      return ld(dd, {
        points: Jd,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Nd.b.CreateDashedLines = function(dd, Jd, kd, pd, Nd) {
      return Qd(dd, {
        points: Jd,
        dashSize: kd,
        gapSize: pd,
        dashNb: Nd,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40448: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ld,
      i: () => Od
    });
    var pd, Nd, Wd = kd(37443),
      Pd = kd(40115),
      Zd = kd(40393),
      gd = kd(40456),
      Cd = kd(40278),
      Kd = kd(40465),
      od = kd(39860);
    class ld extends Zd.b {
      _isShaderMaterial(dd) {
        return !!dd && "ShaderMaterial" === dd.getClassName()
      }
      constructor(dd) {
        let Jd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pd = arguments.length > 5 ? arguments[5] : void 0,
          Nd = arguments.length > 6 ? arguments[6] : void 0,
          Zd = arguments.length > 7 ? arguments[7] : void 0;
        super(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Jd, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = pd, this.useVertexAlpha = Nd, this.color = new Wd.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Jd && (this.color = Jd.color.clone(), this.alpha = Jd.alpha, this.useVertexColor = Jd.useVertexColor, this.useVertexAlpha = Jd.useVertexAlpha), this.intersectionThreshold = .1;
        const gd = {
          attributes: [Pd.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? gd.defines.push("#define VERTEXALPHA") : gd.needAlphaBlending = !1, this.useVertexColor ? (gd.defines.push("#define VERTEXCOLOR"), gd.attributes.push(Pd.j.ColorKind)) : (gd.uniforms.push("color"), this._color4 = new Wd.g), Zd) this.material = Zd;
        else {
          this.Wm().eL().isWebGPU && !ld.ForceGLSL && (this._shaderLanguage = 1), gd.shaderLanguage = this._shaderLanguage, gd.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([kd.e(335).then((() => kd(42467))), kd.e(341).then((() => kd(42469)))]) : await Promise.all([kd.e(317).then((() => kd(42477))), kd.e(323).then((() => kd(42483)))])
          };
          const dd = new Kd.v("colorShader", this.Wm(), "color", gd, !1);
          dd.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(dd)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(dd) {
        const Jd = this.material;
        if (Jd === dd) return;
        const kd = Jd && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(dd), kd && Jd?.dispose()
      }
      _setInternalMaterial(dd) {
        this._setMaterial(dd), this.material && (this.material.fillMode = Cd.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(dd) {}
      _bind(dd, Jd) {
        if (!this._geometry) return this;
        const kd = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Jd, kd) : this._geometry._bind(Jd, kd, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: dd,
            g: Jd,
            b: kd
          } = this.color;
          this._color4.set(dd, Jd, kd, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(dd, Jd, kd) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const pd = this.Wm().eL();
        return this._unIndexed ? pd.drawArraysType(Cd.b.LineListDrawMode, dd.verticesStart, dd.verticesCount, kd) : pd.drawElementsType(Cd.b.LineListDrawMode, dd.indexStart, dd.indexCount, kd), this
      }
      dispose(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Jd) && this.material?.dispose(!1, !1, !0), super.dispose(dd)
      }
      clone(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        if (Jd && void 0 === Jd._addToSceneRootNodes) {
          const kd = Jd;
          return kd.source = this, new ld(dd, this.Wm(), kd.parent, kd.source, kd.doNotCloneChildren)
        }
        return new ld(dd, this.Wm(), Jd, this, kd)
      }
      createInstance(dd) {
        const Jd = new Qd(dd, this);
        if (this.fn) {
          Jd.fn = {};
          for (const dd in this.fn) Jd.fn[dd] = this.fn[dd]
        }
        return Jd
      }
      serialize(dd) {
        super.serialize(dd), dd.color = this.color.spd(), dd.alpha = this.alpha
      }
      static Parse(dd, Jd) {
        const kd = new ld(dd.name, Jd);
        return kd.color = Wd.c.FromArray(dd.color), kd.alpha = dd.alpha, kd
      }
    }
    ld.ForceGLSL = !1;
    class Qd extends gd.c {
      constructor(dd, Jd) {
        super(dd, Jd), this.intersectionThreshold = Jd.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Ld = !1;

    function Od() {
      Ld || (Ld = !0, Zd.b._LinesMeshParser = (dd, Jd) => ld.Parse(dd, Jd))
    }(pd = ld.prototype).enableEdgesRendering ?? (pd.enableEdgesRendering = (0, od.j)("LinesMesh", "enableEdgesRendering")), (Nd = Qd.prototype).enableEdgesRendering ?? (Nd.enableEdgesRendering = (0, od.j)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38806: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd
    });
    var pd = kd(38812);
    const Nd = (dd, Jd, kd) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : kd && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Jd) : null;
    class Wd {
      static DeepCopy(dd, Jd, kd, Wd) {
        let Pd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Zd = function(dd) {
          const Jd = [];
          do {
            const kd = Object.getOwnPropertyNames(dd);
            for (const dd of kd) - 1 === Jd.indexOf(dd) && Jd.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Jd
        }(dd);
        for (const Cd of Zd) {
          if ("_" === Cd[0] && (!Wd || -1 === Wd.indexOf(Cd))) continue;
          if (Cd.endsWith("Observable")) continue;
          if (kd && -1 !== kd.indexOf(Cd)) continue;
          const Zd = dd[Cd],
            Kd = typeof Zd;
          if ("function" !== Kd) try {
            if ("object" === Kd)
              if (Zd instanceof Uint8Array) Jd[Cd] = Uint8Array.from(Zd);
              else if (Zd instanceof Array) {
              if (Jd[Cd] = [], Zd.length > 0)
                if ("object" == typeof Zd[0])
                  for (let dd = 0; dd < Zd.length; dd++) {
                    const kd = Nd(Zd[dd], Jd, Pd); - 1 === Jd[Cd].indexOf(kd) && Jd[Cd].push(kd)
                  } else Jd[Cd] = Zd.slice(0)
            } else Jd[Cd] = Nd(Zd, Jd, Pd);
            else Jd[Cd] = Zd
          } catch (gd) {
            pd.c.Warn(gd.message)
          }
        }
      }
    }
  },
  38105: (dd, Jd, kd) => {
    function pd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Jd = 16 * Math.random() | 0;
        return ("x" === dd ? Jd : 3 & Jd | 8).toString(16)
      }))
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  38812: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      static _CheckLimit(dd, Jd) {
        let kd = pd._LogLimitOutputs[dd];
        return kd ? kd.current++ : (kd = {
          limit: Jd,
          current: 1
        }, pd._LogLimitOutputs[dd] = kd), kd.current <= kd.limit
      }
      static _GenerateLimitMessage(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const kd = pd._LogLimitOutputs[dd];
        if (!kd || !pd.MessageLimitReached) return;
        const Nd = this._Levels[Jd];
        kd.current === kd.limit && pd[Nd.name](pd.MessageLimitReached.replace(/%LIMIT%/g, "" + kd.limit).replace(/%TYPE%/g, Nd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        pd._LogCache = dd + pd._LogCache, pd.OnNewCacheEntry && pd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Jd = dd => dd < 10 ? "0" + dd : "" + dd,
          kd = new Date;
        return "[" + Jd(kd.getHours()) + ":" + Jd(kd.getMinutes()) + ":" + Jd(kd.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Jd) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const Nd = Array.isArray(Jd) ? Jd[0] : Jd;
        if (void 0 !== kd && !pd._CheckLimit(Nd, kd)) return;
        const Wd = pd._FormatMessage(Nd),
          Pd = this._Levels[dd],
          Zd = Array.isArray(Jd) ? Jd.slice(1) : [];
        Pd.logFunc && Pd.logFunc("BJS - " + Wd, ...Zd);
        const gd = `<div style='color:${Pd.color}'>${Wd}</div><br>`;
        pd._AddLogEntry(gd), pd._GenerateLimitMessage(Nd, dd)
      }
      static get LogCache() {
        return pd._LogCache
      }
      static ClearLogCache() {
        pd._LogCache = "", pd._LogLimitOutputs = {}, pd.errorsCount = 0
      }
      static set LogLevels(dd) {
        pd.Log = pd._LogDisabled, pd.Warn = pd._LogDisabled, pd.Error = pd._LogDisabled;
        const Jd = [pd.MessageLogLevel, pd.WarningLogLevel, pd.ErrorLogLevel];
        for (const kd of Jd)
          if ((dd & kd) === kd) {
            const dd = this._Levels[kd];
            pd[dd.name] = pd._LogEnabled.bind(pd, kd)
          }
      }
    }
    pd.NoneLogLevel = 0, pd.MessageLogLevel = 1, pd.WarningLogLevel = 2, pd.ErrorLogLevel = 4, pd.AllLogLevel = 7, pd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pd._LogCache = "", pd._LogLimitOutputs = {}, pd._Levels = [{}, {
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
    }], pd.errorsCount = 0, pd.Log = pd._LogEnabled.bind(pd, pd.MessageLogLevel), pd.Warn = pd._LogEnabled.bind(pd, pd.WarningLogLevel), pd.Error = pd._LogEnabled.bind(pd, pd.ErrorLogLevel)
  },
  40054: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd.i
    });
    var pd = kd(40062);
    (0, pd.e)()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);