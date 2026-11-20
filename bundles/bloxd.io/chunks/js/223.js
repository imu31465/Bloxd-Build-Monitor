export const id = 223;
export const ids = [223, 229, 232];
export const modules = {
  39656: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      h: () => bk
    });
    var Rk = Bk(38320),
      tk = Bk(39414),
      ak = Bk(39623),
      Xk = {};
    class bk {
      constructor(kk) {
        this.attachedToElement = !1, this.attached = {}, this.camera = kk, this.checkInputs = () => {}
      }
      add(kk) {
        const Fk = kk.getSimpleName();
        this.attached[Fk] ? Rk.b.Warn("camera input of type " + Fk + " already exists on camera") : (this.attached[Fk] = kk, kk.camera = this.camera, kk.checkInputs && (this.checkInputs = this._addCheckInputs(kk.checkInputs.bind(kk))), this.attachedToElement && kk.attachControl(this.noPreventDefault))
      }
      remove(kk) {
        for (const Fk in this.attached) {
          const Bk = this.attached[Fk];
          if (Bk === kk) return Bk.detachControl(), Bk.camera = null, delete this.attached[Fk], void this.rebuildInputCheck()
        }
      }
      removeByType(kk) {
        for (const Fk in this.attached) {
          const Bk = this.attached[Fk];
          Bk.getClassName() === kk && (Bk.detachControl(), Bk.camera = null, delete this.attached[Fk], this.rebuildInputCheck())
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
          kk = !ak.c.ForceAttachControlToAlwaysPreventDefault && kk, this.attachedToElement = !0, this.noPreventDefault = kk;
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
        for (const Bk in this.attached) {
          const kk = this.attached[Bk],
            Rk = tk.c.Serialize(kk);
          Fk[kk.getClassName()] = Rk
        }
        kk.inputsmgr = Fk
      }
      parse(kk) {
        const Fk = kk.inputsmgr;
        if (Fk) {
          this.clear();
          for (const kk in Fk) {
            const Bk = Xk[kk];
            if (Bk) {
              const Rk = Fk[kk],
                ak = tk.c.Parse((() => new Bk), Rk, null);
              this.add(ak)
            }
          }
        } else
          for (const Bk in this.attached) {
            const Fk = Xk[this.attached[Bk].getClassName()];
            if (Fk) {
              const Rk = tk.c.Parse((() => new Fk), kk, null);
              this.remove(this.attached[Bk]), this.add(Rk)
            }
          }
      }
    }
  },
  39659: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk.c
    });
    var Rk = Bk(39665);
    (0, Rk.d)()
  },
  39665: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => sk,
      d: () => Jk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(36758),
      Xk = Bk(36917),
      bk = Bk(39668),
      wk = Bk(39628),
      dk = Bk(36798);
    let sk = (() => {
        var kk;
        let Fk, Bk, wk = bk.d,
          dk = [],
          sk = [],
          Vk = [],
          Jk = [];
        return kk = class extends wk {
          constructor(kk, Fk, Bk, tk) {
            super(kk, Bk, tk), this.groundColor = (0, Rk.l)(this, dk, new Xk.e(0, 0, 0)), this.direction = ((0, Rk.l)(this, sk), (0, Rk.l)(this, Vk, void 0)), (0, Rk.l)(this, Jk), this.direction = Fk || ak.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(kk) {
            return this.direction = ak.s.Normalize(kk.subtract(ak.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(kk, Fk) {
            const Bk = ak.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Bk.x, Bk.y, Bk.z, 0, Fk), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Fk), this
          }
          transferToNodeMaterialEffect(kk, Fk) {
            const Bk = ak.s.Normalize(this.direction);
            return kk.setFloat3(Fk, Bk.x, Bk.y, Bk.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ak.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bk.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(kk, Fk) {
            kk["HEMILIGHT" + Fk] = !0
          }
        }, (() => {
          const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(wk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, tk.l)()], Bk = [(0, tk.K)()], (0, Rk.j)(null, null, Fk, {
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
            metadata: ak
          }, dk, sk), (0, Rk.j)(null, null, Bk, {
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
            metadata: ak
          }, Vk, Jk), ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ak
          })
        })(), kk
      })(),
      Vk = !1;

    function Jk() {
      Vk || (Vk = !0, wk.b.AddNodeConstructor("Light_Type_3", ((kk, Fk) => () => new sk(kk, ak.s.Zero(), Fk))), (0, dk.d)("BABYLON.HemisphericLight", sk))
    }
  },
  36911: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      Color3: () => Rk.e,
      c: () => Rk.i
    });
    var Rk = Bk(36917);
    (0, Rk.j)()
  },
  37459: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(37467);
    class tk {
      static GetPlanes(kk) {
        const Fk = [];
        for (let Bk = 0; Bk < 6; Bk++) Fk.push(new Rk.c(0, 0, 0, 0));
        return tk.GetPlanesToRef(kk, Fk), Fk
      }
      static GetNearPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[2], Fk.normal.y = Bk[7] + Bk[6], Fk.normal.z = Bk[11] + Bk[10], Fk.d = Bk[15] + Bk[14], Fk.normalize()
      }
      static GetFarPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[2], Fk.normal.y = Bk[7] - Bk[6], Fk.normal.z = Bk[11] - Bk[10], Fk.d = Bk[15] - Bk[14], Fk.normalize()
      }
      static GetLeftPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[0], Fk.normal.y = Bk[7] + Bk[4], Fk.normal.z = Bk[11] + Bk[8], Fk.d = Bk[15] + Bk[12], Fk.normalize()
      }
      static GetRightPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[0], Fk.normal.y = Bk[7] - Bk[4], Fk.normal.z = Bk[11] - Bk[8], Fk.d = Bk[15] - Bk[12], Fk.normalize()
      }
      static GetTopPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[1], Fk.normal.y = Bk[7] - Bk[5], Fk.normal.z = Bk[11] - Bk[9], Fk.d = Bk[15] - Bk[13], Fk.normalize()
      }
      static GetBottomPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[1], Fk.normal.y = Bk[7] + Bk[5], Fk.normal.z = Bk[11] + Bk[9], Fk.d = Bk[15] + Bk[13], Fk.normalize()
      }
      static GetPlanesToRef(kk, Fk) {
        tk.GetNearPlaneToRef(kk, Fk[0]), tk.GetFarPlaneToRef(kk, Fk[1]), tk.GetLeftPlaneToRef(kk, Fk[2]), tk.GetRightPlaneToRef(kk, Fk[3]), tk.GetTopPlaneToRef(kk, Fk[4]), tk.GetBottomPlaneToRef(kk, Fk[5])
      }
      static IsPointInFrustum(kk, Fk) {
        for (let Bk = 0; Bk < 6; Bk++)
          if (Fk[Bk].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37467: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(36758);
    class tk {
      constructor(kk, Fk, Bk, tk) {
        this.normal = new Rk.s(kk, Fk, Bk), this.d = tk
      }
      PBk() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new tk(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        const Fk = tk._TmpMatrix;
        kk.invertToRef(Fk);
        const Bk = Fk.m,
          Rk = this.normal.x,
          ak = this.normal.y,
          Xk = this.normal.z,
          bk = this.d,
          wk = Rk * Bk[0] + ak * Bk[1] + Xk * Bk[2] + bk * Bk[3],
          dk = Rk * Bk[4] + ak * Bk[5] + Xk * Bk[6] + bk * Bk[7],
          sk = Rk * Bk[8] + ak * Bk[9] + Xk * Bk[10] + bk * Bk[11],
          Vk = Rk * Bk[12] + ak * Bk[13] + Xk * Bk[14] + bk * Bk[15];
        return new tk(wk, dk, sk, Vk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, Fk, Bk) {
        const Rk = Fk.x - kk.x,
          tk = Fk.y - kk.y,
          ak = Fk.z - kk.z,
          Xk = Bk.x - kk.x,
          bk = Bk.y - kk.y,
          wk = Bk.z - kk.z,
          dk = tk * wk - ak * bk,
          sk = ak * Xk - Rk * wk,
          Vk = Rk * bk - tk * Xk,
          Jk = Math.sqrt(dk * dk + sk * sk + Vk * Vk);
        let Ak;
        return Ak = 0 !== Jk ? 1 / Jk : 0, this.normal.x = dk * Ak, this.normal.y = sk * Ak, this.normal.z = Vk * Ak, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, Fk) {
        return Rk.s.Dot(this.normal, kk) <= Fk
      }
      signedDistanceTo(kk) {
        return Rk.s.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new tk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, Fk, Bk) {
        const Rk = new tk(0, 0, 0, 0);
        return Rk.copyFromPoints(kk, Fk, Bk), Rk
      }
      static FromPositionAndNormal(kk, Fk) {
        const Bk = new tk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, Fk, Bk)
      }
      static FromPositionAndNormalToRef(kk, Fk, Bk) {
        return Bk.normal.sBk(Fk), Bk.normal.normalize(), Bk.d = -kk.dot(Bk.normal), Bk
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, Fk, Bk) {
        const tk = -(Fk.x * kk.x + Fk.y * kk.y + Fk.z * kk.z);
        return Rk.s.Dot(Bk, Fk) + tk
      }
    }
    tk._TmpMatrix = Rk.c.Identity()
  },
  36754: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      Matrix: () => Rk.c,
      Quaternion: () => Rk.e,
      RegisterMathVector: () => Rk.i,
      TmpVectors: () => Rk.l,
      Vector2: () => Rk.p,
      Qe: () => Rk.s,
      Vector4: () => Rk.v
    });
    var Rk = Bk(36758);
    (0, Rk.i)()
  },
  37759: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      constructor(kk, Fk, Bk, Rk) {
        this.x = kk, this.y = Fk, this.width = Bk, this.height = Rk
      }
      toGlobal(kk, Fk) {
        return new Rk(this.x * kk, this.y * Fk, this.width * kk, this.height * Fk)
      }
      toGlobalToRef(kk, Fk, Bk) {
        return Bk.x = this.x * kk, Bk.y = this.y * Fk, Bk.width = this.width * kk, Bk.height = this.height * Fk, this
      }
      clone() {
        return new Rk(this.x, this.y, this.width, this.height)
      }
    }
  },
  39811: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk
    });
    var Rk = Bk(36758),
      tk = Bk(36917),
      ak = Bk(39817),
      Xk = Bk(39829),
      bk = Bk(39847);

    function wk(kk) {
      let Fk = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const Bk = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        ak = [],
        wk = kk.width || kk.size || 1,
        dk = kk.height || kk.size || 1,
        sk = kk.depth || kk.size || 1,
        Vk = kk.wrap || !1;
      let Jk = void 0 === kk.topBaseAt ? 1 : kk.topBaseAt,
        Ak = void 0 === kk.bottomBaseAt ? 0 : kk.bottomBaseAt;
      Jk = (Jk + 4) % 4, Ak = (Ak + 4) % 4;
      let ek = [2, 0, 3, 1][Jk],
        yk = [2, 0, 1, 3][Ak],
        fk = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Vk) {
        Fk = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], fk = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let kk = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          Bk = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Rk = [17, 18, 19, 16],
          tk = [22, 23, 20, 21];
        for (; ek > 0;) kk.unshift(kk.pop()), Rk.unshift(Rk.pop()), ek--;
        for (; yk > 0;) Bk.unshift(Bk.pop()), tk.unshift(tk.pop()), yk--;
        kk = kk.flat(), Bk = Bk.flat(), fk = fk.concat(kk).concat(Bk), Fk.push(Rk[0], Rk[2], Rk[3], Rk[0], Rk[1], Rk[2]), Fk.push(tk[0], tk[2], tk[3], tk[0], tk[1], tk[2])
      }
      const mk = [wk / 2, dk / 2, sk / 2],
        Wk = fk.reduce(((kk, Fk, Bk) => kk.concat(Fk * mk[Bk % 3])), []),
        vk = 0 === kk.sideOrientation ? 0 : kk.sideOrientation || Xk.e.DEFAULTSIDE,
        ik = kk.faceUV || new Array(6),
        Yk = kk.faceColors,
        Lk = [];
      for (let Xk = 0; Xk < 6; Xk++) void 0 === ik[Xk] && (ik[Xk] = new Rk.v(0, 0, 1, 1)), Yk && void 0 === Yk[Xk] && (Yk[Xk] = new tk.i(1, 1, 1, 1));
      for (let Rk = 0; Rk < 6; Rk++)
        if (ak.push(ik[Rk].z, bk.c ? 1 - ik[Rk].w : ik[Rk].w), ak.push(ik[Rk].x, bk.c ? 1 - ik[Rk].w : ik[Rk].w), ak.push(ik[Rk].x, bk.c ? 1 - ik[Rk].y : ik[Rk].y), ak.push(ik[Rk].z, bk.c ? 1 - ik[Rk].y : ik[Rk].y), Yk)
          for (let kk = 0; kk < 4; kk++) Lk.push(Yk[Rk].r, Yk[Rk].g, Yk[Rk].b, Yk[Rk].a);
      Xk.e._ComputeSides(vk, Wk, Fk, Bk, ak, kk.frontUVs, kk.backUVs);
      const Ok = new Xk.e;
      if (Ok.indices = Fk, Ok.positions = Wk, Ok.normals = Bk, Ok.uvs = ak, Yk) {
        const kk = vk === Xk.e.DOUBLESIDE ? Lk.concat(Lk) : Lk;
        Ok.colors = kk
      }
      return Ok
    }

    function dk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Rk = new ak.b(kk, Bk);
      Fk.sideOrientation = ak.b._GetDefaultSideOrientation(Fk.sideOrientation), Rk._originalBuilderSideOrientation = Fk.sideOrientation;
      return wk(Fk).applyToMesh(Rk, Fk.updatable), Rk
    }
    let sk = !1;
    sk || (sk = !0, Xk.e.CreateBox = wk, ak.b.CreateBox = function(kk, Fk) {
      return dk(kk, {
        size: Fk,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39865: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Vk
    });
    var Rk = Bk(36758),
      tk = Bk(39817),
      ak = Bk(39829),
      Xk = Bk(39870),
      bk = Bk(39541),
      wk = Bk(38320);

    function dk(kk) {
      const Fk = [],
        Bk = [],
        Rk = kk.lines,
        tk = kk.colors,
        Xk = [];
      let bk = 0;
      for (let ak = 0; ak < Rk.length; ak++) {
        const kk = Rk[ak];
        for (let Rk = 0; Rk < kk.length; Rk++) {
          const {
            x: wk,
            y: dk,
            z: sk
          } = kk[Rk];
          if (Bk.push(wk, dk, sk), tk) {
            const kk = tk[ak],
              {
                r: Fk,
                g: Bk,
                b: bk,
                a: wk
              } = kk[Rk];
            Xk.push(Fk, Bk, bk, wk)
          }
          Rk > 0 && (Fk.push(bk - 1), Fk.push(bk)), bk++
        }
      }
      const wk = new ak.e;
      return wk.indices = Fk, wk.positions = Bk, tk && (wk.colors = Xk), wk
    }

    function sk(kk) {
      const Fk = kk.dashSize || 3,
        Bk = kk.gapSize || 1,
        tk = kk.dashNb || 200,
        Xk = kk.points,
        bk = [],
        wk = [],
        dk = Rk.s.Zero();
      let sk, Vk, Jk, Ak = 0,
        ek = 0;
      for (Jk = 0; Jk < Xk.length - 1; Jk++) Xk[Jk + 1].subtractToRef(Xk[Jk], dk), Ak += dk.length();
      const yk = Ak / tk,
        fk = Fk * yk / (Fk + Bk);
      for (Jk = 0; Jk < Xk.length - 1; Jk++) {
        Xk[Jk + 1].subtractToRef(Xk[Jk], dk), sk = Math.floor(dk.length() / yk), dk.normalize();
        for (let kk = 0; kk < sk; kk++) Vk = yk * kk, bk.push(Xk[Jk].x + Vk * dk.x, Xk[Jk].y + Vk * dk.y, Xk[Jk].z + Vk * dk.z), bk.push(Xk[Jk].x + (Vk + fk) * dk.x, Xk[Jk].y + (Vk + fk) * dk.y, Xk[Jk].z + (Vk + fk) * dk.z), wk.push(ek, ek + 1), ek += 2
      }
      const mk = new ak.e;
      return mk.positions = bk, mk.indices = wk, mk
    }

    function Vk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Rk = Fk.instance,
        tk = Fk.lines,
        ak = Fk.colors;
      if (Rk) {
        const kk = Rk.getVerticesData(bk.n.PositionKind);
        let Fk, Bk;
        ak && (Fk = Rk.getVerticesData(bk.n.ColorKind));
        let Xk = 0,
          wk = 0;
        for (let Rk = 0; Rk < tk.length; Rk++) {
          const bk = tk[Rk];
          for (let tk = 0; tk < bk.length; tk++) kk[Xk] = bk[tk].x, kk[Xk + 1] = bk[tk].y, kk[Xk + 2] = bk[tk].z, ak && Fk && (Bk = ak[Rk], Fk[wk] = Bk[tk].r, Fk[wk + 1] = Bk[tk].g, Fk[wk + 2] = Bk[tk].b, Fk[wk + 3] = Bk[tk].a, wk += 4), Xk += 3
        }
        return Rk.updateVerticesData(bk.n.PositionKind, kk, !1, !1), ak && Fk && Rk.updateVerticesData(bk.n.ColorKind, Fk, !1, !1), Rk.refreshBoundingInfo(), Rk
      }
      const wk = !!ak,
        sk = new Xk.e(kk, Bk, null, void 0, void 0, wk, Fk.useVertexAlpha, Fk.material);
      return dk(Fk).applyToMesh(sk, Fk.updatable), sk
    }

    function Jk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Rk = Fk.colors ? [Fk.colors] : null;
      return Vk(kk, {
        lines: [Fk.points],
        updatable: Fk.updatable,
        instance: Fk.instance,
        colors: Rk,
        useVertexAlpha: Fk.useVertexAlpha,
        material: Fk.material
      }, Bk)
    }

    function Ak(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const ak = Fk.points,
        bk = Fk.instance,
        dk = Fk.gapSize || 1,
        Vk = Fk.dashSize || 3;
      if (bk) {
        const kk = kk => {
          const Fk = Rk.s.Zero(),
            Bk = kk.length / 6;
          let tk, Xk, wk, dk, sk = 0,
            Vk = 0;
          for (wk = 0; wk < ak.length - 1; wk++) ak[wk + 1].subtractToRef(ak[wk], Fk), sk += Fk.length();
          const Jk = sk / Bk,
            Ak = bk._creationDataStorage.dashSize,
            ek = Ak * Jk / (Ak + bk._creationDataStorage.gapSize);
          for (wk = 0; wk < ak.length - 1; wk++)
            for (ak[wk + 1].subtractToRef(ak[wk], Fk), tk = Math.floor(Fk.length() / Jk), Fk.normalize(), dk = 0; dk < tk && Vk < kk.length;) Xk = Jk * dk, kk[Vk] = ak[wk].x + Xk * Fk.x, kk[Vk + 1] = ak[wk].y + Xk * Fk.y, kk[Vk + 2] = ak[wk].z + Xk * Fk.z, kk[Vk + 3] = ak[wk].x + (Xk + ek) * Fk.x, kk[Vk + 4] = ak[wk].y + (Xk + ek) * Fk.y, kk[Vk + 5] = ak[wk].z + (Xk + ek) * Fk.z, Vk += 6, dk++;
          for (; Vk < kk.length;) kk[Vk] = ak[wk].x, kk[Vk + 1] = ak[wk].y, kk[Vk + 2] = ak[wk].z, Vk += 3
        };
        return (Fk.dashNb || Fk.dashSize || Fk.gapSize || Fk.useVertexAlpha || Fk.material) && wk.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), bk.updateMeshPositions(kk, !1), bk
      }
      const Jk = new Xk.e(kk, Bk, null, void 0, void 0, void 0, Fk.useVertexAlpha, Fk.material);
      return sk(Fk).applyToMesh(Jk, Fk.updatable), Jk._creationDataStorage = new tk.e, Jk._creationDataStorage.dashSize = Vk, Jk._creationDataStorage.gapSize = dk, Jk
    }
    let ek = !1;
    ek || (ek = !0, ak.e.CreateLineSystem = dk, ak.e.CreateDashedLines = sk, tk.b.CreateLines = function(kk, Fk) {
      return Jk(kk, {
        points: Fk,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, tk.b.CreateDashedLines = function(kk, Fk, Bk, Rk, tk) {
      return Ak(kk, {
        points: Fk,
        dashSize: Bk,
        gapSize: Rk,
        dashNb: tk,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39870: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Jk,
      f: () => yk
    });
    var Rk, tk, ak = Bk(36917),
      Xk = Bk(39541),
      bk = Bk(39817),
      wk = Bk(39879),
      dk = Bk(39695),
      sk = Bk(39887),
      Vk = Bk(39296);
    class Jk extends bk.b {
      _isShaderMaterial(kk) {
        return !!kk && "ShaderMaterial" === kk.getClassName()
      }
      constructor(kk) {
        let Fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Rk = arguments.length > 5 ? arguments[5] : void 0,
          tk = arguments.length > 6 ? arguments[6] : void 0,
          bk = arguments.length > 7 ? arguments[7] : void 0;
        super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Fk, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Rk, this.useVertexAlpha = tk, this.color = new ak.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Fk && (this.color = Fk.color.clone(), this.alpha = Fk.alpha, this.useVertexColor = Fk.useVertexColor, this.useVertexAlpha = Fk.useVertexAlpha), this.intersectionThreshold = .1;
        const wk = {
          attributes: [Xk.n.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? wk.defines.push("#define VERTEXALPHA") : wk.needAlphaBlending = !1, this.useVertexColor ? (wk.defines.push("#define VERTEXCOLOR"), wk.attributes.push(Xk.n.ColorKind)) : (wk.uniforms.push("color"), this._color4 = new ak.i), bk) this.material = bk;
        else {
          this.XN().ne().isWebGPU && !Jk.ForceGLSL && (this._shaderLanguage = 1), wk.shaderLanguage = this._shaderLanguage, wk.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Bk.e(334).then((() => Bk(41975))), Bk.e(340).then((() => Bk(41977)))]) : await Promise.all([Bk.e(316).then((() => Bk(41980))), Bk.e(322).then((() => Bk(41983)))])
          };
          const kk = new sk.n("colorShader", this.XN(), "color", wk, !1);
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
        const Bk = Fk && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(kk), Bk && Fk?.dispose()
      }
      _setInternalMaterial(kk) {
        this._setMaterial(kk), this.material && (this.material.fillMode = dk.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(kk) {}
      _bind(kk, Fk) {
        if (!this._geometry) return this;
        const Bk = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Fk, Bk) : this._geometry._bind(Fk, Bk, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: kk,
            g: Fk,
            b: Bk
          } = this.color;
          this._color4.set(kk, Fk, Bk, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(kk, Fk, Bk) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Rk = this.XN().ne();
        return this._unIndexed ? Rk.drawArraysType(dk.c.LineListDrawMode, kk.verticesStart, kk.verticesCount, Bk) : Rk.drawElementsType(dk.c.LineListDrawMode, kk.indexStart, kk.indexCount, Bk), this
      }
      dispose(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Fk) && this.material?.dispose(!1, !1, !0), super.dispose(kk)
      }
      clone(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        if (Fk && void 0 === Fk._addToSceneRootNodes) {
          const Bk = Fk;
          return Bk.source = this, new Jk(kk, this.XN(), Bk.parent, Bk.source, Bk.doNotCloneChildren)
        }
        return new Jk(kk, this.XN(), Fk, this, Bk)
      }
      createInstance(kk) {
        const Fk = new Ak(kk, this);
        if (this.gH) {
          Fk.gH = {};
          for (const kk in this.gH) Fk.gH[kk] = this.gH[kk]
        }
        return Fk
      }
      serialize(kk) {
        super.serialize(kk), kk.color = this.color.PBk(), kk.alpha = this.alpha
      }
      static Parse(kk, Fk) {
        const Bk = new Jk(kk.name, Fk);
        return Bk.color = ak.e.FromArray(kk.color), Bk.alpha = kk.alpha, Bk
      }
    }
    Jk.ForceGLSL = !1;
    class Ak extends wk.b {
      constructor(kk, Fk) {
        super(kk, Fk), this.intersectionThreshold = Fk.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let ek = !1;

    function yk() {
      ek || (ek = !0, bk.b._LinesMeshParser = (kk, Fk) => Jk.Parse(kk, Fk))
    }(Rk = Jk.prototype).enableEdgesRendering ?? (Rk.enableEdgesRendering = (0, Vk.g)("LinesMesh", "enableEdgesRendering")), (tk = Ak.prototype).enableEdgesRendering ?? (tk.enableEdgesRendering = (0, Vk.g)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38318: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(38320);
    const tk = (kk, Fk, Bk) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : Bk && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(Fk) : null;
    class ak {
      static DeepCopy(kk, Fk, Bk, ak) {
        let Xk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bk = function(kk) {
          const Fk = [];
          do {
            const Bk = Object.getOwnPropertyNames(kk);
            for (const kk of Bk) - 1 === Fk.indexOf(kk) && Fk.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return Fk
        }(kk);
        for (const dk of bk) {
          if ("_" === dk[0] && (!ak || -1 === ak.indexOf(dk))) continue;
          if (dk.endsWith("Observable")) continue;
          if (Bk && -1 !== Bk.indexOf(dk)) continue;
          const bk = kk[dk],
            sk = typeof bk;
          if ("function" !== sk) try {
            if ("object" === sk)
              if (bk instanceof Uint8Array) Fk[dk] = Uint8Array.from(bk);
              else if (bk instanceof Array) {
              if (Fk[dk] = [], bk.length > 0)
                if ("object" == typeof bk[0])
                  for (let kk = 0; kk < bk.length; kk++) {
                    const Bk = tk(bk[kk], Fk, Xk); - 1 === Fk[dk].indexOf(Bk) && Fk[dk].push(Bk)
                  } else Fk[dk] = bk.slice(0)
            } else Fk[dk] = tk(bk, Fk, Xk);
            else Fk[dk] = bk
          } catch (wk) {
            Rk.b.Warn(wk.message)
          }
        }
      }
    }
  },
  37578: (kk, Fk, Bk) => {
    function Rk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const Fk = 16 * Math.random() | 0;
        return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
      }))
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  38320: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk
    });
    class Rk {
      static _CheckLimit(kk, Fk) {
        let Bk = Rk._LogLimitOutputs[kk];
        return Bk ? Bk.current++ : (Bk = {
          limit: Fk,
          current: 1
        }, Rk._LogLimitOutputs[kk] = Bk), Bk.current <= Bk.limit
      }
      static _GenerateLimitMessage(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Bk = Rk._LogLimitOutputs[kk];
        if (!Bk || !Rk.MessageLimitReached) return;
        const tk = this._Levels[Fk];
        Bk.current === Bk.limit && Rk[tk.name](Rk.MessageLimitReached.replace(/%LIMIT%/g, "" + Bk.limit).replace(/%TYPE%/g, tk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Rk._LogCache = kk + Rk._LogCache, Rk.OnNewCacheEntry && Rk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
          Bk = new Date;
        return "[" + Fk(Bk.getHours()) + ":" + Fk(Bk.getMinutes()) + ":" + Fk(Bk.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, Fk) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const tk = Array.isArray(Fk) ? Fk[0] : Fk;
        if (void 0 !== Bk && !Rk._CheckLimit(tk, Bk)) return;
        const ak = Rk._FormatMessage(tk),
          Xk = this._Levels[kk],
          bk = Array.isArray(Fk) ? Fk.slice(1) : [];
        Xk.logFunc && Xk.logFunc("BJS - " + ak, ...bk);
        const wk = `<div style='color:${Xk.color}'>${ak}</div><br>`;
        Rk._AddLogEntry(wk), Rk._GenerateLimitMessage(tk, kk)
      }
      static get LogCache() {
        return Rk._LogCache
      }
      static ClearLogCache() {
        Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Rk.Log = Rk._LogDisabled, Rk.Warn = Rk._LogDisabled, Rk.Error = Rk._LogDisabled;
        const Fk = [Rk.MessageLogLevel, Rk.WarningLogLevel, Rk.ErrorLogLevel];
        for (const Bk of Fk)
          if ((kk & Bk) === Bk) {
            const kk = this._Levels[Bk];
            Rk[kk.name] = Rk._LogEnabled.bind(Rk, Bk)
          }
      }
    }
    Rk.NoneLogLevel = 0, Rk.MessageLogLevel = 1, Rk.WarningLogLevel = 2, Rk.ErrorLogLevel = 4, Rk.AllLogLevel = 7, Rk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk._Levels = [{}, {
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
    }], Rk.errorsCount = 0, Rk.Log = Rk._LogEnabled.bind(Rk, Rk.MessageLogLevel), Rk.Warn = Rk._LogEnabled.bind(Rk, Rk.WarningLogLevel), Rk.Error = Rk._LogEnabled.bind(Rk, Rk.ErrorLogLevel)
  },
  39486: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk.c
    });
    var Rk = Bk(39489);
    (0, Rk.b)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);