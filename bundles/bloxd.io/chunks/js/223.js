export const id = 223;
export const ids = [223, 229, 232];
export const modules = {
  39402: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz,
      g: () => oz
    });
    var Fz = sz(38097),
      Wz = sz(39181),
      Xz = sz(39370),
      Oz = {};
    class oz {
      constructor(zz) {
        this.attachedToElement = !1, this.attached = {}, this.camera = zz, this.checkInputs = () => {}
      }
      add(zz) {
        const tz = zz.getSimpleName();
        this.attached[tz] ? Fz.e.Warn("camera input of type " + tz + " already exists on camera") : (this.attached[tz] = zz, zz.camera = this.camera, zz.checkInputs && (this.checkInputs = this._addCheckInputs(zz.checkInputs.bind(zz))), this.attachedToElement && zz.attachControl(this.noPreventDefault))
      }
      remove(zz) {
        for (const tz in this.attached) {
          const sz = this.attached[tz];
          if (sz === zz) return sz.detachControl(), sz.camera = null, delete this.attached[tz], void this.rebuildInputCheck()
        }
      }
      removeByType(zz) {
        for (const tz in this.attached) {
          const sz = this.attached[tz];
          sz.getClassName() === zz && (sz.detachControl(), sz.camera = null, delete this.attached[tz], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(zz) {
        const tz = this.checkInputs;
        return () => {
          tz(), zz()
        }
      }
      attachInput(zz) {
        this.attachedToElement && zz.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          zz = !Xz.b.ForceAttachControlToAlwaysPreventDefault && zz, this.attachedToElement = !0, this.noPreventDefault = zz;
          for (const tz in this.attached) this.attached[tz].attachControl(zz)
        }
      }
      detachElement() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const tz in this.attached) this.attached[tz].detachControl(), zz && (this.attached[tz].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const zz in this.attached) {
          const tz = this.attached[zz];
          tz.checkInputs && (this.checkInputs = this._addCheckInputs(tz.checkInputs.bind(tz)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(zz) {
        const tz = {};
        for (const sz in this.attached) {
          const zz = this.attached[sz],
            Fz = Wz.e.Serialize(zz);
          tz[zz.getClassName()] = Fz
        }
        zz.inputsmgr = tz
      }
      parse(zz) {
        const tz = zz.inputsmgr;
        if (tz) {
          this.clear();
          for (const zz in tz) {
            const sz = Oz[zz];
            if (sz) {
              const Fz = tz[zz],
                Xz = Wz.e.Parse((() => new sz), Fz, null);
              this.add(Xz)
            }
          }
        } else
          for (const sz in this.attached) {
            const tz = Oz[this.attached[sz].getClassName()];
            if (tz) {
              const Fz = Wz.e.Parse((() => new tz), zz, null);
              this.remove(this.attached[sz]), this.add(Fz)
            }
          }
      }
    }
  },
  39408: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz.b
    });
    var Fz = sz(39413);
    (0, Fz.e)()
  },
  39413: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Kz,
      e: () => Nz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(36475),
      Oz = sz(36654),
      oz = sz(39421),
      vz = sz(39374),
      Uz = sz(36518);
    let Kz = (() => {
        var zz;
        let tz, sz, vz = oz.d,
          Uz = [],
          Kz = [],
          uz = [],
          Nz = [];
        return zz = class extends vz {
          constructor(zz, tz, sz, Wz) {
            super(zz, sz, Wz), this.groundColor = (0, Fz.k)(this, Uz, new Oz.c(0, 0, 0)), this.direction = ((0, Fz.k)(this, Kz), (0, Fz.k)(this, uz, void 0)), (0, Fz.k)(this, Nz), this.direction = tz || Xz.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(zz) {
            return this.direction = Xz.p.Normalize(zz.subtract(Xz.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(zz, tz) {
            const sz = Xz.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", sz.x, sz.y, sz.z, 0, tz), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), tz), this
          }
          transferToNodeMaterialEffect(zz, tz) {
            const sz = Xz.p.Normalize(this.direction);
            return zz.setFloat3(tz, sz.x, sz.y, sz.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Xz.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return oz.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(zz, tz) {
            zz["HEMILIGHT" + tz] = !0
          }
        }, (() => {
          const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(vz[Symbol.metadata] ?? null) : void 0;
          tz = [(0, Wz.p)()], sz = [(0, Wz.H)()], (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "groundColor" in zz,
              get: zz => zz.groundColor,
              set: (zz, tz) => {
                zz.groundColor = tz
              }
            },
            metadata: Xz
          }, Uz, Kz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: zz => "direction" in zz,
              get: zz => zz.direction,
              set: (zz, tz) => {
                zz.direction = tz
              }
            },
            metadata: Xz
          }, uz, Nz), Xz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xz
          })
        })(), zz
      })(),
      uz = !1;

    function Nz() {
      uz || (uz = !0, vz.e.AddNodeConstructor("Light_Type_3", ((zz, tz) => () => new Kz(zz, Xz.p.Zero(), tz))), (0, Uz.g)("BABYLON.HemisphericLight", Kz))
    }
  },
  36652: (zz, tz, sz) => {
    sz.d(tz, {
      Color3: () => Fz.c,
      c: () => Fz.d
    });
    var Fz = sz(36654);
    (0, Fz.e)()
  },
  37191: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz
    });
    var Fz = sz(37199);
    class Wz {
      static GetPlanes(zz) {
        const tz = [];
        for (let sz = 0; sz < 6; sz++) tz.push(new Fz.c(0, 0, 0, 0));
        return Wz.GetPlanesToRef(zz, tz), tz
      }
      static GetNearPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[2], tz.normal.y = sz[7] + sz[6], tz.normal.z = sz[11] + sz[10], tz.d = sz[15] + sz[14], tz.normalize()
      }
      static GetFarPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[2], tz.normal.y = sz[7] - sz[6], tz.normal.z = sz[11] - sz[10], tz.d = sz[15] - sz[14], tz.normalize()
      }
      static GetLeftPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[0], tz.normal.y = sz[7] + sz[4], tz.normal.z = sz[11] + sz[8], tz.d = sz[15] + sz[12], tz.normalize()
      }
      static GetRightPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[0], tz.normal.y = sz[7] - sz[4], tz.normal.z = sz[11] - sz[8], tz.d = sz[15] - sz[12], tz.normalize()
      }
      static GetTopPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[1], tz.normal.y = sz[7] - sz[5], tz.normal.z = sz[11] - sz[9], tz.d = sz[15] - sz[13], tz.normalize()
      }
      static GetBottomPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[1], tz.normal.y = sz[7] + sz[5], tz.normal.z = sz[11] + sz[9], tz.d = sz[15] + sz[13], tz.normalize()
      }
      static GetPlanesToRef(zz, tz) {
        Wz.GetNearPlaneToRef(zz, tz[0]), Wz.GetFarPlaneToRef(zz, tz[1]), Wz.GetLeftPlaneToRef(zz, tz[2]), Wz.GetRightPlaneToRef(zz, tz[3]), Wz.GetTopPlaneToRef(zz, tz[4]), Wz.GetBottomPlaneToRef(zz, tz[5])
      }
      static IsPointInFrustum(zz, tz) {
        for (let sz = 0; sz < 6; sz++)
          if (tz[sz].dotCoordinate(zz) < 0) return !1;
        return !0
      }
    }
  },
  37199: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(36475);
    class Wz {
      constructor(zz, tz, sz, Wz) {
        this.normal = new Fz.p(zz, tz, sz), this.d = Wz
      }
      hsz() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wz(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let zz = this.normal.getHashCode();
        return zz = 397 * zz ^ this.d, zz
      }
      normalize() {
        const zz = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let tz = 0;
        return 0 !== zz && (tz = 1 / zz), this.normal.x *= tz, this.normal.y *= tz, this.normal.z *= tz, this.d *= tz, this
      }
      transform(zz) {
        const tz = Wz._TmpMatrix;
        zz.invertToRef(tz);
        const sz = tz.m,
          Fz = this.normal.x,
          Xz = this.normal.y,
          Oz = this.normal.z,
          oz = this.d,
          vz = Fz * sz[0] + Xz * sz[1] + Oz * sz[2] + oz * sz[3],
          Uz = Fz * sz[4] + Xz * sz[5] + Oz * sz[6] + oz * sz[7],
          Kz = Fz * sz[8] + Xz * sz[9] + Oz * sz[10] + oz * sz[11],
          uz = Fz * sz[12] + Xz * sz[13] + Oz * sz[14] + oz * sz[15];
        return new Wz(vz, Uz, Kz, uz)
      }
      dotCoordinate(zz) {
        return this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z + this.d
      }
      copyFromPoints(zz, tz, sz) {
        const Fz = tz.x - zz.x,
          Wz = tz.y - zz.y,
          Xz = tz.z - zz.z,
          Oz = sz.x - zz.x,
          oz = sz.y - zz.y,
          vz = sz.z - zz.z,
          Uz = Wz * vz - Xz * oz,
          Kz = Xz * Oz - Fz * vz,
          uz = Fz * oz - Wz * Oz,
          Nz = Math.sqrt(Uz * Uz + Kz * Kz + uz * uz);
        let bz;
        return bz = 0 !== Nz ? 1 / Nz : 0, this.normal.x = Uz * bz, this.normal.y = Kz * bz, this.normal.z = uz * bz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
      }
      isFrontFacingTo(zz, tz) {
        return Fz.p.Dot(this.normal, zz) <= tz
      }
      signedDistanceTo(zz) {
        return Fz.p.Dot(zz, this.normal) + this.d
      }
      static FromArray(zz) {
        return new Wz(zz[0], zz[1], zz[2], zz[3])
      }
      static FromPoints(zz, tz, sz) {
        const Fz = new Wz(0, 0, 0, 0);
        return Fz.copyFromPoints(zz, tz, sz), Fz
      }
      static FromPositionAndNormal(zz, tz) {
        const sz = new Wz(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(zz, tz, sz)
      }
      static FromPositionAndNormalToRef(zz, tz, sz) {
        return sz.normal.vsz(tz), sz.normal.normalize(), sz.d = -zz.dot(sz.normal), sz
      }
      static SignedDistanceToPlaneFromPositionAndNormal(zz, tz, sz) {
        const Wz = -(tz.x * zz.x + tz.y * zz.y + tz.z * zz.z);
        return Fz.p.Dot(sz, tz) + Wz
      }
    }
    Wz._TmpMatrix = Fz.e.Identity()
  },
  36473: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      Matrix: () => Fz.e,
      Quaternion: () => Fz.h,
      RegisterMathVector: () => Fz.k,
      TmpVectors: () => Fz.m,
      Vector2: () => Fz.n,
      XD: () => Fz.p,
      Vector4: () => Fz.q
    });
    var Fz = sz(36475);
    (0, Fz.k)()
  },
  37536: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz
    });
    class Fz {
      constructor(zz, tz, sz, Fz) {
        this.x = zz, this.y = tz, this.width = sz, this.height = Fz
      }
      toGlobal(zz, tz) {
        return new Fz(this.x * zz, this.y * tz, this.width * zz, this.height * tz)
      }
      toGlobalToRef(zz, tz, sz) {
        return sz.x = this.x * zz, sz.y = this.y * tz, sz.width = this.width * zz, sz.height = this.height * tz, this
      }
      clone() {
        return new Fz(this.x, this.y, this.width, this.height)
      }
    }
  },
  39552: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Uz
    });
    var Fz = sz(36475),
      Wz = sz(36654),
      Xz = sz(39555),
      Oz = sz(39562),
      oz = sz(39576);

    function vz(zz) {
      let tz = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const sz = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Xz = [],
        vz = zz.width || zz.size || 1,
        Uz = zz.height || zz.size || 1,
        Kz = zz.depth || zz.size || 1,
        uz = zz.wrap || !1;
      let Nz = void 0 === zz.topBaseAt ? 1 : zz.topBaseAt,
        bz = void 0 === zz.bottomBaseAt ? 0 : zz.bottomBaseAt;
      Nz = (Nz + 4) % 4, bz = (bz + 4) % 4;
      let wz = [2, 0, 3, 1][Nz],
        Dz = [2, 0, 1, 3][bz],
        gz = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (uz) {
        tz = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], gz = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let zz = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          sz = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Fz = [17, 18, 19, 16],
          Wz = [22, 23, 20, 21];
        for (; wz > 0;) zz.unshift(zz.pop()), Fz.unshift(Fz.pop()), wz--;
        for (; Dz > 0;) sz.unshift(sz.pop()), Wz.unshift(Wz.pop()), Dz--;
        zz = zz.flat(), sz = sz.flat(), gz = gz.concat(zz).concat(sz), tz.push(Fz[0], Fz[2], Fz[3], Fz[0], Fz[1], Fz[2]), tz.push(Wz[0], Wz[2], Wz[3], Wz[0], Wz[1], Wz[2])
      }
      const Hz = [vz / 2, Uz / 2, Kz / 2],
        Bz = gz.reduce(((zz, tz, sz) => zz.concat(tz * Hz[sz % 3])), []),
        Pz = 0 === zz.sideOrientation ? 0 : zz.sideOrientation || Oz.b.DEFAULTSIDE,
        rz = zz.faceUV || new Array(6),
        Yz = zz.faceColors,
        xz = [];
      for (let Oz = 0; Oz < 6; Oz++) void 0 === rz[Oz] && (rz[Oz] = new Fz.q(0, 0, 1, 1)), Yz && void 0 === Yz[Oz] && (Yz[Oz] = new Wz.d(1, 1, 1, 1));
      for (let Fz = 0; Fz < 6; Fz++)
        if (Xz.push(rz[Fz].z, oz.d ? 1 - rz[Fz].w : rz[Fz].w), Xz.push(rz[Fz].x, oz.d ? 1 - rz[Fz].w : rz[Fz].w), Xz.push(rz[Fz].x, oz.d ? 1 - rz[Fz].y : rz[Fz].y), Xz.push(rz[Fz].z, oz.d ? 1 - rz[Fz].y : rz[Fz].y), Yz)
          for (let zz = 0; zz < 4; zz++) xz.push(Yz[Fz].r, Yz[Fz].g, Yz[Fz].b, Yz[Fz].a);
      Oz.b._ComputeSides(Pz, Bz, tz, sz, Xz, zz.frontUVs, zz.backUVs);
      const mz = new Oz.b;
      if (mz.indices = tz, mz.positions = Bz, mz.normals = sz, mz.uvs = Xz, Yz) {
        const zz = Pz === Oz.b.DOUBLESIDE ? xz.concat(xz) : xz;
        mz.colors = zz
      }
      return mz
    }

    function Uz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Fz = new Xz.c(zz, sz);
      tz.sideOrientation = Xz.c._GetDefaultSideOrientation(tz.sideOrientation), Fz._originalBuilderSideOrientation = tz.sideOrientation;
      return vz(tz).applyToMesh(Fz, tz.updatable), Fz
    }
    let Kz = !1;
    Kz || (Kz = !0, Oz.b.CreateBox = vz, Xz.c.CreateBox = function(zz, tz) {
      return Uz(zz, {
        size: tz,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39597: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => uz
    });
    var Fz = sz(36475),
      Wz = sz(39555),
      Xz = sz(39562),
      Oz = sz(39601),
      oz = sz(39293),
      vz = sz(38097);

    function Uz(zz) {
      const tz = [],
        sz = [],
        Fz = zz.lines,
        Wz = zz.colors,
        Oz = [];
      let oz = 0;
      for (let Xz = 0; Xz < Fz.length; Xz++) {
        const zz = Fz[Xz];
        for (let Fz = 0; Fz < zz.length; Fz++) {
          const {
            x: vz,
            y: Uz,
            z: Kz
          } = zz[Fz];
          if (sz.push(vz, Uz, Kz), Wz) {
            const zz = Wz[Xz],
              {
                r: tz,
                g: sz,
                b: oz,
                a: vz
              } = zz[Fz];
            Oz.push(tz, sz, oz, vz)
          }
          Fz > 0 && (tz.push(oz - 1), tz.push(oz)), oz++
        }
      }
      const vz = new Xz.b;
      return vz.indices = tz, vz.positions = sz, Wz && (vz.colors = Oz), vz
    }

    function Kz(zz) {
      const tz = zz.dashSize || 3,
        sz = zz.gapSize || 1,
        Wz = zz.dashNb || 200,
        Oz = zz.points,
        oz = [],
        vz = [],
        Uz = Fz.p.Zero();
      let Kz, uz, Nz, bz = 0,
        wz = 0;
      for (Nz = 0; Nz < Oz.length - 1; Nz++) Oz[Nz + 1].subtractToRef(Oz[Nz], Uz), bz += Uz.length();
      const Dz = bz / Wz,
        gz = tz * Dz / (tz + sz);
      for (Nz = 0; Nz < Oz.length - 1; Nz++) {
        Oz[Nz + 1].subtractToRef(Oz[Nz], Uz), Kz = Math.floor(Uz.length() / Dz), Uz.normalize();
        for (let zz = 0; zz < Kz; zz++) uz = Dz * zz, oz.push(Oz[Nz].x + uz * Uz.x, Oz[Nz].y + uz * Uz.y, Oz[Nz].z + uz * Uz.z), oz.push(Oz[Nz].x + (uz + gz) * Uz.x, Oz[Nz].y + (uz + gz) * Uz.y, Oz[Nz].z + (uz + gz) * Uz.z), vz.push(wz, wz + 1), wz += 2
      }
      const Hz = new Xz.b;
      return Hz.positions = oz, Hz.indices = vz, Hz
    }

    function uz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Fz = tz.instance,
        Wz = tz.lines,
        Xz = tz.colors;
      if (Fz) {
        const zz = Fz.getVerticesData(oz.m.PositionKind);
        let tz, sz;
        Xz && (tz = Fz.getVerticesData(oz.m.ColorKind));
        let Oz = 0,
          vz = 0;
        for (let Fz = 0; Fz < Wz.length; Fz++) {
          const oz = Wz[Fz];
          for (let Wz = 0; Wz < oz.length; Wz++) zz[Oz] = oz[Wz].x, zz[Oz + 1] = oz[Wz].y, zz[Oz + 2] = oz[Wz].z, Xz && tz && (sz = Xz[Fz], tz[vz] = sz[Wz].r, tz[vz + 1] = sz[Wz].g, tz[vz + 2] = sz[Wz].b, tz[vz + 3] = sz[Wz].a, vz += 4), Oz += 3
        }
        return Fz.updateVerticesData(oz.m.PositionKind, zz, !1, !1), Xz && tz && Fz.updateVerticesData(oz.m.ColorKind, tz, !1, !1), Fz.refreshBoundingInfo(), Fz
      }
      const vz = !!Xz,
        Kz = new Oz.d(zz, sz, null, void 0, void 0, vz, tz.useVertexAlpha, tz.material);
      return Uz(tz).applyToMesh(Kz, tz.updatable), Kz
    }

    function Nz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Fz = tz.colors ? [tz.colors] : null;
      return uz(zz, {
        lines: [tz.points],
        updatable: tz.updatable,
        instance: tz.instance,
        colors: Fz,
        useVertexAlpha: tz.useVertexAlpha,
        material: tz.material
      }, sz)
    }

    function bz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Xz = tz.points,
        oz = tz.instance,
        Uz = tz.gapSize || 1,
        uz = tz.dashSize || 3;
      if (oz) {
        const zz = zz => {
          const tz = Fz.p.Zero(),
            sz = zz.length / 6;
          let Wz, Oz, vz, Uz, Kz = 0,
            uz = 0;
          for (vz = 0; vz < Xz.length - 1; vz++) Xz[vz + 1].subtractToRef(Xz[vz], tz), Kz += tz.length();
          const Nz = Kz / sz,
            bz = oz._creationDataStorage.dashSize,
            wz = bz * Nz / (bz + oz._creationDataStorage.gapSize);
          for (vz = 0; vz < Xz.length - 1; vz++)
            for (Xz[vz + 1].subtractToRef(Xz[vz], tz), Wz = Math.floor(tz.length() / Nz), tz.normalize(), Uz = 0; Uz < Wz && uz < zz.length;) Oz = Nz * Uz, zz[uz] = Xz[vz].x + Oz * tz.x, zz[uz + 1] = Xz[vz].y + Oz * tz.y, zz[uz + 2] = Xz[vz].z + Oz * tz.z, zz[uz + 3] = Xz[vz].x + (Oz + wz) * tz.x, zz[uz + 4] = Xz[vz].y + (Oz + wz) * tz.y, zz[uz + 5] = Xz[vz].z + (Oz + wz) * tz.z, uz += 6, Uz++;
          for (; uz < zz.length;) zz[uz] = Xz[vz].x, zz[uz + 1] = Xz[vz].y, zz[uz + 2] = Xz[vz].z, uz += 3
        };
        return (tz.dashNb || tz.dashSize || tz.gapSize || tz.useVertexAlpha || tz.material) && vz.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), oz.updateMeshPositions(zz, !1), oz
      }
      const Nz = new Oz.d(zz, sz, null, void 0, void 0, void 0, tz.useVertexAlpha, tz.material);
      return Kz(tz).applyToMesh(Nz, tz.updatable), Nz._creationDataStorage = new Wz.f, Nz._creationDataStorage.dashSize = uz, Nz._creationDataStorage.gapSize = Uz, Nz
    }
    let wz = !1;
    wz || (wz = !0, Xz.b.CreateLineSystem = Uz, Xz.b.CreateDashedLines = Kz, Wz.c.CreateLines = function(zz, tz) {
      return Nz(zz, {
        points: tz,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Wz.c.CreateDashedLines = function(zz, tz, sz, Fz, Wz) {
      return bz(zz, {
        points: tz,
        dashSize: sz,
        gapSize: Fz,
        dashNb: Wz,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39601: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Nz,
      h: () => Dz
    });
    var Fz, Wz, Xz = sz(36654),
      Oz = sz(39293),
      oz = sz(39555),
      vz = sz(39609),
      Uz = sz(39451),
      Kz = sz(39614),
      uz = sz(39065);
    class Nz extends oz.c {
      _isShaderMaterial(zz) {
        return !!zz && "ShaderMaterial" === zz.getClassName()
      }
      constructor(zz) {
        let tz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Fz = arguments.length > 5 ? arguments[5] : void 0,
          Wz = arguments.length > 6 ? arguments[6] : void 0,
          oz = arguments.length > 7 ? arguments[7] : void 0;
        super(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, tz, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Fz, this.useVertexAlpha = Wz, this.color = new Xz.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, tz && (this.color = tz.color.clone(), this.alpha = tz.alpha, this.useVertexColor = tz.useVertexColor, this.useVertexAlpha = tz.useVertexAlpha), this.intersectionThreshold = .1;
        const vz = {
          attributes: [Oz.m.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? vz.defines.push("#define VERTEXALPHA") : vz.needAlphaBlending = !1, this.useVertexColor ? (vz.defines.push("#define VERTEXCOLOR"), vz.attributes.push(Oz.m.ColorKind)) : (vz.uniforms.push("color"), this._color4 = new Xz.d), oz) this.material = oz;
        else {
          this.aJ().FD().isWebGPU && !Nz.ForceGLSL && (this._shaderLanguage = 1), vz.shaderLanguage = this._shaderLanguage, vz.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([sz.e(334).then((() => sz(41625))), sz.e(340).then((() => sz(41630)))]) : await Promise.all([sz.e(316).then((() => sz(41636))), sz.e(322).then((() => sz(41644)))])
          };
          const zz = new Kz.s("colorShader", this.aJ(), "color", vz, !1);
          zz.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(zz)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(zz) {
        const tz = this.material;
        if (tz === zz) return;
        const sz = tz && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(zz), sz && tz?.dispose()
      }
      _setInternalMaterial(zz) {
        this._setMaterial(zz), this.material && (this.material.fillMode = Uz.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(zz) {}
      _bind(zz, tz) {
        if (!this._geometry) return this;
        const sz = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(tz, sz) : this._geometry._bind(tz, sz, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: zz,
            g: tz,
            b: sz
          } = this.color;
          this._color4.set(zz, tz, sz, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(zz, tz, sz) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Fz = this.aJ().FD();
        return this._unIndexed ? Fz.drawArraysType(Uz.b.LineListDrawMode, zz.verticesStart, zz.verticesCount, sz) : Fz.drawElementsType(Uz.b.LineListDrawMode, zz.indexStart, zz.indexCount, sz), this
      }
      dispose(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || tz) && this.material?.dispose(!1, !1, !0), super.dispose(zz)
      }
      clone(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        if (tz && void 0 === tz._addToSceneRootNodes) {
          const sz = tz;
          return sz.source = this, new Nz(zz, this.aJ(), sz.parent, sz.source, sz.doNotCloneChildren)
        }
        return new Nz(zz, this.aJ(), tz, this, sz)
      }
      createInstance(zz) {
        const tz = new bz(zz, this);
        if (this.uC) {
          tz.uC = {};
          for (const zz in this.uC) tz.uC[zz] = this.uC[zz]
        }
        return tz
      }
      serialize(zz) {
        super.serialize(zz), zz.color = this.color.hsz(), zz.alpha = this.alpha
      }
      static Parse(zz, tz) {
        const sz = new Nz(zz.name, tz);
        return sz.color = Xz.c.FromArray(zz.color), sz.alpha = zz.alpha, sz
      }
    }
    Nz.ForceGLSL = !1;
    class bz extends vz.d {
      constructor(zz, tz) {
        super(zz, tz), this.intersectionThreshold = tz.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let wz = !1;

    function Dz() {
      wz || (wz = !0, oz.c._LinesMeshParser = (zz, tz) => Nz.Parse(zz, tz))
    }(Fz = Nz.prototype).enableEdgesRendering ?? (Fz.enableEdgesRendering = (0, uz.g)("LinesMesh", "enableEdgesRendering")), (Wz = bz.prototype).enableEdgesRendering ?? (Wz.enableEdgesRendering = (0, uz.g)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38091: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz
    });
    var Fz = sz(38097);
    const Wz = (zz, tz, sz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : sz && "object" === typeof zz ? {
      ...zz
    } : null : zz.clone(tz) : null;
    class Xz {
      static DeepCopy(zz, tz, sz, Xz) {
        let Oz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const oz = function(zz) {
          const tz = [];
          do {
            const sz = Object.getOwnPropertyNames(zz);
            for (const zz of sz) - 1 === tz.indexOf(zz) && tz.push(zz)
          } while (zz = Object.getPrototypeOf(zz));
          return tz
        }(zz);
        for (const Uz of oz) {
          if ("_" === Uz[0] && (!Xz || -1 === Xz.indexOf(Uz))) continue;
          if (Uz.endsWith("Observable")) continue;
          if (sz && -1 !== sz.indexOf(Uz)) continue;
          const oz = zz[Uz],
            Kz = typeof oz;
          if ("function" !== Kz) try {
            if ("object" === Kz)
              if (oz instanceof Uint8Array) tz[Uz] = Uint8Array.from(oz);
              else if (oz instanceof Array) {
              if (tz[Uz] = [], oz.length > 0)
                if ("object" == typeof oz[0])
                  for (let zz = 0; zz < oz.length; zz++) {
                    const sz = Wz(oz[zz], tz, Oz); - 1 === tz[Uz].indexOf(sz) && tz[Uz].push(sz)
                  } else tz[Uz] = oz.slice(0)
            } else tz[Uz] = Wz(oz, tz, Oz);
            else tz[Uz] = oz
          } catch (vz) {
            Fz.e.Warn(vz.message)
          }
        }
      }
    }
  },
  37333: (zz, tz, sz) => {
    function Fz() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const tz = 16 * Math.random() | 0;
        return ("x" === zz ? tz : 3 & tz | 8).toString(16)
      }))
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  38097: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      static _CheckLimit(zz, tz) {
        let sz = Fz._LogLimitOutputs[zz];
        return sz ? sz.current++ : (sz = {
          limit: tz,
          current: 1
        }, Fz._LogLimitOutputs[zz] = sz), sz.current <= sz.limit
      }
      static _GenerateLimitMessage(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const sz = Fz._LogLimitOutputs[zz];
        if (!sz || !Fz.MessageLimitReached) return;
        const Wz = this._Levels[tz];
        sz.current === sz.limit && Fz[Wz.name](Fz.MessageLimitReached.replace(/%LIMIT%/g, "" + sz.limit).replace(/%TYPE%/g, Wz.name ?? ""))
      }
      static _AddLogEntry(zz) {
        Fz._LogCache = zz + Fz._LogCache, Fz.OnNewCacheEntry && Fz.OnNewCacheEntry(zz)
      }
      static _FormatMessage(zz) {
        const tz = zz => zz < 10 ? "0" + zz : "" + zz,
          sz = new Date;
        return "[" + tz(sz.getHours()) + ":" + tz(sz.getMinutes()) + ":" + tz(sz.getSeconds()) + "]: " + zz
      }
      static _LogDisabled(zz, tz) {}
      static _LogEnabled() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Wz = Array.isArray(tz) ? tz[0] : tz;
        if (void 0 !== sz && !Fz._CheckLimit(Wz, sz)) return;
        const Xz = Fz._FormatMessage(Wz),
          Oz = this._Levels[zz],
          oz = Array.isArray(tz) ? tz.slice(1) : [];
        Oz.logFunc && Oz.logFunc("BJS - " + Xz, ...oz);
        const vz = `<div style='color:${Oz.color}'>${Xz}</div><br>`;
        Fz._AddLogEntry(vz), Fz._GenerateLimitMessage(Wz, zz)
      }
      static get LogCache() {
        return Fz._LogCache
      }
      static ClearLogCache() {
        Fz._LogCache = "", Fz._LogLimitOutputs = {}, Fz.errorsCount = 0
      }
      static set LogLevels(zz) {
        Fz.Log = Fz._LogDisabled, Fz.Warn = Fz._LogDisabled, Fz.Error = Fz._LogDisabled;
        const tz = [Fz.MessageLogLevel, Fz.WarningLogLevel, Fz.ErrorLogLevel];
        for (const sz of tz)
          if ((zz & sz) === sz) {
            const zz = this._Levels[sz];
            Fz[zz.name] = Fz._LogEnabled.bind(Fz, sz)
          }
      }
    }
    Fz.NoneLogLevel = 0, Fz.MessageLogLevel = 1, Fz.WarningLogLevel = 2, Fz.ErrorLogLevel = 4, Fz.AllLogLevel = 7, Fz.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Fz._LogCache = "", Fz._LogLimitOutputs = {}, Fz._Levels = [{}, {
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
    }], Fz.errorsCount = 0, Fz.Log = Fz._LogEnabled.bind(Fz, Fz.MessageLogLevel), Fz.Warn = Fz._LogEnabled.bind(Fz, Fz.WarningLogLevel), Fz.Error = Fz._LogEnabled.bind(Fz, Fz.ErrorLogLevel)
  },
  39252: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz.i
    });
    var Fz = sz(39256);
    (0, Fz.e)()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);