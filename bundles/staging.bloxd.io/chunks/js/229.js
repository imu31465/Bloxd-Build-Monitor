export const id = 229;
export const ids = [229, 235, 238];
export const modules = {
  40244: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk,
      h: () => lk
    });
    var Xk = Ik(38674),
      Tk = Ik(40021),
      ik = Ik(40214),
      yk = {};
    class lk {
      constructor(kk) {
        this.attachedToElement = !1, this.attached = {}, this.camera = kk, this.checkInputs = () => {}
      }
      add(kk) {
        const Fk = kk.getSimpleName();
        this.attached[Fk] ? Xk.e.Warn("camera input of type " + Fk + " already exists on camera") : (this.attached[Fk] = kk, kk.camera = this.camera, kk.checkInputs && (this.checkInputs = this._addCheckInputs(kk.checkInputs.bind(kk))), this.attachedToElement && kk.attachControl(this.noPreventDefault))
      }
      remove(kk) {
        for (const Fk in this.attached) {
          const Ik = this.attached[Fk];
          if (Ik === kk) return Ik.detachControl(), Ik.camera = null, delete this.attached[Fk], void this.rebuildInputCheck()
        }
      }
      removeByType(kk) {
        for (const Fk in this.attached) {
          const Ik = this.attached[Fk];
          Ik.getClassName() === kk && (Ik.detachControl(), Ik.camera = null, delete this.attached[Fk], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(kk) {
        const Fk = this.checkInputs;
        return () => {
          Fk(), kk()
        }
      }
      attachInput(kk) {
        this.attachedToElement && kk.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          kk = !ik.d.ForceAttachControlToAlwaysPreventDefault && kk, this.attachedToElement = !0, this.noPreventDefault = kk;
          for (const Fk in this.attached) this.attached[Fk].attachControl(kk)
        }
      }
      detachElement() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Fk in this.attached) this.attached[Fk].detachControl(), kk && (this.attached[Fk].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const kk in this.attached) {
          const Fk = this.attached[kk];
          Fk.checkInputs && (this.checkInputs = this._addCheckInputs(Fk.checkInputs.bind(Fk)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(kk) {
        const Fk = {};
        for (const Ik in this.attached) {
          const kk = this.attached[Ik],
            Xk = Tk.b.Serialize(kk);
          Fk[kk.getClassName()] = Xk
        }
        kk.inputsmgr = Fk
      }
      parse(kk) {
        const Fk = kk.inputsmgr;
        if (Fk) {
          this.clear();
          for (const kk in Fk) {
            const Ik = yk[kk];
            if (Ik) {
              const Xk = Fk[kk],
                ik = Tk.b.Parse((() => new Ik), Xk, null);
              this.add(ik)
            }
          }
        } else
          for (const Ik in this.attached) {
            const Fk = yk[this.attached[Ik].getClassName()];
            if (Fk) {
              const Xk = Tk.b.Parse((() => new Fk), kk, null);
              this.remove(this.attached[Ik]), this.add(Xk)
            }
          }
      }
    }
  },
  40252: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk.b
    });
    var Xk = Ik(40259);
    (0, Xk.e)()
  },
  40259: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Lk,
      e: () => Zk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(37153),
      yk = Ik(37331),
      lk = Ik(40265),
      ak = Ik(40218),
      qk = Ik(37201);
    let Lk = (() => {
        var kk;
        let Fk, Ik, ak = lk.b,
          qk = [],
          Lk = [],
          tk = [],
          Zk = [];
        return kk = class extends ak {
          constructor(kk, Fk, Ik, Tk) {
            super(kk, Ik, Tk), this.groundColor = (0, Xk.n)(this, qk, new yk.e(0, 0, 0)), this.direction = ((0, Xk.n)(this, Lk), (0, Xk.n)(this, tk, void 0)), (0, Xk.n)(this, Zk), this.direction = Fk || ik.t.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(kk) {
            return this.direction = ik.t.Normalize(kk.subtract(ik.t.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(kk, Fk) {
            const Ik = ik.t.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Ik.x, Ik.y, Ik.z, 0, Fk), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Fk), this
          }
          transferToNodeMaterialEffect(kk, Fk) {
            const Ik = ik.t.Normalize(this.direction);
            return kk.setFloat3(Fk, Ik.x, Ik.y, Ik.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ik.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return lk.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(kk, Fk) {
            kk["HEMILIGHT" + Fk] = !0
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(ak[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, Tk.n)()], Ik = [(0, Tk.H)()], (0, Xk.j)(null, null, Fk, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "groundColor" in kk,
              get: kk => kk.groundColor,
              set: (kk, Fk) => {
                kk.groundColor = Fk
              }
            },
            metadata: ik
          }, qk, Lk), (0, Xk.j)(null, null, Ik, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: kk => "direction" in kk,
              get: kk => kk.direction,
              set: (kk, Fk) => {
                kk.direction = Fk
              }
            },
            metadata: ik
          }, tk, Zk), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk
      })(),
      tk = !1;

    function Zk() {
      tk || (tk = !0, ak.b.AddNodeConstructor("Light_Type_3", ((kk, Fk) => () => new Lk(kk, ik.t.Zero(), Fk))), (0, qk.f)("BABYLON.HemisphericLight", Lk))
    }
  },
  37327: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      Color3: () => Xk.e,
      b: () => Xk.h
    });
    var Xk = Ik(37331);
    (0, Xk.i)()
  },
  37780: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    var Xk = Ik(37785);
    class Tk {
      static GetPlanes(kk) {
        const Fk = [];
        for (let Ik = 0; Ik < 6; Ik++) Fk.push(new Xk.e(0, 0, 0, 0));
        return Tk.GetPlanesToRef(kk, Fk), Fk
      }
      static GetNearPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[2], Fk.normal.y = Ik[7] + Ik[6], Fk.normal.z = Ik[11] + Ik[10], Fk.d = Ik[15] + Ik[14], Fk.normalize()
      }
      static GetFarPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[2], Fk.normal.y = Ik[7] - Ik[6], Fk.normal.z = Ik[11] - Ik[10], Fk.d = Ik[15] - Ik[14], Fk.normalize()
      }
      static GetLeftPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[0], Fk.normal.y = Ik[7] + Ik[4], Fk.normal.z = Ik[11] + Ik[8], Fk.d = Ik[15] + Ik[12], Fk.normalize()
      }
      static GetRightPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[0], Fk.normal.y = Ik[7] - Ik[4], Fk.normal.z = Ik[11] - Ik[8], Fk.d = Ik[15] - Ik[12], Fk.normalize()
      }
      static GetTopPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[1], Fk.normal.y = Ik[7] - Ik[5], Fk.normal.z = Ik[11] - Ik[9], Fk.d = Ik[15] - Ik[13], Fk.normalize()
      }
      static GetBottomPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[1], Fk.normal.y = Ik[7] + Ik[5], Fk.normal.z = Ik[11] + Ik[9], Fk.d = Ik[15] + Ik[13], Fk.normalize()
      }
      static GetPlanesToRef(kk, Fk) {
        Tk.GetNearPlaneToRef(kk, Fk[0]), Tk.GetFarPlaneToRef(kk, Fk[1]), Tk.GetLeftPlaneToRef(kk, Fk[2]), Tk.GetRightPlaneToRef(kk, Fk[3]), Tk.GetTopPlaneToRef(kk, Fk[4]), Tk.GetBottomPlaneToRef(kk, Fk[5])
      }
      static IsPointInFrustum(kk, Fk) {
        for (let Ik = 0; Ik < 6; Ik++)
          if (Fk[Ik].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37785: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(37153);
    class Tk {
      constructor(kk, Fk, Ik, Tk) {
        this.normal = new Xk.t(kk, Fk, Ik), this.d = Tk
      }
      iXk() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Tk(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let kk = this.normal.getHashCode();
        return kk = 397 * kk ^ this.d, kk
      }
      normalize() {
        const kk = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Fk = 0;
        return 0 !== kk && (Fk = 1 / kk), this.normal.x *= Fk, this.normal.y *= Fk, this.normal.z *= Fk, this.d *= Fk, this
      }
      transform(kk) {
        const Fk = Tk._TmpMatrix;
        kk.invertToRef(Fk);
        const Ik = Fk.m,
          Xk = this.normal.x,
          ik = this.normal.y,
          yk = this.normal.z,
          lk = this.d,
          ak = Xk * Ik[0] + ik * Ik[1] + yk * Ik[2] + lk * Ik[3],
          qk = Xk * Ik[4] + ik * Ik[5] + yk * Ik[6] + lk * Ik[7],
          Lk = Xk * Ik[8] + ik * Ik[9] + yk * Ik[10] + lk * Ik[11],
          tk = Xk * Ik[12] + ik * Ik[13] + yk * Ik[14] + lk * Ik[15];
        return new Tk(ak, qk, Lk, tk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, Fk, Ik) {
        const Xk = Fk.x - kk.x,
          Tk = Fk.y - kk.y,
          ik = Fk.z - kk.z,
          yk = Ik.x - kk.x,
          lk = Ik.y - kk.y,
          ak = Ik.z - kk.z,
          qk = Tk * ak - ik * lk,
          Lk = ik * yk - Xk * ak,
          tk = Xk * lk - Tk * yk,
          Zk = Math.sqrt(qk * qk + Lk * Lk + tk * tk);
        let jk;
        return jk = 0 !== Zk ? 1 / Zk : 0, this.normal.x = qk * jk, this.normal.y = Lk * jk, this.normal.z = tk * jk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, Fk) {
        return Xk.t.Dot(this.normal, kk) <= Fk
      }
      signedDistanceTo(kk) {
        return Xk.t.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new Tk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, Fk, Ik) {
        const Xk = new Tk(0, 0, 0, 0);
        return Xk.copyFromPoints(kk, Fk, Ik), Xk
      }
      static FromPositionAndNormal(kk, Fk) {
        const Ik = new Tk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, Fk, Ik)
      }
      static FromPositionAndNormalToRef(kk, Fk, Ik) {
        return Ik.normal.kS(Fk), Ik.normal.normalize(), Ik.d = -kk.dot(Ik.normal), Ik
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, Fk, Ik) {
        const Tk = -(Fk.x * kk.x + Fk.y * kk.y + Fk.z * kk.z);
        return Xk.t.Dot(Ik, Fk) + Tk
      }
    }
    Tk._TmpMatrix = Xk.c.Identity()
  },
  37144: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      Matrix: () => Xk.c,
      Quaternion: () => Xk.f,
      RegisterMathVector: () => Xk.h,
      TmpVectors: () => Xk.l,
      Vector2: () => Xk.p,
      Ge: () => Xk.t,
      Vector4: () => Xk.u
    });
    var Xk = Ik(37153);
    (0, Xk.h)()
  },
  38099: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    class Xk {
      constructor(kk, Fk, Ik, Xk) {
        this.x = kk, this.y = Fk, this.width = Ik, this.height = Xk
      }
      toGlobal(kk, Fk) {
        return new Xk(this.x * kk, this.y * Fk, this.width * kk, this.height * Fk)
      }
      toGlobalToRef(kk, Fk, Ik) {
        return Ik.x = this.x * kk, Ik.y = this.y * Fk, Ik.width = this.width * kk, Ik.height = this.height * Fk, this
      }
      clone() {
        return new Xk(this.x, this.y, this.width, this.height)
      }
    }
  },
  40411: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => qk
    });
    var Xk = Ik(37153),
      Tk = Ik(37331),
      ik = Ik(40417),
      yk = Ik(40427),
      lk = Ik(40439);

    function ak(kk) {
      let Fk = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const Ik = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        ik = [],
        ak = kk.width || kk.size || 1,
        qk = kk.height || kk.size || 1,
        Lk = kk.depth || kk.size || 1,
        tk = kk.wrap || !1;
      let Zk = void 0 === kk.topBaseAt ? 1 : kk.topBaseAt,
        jk = void 0 === kk.bottomBaseAt ? 0 : kk.bottomBaseAt;
      Zk = (Zk + 4) % 4, jk = (jk + 4) % 4;
      let ek = [2, 0, 3, 1][Zk],
        wk = [2, 0, 1, 3][jk],
        Hk = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (tk) {
        Fk = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], Hk = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let kk = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          Ik = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Xk = [17, 18, 19, 16],
          Tk = [22, 23, 20, 21];
        for (; ek > 0;) kk.unshift(kk.pop()), Xk.unshift(Xk.pop()), ek--;
        for (; wk > 0;) Ik.unshift(Ik.pop()), Tk.unshift(Tk.pop()), wk--;
        kk = kk.flat(), Ik = Ik.flat(), Hk = Hk.concat(kk).concat(Ik), Fk.push(Xk[0], Xk[2], Xk[3], Xk[0], Xk[1], Xk[2]), Fk.push(Tk[0], Tk[2], Tk[3], Tk[0], Tk[1], Tk[2])
      }
      const Jk = [ak / 2, qk / 2, Lk / 2],
        xk = Hk.reduce(((kk, Fk, Ik) => kk.concat(Fk * Jk[Ik % 3])), []),
        Pk = 0 === kk.sideOrientation ? 0 : kk.sideOrientation || yk.c.DEFAULTSIDE,
        Kk = kk.faceUV || new Array(6),
        Qk = kk.faceColors,
        sk = [];
      for (let yk = 0; yk < 6; yk++) void 0 === Kk[yk] && (Kk[yk] = new Xk.u(0, 0, 1, 1)), Qk && void 0 === Qk[yk] && (Qk[yk] = new Tk.h(1, 1, 1, 1));
      for (let Xk = 0; Xk < 6; Xk++)
        if (ik.push(Kk[Xk].z, lk.b ? 1 - Kk[Xk].w : Kk[Xk].w), ik.push(Kk[Xk].x, lk.b ? 1 - Kk[Xk].w : Kk[Xk].w), ik.push(Kk[Xk].x, lk.b ? 1 - Kk[Xk].y : Kk[Xk].y), ik.push(Kk[Xk].z, lk.b ? 1 - Kk[Xk].y : Kk[Xk].y), Qk)
          for (let kk = 0; kk < 4; kk++) sk.push(Qk[Xk].r, Qk[Xk].g, Qk[Xk].b, Qk[Xk].a);
      yk.c._ComputeSides(Pk, xk, Fk, Ik, ik, kk.frontUVs, kk.backUVs);
      const Vk = new yk.c;
      if (Vk.indices = Fk, Vk.positions = xk, Vk.normals = Ik, Vk.uvs = ik, Qk) {
        const kk = Pk === yk.c.DOUBLESIDE ? sk.concat(sk) : sk;
        Vk.colors = kk
      }
      return Vk
    }

    function qk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Xk = new ik.b(kk, Ik);
      Fk.sideOrientation = ik.b._GetDefaultSideOrientation(Fk.sideOrientation), Xk._originalBuilderSideOrientation = Fk.sideOrientation;
      return ak(Fk).applyToMesh(Xk, Fk.updatable), Xk
    }
    let Lk = !1;
    Lk || (Lk = !0, yk.c.CreateBox = ak, ik.b.CreateBox = function(kk, Fk) {
      return qk(kk, {
        size: Fk,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40458: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => tk
    });
    var Xk = Ik(37153),
      Tk = Ik(40417),
      ik = Ik(40427),
      yk = Ik(40467),
      lk = Ik(40141),
      ak = Ik(38674);

    function qk(kk) {
      const Fk = [],
        Ik = [],
        Xk = kk.lines,
        Tk = kk.colors,
        yk = [];
      let lk = 0;
      for (let ik = 0; ik < Xk.length; ik++) {
        const kk = Xk[ik];
        for (let Xk = 0; Xk < kk.length; Xk++) {
          const {
            x: ak,
            y: qk,
            z: Lk
          } = kk[Xk];
          if (Ik.push(ak, qk, Lk), Tk) {
            const kk = Tk[ik],
              {
                r: Fk,
                g: Ik,
                b: lk,
                a: ak
              } = kk[Xk];
            yk.push(Fk, Ik, lk, ak)
          }
          Xk > 0 && (Fk.push(lk - 1), Fk.push(lk)), lk++
        }
      }
      const ak = new ik.c;
      return ak.indices = Fk, ak.positions = Ik, Tk && (ak.colors = yk), ak
    }

    function Lk(kk) {
      const Fk = kk.dashSize || 3,
        Ik = kk.gapSize || 1,
        Tk = kk.dashNb || 200,
        yk = kk.points,
        lk = [],
        ak = [],
        qk = Xk.t.Zero();
      let Lk, tk, Zk, jk = 0,
        ek = 0;
      for (Zk = 0; Zk < yk.length - 1; Zk++) yk[Zk + 1].subtractToRef(yk[Zk], qk), jk += qk.length();
      const wk = jk / Tk,
        Hk = Fk * wk / (Fk + Ik);
      for (Zk = 0; Zk < yk.length - 1; Zk++) {
        yk[Zk + 1].subtractToRef(yk[Zk], qk), Lk = Math.floor(qk.length() / wk), qk.normalize();
        for (let kk = 0; kk < Lk; kk++) tk = wk * kk, lk.push(yk[Zk].x + tk * qk.x, yk[Zk].y + tk * qk.y, yk[Zk].z + tk * qk.z), lk.push(yk[Zk].x + (tk + Hk) * qk.x, yk[Zk].y + (tk + Hk) * qk.y, yk[Zk].z + (tk + Hk) * qk.z), ak.push(ek, ek + 1), ek += 2
      }
      const Jk = new ik.c;
      return Jk.positions = lk, Jk.indices = ak, Jk
    }

    function tk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Xk = Fk.instance,
        Tk = Fk.lines,
        ik = Fk.colors;
      if (Xk) {
        const kk = Xk.getVerticesData(lk.l.PositionKind);
        let Fk, Ik;
        ik && (Fk = Xk.getVerticesData(lk.l.ColorKind));
        let yk = 0,
          ak = 0;
        for (let Xk = 0; Xk < Tk.length; Xk++) {
          const lk = Tk[Xk];
          for (let Tk = 0; Tk < lk.length; Tk++) kk[yk] = lk[Tk].x, kk[yk + 1] = lk[Tk].y, kk[yk + 2] = lk[Tk].z, ik && Fk && (Ik = ik[Xk], Fk[ak] = Ik[Tk].r, Fk[ak + 1] = Ik[Tk].g, Fk[ak + 2] = Ik[Tk].b, Fk[ak + 3] = Ik[Tk].a, ak += 4), yk += 3
        }
        return Xk.updateVerticesData(lk.l.PositionKind, kk, !1, !1), ik && Fk && Xk.updateVerticesData(lk.l.ColorKind, Fk, !1, !1), Xk.refreshBoundingInfo(), Xk
      }
      const ak = !!ik,
        Lk = new yk.b(kk, Ik, null, void 0, void 0, ak, Fk.useVertexAlpha, Fk.material);
      return qk(Fk).applyToMesh(Lk, Fk.updatable), Lk
    }

    function Zk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Xk = Fk.colors ? [Fk.colors] : null;
      return tk(kk, {
        lines: [Fk.points],
        updatable: Fk.updatable,
        instance: Fk.instance,
        colors: Xk,
        useVertexAlpha: Fk.useVertexAlpha,
        material: Fk.material
      }, Ik)
    }

    function jk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const ik = Fk.points,
        lk = Fk.instance,
        qk = Fk.gapSize || 1,
        tk = Fk.dashSize || 3;
      if (lk) {
        const kk = kk => {
          const Fk = Xk.t.Zero(),
            Ik = kk.length / 6;
          let Tk, yk, ak, qk, Lk = 0,
            tk = 0;
          for (ak = 0; ak < ik.length - 1; ak++) ik[ak + 1].subtractToRef(ik[ak], Fk), Lk += Fk.length();
          const Zk = Lk / Ik,
            jk = lk._creationDataStorage.dashSize,
            ek = jk * Zk / (jk + lk._creationDataStorage.gapSize);
          for (ak = 0; ak < ik.length - 1; ak++)
            for (ik[ak + 1].subtractToRef(ik[ak], Fk), Tk = Math.floor(Fk.length() / Zk), Fk.normalize(), qk = 0; qk < Tk && tk < kk.length;) yk = Zk * qk, kk[tk] = ik[ak].x + yk * Fk.x, kk[tk + 1] = ik[ak].y + yk * Fk.y, kk[tk + 2] = ik[ak].z + yk * Fk.z, kk[tk + 3] = ik[ak].x + (yk + ek) * Fk.x, kk[tk + 4] = ik[ak].y + (yk + ek) * Fk.y, kk[tk + 5] = ik[ak].z + (yk + ek) * Fk.z, tk += 6, qk++;
          for (; tk < kk.length;) kk[tk] = ik[ak].x, kk[tk + 1] = ik[ak].y, kk[tk + 2] = ik[ak].z, tk += 3
        };
        return (Fk.dashNb || Fk.dashSize || Fk.gapSize || Fk.useVertexAlpha || Fk.material) && ak.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), lk.updateMeshPositions(kk, !1), lk
      }
      const Zk = new yk.b(kk, Ik, null, void 0, void 0, void 0, Fk.useVertexAlpha, Fk.material);
      return Lk(Fk).applyToMesh(Zk, Fk.updatable), Zk._creationDataStorage = new Tk.g, Zk._creationDataStorage.dashSize = tk, Zk._creationDataStorage.gapSize = qk, Zk
    }
    let ek = !1;
    ek || (ek = !0, ik.c.CreateLineSystem = qk, ik.c.CreateDashedLines = Lk, Tk.b.CreateLines = function(kk, Fk) {
      return Zk(kk, {
        points: Fk,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Tk.b.CreateDashedLines = function(kk, Fk, Ik, Xk, Tk) {
      return jk(kk, {
        points: Fk,
        dashSize: Ik,
        gapSize: Xk,
        dashNb: Tk,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40467: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Zk,
      f: () => wk
    });
    var Xk, Tk, ik = Ik(37331),
      yk = Ik(40141),
      lk = Ik(40417),
      ak = Ik(40475),
      qk = Ik(40295),
      Lk = Ik(40482),
      tk = Ik(39863);
    class Zk extends lk.b {
      _isShaderMaterial(kk) {
        return !!kk && "ShaderMaterial" === kk.getClassName()
      }
      constructor(kk) {
        let Fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Xk = arguments.length > 5 ? arguments[5] : void 0,
          Tk = arguments.length > 6 ? arguments[6] : void 0,
          lk = arguments.length > 7 ? arguments[7] : void 0;
        super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Fk, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Xk, this.useVertexAlpha = Tk, this.color = new ik.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Fk && (this.color = Fk.color.clone(), this.alpha = Fk.alpha, this.useVertexColor = Fk.useVertexColor, this.useVertexAlpha = Fk.useVertexAlpha), this.intersectionThreshold = .1;
        const ak = {
          attributes: [yk.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? ak.defines.push("#define VERTEXALPHA") : ak.needAlphaBlending = !1, this.useVertexColor ? (ak.defines.push("#define VERTEXCOLOR"), ak.attributes.push(yk.l.ColorKind)) : (ak.uniforms.push("color"), this._color4 = new ik.h), lk) this.material = lk;
        else {
          this.mG().Oe().isWebGPU && !Zk.ForceGLSL && (this._shaderLanguage = 1), ak.shaderLanguage = this._shaderLanguage, ak.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Ik.e(344).then((() => Ik(42559))), Ik.e(350).then((() => Ik(42565)))]) : await Promise.all([Ik.e(326).then((() => Ik(42571))), Ik.e(332).then((() => Ik(42574)))])
          };
          const kk = new Lk.q("colorShader", this.mG(), "color", ak, !1);
          kk.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(kk)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(kk) {
        const Fk = this.material;
        if (Fk === kk) return;
        const Ik = Fk && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(kk), Ik && Fk?.dispose()
      }
      _setInternalMaterial(kk) {
        this._setMaterial(kk), this.material && (this.material.fillMode = qk.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(kk) {}
      _bind(kk, Fk) {
        if (!this._geometry) return this;
        const Ik = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Fk, Ik) : this._geometry._bind(Fk, Ik, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: kk,
            g: Fk,
            b: Ik
          } = this.color;
          this._color4.set(kk, Fk, Ik, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(kk, Fk, Ik) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Xk = this.mG().Oe();
        return this._unIndexed ? Xk.drawArraysType(qk.c.LineListDrawMode, kk.verticesStart, kk.verticesCount, Ik) : Xk.drawElementsType(qk.c.LineListDrawMode, kk.indexStart, kk.indexCount, Ik), this
      }
      dispose(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Fk) && this.material?.dispose(!1, !1, !0), super.dispose(kk)
      }
      clone(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        if (Fk && void 0 === Fk._addToSceneRootNodes) {
          const Ik = Fk;
          return Ik.source = this, new Zk(kk, this.mG(), Ik.parent, Ik.source, Ik.doNotCloneChildren)
        }
        return new Zk(kk, this.mG(), Fk, this, Ik)
      }
      createInstance(kk) {
        const Fk = new jk(kk, this);
        if (this.JR) {
          Fk.JR = {};
          for (const kk in this.JR) Fk.JR[kk] = this.JR[kk]
        }
        return Fk
      }
      serialize(kk) {
        super.serialize(kk), kk.color = this.color.iXk(), kk.alpha = this.alpha
      }
      static Parse(kk, Fk) {
        const Ik = new Zk(kk.name, Fk);
        return Ik.color = ik.e.FromArray(kk.color), Ik.alpha = kk.alpha, Ik
      }
    }
    Zk.ForceGLSL = !1;
    class jk extends ak.d {
      constructor(kk, Fk) {
        super(kk, Fk), this.intersectionThreshold = Fk.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let ek = !1;

    function wk() {
      ek || (ek = !0, lk.b._LinesMeshParser = (kk, Fk) => Zk.Parse(kk, Fk))
    }(Xk = Zk.prototype).enableEdgesRendering ?? (Xk.enableEdgesRendering = (0, tk.h)("LinesMesh", "enableEdgesRendering")), (Tk = jk.prototype).enableEdgesRendering ?? (Tk.enableEdgesRendering = (0, tk.h)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38666: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(38674);
    const Tk = (kk, Fk, Ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : Ik && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(Fk) : null;
    class ik {
      static DeepCopy(kk, Fk, Ik, ik) {
        let yk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lk = function(kk) {
          const Fk = [];
          do {
            const Ik = Object.getOwnPropertyNames(kk);
            for (const kk of Ik) - 1 === Fk.indexOf(kk) && Fk.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return Fk
        }(kk);
        for (const qk of lk) {
          if ("_" === qk[0] && (!ik || -1 === ik.indexOf(qk))) continue;
          if (qk.endsWith("Observable")) continue;
          if (Ik && -1 !== Ik.indexOf(qk)) continue;
          const lk = kk[qk],
            Lk = typeof lk;
          if ("function" !== Lk) try {
            if ("object" === Lk)
              if (lk instanceof Uint8Array) Fk[qk] = Uint8Array.from(lk);
              else if (lk instanceof Array) {
              if (Fk[qk] = [], lk.length > 0)
                if ("object" == typeof lk[0])
                  for (let kk = 0; kk < lk.length; kk++) {
                    const Ik = Tk(lk[kk], Fk, yk); - 1 === Fk[qk].indexOf(Ik) && Fk[qk].push(Ik)
                  } else Fk[qk] = lk.slice(0)
            } else Fk[qk] = Tk(lk, Fk, yk);
            else Fk[qk] = lk
          } catch (ak) {
            Xk.e.Warn(ak.message)
          }
        }
      }
    }
  },
  37902: (kk, Fk, Ik) => {
    function Xk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const Fk = 16 * Math.random() | 0;
        return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
      }))
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  38674: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    class Xk {
      static _CheckLimit(kk, Fk) {
        let Ik = Xk._LogLimitOutputs[kk];
        return Ik ? Ik.current++ : (Ik = {
          limit: Fk,
          current: 1
        }, Xk._LogLimitOutputs[kk] = Ik), Ik.current <= Ik.limit
      }
      static _GenerateLimitMessage(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Ik = Xk._LogLimitOutputs[kk];
        if (!Ik || !Xk.MessageLimitReached) return;
        const Tk = this._Levels[Fk];
        Ik.current === Ik.limit && Xk[Tk.name](Xk.MessageLimitReached.replace(/%LIMIT%/g, "" + Ik.limit).replace(/%TYPE%/g, Tk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Xk._LogCache = kk + Xk._LogCache, Xk.OnNewCacheEntry && Xk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
          Ik = new Date;
        return "[" + Fk(Ik.getHours()) + ":" + Fk(Ik.getMinutes()) + ":" + Fk(Ik.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, Fk) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Tk = Array.isArray(Fk) ? Fk[0] : Fk;
        if (void 0 !== Ik && !Xk._CheckLimit(Tk, Ik)) return;
        const ik = Xk._FormatMessage(Tk),
          yk = this._Levels[kk],
          lk = Array.isArray(Fk) ? Fk.slice(1) : [];
        yk.logFunc && yk.logFunc("BJS - " + ik, ...lk);
        const ak = `<div style='color:${yk.color}'>${ik}</div><br>`;
        Xk._AddLogEntry(ak), Xk._GenerateLimitMessage(Tk, kk)
      }
      static get LogCache() {
        return Xk._LogCache
      }
      static ClearLogCache() {
        Xk._LogCache = "", Xk._LogLimitOutputs = {}, Xk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Xk.Log = Xk._LogDisabled, Xk.Warn = Xk._LogDisabled, Xk.Error = Xk._LogDisabled;
        const Fk = [Xk.MessageLogLevel, Xk.WarningLogLevel, Xk.ErrorLogLevel];
        for (const Ik of Fk)
          if ((kk & Ik) === Ik) {
            const kk = this._Levels[Ik];
            Xk[kk.name] = Xk._LogEnabled.bind(Xk, Ik)
          }
      }
    }
    Xk.NoneLogLevel = 0, Xk.MessageLogLevel = 1, Xk.WarningLogLevel = 2, Xk.ErrorLogLevel = 4, Xk.AllLogLevel = 7, Xk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Xk._LogCache = "", Xk._LogLimitOutputs = {}, Xk._Levels = [{}, {
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
    }], Xk.errorsCount = 0, Xk.Log = Xk._LogEnabled.bind(Xk, Xk.MessageLogLevel), Xk.Warn = Xk._LogEnabled.bind(Xk, Xk.WarningLogLevel), Xk.Error = Xk._LogEnabled.bind(Xk, Xk.ErrorLogLevel)
  },
  40082: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk.f
    });
    var Xk = Ik(40090);
    (0, Xk.c)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);