export const id = 262;
export const ids = [262, 268, 273];
export const modules = {
  42080: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => Ir
    });
    var Zr = Qr(40246),
      Wr = Qr(41889),
      ar = Qr(42057),
      jr = {};
    class Ir {
      constructor(rr) {
        this.attachedToElement = !1, this.attached = {}, this.camera = rr, this.checkInputs = () => {}
      }
      add(rr) {
        const Sr = rr.getSimpleName();
        this.attached[Sr] ? Zr.c.Warn("camera input of type " + Sr + " already exists on camera") : (this.attached[Sr] = rr, rr.camera = this.camera, rr.checkInputs && (this.checkInputs = this._addCheckInputs(rr.checkInputs.bind(rr))), this.attachedToElement && rr.attachControl(this.noPreventDefault))
      }
      remove(rr) {
        for (const Sr in this.attached) {
          const Qr = this.attached[Sr];
          if (Qr === rr) return Qr.detachControl(), Qr.camera = null, delete this.attached[Sr], void this.rebuildInputCheck()
        }
      }
      removeByType(rr) {
        for (const Sr in this.attached) {
          const Qr = this.attached[Sr];
          Qr.getClassName() === rr && (Qr.detachControl(), Qr.camera = null, delete this.attached[Sr], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(rr) {
        const Sr = this.checkInputs;
        return () => {
          Sr(), rr()
        }
      }
      attachInput(rr) {
        this.attachedToElement && rr.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          rr = !ar.d.ForceAttachControlToAlwaysPreventDefault && rr, this.attachedToElement = !0, this.noPreventDefault = rr;
          for (const Sr in this.attached) this.attached[Sr].attachControl(rr)
        }
      }
      detachElement() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Sr in this.attached) this.attached[Sr].detachControl(), rr && (this.attached[Sr].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const rr in this.attached) {
          const Sr = this.attached[rr];
          Sr.checkInputs && (this.checkInputs = this._addCheckInputs(Sr.checkInputs.bind(Sr)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(rr) {
        const Sr = {};
        for (const Qr in this.attached) {
          const rr = this.attached[Qr],
            Zr = Wr.e.Serialize(rr);
          Sr[rr.getClassName()] = Zr
        }
        rr.inputsmgr = Sr
      }
      parse(rr) {
        const Sr = rr.inputsmgr;
        if (Sr) {
          this.clear();
          for (const rr in Sr) {
            const Qr = jr[rr];
            if (Qr) {
              const Zr = Sr[rr],
                ar = Wr.e.Parse((() => new Qr), Zr, null);
              this.add(ar)
            }
          }
        } else
          for (const Qr in this.attached) {
            const Sr = jr[this.attached[Qr].getClassName()];
            if (Sr) {
              const Zr = Wr.e.Parse((() => new Sr), rr, null);
              this.remove(this.attached[Qr]), this.add(Zr)
            }
          }
      }
    }
  },
  42085: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr.c
    });
    var Zr = Qr(42090);
    (0, Zr.f)()
  },
  42090: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => pr,
      f: () => mr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(38560),
      jr = Qr(38684),
      Ir = Qr(42094),
      fr = Qr(42060),
      Er = Qr(38609);
    let pr = (() => {
        var rr;
        let Sr, Qr, fr = Ir.c,
          Er = [],
          pr = [],
          xr = [],
          mr = [];
        return rr = class extends fr {
          constructor(rr, Sr, Qr, Wr) {
            super(rr, Qr, Wr), this.groundColor = (0, Zr.m)(this, Er, new jr.e(0, 0, 0)), this.direction = ((0, Zr.m)(this, pr), (0, Zr.m)(this, xr, void 0)), (0, Zr.m)(this, mr), this.direction = Sr || ar.u.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(rr) {
            return this.direction = ar.u.Normalize(rr.subtract(ar.u.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(rr, Sr) {
            const Qr = ar.u.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Qr.x, Qr.y, Qr.z, 0, Sr), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Sr), this
          }
          transferToNodeMaterialEffect(rr, Sr) {
            const Qr = ar.u.Normalize(this.direction);
            return rr.setFloat3(Sr, Qr.x, Qr.y, Qr.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ar.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ir.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(rr, Sr) {
            rr["HEMILIGHT" + Sr] = !0
          }
        }, (() => {
          const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(fr[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, Wr.n)()], Qr = [(0, Wr.C)()], (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "groundColor" in rr,
              get: rr => rr.groundColor,
              set: (rr, Sr) => {
                rr.groundColor = Sr
              }
            },
            metadata: ar
          }, Er, pr), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: rr => "direction" in rr,
              get: rr => rr.direction,
              set: (rr, Sr) => {
                rr.direction = Sr
              }
            },
            metadata: ar
          }, xr, mr), ar && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ar
          })
        })(), rr
      })(),
      xr = !1;

    function mr() {
      xr || (xr = !0, fr.c.AddNodeConstructor("Light_Type_3", ((rr, Sr) => () => new pr(rr, ar.u.Zero(), Sr))), (0, Er.e)("BABYLON.HemisphericLight", pr))
    }
  },
  38679: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      Color3: () => Zr.e,
      d: () => Zr.f
    });
    var Zr = Qr(38684);
    (0, Zr.h)()
  },
  39262: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(39264);
    class Wr {
      static GetPlanes(rr) {
        const Sr = [];
        for (let Qr = 0; Qr < 6; Qr++) Sr.push(new Zr.d(0, 0, 0, 0));
        return Wr.GetPlanesToRef(rr, Sr), Sr
      }
      static GetNearPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[2], Sr.normal.y = Qr[7] + Qr[6], Sr.normal.z = Qr[11] + Qr[10], Sr.d = Qr[15] + Qr[14], Sr.normalize()
      }
      static GetFarPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[2], Sr.normal.y = Qr[7] - Qr[6], Sr.normal.z = Qr[11] - Qr[10], Sr.d = Qr[15] - Qr[14], Sr.normalize()
      }
      static GetLeftPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[0], Sr.normal.y = Qr[7] + Qr[4], Sr.normal.z = Qr[11] + Qr[8], Sr.d = Qr[15] + Qr[12], Sr.normalize()
      }
      static GetRightPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[0], Sr.normal.y = Qr[7] - Qr[4], Sr.normal.z = Qr[11] - Qr[8], Sr.d = Qr[15] - Qr[12], Sr.normalize()
      }
      static GetTopPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[1], Sr.normal.y = Qr[7] - Qr[5], Sr.normal.z = Qr[11] - Qr[9], Sr.d = Qr[15] - Qr[13], Sr.normalize()
      }
      static GetBottomPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[1], Sr.normal.y = Qr[7] + Qr[5], Sr.normal.z = Qr[11] + Qr[9], Sr.d = Qr[15] + Qr[13], Sr.normalize()
      }
      static GetPlanesToRef(rr, Sr) {
        Wr.GetNearPlaneToRef(rr, Sr[0]), Wr.GetFarPlaneToRef(rr, Sr[1]), Wr.GetLeftPlaneToRef(rr, Sr[2]), Wr.GetRightPlaneToRef(rr, Sr[3]), Wr.GetTopPlaneToRef(rr, Sr[4]), Wr.GetBottomPlaneToRef(rr, Sr[5])
      }
      static IsPointInFrustum(rr, Sr) {
        for (let Qr = 0; Qr < 6; Qr++)
          if (Sr[Qr].dotCoordinate(rr) < 0) return !1;
        return !0
      }
    }
  },
  39264: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(38560);
    class Wr {
      constructor(rr, Sr, Qr, Wr) {
        this.normal = new Zr.u(rr, Sr, Qr), this.d = Wr
      }
      OWr() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wr(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let rr = this.normal.getHashCode();
        return rr = 397 * rr ^ this.d, rr
      }
      normalize() {
        const rr = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Sr = 0;
        return 0 !== rr && (Sr = 1 / rr), this.normal.x *= Sr, this.normal.y *= Sr, this.normal.z *= Sr, this.d *= Sr, this
      }
      transform(rr) {
        const Sr = Wr._TmpMatrix;
        rr.invertToRef(Sr);
        const Qr = Sr.m,
          Zr = this.normal.x,
          ar = this.normal.y,
          jr = this.normal.z,
          Ir = this.d,
          fr = Zr * Qr[0] + ar * Qr[1] + jr * Qr[2] + Ir * Qr[3],
          Er = Zr * Qr[4] + ar * Qr[5] + jr * Qr[6] + Ir * Qr[7],
          pr = Zr * Qr[8] + ar * Qr[9] + jr * Qr[10] + Ir * Qr[11],
          xr = Zr * Qr[12] + ar * Qr[13] + jr * Qr[14] + Ir * Qr[15];
        return new Wr(fr, Er, pr, xr)
      }
      dotCoordinate(rr) {
        return this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z + this.d
      }
      copyFromPoints(rr, Sr, Qr) {
        const Zr = Sr.x - rr.x,
          Wr = Sr.y - rr.y,
          ar = Sr.z - rr.z,
          jr = Qr.x - rr.x,
          Ir = Qr.y - rr.y,
          fr = Qr.z - rr.z,
          Er = Wr * fr - ar * Ir,
          pr = ar * jr - Zr * fr,
          xr = Zr * Ir - Wr * jr,
          mr = Math.sqrt(Er * Er + pr * pr + xr * xr);
        let Nr;
        return Nr = 0 !== mr ? 1 / mr : 0, this.normal.x = Er * Nr, this.normal.y = pr * Nr, this.normal.z = xr * Nr, this.d = -(this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z), this
      }
      isFrontFacingTo(rr, Sr) {
        return Zr.u.Dot(this.normal, rr) <= Sr
      }
      signedDistanceTo(rr) {
        return Zr.u.Dot(rr, this.normal) + this.d
      }
      static FromArray(rr) {
        return new Wr(rr[0], rr[1], rr[2], rr[3])
      }
      static FromPoints(rr, Sr, Qr) {
        const Zr = new Wr(0, 0, 0, 0);
        return Zr.copyFromPoints(rr, Sr, Qr), Zr
      }
      static FromPositionAndNormal(rr, Sr) {
        const Qr = new Wr(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(rr, Sr, Qr)
      }
      static FromPositionAndNormalToRef(rr, Sr, Qr) {
        return Qr.normal.iH(Sr), Qr.normal.normalize(), Qr.d = -rr.dot(Qr.normal), Qr
      }
      static SignedDistanceToPlaneFromPositionAndNormal(rr, Sr, Qr) {
        const Wr = -(Sr.x * rr.x + Sr.y * rr.y + Sr.z * rr.z);
        return Zr.u.Dot(Qr, Sr) + Wr
      }
    }
    Wr._TmpMatrix = Zr.d.Identity()
  },
  38555: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      Matrix: () => Zr.d,
      Quaternion: () => Zr.h,
      RegisterMathVector: () => Zr.k,
      TmpVectors: () => Zr.n,
      Vector2: () => Zr.q,
      kU: () => Zr.u,
      Vector4: () => Zr.x
    });
    var Zr = Qr(38560);
    (0, Zr.k)()
  },
  39607: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    class Zr {
      constructor(rr, Sr, Qr, Zr) {
        this.x = rr, this.y = Sr, this.width = Qr, this.height = Zr
      }
      toGlobal(rr, Sr) {
        return new Zr(this.x * rr, this.y * Sr, this.width * rr, this.height * Sr)
      }
      toGlobalToRef(rr, Sr, Qr) {
        return Qr.x = this.x * rr, Qr.y = this.y * Sr, Qr.width = this.width * rr, Qr.height = this.height * Sr, this
      }
      clone() {
        return new Zr(this.x, this.y, this.width, this.height)
      }
    }
  },
  42236: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Er
    });
    var Zr = Qr(38560),
      Wr = Qr(38684),
      ar = Qr(42243),
      jr = Qr(42256),
      Ir = Qr(42275);

    function fr(rr) {
      let Sr = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const Qr = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        ar = [],
        fr = rr.width || rr.size || 1,
        Er = rr.height || rr.size || 1,
        pr = rr.depth || rr.size || 1,
        xr = rr.wrap || !1;
      let mr = void 0 === rr.topBaseAt ? 1 : rr.topBaseAt,
        Nr = void 0 === rr.bottomBaseAt ? 0 : rr.bottomBaseAt;
      mr = (mr + 4) % 4, Nr = (Nr + 4) % 4;
      let Ur = [2, 0, 3, 1][mr],
        tr = [2, 0, 1, 3][Nr],
        hr = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (xr) {
        Sr = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], hr = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let rr = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          Qr = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Zr = [17, 18, 19, 16],
          Wr = [22, 23, 20, 21];
        for (; Ur > 0;) rr.unshift(rr.pop()), Zr.unshift(Zr.pop()), Ur--;
        for (; tr > 0;) Qr.unshift(Qr.pop()), Wr.unshift(Wr.pop()), tr--;
        rr = rr.flat(), Qr = Qr.flat(), hr = hr.concat(rr).concat(Qr), Sr.push(Zr[0], Zr[2], Zr[3], Zr[0], Zr[1], Zr[2]), Sr.push(Wr[0], Wr[2], Wr[3], Wr[0], Wr[1], Wr[2])
      }
      const zr = [fr / 2, Er / 2, pr / 2],
        Yr = hr.reduce(((rr, Sr, Qr) => rr.concat(Sr * zr[Qr % 3])), []),
        nr = 0 === rr.sideOrientation ? 0 : rr.sideOrientation || jr.b.DEFAULTSIDE,
        er = rr.faceUV || new Array(6),
        Kr = rr.faceColors,
        yr = [];
      for (let jr = 0; jr < 6; jr++) void 0 === er[jr] && (er[jr] = new Zr.x(0, 0, 1, 1)), Kr && void 0 === Kr[jr] && (Kr[jr] = new Wr.f(1, 1, 1, 1));
      for (let Zr = 0; Zr < 6; Zr++)
        if (ar.push(er[Zr].z, Ir.b ? 1 - er[Zr].w : er[Zr].w), ar.push(er[Zr].x, Ir.b ? 1 - er[Zr].w : er[Zr].w), ar.push(er[Zr].x, Ir.b ? 1 - er[Zr].y : er[Zr].y), ar.push(er[Zr].z, Ir.b ? 1 - er[Zr].y : er[Zr].y), Kr)
          for (let rr = 0; rr < 4; rr++) yr.push(Kr[Zr].r, Kr[Zr].g, Kr[Zr].b, Kr[Zr].a);
      jr.b._ComputeSides(nr, Yr, Sr, Qr, ar, rr.frontUVs, rr.backUVs);
      const Br = new jr.b;
      if (Br.indices = Sr, Br.positions = Yr, Br.normals = Qr, Br.uvs = ar, Kr) {
        const rr = nr === jr.b.DOUBLESIDE ? yr.concat(yr) : yr;
        Br.colors = rr
      }
      return Br
    }

    function Er(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Zr = new ar.c(rr, Qr);
      Sr.sideOrientation = ar.c._GetDefaultSideOrientation(Sr.sideOrientation), Zr._originalBuilderSideOrientation = Sr.sideOrientation;
      return fr(Sr).applyToMesh(Zr, Sr.updatable), Zr
    }
    let pr = !1;
    pr || (pr = !0, jr.b.CreateBox = fr, ar.c.CreateBox = function(rr, Sr) {
      return Er(rr, {
        size: Sr,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  42295: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => xr
    });
    var Zr = Qr(38560),
      Wr = Qr(42243),
      ar = Qr(42256),
      jr = Qr(42297),
      Ir = Qr(41995),
      fr = Qr(40246);

    function Er(rr) {
      const Sr = [],
        Qr = [],
        Zr = rr.lines,
        Wr = rr.colors,
        jr = [];
      let Ir = 0;
      for (let ar = 0; ar < Zr.length; ar++) {
        const rr = Zr[ar];
        for (let Zr = 0; Zr < rr.length; Zr++) {
          const {
            x: fr,
            y: Er,
            z: pr
          } = rr[Zr];
          if (Qr.push(fr, Er, pr), Wr) {
            const rr = Wr[ar],
              {
                r: Sr,
                g: Qr,
                b: Ir,
                a: fr
              } = rr[Zr];
            jr.push(Sr, Qr, Ir, fr)
          }
          Zr > 0 && (Sr.push(Ir - 1), Sr.push(Ir)), Ir++
        }
      }
      const fr = new ar.b;
      return fr.indices = Sr, fr.positions = Qr, Wr && (fr.colors = jr), fr
    }

    function pr(rr) {
      const Sr = rr.dashSize || 3,
        Qr = rr.gapSize || 1,
        Wr = rr.dashNb || 200,
        jr = rr.points,
        Ir = [],
        fr = [],
        Er = Zr.u.Zero();
      let pr, xr, mr, Nr = 0,
        Ur = 0;
      for (mr = 0; mr < jr.length - 1; mr++) jr[mr + 1].subtractToRef(jr[mr], Er), Nr += Er.length();
      const tr = Nr / Wr,
        hr = Sr * tr / (Sr + Qr);
      for (mr = 0; mr < jr.length - 1; mr++) {
        jr[mr + 1].subtractToRef(jr[mr], Er), pr = Math.floor(Er.length() / tr), Er.normalize();
        for (let rr = 0; rr < pr; rr++) xr = tr * rr, Ir.push(jr[mr].x + xr * Er.x, jr[mr].y + xr * Er.y, jr[mr].z + xr * Er.z), Ir.push(jr[mr].x + (xr + hr) * Er.x, jr[mr].y + (xr + hr) * Er.y, jr[mr].z + (xr + hr) * Er.z), fr.push(Ur, Ur + 1), Ur += 2
      }
      const zr = new ar.b;
      return zr.positions = Ir, zr.indices = fr, zr
    }

    function xr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Zr = Sr.instance,
        Wr = Sr.lines,
        ar = Sr.colors;
      if (Zr) {
        const rr = Zr.getVerticesData(Ir.j.PositionKind);
        let Sr, Qr;
        ar && (Sr = Zr.getVerticesData(Ir.j.ColorKind));
        let jr = 0,
          fr = 0;
        for (let Zr = 0; Zr < Wr.length; Zr++) {
          const Ir = Wr[Zr];
          for (let Wr = 0; Wr < Ir.length; Wr++) rr[jr] = Ir[Wr].x, rr[jr + 1] = Ir[Wr].y, rr[jr + 2] = Ir[Wr].z, ar && Sr && (Qr = ar[Zr], Sr[fr] = Qr[Wr].r, Sr[fr + 1] = Qr[Wr].g, Sr[fr + 2] = Qr[Wr].b, Sr[fr + 3] = Qr[Wr].a, fr += 4), jr += 3
        }
        return Zr.updateVerticesData(Ir.j.PositionKind, rr, !1, !1), ar && Sr && Zr.updateVerticesData(Ir.j.ColorKind, Sr, !1, !1), Zr.refreshBoundingInfo(), Zr
      }
      const fr = !!ar,
        pr = new jr.b(rr, Qr, null, void 0, void 0, fr, Sr.useVertexAlpha, Sr.material);
      return Er(Sr).applyToMesh(pr, Sr.updatable), pr
    }

    function mr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Zr = Sr.colors ? [Sr.colors] : null;
      return xr(rr, {
        lines: [Sr.points],
        updatable: Sr.updatable,
        instance: Sr.instance,
        colors: Zr,
        useVertexAlpha: Sr.useVertexAlpha,
        material: Sr.material
      }, Qr)
    }

    function Nr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const ar = Sr.points,
        Ir = Sr.instance,
        Er = Sr.gapSize || 1,
        xr = Sr.dashSize || 3;
      if (Ir) {
        const rr = rr => {
          const Sr = Zr.u.Zero(),
            Qr = rr.length / 6;
          let Wr, jr, fr, Er, pr = 0,
            xr = 0;
          for (fr = 0; fr < ar.length - 1; fr++) ar[fr + 1].subtractToRef(ar[fr], Sr), pr += Sr.length();
          const mr = pr / Qr,
            Nr = Ir._creationDataStorage.dashSize,
            Ur = Nr * mr / (Nr + Ir._creationDataStorage.gapSize);
          for (fr = 0; fr < ar.length - 1; fr++)
            for (ar[fr + 1].subtractToRef(ar[fr], Sr), Wr = Math.floor(Sr.length() / mr), Sr.normalize(), Er = 0; Er < Wr && xr < rr.length;) jr = mr * Er, rr[xr] = ar[fr].x + jr * Sr.x, rr[xr + 1] = ar[fr].y + jr * Sr.y, rr[xr + 2] = ar[fr].z + jr * Sr.z, rr[xr + 3] = ar[fr].x + (jr + Ur) * Sr.x, rr[xr + 4] = ar[fr].y + (jr + Ur) * Sr.y, rr[xr + 5] = ar[fr].z + (jr + Ur) * Sr.z, xr += 6, Er++;
          for (; xr < rr.length;) rr[xr] = ar[fr].x, rr[xr + 1] = ar[fr].y, rr[xr + 2] = ar[fr].z, xr += 3
        };
        return (Sr.dashNb || Sr.dashSize || Sr.gapSize || Sr.useVertexAlpha || Sr.material) && fr.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Ir.updateMeshPositions(rr, !1), Ir
      }
      const mr = new jr.b(rr, Qr, null, void 0, void 0, void 0, Sr.useVertexAlpha, Sr.material);
      return pr(Sr).applyToMesh(mr, Sr.updatable), mr._creationDataStorage = new Wr.i, mr._creationDataStorage.dashSize = xr, mr._creationDataStorage.gapSize = Er, mr
    }
    let Ur = !1;
    Ur || (Ur = !0, ar.b.CreateLineSystem = Er, ar.b.CreateDashedLines = pr, Wr.c.CreateLines = function(rr, Sr) {
      return mr(rr, {
        points: Sr,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Wr.c.CreateDashedLines = function(rr, Sr, Qr, Zr, Wr) {
      return Nr(rr, {
        points: Sr,
        dashSize: Qr,
        gapSize: Zr,
        dashNb: Wr,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  42297: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => mr,
      c: () => tr
    });
    var Zr, Wr, ar = Qr(38684),
      jr = Qr(41995),
      Ir = Qr(42243),
      fr = Qr(42299),
      Er = Qr(42130),
      pr = Qr(42308),
      xr = Qr(41769);
    class mr extends Ir.c {
      _isShaderMaterial(rr) {
        return !!rr && "ShaderMaterial" === rr.getClassName()
      }
      constructor(rr) {
        let Sr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Zr = arguments.length > 5 ? arguments[5] : void 0,
          Wr = arguments.length > 6 ? arguments[6] : void 0,
          Ir = arguments.length > 7 ? arguments[7] : void 0;
        super(rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Sr, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Zr, this.useVertexAlpha = Wr, this.color = new ar.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Sr && (this.color = Sr.color.clone(), this.alpha = Sr.alpha, this.useVertexColor = Sr.useVertexColor, this.useVertexAlpha = Sr.useVertexAlpha), this.intersectionThreshold = .1;
        const fr = {
          attributes: [jr.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? fr.defines.push("#define VERTEXALPHA") : fr.needAlphaBlending = !1, this.useVertexColor ? (fr.defines.push("#define VERTEXCOLOR"), fr.attributes.push(jr.j.ColorKind)) : (fr.uniforms.push("color"), this._color4 = new ar.f), Ir) this.material = Ir;
        else {
          this.eC().MU().isWebGPU && !mr.ForceGLSL && (this._shaderLanguage = 1), fr.shaderLanguage = this._shaderLanguage, fr.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Qr.e(663).then((() => Qr(55069))), Qr.e(669).then((() => Qr(55072)))]) : await Promise.all([Qr.e(645).then((() => Qr(55079))), Qr.e(651).then((() => Qr(55084)))])
          };
          const rr = new pr.o("colorShader", this.eC(), "color", fr, !1);
          rr.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(rr)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(rr) {
        const Sr = this.material;
        if (Sr === rr) return;
        const Qr = Sr && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(rr), Qr && Sr?.dispose()
      }
      _setInternalMaterial(rr) {
        this._setMaterial(rr), this.material && (this.material.fillMode = Er.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(rr) {}
      _bind(rr, Sr) {
        if (!this._geometry) return this;
        const Qr = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Sr, Qr) : this._geometry._bind(Sr, Qr, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: rr,
            g: Sr,
            b: Qr
          } = this.color;
          this._color4.set(rr, Sr, Qr, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(rr, Sr, Qr) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Zr = this.eC().MU();
        return this._unIndexed ? Zr.drawArraysType(Er.d.LineListDrawMode, rr.verticesStart, rr.verticesCount, Qr) : Zr.drawElementsType(Er.d.LineListDrawMode, rr.indexStart, rr.indexCount, Qr), this
      }
      dispose(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Sr) && this.material?.dispose(!1, !1, !0), super.dispose(rr)
      }
      clone(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        if (Sr && void 0 === Sr._addToSceneRootNodes) {
          const Qr = Sr;
          return Qr.source = this, new mr(rr, this.eC(), Qr.parent, Qr.source, Qr.doNotCloneChildren)
        }
        return new mr(rr, this.eC(), Sr, this, Qr)
      }
      createInstance(rr) {
        const Sr = new Nr(rr, this);
        if (this.pG) {
          Sr.pG = {};
          for (const rr in this.pG) Sr.pG[rr] = this.pG[rr]
        }
        return Sr
      }
      serialize(rr) {
        super.serialize(rr), rr.color = this.color.OWr(), rr.alpha = this.alpha
      }
      static Parse(rr, Sr) {
        const Qr = new mr(rr.name, Sr);
        return Qr.color = ar.e.FromArray(rr.color), Qr.alpha = rr.alpha, Qr
      }
    }
    mr.ForceGLSL = !1;
    class Nr extends fr.e {
      constructor(rr, Sr) {
        super(rr, Sr), this.intersectionThreshold = Sr.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Ur = !1;

    function tr() {
      Ur || (Ur = !0, Ir.c._LinesMeshParser = (rr, Sr) => mr.Parse(rr, Sr))
    }(Zr = mr.prototype).enableEdgesRendering ?? (Zr.enableEdgesRendering = (0, xr.h)("LinesMesh", "enableEdgesRendering")), (Wr = Nr.prototype).enableEdgesRendering ?? (Wr.enableEdgesRendering = (0, xr.h)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  40237: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(40246);
    const Wr = (rr, Sr, Qr) => rr ? rr.getClassName && "Mesh" === rr.getClassName() ? null : !rr.getClassName || "SubMesh" !== rr.getClassName() && "PhysicsBody" !== rr.getClassName() ? rr.clone ? rr.clone() : Array.isArray(rr) ? rr.slice() : Qr && "object" === typeof rr ? {
      ...rr
    } : null : rr.clone(Sr) : null;
    class ar {
      static DeepCopy(rr, Sr, Qr, ar) {
        let jr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ir = function(rr) {
          const Sr = [];
          do {
            const Qr = Object.getOwnPropertyNames(rr);
            for (const rr of Qr) - 1 === Sr.indexOf(rr) && Sr.push(rr)
          } while (rr = Object.getPrototypeOf(rr));
          return Sr
        }(rr);
        for (const Er of Ir) {
          if ("_" === Er[0] && (!ar || -1 === ar.indexOf(Er))) continue;
          if (Er.endsWith("Observable")) continue;
          if (Qr && -1 !== Qr.indexOf(Er)) continue;
          const Ir = rr[Er],
            pr = typeof Ir;
          if ("function" !== pr) try {
            if ("object" === pr)
              if (Ir instanceof Uint8Array) Sr[Er] = Uint8Array.from(Ir);
              else if (Ir instanceof Array) {
              if (Sr[Er] = [], Ir.length > 0)
                if ("object" == typeof Ir[0])
                  for (let rr = 0; rr < Ir.length; rr++) {
                    const Qr = Wr(Ir[rr], Sr, jr); - 1 === Sr[Er].indexOf(Qr) && Sr[Er].push(Qr)
                  } else Sr[Er] = Ir.slice(0)
            } else Sr[Er] = Wr(Ir, Sr, jr);
            else Sr[Er] = Ir
          } catch (fr) {
            Zr.c.Warn(fr.message)
          }
        }
      }
    }
  },
  39405: (rr, Sr, Qr) => {
    function Zr() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (rr => {
        const Sr = 16 * Math.random() | 0;
        return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
      }))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  40246: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    class Zr {
      static _CheckLimit(rr, Sr) {
        let Qr = Zr._LogLimitOutputs[rr];
        return Qr ? Qr.current++ : (Qr = {
          limit: Sr,
          current: 1
        }, Zr._LogLimitOutputs[rr] = Qr), Qr.current <= Qr.limit
      }
      static _GenerateLimitMessage(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Qr = Zr._LogLimitOutputs[rr];
        if (!Qr || !Zr.MessageLimitReached) return;
        const Wr = this._Levels[Sr];
        Qr.current === Qr.limit && Zr[Wr.name](Zr.MessageLimitReached.replace(/%LIMIT%/g, "" + Qr.limit).replace(/%TYPE%/g, Wr.name ?? ""))
      }
      static _AddLogEntry(rr) {
        Zr._LogCache = rr + Zr._LogCache, Zr.OnNewCacheEntry && Zr.OnNewCacheEntry(rr)
      }
      static _FormatMessage(rr) {
        const Sr = rr => rr < 10 ? "0" + rr : "" + rr,
          Qr = new Date;
        return "[" + Sr(Qr.getHours()) + ":" + Sr(Qr.getMinutes()) + ":" + Sr(Qr.getSeconds()) + "]: " + rr
      }
      static _LogDisabled(rr, Sr) {}
      static _LogEnabled() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Wr = Array.isArray(Sr) ? Sr[0] : Sr;
        if (void 0 !== Qr && !Zr._CheckLimit(Wr, Qr)) return;
        const ar = Zr._FormatMessage(Wr),
          jr = this._Levels[rr],
          Ir = Array.isArray(Sr) ? Sr.slice(1) : [];
        jr.logFunc && jr.logFunc("BJS - " + ar, ...Ir);
        const fr = `<div style='color:${jr.color}'>${ar}</div><br>`;
        Zr._AddLogEntry(fr), Zr._GenerateLimitMessage(Wr, rr)
      }
      static get LogCache() {
        return Zr._LogCache
      }
      static ClearLogCache() {
        Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr.errorsCount = 0
      }
      static set LogLevels(rr) {
        Zr.Log = Zr._LogDisabled, Zr.Warn = Zr._LogDisabled, Zr.Error = Zr._LogDisabled;
        const Sr = [Zr.MessageLogLevel, Zr.WarningLogLevel, Zr.ErrorLogLevel];
        for (const Qr of Sr)
          if ((rr & Qr) === Qr) {
            const rr = this._Levels[Qr];
            Zr[rr.name] = Zr._LogEnabled.bind(Zr, Qr)
          }
      }
    }
    Zr.NoneLogLevel = 0, Zr.MessageLogLevel = 1, Zr.WarningLogLevel = 2, Zr.ErrorLogLevel = 4, Zr.AllLogLevel = 7, Zr.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr._Levels = [{}, {
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
    }], Zr.errorsCount = 0, Zr.Log = Zr._LogEnabled.bind(Zr, Zr.MessageLogLevel), Zr.Warn = Zr._LogEnabled.bind(Zr, Zr.WarningLogLevel), Zr.Error = Zr._LogEnabled.bind(Zr, Zr.ErrorLogLevel)
  },
  41934: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr.f
    });
    var Zr = Qr(41941);
    (0, Zr.e)()
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);