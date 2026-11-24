export const id = 234;
export const ids = [234, 241, 244];
export const modules = {
  40330: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB,
      f: () => NB
    });
    var QB = zB(38783),
      nB = zB(40086),
      dB = zB(40301),
      IB = {};
    class NB {
      constructor(BB) {
        this.attachedToElement = !1, this.attached = {}, this.camera = BB, this.checkInputs = () => {}
      }
      add(BB) {
        const jB = BB.getSimpleName();
        this.attached[jB] ? QB.c.Warn("camera input of type " + jB + " already exists on camera") : (this.attached[jB] = BB, BB.camera = this.camera, BB.checkInputs && (this.checkInputs = this._addCheckInputs(BB.checkInputs.bind(BB))), this.attachedToElement && BB.attachControl(this.noPreventDefault))
      }
      remove(BB) {
        for (const jB in this.attached) {
          const zB = this.attached[jB];
          if (zB === BB) return zB.detachControl(), zB.camera = null, delete this.attached[jB], void this.rebuildInputCheck()
        }
      }
      removeByType(BB) {
        for (const jB in this.attached) {
          const zB = this.attached[jB];
          zB.getClassName() === BB && (zB.detachControl(), zB.camera = null, delete this.attached[jB], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(BB) {
        const jB = this.checkInputs;
        return () => {
          jB(), BB()
        }
      }
      attachInput(BB) {
        this.attachedToElement && BB.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          BB = !dB.b.ForceAttachControlToAlwaysPreventDefault && BB, this.attachedToElement = !0, this.noPreventDefault = BB;
          for (const jB in this.attached) this.attached[jB].attachControl(BB)
        }
      }
      detachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const jB in this.attached) this.attached[jB].detachControl(), BB && (this.attached[jB].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const BB in this.attached) {
          const jB = this.attached[BB];
          jB.checkInputs && (this.checkInputs = this._addCheckInputs(jB.checkInputs.bind(jB)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(BB) {
        const jB = {};
        for (const zB in this.attached) {
          const BB = this.attached[zB],
            QB = nB.b.Serialize(BB);
          jB[BB.getClassName()] = QB
        }
        BB.inputsmgr = jB
      }
      parse(BB) {
        const jB = BB.inputsmgr;
        if (jB) {
          this.clear();
          for (const BB in jB) {
            const zB = IB[BB];
            if (zB) {
              const QB = jB[BB],
                dB = nB.b.Parse((() => new zB), QB, null);
              this.add(dB)
            }
          }
        } else
          for (const zB in this.attached) {
            const jB = IB[this.attached[zB].getClassName()];
            if (jB) {
              const QB = nB.b.Parse((() => new jB), BB, null);
              this.remove(this.attached[zB]), this.add(QB)
            }
          }
      }
    }
  },
  40335: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB.e
    });
    var QB = zB(40339);
    (0, QB.f)()
  },
  40339: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => aB,
      f: () => rB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(37171),
      IB = zB(37379),
      NB = zB(40344),
      uB = zB(40306),
      UB = zB(37222);
    let aB = (() => {
        var BB;
        let jB, zB, uB = NB.b,
          UB = [],
          aB = [],
          pB = [],
          rB = [];
        return BB = class extends uB {
          constructor(BB, jB, zB, nB) {
            super(BB, zB, nB), this.groundColor = (0, QB.g)(this, UB, new IB.d(0, 0, 0)), this.direction = ((0, QB.g)(this, aB), (0, QB.g)(this, pB, void 0)), (0, QB.g)(this, rB), this.direction = jB || dB.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = dB.m.Normalize(BB.subtract(dB.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, jB) {
            const zB = dB.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", zB.x, zB.y, zB.z, 0, jB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), jB), this
          }
          transferToNodeMaterialEffect(BB, jB) {
            const zB = dB.m.Normalize(this.direction);
            return BB.setFloat3(jB, zB.x, zB.y, zB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = dB.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return NB.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, jB) {
            BB["HEMILIGHT" + jB] = !0
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(uB[Symbol.metadata] ?? null) : void 0;
          jB = [(0, nB.i)()], zB = [(0, nB.x)()], (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, jB) => {
                BB.groundColor = jB
              }
            },
            metadata: dB
          }, UB, aB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, jB) => {
                BB.direction = jB
              }
            },
            metadata: dB
          }, pB, rB), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB
      })(),
      pB = !1;

    function rB() {
      pB || (pB = !0, uB.c.AddNodeConstructor("Light_Type_3", ((BB, jB) => () => new aB(BB, dB.m.Zero(), jB))), (0, UB.d)("BABYLON.HemisphericLight", aB))
    }
  },
  37372: (BB, jB, zB) => {
    zB.d(jB, {
      Color3: () => QB.d,
      c: () => QB.g
    });
    var QB = zB(37379);
    (0, QB.k)()
  },
  37865: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB
    });
    var QB = zB(37869);
    class nB {
      static GetPlanes(BB) {
        const jB = [];
        for (let zB = 0; zB < 6; zB++) jB.push(new QB.c(0, 0, 0, 0));
        return nB.GetPlanesToRef(BB, jB), jB
      }
      static GetNearPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[2], jB.normal.y = zB[7] + zB[6], jB.normal.z = zB[11] + zB[10], jB.d = zB[15] + zB[14], jB.normalize()
      }
      static GetFarPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[2], jB.normal.y = zB[7] - zB[6], jB.normal.z = zB[11] - zB[10], jB.d = zB[15] - zB[14], jB.normalize()
      }
      static GetLeftPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[0], jB.normal.y = zB[7] + zB[4], jB.normal.z = zB[11] + zB[8], jB.d = zB[15] + zB[12], jB.normalize()
      }
      static GetRightPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[0], jB.normal.y = zB[7] - zB[4], jB.normal.z = zB[11] - zB[8], jB.d = zB[15] - zB[12], jB.normalize()
      }
      static GetTopPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[1], jB.normal.y = zB[7] - zB[5], jB.normal.z = zB[11] - zB[9], jB.d = zB[15] - zB[13], jB.normalize()
      }
      static GetBottomPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[1], jB.normal.y = zB[7] + zB[5], jB.normal.z = zB[11] + zB[9], jB.d = zB[15] + zB[13], jB.normalize()
      }
      static GetPlanesToRef(BB, jB) {
        nB.GetNearPlaneToRef(BB, jB[0]), nB.GetFarPlaneToRef(BB, jB[1]), nB.GetLeftPlaneToRef(BB, jB[2]), nB.GetRightPlaneToRef(BB, jB[3]), nB.GetTopPlaneToRef(BB, jB[4]), nB.GetBottomPlaneToRef(BB, jB[5])
      }
      static IsPointInFrustum(BB, jB) {
        for (let zB = 0; zB < 6; zB++)
          if (jB[zB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  37869: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    var QB = zB(37171);
    class nB {
      constructor(BB, jB, zB, nB) {
        this.normal = new QB.m(BB, jB, zB), this.d = nB
      }
      nQB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new nB(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let BB = this.normal.getHashCode();
        return BB = 397 * BB ^ this.d, BB
      }
      normalize() {
        const BB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let jB = 0;
        return 0 !== BB && (jB = 1 / BB), this.normal.x *= jB, this.normal.y *= jB, this.normal.z *= jB, this.d *= jB, this
      }
      transform(BB) {
        const jB = nB._TmpMatrix;
        BB.invertToRef(jB);
        const zB = jB.m,
          QB = this.normal.x,
          dB = this.normal.y,
          IB = this.normal.z,
          NB = this.d,
          uB = QB * zB[0] + dB * zB[1] + IB * zB[2] + NB * zB[3],
          UB = QB * zB[4] + dB * zB[5] + IB * zB[6] + NB * zB[7],
          aB = QB * zB[8] + dB * zB[9] + IB * zB[10] + NB * zB[11],
          pB = QB * zB[12] + dB * zB[13] + IB * zB[14] + NB * zB[15];
        return new nB(uB, UB, aB, pB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, jB, zB) {
        const QB = jB.x - BB.x,
          nB = jB.y - BB.y,
          dB = jB.z - BB.z,
          IB = zB.x - BB.x,
          NB = zB.y - BB.y,
          uB = zB.z - BB.z,
          UB = nB * uB - dB * NB,
          aB = dB * IB - QB * uB,
          pB = QB * NB - nB * IB,
          rB = Math.sqrt(UB * UB + aB * aB + pB * pB);
        let sB;
        return sB = 0 !== rB ? 1 / rB : 0, this.normal.x = UB * sB, this.normal.y = aB * sB, this.normal.z = pB * sB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, jB) {
        return QB.m.Dot(this.normal, BB) <= jB
      }
      signedDistanceTo(BB) {
        return QB.m.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new nB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, jB, zB) {
        const QB = new nB(0, 0, 0, 0);
        return QB.copyFromPoints(BB, jB, zB), QB
      }
      static FromPositionAndNormal(BB, jB) {
        const zB = new nB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, jB, zB)
      }
      static FromPositionAndNormalToRef(BB, jB, zB) {
        return zB.normal.jH(jB), zB.normal.normalize(), zB.d = -BB.dot(zB.normal), zB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, jB, zB) {
        const nB = -(jB.x * BB.x + jB.y * BB.y + jB.z * BB.z);
        return QB.m.Dot(zB, jB) + nB
      }
    }
    nB._TmpMatrix = QB.c.Identity()
  },
  37166: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      Matrix: () => QB.c,
      Quaternion: () => QB.d,
      RegisterMathVector: () => QB.e,
      TmpVectors: () => QB.h,
      Vector2: () => QB.i,
      KJ: () => QB.m,
      Vector4: () => QB.n
    });
    var QB = zB(37171);
    (0, QB.e)()
  },
  38170: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    class QB {
      constructor(BB, jB, zB, QB) {
        this.x = BB, this.y = jB, this.width = zB, this.height = QB
      }
      toGlobal(BB, jB) {
        return new QB(this.x * BB, this.y * jB, this.width * BB, this.height * jB)
      }
      toGlobalToRef(BB, jB, zB) {
        return zB.x = this.x * BB, zB.y = this.y * jB, zB.width = this.width * BB, zB.height = this.height * jB, this
      }
      clone() {
        return new QB(this.x, this.y, this.width, this.height)
      }
    }
  },
  40496: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => UB
    });
    var QB = zB(37171),
      nB = zB(37379),
      dB = zB(40504),
      IB = zB(40519),
      NB = zB(40535);

    function uB(BB) {
      let jB = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const zB = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        dB = [],
        uB = BB.width || BB.size || 1,
        UB = BB.height || BB.size || 1,
        aB = BB.depth || BB.size || 1,
        pB = BB.wrap || !1;
      let rB = void 0 === BB.topBaseAt ? 1 : BB.topBaseAt,
        sB = void 0 === BB.bottomBaseAt ? 0 : BB.bottomBaseAt;
      rB = (rB + 4) % 4, sB = (sB + 4) % 4;
      let JB = [2, 0, 3, 1][rB],
        mB = [2, 0, 1, 3][sB],
        yB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (pB) {
        jB = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], yB = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let BB = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          zB = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const QB = [17, 18, 19, 16],
          nB = [22, 23, 20, 21];
        for (; JB > 0;) BB.unshift(BB.pop()), QB.unshift(QB.pop()), JB--;
        for (; mB > 0;) zB.unshift(zB.pop()), nB.unshift(nB.pop()), mB--;
        BB = BB.flat(), zB = zB.flat(), yB = yB.concat(BB).concat(zB), jB.push(QB[0], QB[2], QB[3], QB[0], QB[1], QB[2]), jB.push(nB[0], nB[2], nB[3], nB[0], nB[1], nB[2])
      }
      const kB = [uB / 2, UB / 2, aB / 2],
        GB = yB.reduce(((BB, jB, zB) => BB.concat(jB * kB[zB % 3])), []),
        LB = 0 === BB.sideOrientation ? 0 : BB.sideOrientation || IB.e.DEFAULTSIDE,
        gB = BB.faceUV || new Array(6),
        tB = BB.faceColors,
        SB = [];
      for (let IB = 0; IB < 6; IB++) void 0 === gB[IB] && (gB[IB] = new QB.n(0, 0, 1, 1)), tB && void 0 === tB[IB] && (tB[IB] = new nB.g(1, 1, 1, 1));
      for (let QB = 0; QB < 6; QB++)
        if (dB.push(gB[QB].z, NB.d ? 1 - gB[QB].w : gB[QB].w), dB.push(gB[QB].x, NB.d ? 1 - gB[QB].w : gB[QB].w), dB.push(gB[QB].x, NB.d ? 1 - gB[QB].y : gB[QB].y), dB.push(gB[QB].z, NB.d ? 1 - gB[QB].y : gB[QB].y), tB)
          for (let BB = 0; BB < 4; BB++) SB.push(tB[QB].r, tB[QB].g, tB[QB].b, tB[QB].a);
      IB.e._ComputeSides(LB, GB, jB, zB, dB, BB.frontUVs, BB.backUVs);
      const MB = new IB.e;
      if (MB.indices = jB, MB.positions = GB, MB.normals = zB, MB.uvs = dB, tB) {
        const BB = LB === IB.e.DOUBLESIDE ? SB.concat(SB) : SB;
        MB.colors = BB
      }
      return MB
    }

    function UB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const QB = new dB.b(BB, zB);
      jB.sideOrientation = dB.b._GetDefaultSideOrientation(jB.sideOrientation), QB._originalBuilderSideOrientation = jB.sideOrientation;
      return uB(jB).applyToMesh(QB, jB.updatable), QB
    }
    let aB = !1;
    aB || (aB = !0, IB.e.CreateBox = uB, dB.b.CreateBox = function(BB, jB) {
      return UB(BB, {
        size: jB,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40557: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => pB
    });
    var QB = zB(37171),
      nB = zB(40504),
      dB = zB(40519),
      IB = zB(40564),
      NB = zB(40211),
      uB = zB(38783);

    function UB(BB) {
      const jB = [],
        zB = [],
        QB = BB.lines,
        nB = BB.colors,
        IB = [];
      let NB = 0;
      for (let dB = 0; dB < QB.length; dB++) {
        const BB = QB[dB];
        for (let QB = 0; QB < BB.length; QB++) {
          const {
            x: uB,
            y: UB,
            z: aB
          } = BB[QB];
          if (zB.push(uB, UB, aB), nB) {
            const BB = nB[dB],
              {
                r: jB,
                g: zB,
                b: NB,
                a: uB
              } = BB[QB];
            IB.push(jB, zB, NB, uB)
          }
          QB > 0 && (jB.push(NB - 1), jB.push(NB)), NB++
        }
      }
      const uB = new dB.e;
      return uB.indices = jB, uB.positions = zB, nB && (uB.colors = IB), uB
    }

    function aB(BB) {
      const jB = BB.dashSize || 3,
        zB = BB.gapSize || 1,
        nB = BB.dashNb || 200,
        IB = BB.points,
        NB = [],
        uB = [],
        UB = QB.m.Zero();
      let aB, pB, rB, sB = 0,
        JB = 0;
      for (rB = 0; rB < IB.length - 1; rB++) IB[rB + 1].subtractToRef(IB[rB], UB), sB += UB.length();
      const mB = sB / nB,
        yB = jB * mB / (jB + zB);
      for (rB = 0; rB < IB.length - 1; rB++) {
        IB[rB + 1].subtractToRef(IB[rB], UB), aB = Math.floor(UB.length() / mB), UB.normalize();
        for (let BB = 0; BB < aB; BB++) pB = mB * BB, NB.push(IB[rB].x + pB * UB.x, IB[rB].y + pB * UB.y, IB[rB].z + pB * UB.z), NB.push(IB[rB].x + (pB + yB) * UB.x, IB[rB].y + (pB + yB) * UB.y, IB[rB].z + (pB + yB) * UB.z), uB.push(JB, JB + 1), JB += 2
      }
      const kB = new dB.e;
      return kB.positions = NB, kB.indices = uB, kB
    }

    function pB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const QB = jB.instance,
        nB = jB.lines,
        dB = jB.colors;
      if (QB) {
        const BB = QB.getVerticesData(NB.l.PositionKind);
        let jB, zB;
        dB && (jB = QB.getVerticesData(NB.l.ColorKind));
        let IB = 0,
          uB = 0;
        for (let QB = 0; QB < nB.length; QB++) {
          const NB = nB[QB];
          for (let nB = 0; nB < NB.length; nB++) BB[IB] = NB[nB].x, BB[IB + 1] = NB[nB].y, BB[IB + 2] = NB[nB].z, dB && jB && (zB = dB[QB], jB[uB] = zB[nB].r, jB[uB + 1] = zB[nB].g, jB[uB + 2] = zB[nB].b, jB[uB + 3] = zB[nB].a, uB += 4), IB += 3
        }
        return QB.updateVerticesData(NB.l.PositionKind, BB, !1, !1), dB && jB && QB.updateVerticesData(NB.l.ColorKind, jB, !1, !1), QB.refreshBoundingInfo(), QB
      }
      const uB = !!dB,
        aB = new IB.b(BB, zB, null, void 0, void 0, uB, jB.useVertexAlpha, jB.material);
      return UB(jB).applyToMesh(aB, jB.updatable), aB
    }

    function rB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const QB = jB.colors ? [jB.colors] : null;
      return pB(BB, {
        lines: [jB.points],
        updatable: jB.updatable,
        instance: jB.instance,
        colors: QB,
        useVertexAlpha: jB.useVertexAlpha,
        material: jB.material
      }, zB)
    }

    function sB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const dB = jB.points,
        NB = jB.instance,
        UB = jB.gapSize || 1,
        pB = jB.dashSize || 3;
      if (NB) {
        const BB = BB => {
          const jB = QB.m.Zero(),
            zB = BB.length / 6;
          let nB, IB, uB, UB, aB = 0,
            pB = 0;
          for (uB = 0; uB < dB.length - 1; uB++) dB[uB + 1].subtractToRef(dB[uB], jB), aB += jB.length();
          const rB = aB / zB,
            sB = NB._creationDataStorage.dashSize,
            JB = sB * rB / (sB + NB._creationDataStorage.gapSize);
          for (uB = 0; uB < dB.length - 1; uB++)
            for (dB[uB + 1].subtractToRef(dB[uB], jB), nB = Math.floor(jB.length() / rB), jB.normalize(), UB = 0; UB < nB && pB < BB.length;) IB = rB * UB, BB[pB] = dB[uB].x + IB * jB.x, BB[pB + 1] = dB[uB].y + IB * jB.y, BB[pB + 2] = dB[uB].z + IB * jB.z, BB[pB + 3] = dB[uB].x + (IB + JB) * jB.x, BB[pB + 4] = dB[uB].y + (IB + JB) * jB.y, BB[pB + 5] = dB[uB].z + (IB + JB) * jB.z, pB += 6, UB++;
          for (; pB < BB.length;) BB[pB] = dB[uB].x, BB[pB + 1] = dB[uB].y, BB[pB + 2] = dB[uB].z, pB += 3
        };
        return (jB.dashNb || jB.dashSize || jB.gapSize || jB.useVertexAlpha || jB.material) && uB.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), NB.updateMeshPositions(BB, !1), NB
      }
      const rB = new IB.b(BB, zB, null, void 0, void 0, void 0, jB.useVertexAlpha, jB.material);
      return aB(jB).applyToMesh(rB, jB.updatable), rB._creationDataStorage = new nB.g, rB._creationDataStorage.dashSize = pB, rB._creationDataStorage.gapSize = UB, rB
    }
    let JB = !1;
    JB || (JB = !0, dB.e.CreateLineSystem = UB, dB.e.CreateDashedLines = aB, nB.b.CreateLines = function(BB, jB) {
      return rB(BB, {
        points: jB,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, nB.b.CreateDashedLines = function(BB, jB, zB, QB, nB) {
      return sB(BB, {
        points: jB,
        dashSize: zB,
        gapSize: QB,
        dashNb: nB,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40564: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => rB,
      c: () => mB
    });
    var QB, nB, dB = zB(37379),
      IB = zB(40211),
      NB = zB(40504),
      uB = zB(40570),
      UB = zB(40380),
      aB = zB(40576),
      pB = zB(39965);
    class rB extends NB.b {
      _isShaderMaterial(BB) {
        return !!BB && "ShaderMaterial" === BB.getClassName()
      }
      constructor(BB) {
        let jB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          QB = arguments.length > 5 ? arguments[5] : void 0,
          nB = arguments.length > 6 ? arguments[6] : void 0,
          NB = arguments.length > 7 ? arguments[7] : void 0;
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, jB, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = QB, this.useVertexAlpha = nB, this.color = new dB.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, jB && (this.color = jB.color.clone(), this.alpha = jB.alpha, this.useVertexColor = jB.useVertexColor, this.useVertexAlpha = jB.useVertexAlpha), this.intersectionThreshold = .1;
        const uB = {
          attributes: [IB.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? uB.defines.push("#define VERTEXALPHA") : uB.needAlphaBlending = !1, this.useVertexColor ? (uB.defines.push("#define VERTEXCOLOR"), uB.attributes.push(IB.l.ColorKind)) : (uB.uniforms.push("color"), this._color4 = new dB.g), NB) this.material = NB;
        else {
          this.aY().wJ().isWebGPU && !rB.ForceGLSL && (this._shaderLanguage = 1), uB.shaderLanguage = this._shaderLanguage, uB.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([zB.e(349).then((() => zB(42691))), zB.e(355).then((() => zB(42700)))]) : await Promise.all([zB.e(331).then((() => zB(42706))), zB.e(337).then((() => zB(42714)))])
          };
          const BB = new aB.l("colorShader", this.aY(), "color", uB, !1);
          BB.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(BB)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(BB) {
        const jB = this.material;
        if (jB === BB) return;
        const zB = jB && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(BB), zB && jB?.dispose()
      }
      _setInternalMaterial(BB) {
        this._setMaterial(BB), this.material && (this.material.fillMode = UB.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(BB) {}
      _bind(BB, jB) {
        if (!this._geometry) return this;
        const zB = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(jB, zB) : this._geometry._bind(jB, zB, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: BB,
            g: jB,
            b: zB
          } = this.color;
          this._color4.set(BB, jB, zB, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(BB, jB, zB) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const QB = this.aY().wJ();
        return this._unIndexed ? QB.drawArraysType(UB.b.LineListDrawMode, BB.verticesStart, BB.verticesCount, zB) : QB.drawElementsType(UB.b.LineListDrawMode, BB.indexStart, BB.indexCount, zB), this
      }
      dispose(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || jB) && this.material?.dispose(!1, !1, !0), super.dispose(BB)
      }
      clone(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        if (jB && void 0 === jB._addToSceneRootNodes) {
          const zB = jB;
          return zB.source = this, new rB(BB, this.aY(), zB.parent, zB.source, zB.doNotCloneChildren)
        }
        return new rB(BB, this.aY(), jB, this, zB)
      }
      createInstance(BB) {
        const jB = new sB(BB, this);
        if (this.vY) {
          jB.vY = {};
          for (const BB in this.vY) jB.vY[BB] = this.vY[BB]
        }
        return jB
      }
      serialize(BB) {
        super.serialize(BB), BB.color = this.color.nQB(), BB.alpha = this.alpha
      }
      static Parse(BB, jB) {
        const zB = new rB(BB.name, jB);
        return zB.color = dB.d.FromArray(BB.color), zB.alpha = BB.alpha, zB
      }
    }
    rB.ForceGLSL = !1;
    class sB extends uB.d {
      constructor(BB, jB) {
        super(BB, jB), this.intersectionThreshold = jB.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let JB = !1;

    function mB() {
      JB || (JB = !0, NB.b._LinesMeshParser = (BB, jB) => rB.Parse(BB, jB))
    }(QB = rB.prototype).enableEdgesRendering ?? (QB.enableEdgesRendering = (0, pB.i)("LinesMesh", "enableEdgesRendering")), (nB = sB.prototype).enableEdgesRendering ?? (nB.enableEdgesRendering = (0, pB.i)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38780: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(38783);
    const nB = (BB, jB, zB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : zB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(jB) : null;
    class dB {
      static DeepCopy(BB, jB, zB, dB) {
        let IB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NB = function(BB) {
          const jB = [];
          do {
            const zB = Object.getOwnPropertyNames(BB);
            for (const BB of zB) - 1 === jB.indexOf(BB) && jB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return jB
        }(BB);
        for (const UB of NB) {
          if ("_" === UB[0] && (!dB || -1 === dB.indexOf(UB))) continue;
          if (UB.endsWith("Observable")) continue;
          if (zB && -1 !== zB.indexOf(UB)) continue;
          const NB = BB[UB],
            aB = typeof NB;
          if ("function" !== aB) try {
            if ("object" === aB)
              if (NB instanceof Uint8Array) jB[UB] = Uint8Array.from(NB);
              else if (NB instanceof Array) {
              if (jB[UB] = [], NB.length > 0)
                if ("object" == typeof NB[0])
                  for (let BB = 0; BB < NB.length; BB++) {
                    const zB = nB(NB[BB], jB, IB); - 1 === jB[UB].indexOf(zB) && jB[UB].push(zB)
                  } else jB[UB] = NB.slice(0)
            } else jB[UB] = nB(NB, jB, IB);
            else jB[UB] = NB
          } catch (uB) {
            QB.c.Warn(uB.message)
          }
        }
      }
    }
  },
  37987: (BB, jB, zB) => {
    function QB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const jB = 16 * Math.random() | 0;
        return ("x" === BB ? jB : 3 & jB | 8).toString(16)
      }))
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  38783: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      static _CheckLimit(BB, jB) {
        let zB = QB._LogLimitOutputs[BB];
        return zB ? zB.current++ : (zB = {
          limit: jB,
          current: 1
        }, QB._LogLimitOutputs[BB] = zB), zB.current <= zB.limit
      }
      static _GenerateLimitMessage(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const zB = QB._LogLimitOutputs[BB];
        if (!zB || !QB.MessageLimitReached) return;
        const nB = this._Levels[jB];
        zB.current === zB.limit && QB[nB.name](QB.MessageLimitReached.replace(/%LIMIT%/g, "" + zB.limit).replace(/%TYPE%/g, nB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        QB._LogCache = BB + QB._LogCache, QB.OnNewCacheEntry && QB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const jB = BB => BB < 10 ? "0" + BB : "" + BB,
          zB = new Date;
        return "[" + jB(zB.getHours()) + ":" + jB(zB.getMinutes()) + ":" + jB(zB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, jB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const nB = Array.isArray(jB) ? jB[0] : jB;
        if (void 0 !== zB && !QB._CheckLimit(nB, zB)) return;
        const dB = QB._FormatMessage(nB),
          IB = this._Levels[BB],
          NB = Array.isArray(jB) ? jB.slice(1) : [];
        IB.logFunc && IB.logFunc("BJS - " + dB, ...NB);
        const uB = `<div style='color:${IB.color}'>${dB}</div><br>`;
        QB._AddLogEntry(uB), QB._GenerateLimitMessage(nB, BB)
      }
      static get LogCache() {
        return QB._LogCache
      }
      static ClearLogCache() {
        QB._LogCache = "", QB._LogLimitOutputs = {}, QB.errorsCount = 0
      }
      static set LogLevels(BB) {
        QB.Log = QB._LogDisabled, QB.Warn = QB._LogDisabled, QB.Error = QB._LogDisabled;
        const jB = [QB.MessageLogLevel, QB.WarningLogLevel, QB.ErrorLogLevel];
        for (const zB of jB)
          if ((BB & zB) === zB) {
            const BB = this._Levels[zB];
            QB[BB.name] = QB._LogEnabled.bind(QB, zB)
          }
      }
    }
    QB.NoneLogLevel = 0, QB.MessageLogLevel = 1, QB.WarningLogLevel = 2, QB.ErrorLogLevel = 4, QB.AllLogLevel = 7, QB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QB._LogCache = "", QB._LogLimitOutputs = {}, QB._Levels = [{}, {
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
    }], QB.errorsCount = 0, QB.Log = QB._LogEnabled.bind(QB, QB.MessageLogLevel), QB.Warn = QB._LogEnabled.bind(QB, QB.WarningLogLevel), QB.Error = QB._LogEnabled.bind(QB, QB.ErrorLogLevel)
  },
  40154: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB.g
    });
    var QB = zB(40156);
    (0, QB.e)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);