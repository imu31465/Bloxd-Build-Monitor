export const id = 256;
export const ids = [256, 262, 266];
export const modules = {
  41350: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      f: () => Ue
    });
    var ye = He(39467),
      be = He(41141),
      Me = He(41320),
      Ke = {};
    class Ue {
      constructor(ee) {
        this.attachedToElement = !1, this.attached = {}, this.camera = ee, this.checkInputs = () => {}
      }
      add(ee) {
        const ie = ee.getSimpleName();
        this.attached[ie] ? ye.e.Warn("camera input of type " + ie + " already exists on camera") : (this.attached[ie] = ee, ee.camera = this.camera, ee.checkInputs && (this.checkInputs = this._addCheckInputs(ee.checkInputs.bind(ee))), this.attachedToElement && ee.attachControl(this.noPreventDefault))
      }
      remove(ee) {
        for (const ie in this.attached) {
          const He = this.attached[ie];
          if (He === ee) return He.detachControl(), He.camera = null, delete this.attached[ie], void this.rebuildInputCheck()
        }
      }
      removeByType(ee) {
        for (const ie in this.attached) {
          const He = this.attached[ie];
          He.getClassName() === ee && (He.detachControl(), He.camera = null, delete this.attached[ie], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(ee) {
        const ie = this.checkInputs;
        return () => {
          ie(), ee()
        }
      }
      attachInput(ee) {
        this.attachedToElement && ee.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          ee = !Me.d.ForceAttachControlToAlwaysPreventDefault && ee, this.attachedToElement = !0, this.noPreventDefault = ee;
          for (const ie in this.attached) this.attached[ie].attachControl(ee)
        }
      }
      detachElement() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ie in this.attached) this.attached[ie].detachControl(), ee && (this.attached[ie].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const ee in this.attached) {
          const ie = this.attached[ee];
          ie.checkInputs && (this.checkInputs = this._addCheckInputs(ie.checkInputs.bind(ie)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(ee) {
        const ie = {};
        for (const He in this.attached) {
          const ee = this.attached[He],
            ye = be.c.Serialize(ee);
          ie[ee.getClassName()] = ye
        }
        ee.inputsmgr = ie
      }
      parse(ee) {
        const ie = ee.inputsmgr;
        if (ie) {
          this.clear();
          for (const ee in ie) {
            const He = Ke[ee];
            if (He) {
              const ye = ie[ee],
                Me = be.c.Parse((() => new He), ye, null);
              this.add(Me)
            }
          }
        } else
          for (const He in this.attached) {
            const ie = Ke[this.attached[He].getClassName()];
            if (ie) {
              const ye = be.c.Parse((() => new ie), ee, null);
              this.remove(this.attached[He]), this.add(ye)
            }
          }
      }
    }
  },
  41357: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye.d
    });
    var ye = He(41366);
    (0, ye.f)()
  },
  41366: (ee, ie, He) => {
    He.d(ie, {
      d: () => oe,
      f: () => ke
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(37917),
      Ke = He(38022),
      Ue = He(41374),
      Fe = He(41323),
      Je = He(37949);
    let oe = (() => {
        var ee;
        let ie, He, Fe = Ue.e,
          Je = [],
          oe = [],
          Re = [],
          ke = [];
        return ee = class extends Fe {
          constructor(ee, ie, He, be) {
            super(ee, He, be), this.groundColor = (0, ye.l)(this, Je, new Ke.c(0, 0, 0)), this.direction = ((0, ye.l)(this, oe), (0, ye.l)(this, Re, void 0)), (0, ye.l)(this, ke), this.direction = ie || Me.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(ee) {
            return this.direction = Me.p.Normalize(ee.subtract(Me.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(ee, ie) {
            const He = Me.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", He.x, He.y, He.z, 0, ie), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ie), this
          }
          transferToNodeMaterialEffect(ee, ie) {
            const He = Me.p.Normalize(this.direction);
            return ee.setFloat3(ie, He.x, He.y, He.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Me.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ue.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(ee, ie) {
            ee["HEMILIGHT" + ie] = !0
          }
        }, (() => {
          const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(Fe[Symbol.metadata] ?? null) : void 0;
          ie = [(0, be.p)()], He = [(0, be.P)()], (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "groundColor" in ee,
              get: ee => ee.groundColor,
              set: (ee, ie) => {
                ee.groundColor = ie
              }
            },
            metadata: Me
          }, Je, oe), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: ee => "direction" in ee,
              get: ee => ee.direction,
              set: (ee, ie) => {
                ee.direction = ie
              }
            },
            metadata: Me
          }, Re, ke), Me && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Me
          })
        })(), ee
      })(),
      Re = !1;

    function ke() {
      Re || (Re = !0, Fe.d.AddNodeConstructor("Light_Type_3", ((ee, ie) => () => new oe(ee, Me.p.Zero(), ie))), (0, Je.e)("BABYLON.HemisphericLight", oe))
    }
  },
  38020: (ee, ie, He) => {
    He.d(ie, {
      Color3: () => ye.c,
      e: () => ye.g
    });
    var ye = He(38022);
    (0, ye.h)()
  },
  38581: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(38590);
    class be {
      static GetPlanes(ee) {
        const ie = [];
        for (let He = 0; He < 6; He++) ie.push(new ye.c(0, 0, 0, 0));
        return be.GetPlanesToRef(ee, ie), ie
      }
      static GetNearPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[2], ie.normal.y = He[7] + He[6], ie.normal.z = He[11] + He[10], ie.d = He[15] + He[14], ie.normalize()
      }
      static GetFarPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[2], ie.normal.y = He[7] - He[6], ie.normal.z = He[11] - He[10], ie.d = He[15] - He[14], ie.normalize()
      }
      static GetLeftPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[0], ie.normal.y = He[7] + He[4], ie.normal.z = He[11] + He[8], ie.d = He[15] + He[12], ie.normalize()
      }
      static GetRightPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[0], ie.normal.y = He[7] - He[4], ie.normal.z = He[11] - He[8], ie.d = He[15] - He[12], ie.normalize()
      }
      static GetTopPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[1], ie.normal.y = He[7] - He[5], ie.normal.z = He[11] - He[9], ie.d = He[15] - He[13], ie.normalize()
      }
      static GetBottomPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[1], ie.normal.y = He[7] + He[5], ie.normal.z = He[11] + He[9], ie.d = He[15] + He[13], ie.normalize()
      }
      static GetPlanesToRef(ee, ie) {
        be.GetNearPlaneToRef(ee, ie[0]), be.GetFarPlaneToRef(ee, ie[1]), be.GetLeftPlaneToRef(ee, ie[2]), be.GetRightPlaneToRef(ee, ie[3]), be.GetTopPlaneToRef(ee, ie[4]), be.GetBottomPlaneToRef(ee, ie[5])
      }
      static IsPointInFrustum(ee, ie) {
        for (let He = 0; He < 6; He++)
          if (ie[He].dotCoordinate(ee) < 0) return !1;
        return !0
      }
    }
  },
  38590: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(37917);
    class be {
      constructor(ee, ie, He, be) {
        this.normal = new ye.p(ee, ie, He), this.d = be
      }
      Qbe() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new be(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let ee = this.normal.getHashCode();
        return ee = 397 * ee ^ this.d, ee
      }
      normalize() {
        const ee = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ie = 0;
        return 0 !== ee && (ie = 1 / ee), this.normal.x *= ie, this.normal.y *= ie, this.normal.z *= ie, this.d *= ie, this
      }
      transform(ee) {
        const ie = be._TmpMatrix;
        ee.invertToRef(ie);
        const He = ie.m,
          ye = this.normal.x,
          Me = this.normal.y,
          Ke = this.normal.z,
          Ue = this.d,
          Fe = ye * He[0] + Me * He[1] + Ke * He[2] + Ue * He[3],
          Je = ye * He[4] + Me * He[5] + Ke * He[6] + Ue * He[7],
          oe = ye * He[8] + Me * He[9] + Ke * He[10] + Ue * He[11],
          Re = ye * He[12] + Me * He[13] + Ke * He[14] + Ue * He[15];
        return new be(Fe, Je, oe, Re)
      }
      dotCoordinate(ee) {
        return this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z + this.d
      }
      copyFromPoints(ee, ie, He) {
        const ye = ie.x - ee.x,
          be = ie.y - ee.y,
          Me = ie.z - ee.z,
          Ke = He.x - ee.x,
          Ue = He.y - ee.y,
          Fe = He.z - ee.z,
          Je = be * Fe - Me * Ue,
          oe = Me * Ke - ye * Fe,
          Re = ye * Ue - be * Ke,
          ke = Math.sqrt(Je * Je + oe * oe + Re * Re);
        let qe;
        return qe = 0 !== ke ? 1 / ke : 0, this.normal.x = Je * qe, this.normal.y = oe * qe, this.normal.z = Re * qe, this.d = -(this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z), this
      }
      isFrontFacingTo(ee, ie) {
        return ye.p.Dot(this.normal, ee) <= ie
      }
      signedDistanceTo(ee) {
        return ye.p.Dot(ee, this.normal) + this.d
      }
      static FromArray(ee) {
        return new be(ee[0], ee[1], ee[2], ee[3])
      }
      static FromPoints(ee, ie, He) {
        const ye = new be(0, 0, 0, 0);
        return ye.copyFromPoints(ee, ie, He), ye
      }
      static FromPositionAndNormal(ee, ie) {
        const He = new be(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(ee, ie, He)
      }
      static FromPositionAndNormalToRef(ee, ie, He) {
        return He.normal.jD(ie), He.normal.normalize(), He.d = -ee.dot(He.normal), He
      }
      static SignedDistanceToPlaneFromPositionAndNormal(ee, ie, He) {
        const be = -(ie.x * ee.x + ie.y * ee.y + ie.z * ee.z);
        return ye.p.Dot(He, ie) + be
      }
    }
    be._TmpMatrix = ye.b.Identity()
  },
  37913: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      Matrix: () => ye.b,
      Quaternion: () => ye.f,
      RegisterMathVector: () => ye.h,
      TmpVectors: () => ye.j,
      Vector2: () => ye.n,
      rf: () => ye.p,
      Vector4: () => ye.s
    });
    var ye = He(37917);
    (0, ye.h)()
  },
  38919: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      constructor(ee, ie, He, ye) {
        this.x = ee, this.y = ie, this.width = He, this.height = ye
      }
      toGlobal(ee, ie) {
        return new ye(this.x * ee, this.y * ie, this.width * ee, this.height * ie)
      }
      toGlobalToRef(ee, ie, He) {
        return He.x = this.x * ee, He.y = this.y * ie, He.width = this.width * ee, He.height = this.height * ie, this
      }
      clone() {
        return new ye(this.x, this.y, this.width, this.height)
      }
    }
  },
  41520: (ee, ie, He) => {
    He.d(ie, {
      e: () => Je
    });
    var ye = He(37917),
      be = He(38022),
      Me = He(41524),
      Ke = He(41535),
      Ue = He(41550);

    function Fe(ee) {
      let ie = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const He = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Me = [],
        Fe = ee.width || ee.size || 1,
        Je = ee.height || ee.size || 1,
        oe = ee.depth || ee.size || 1,
        Re = ee.wrap || !1;
      let ke = void 0 === ee.topBaseAt ? 1 : ee.topBaseAt,
        qe = void 0 === ee.bottomBaseAt ? 0 : ee.bottomBaseAt;
      ke = (ke + 4) % 4, qe = (qe + 4) % 4;
      let fe = [2, 0, 3, 1][ke],
        Te = [2, 0, 1, 3][qe],
        pe = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Re) {
        ie = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], pe = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let ee = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          He = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const ye = [17, 18, 19, 16],
          be = [22, 23, 20, 21];
        for (; fe > 0;) ee.unshift(ee.pop()), ye.unshift(ye.pop()), fe--;
        for (; Te > 0;) He.unshift(He.pop()), be.unshift(be.pop()), Te--;
        ee = ee.flat(), He = He.flat(), pe = pe.concat(ee).concat(He), ie.push(ye[0], ye[2], ye[3], ye[0], ye[1], ye[2]), ie.push(be[0], be[2], be[3], be[0], be[1], be[2])
      }
      const Xe = [Fe / 2, Je / 2, oe / 2],
        ze = pe.reduce(((ee, ie, He) => ee.concat(ie * Xe[He % 3])), []),
        Be = 0 === ee.sideOrientation ? 0 : ee.sideOrientation || Ke.e.DEFAULTSIDE,
        Ee = ee.faceUV || new Array(6),
        ge = ee.faceColors,
        Oe = [];
      for (let Ke = 0; Ke < 6; Ke++) void 0 === Ee[Ke] && (Ee[Ke] = new ye.s(0, 0, 1, 1)), ge && void 0 === ge[Ke] && (ge[Ke] = new be.g(1, 1, 1, 1));
      for (let ye = 0; ye < 6; ye++)
        if (Me.push(Ee[ye].z, Ue.c ? 1 - Ee[ye].w : Ee[ye].w), Me.push(Ee[ye].x, Ue.c ? 1 - Ee[ye].w : Ee[ye].w), Me.push(Ee[ye].x, Ue.c ? 1 - Ee[ye].y : Ee[ye].y), Me.push(Ee[ye].z, Ue.c ? 1 - Ee[ye].y : Ee[ye].y), ge)
          for (let ee = 0; ee < 4; ee++) Oe.push(ge[ye].r, ge[ye].g, ge[ye].b, ge[ye].a);
      Ke.e._ComputeSides(Be, ze, ie, He, Me, ee.frontUVs, ee.backUVs);
      const de = new Ke.e;
      if (de.indices = ie, de.positions = ze, de.normals = He, de.uvs = Me, ge) {
        const ee = Be === Ke.e.DOUBLESIDE ? Oe.concat(Oe) : Oe;
        de.colors = ee
      }
      return de
    }

    function Je(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const ye = new Me.b(ee, He);
      ie.sideOrientation = Me.b._GetDefaultSideOrientation(ie.sideOrientation), ye._originalBuilderSideOrientation = ie.sideOrientation;
      return Fe(ie).applyToMesh(ye, ie.updatable), ye
    }
    let oe = !1;
    oe || (oe = !0, Ke.e.CreateBox = Fe, Me.b.CreateBox = function(ee, ie) {
      return Je(ee, {
        size: ie,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  41573: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re
    });
    var ye = He(37917),
      be = He(41524),
      Me = He(41535),
      Ke = He(41575),
      Ue = He(41247),
      Fe = He(39467);

    function Je(ee) {
      const ie = [],
        He = [],
        ye = ee.lines,
        be = ee.colors,
        Ke = [];
      let Ue = 0;
      for (let Me = 0; Me < ye.length; Me++) {
        const ee = ye[Me];
        for (let ye = 0; ye < ee.length; ye++) {
          const {
            x: Fe,
            y: Je,
            z: oe
          } = ee[ye];
          if (He.push(Fe, Je, oe), be) {
            const ee = be[Me],
              {
                r: ie,
                g: He,
                b: Ue,
                a: Fe
              } = ee[ye];
            Ke.push(ie, He, Ue, Fe)
          }
          ye > 0 && (ie.push(Ue - 1), ie.push(Ue)), Ue++
        }
      }
      const Fe = new Me.e;
      return Fe.indices = ie, Fe.positions = He, be && (Fe.colors = Ke), Fe
    }

    function oe(ee) {
      const ie = ee.dashSize || 3,
        He = ee.gapSize || 1,
        be = ee.dashNb || 200,
        Ke = ee.points,
        Ue = [],
        Fe = [],
        Je = ye.p.Zero();
      let oe, Re, ke, qe = 0,
        fe = 0;
      for (ke = 0; ke < Ke.length - 1; ke++) Ke[ke + 1].subtractToRef(Ke[ke], Je), qe += Je.length();
      const Te = qe / be,
        pe = ie * Te / (ie + He);
      for (ke = 0; ke < Ke.length - 1; ke++) {
        Ke[ke + 1].subtractToRef(Ke[ke], Je), oe = Math.floor(Je.length() / Te), Je.normalize();
        for (let ee = 0; ee < oe; ee++) Re = Te * ee, Ue.push(Ke[ke].x + Re * Je.x, Ke[ke].y + Re * Je.y, Ke[ke].z + Re * Je.z), Ue.push(Ke[ke].x + (Re + pe) * Je.x, Ke[ke].y + (Re + pe) * Je.y, Ke[ke].z + (Re + pe) * Je.z), Fe.push(fe, fe + 1), fe += 2
      }
      const Xe = new Me.e;
      return Xe.positions = Ue, Xe.indices = Fe, Xe
    }

    function Re(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const ye = ie.instance,
        be = ie.lines,
        Me = ie.colors;
      if (ye) {
        const ee = ye.getVerticesData(Ue.h.PositionKind);
        let ie, He;
        Me && (ie = ye.getVerticesData(Ue.h.ColorKind));
        let Ke = 0,
          Fe = 0;
        for (let ye = 0; ye < be.length; ye++) {
          const Ue = be[ye];
          for (let be = 0; be < Ue.length; be++) ee[Ke] = Ue[be].x, ee[Ke + 1] = Ue[be].y, ee[Ke + 2] = Ue[be].z, Me && ie && (He = Me[ye], ie[Fe] = He[be].r, ie[Fe + 1] = He[be].g, ie[Fe + 2] = He[be].b, ie[Fe + 3] = He[be].a, Fe += 4), Ke += 3
        }
        return ye.updateVerticesData(Ue.h.PositionKind, ee, !1, !1), Me && ie && ye.updateVerticesData(Ue.h.ColorKind, ie, !1, !1), ye.refreshBoundingInfo(), ye
      }
      const Fe = !!Me,
        oe = new Ke.b(ee, He, null, void 0, void 0, Fe, ie.useVertexAlpha, ie.material);
      return Je(ie).applyToMesh(oe, ie.updatable), oe
    }

    function ke(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const ye = ie.colors ? [ie.colors] : null;
      return Re(ee, {
        lines: [ie.points],
        updatable: ie.updatable,
        instance: ie.instance,
        colors: ye,
        useVertexAlpha: ie.useVertexAlpha,
        material: ie.material
      }, He)
    }

    function qe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Me = ie.points,
        Ue = ie.instance,
        Je = ie.gapSize || 1,
        Re = ie.dashSize || 3;
      if (Ue) {
        const ee = ee => {
          const ie = ye.p.Zero(),
            He = ee.length / 6;
          let be, Ke, Fe, Je, oe = 0,
            Re = 0;
          for (Fe = 0; Fe < Me.length - 1; Fe++) Me[Fe + 1].subtractToRef(Me[Fe], ie), oe += ie.length();
          const ke = oe / He,
            qe = Ue._creationDataStorage.dashSize,
            fe = qe * ke / (qe + Ue._creationDataStorage.gapSize);
          for (Fe = 0; Fe < Me.length - 1; Fe++)
            for (Me[Fe + 1].subtractToRef(Me[Fe], ie), be = Math.floor(ie.length() / ke), ie.normalize(), Je = 0; Je < be && Re < ee.length;) Ke = ke * Je, ee[Re] = Me[Fe].x + Ke * ie.x, ee[Re + 1] = Me[Fe].y + Ke * ie.y, ee[Re + 2] = Me[Fe].z + Ke * ie.z, ee[Re + 3] = Me[Fe].x + (Ke + fe) * ie.x, ee[Re + 4] = Me[Fe].y + (Ke + fe) * ie.y, ee[Re + 5] = Me[Fe].z + (Ke + fe) * ie.z, Re += 6, Je++;
          for (; Re < ee.length;) ee[Re] = Me[Fe].x, ee[Re + 1] = Me[Fe].y, ee[Re + 2] = Me[Fe].z, Re += 3
        };
        return (ie.dashNb || ie.dashSize || ie.gapSize || ie.useVertexAlpha || ie.material) && Fe.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Ue.updateMeshPositions(ee, !1), Ue
      }
      const ke = new Ke.b(ee, He, null, void 0, void 0, void 0, ie.useVertexAlpha, ie.material);
      return oe(ie).applyToMesh(ke, ie.updatable), ke._creationDataStorage = new be.f, ke._creationDataStorage.dashSize = Re, ke._creationDataStorage.gapSize = Je, ke
    }
    let fe = !1;
    fe || (fe = !0, Me.e.CreateLineSystem = Je, Me.e.CreateDashedLines = oe, be.b.CreateLines = function(ee, ie) {
      return ke(ee, {
        points: ie,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, be.b.CreateDashedLines = function(ee, ie, He, ye, be) {
      return qe(ee, {
        points: ie,
        dashSize: He,
        gapSize: ye,
        dashNb: be,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  41575: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      d: () => Te
    });
    var ye, be, Me = He(38022),
      Ke = He(41247),
      Ue = He(41524),
      Fe = He(41581),
      Je = He(41414),
      oe = He(41585),
      Re = He(40985);
    class ke extends Ue.b {
      _isShaderMaterial(ee) {
        return !!ee && "ShaderMaterial" === ee.getClassName()
      }
      constructor(ee) {
        let ie = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ye = arguments.length > 5 ? arguments[5] : void 0,
          be = arguments.length > 6 ? arguments[6] : void 0,
          Ue = arguments.length > 7 ? arguments[7] : void 0;
        super(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ie, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = ye, this.useVertexAlpha = be, this.color = new Me.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ie && (this.color = ie.color.clone(), this.alpha = ie.alpha, this.useVertexColor = ie.useVertexColor, this.useVertexAlpha = ie.useVertexAlpha), this.intersectionThreshold = .1;
        const Fe = {
          attributes: [Ke.h.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Fe.defines.push("#define VERTEXALPHA") : Fe.needAlphaBlending = !1, this.useVertexColor ? (Fe.defines.push("#define VERTEXCOLOR"), Fe.attributes.push(Ke.h.ColorKind)) : (Fe.uniforms.push("color"), this._color4 = new Me.g), Ue) this.material = Ue;
        else {
          this.Xx().Nf().isWebGPU && !ke.ForceGLSL && (this._shaderLanguage = 1), Fe.shaderLanguage = this._shaderLanguage, Fe.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([He.e(653).then((() => He(45770))), He.e(659).then((() => He(45772)))]) : await Promise.all([He.e(635).then((() => He(45780))), He.e(641).then((() => He(45785)))])
          };
          const ee = new oe.o("colorShader", this.Xx(), "color", Fe, !1);
          ee.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(ee)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(ee) {
        const ie = this.material;
        if (ie === ee) return;
        const He = ie && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(ee), He && ie?.dispose()
      }
      _setInternalMaterial(ee) {
        this._setMaterial(ee), this.material && (this.material.fillMode = Je.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(ee) {}
      _bind(ee, ie) {
        if (!this._geometry) return this;
        const He = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ie, He) : this._geometry._bind(ie, He, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: ee,
            g: ie,
            b: He
          } = this.color;
          this._color4.set(ee, ie, He, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(ee, ie, He) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const ye = this.Xx().Nf();
        return this._unIndexed ? ye.drawArraysType(Je.e.LineListDrawMode, ee.verticesStart, ee.verticesCount, He) : ye.drawElementsType(Je.e.LineListDrawMode, ee.indexStart, ee.indexCount, He), this
      }
      dispose(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ie) && this.material?.dispose(!1, !1, !0), super.dispose(ee)
      }
      clone(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 ? arguments[2] : void 0;
        if (ie && void 0 === ie._addToSceneRootNodes) {
          const He = ie;
          return He.source = this, new ke(ee, this.Xx(), He.parent, He.source, He.doNotCloneChildren)
        }
        return new ke(ee, this.Xx(), ie, this, He)
      }
      createInstance(ee) {
        const ie = new qe(ee, this);
        if (this.pC) {
          ie.pC = {};
          for (const ee in this.pC) ie.pC[ee] = this.pC[ee]
        }
        return ie
      }
      serialize(ee) {
        super.serialize(ee), ee.color = this.color.Qbe(), ee.alpha = this.alpha
      }
      static Parse(ee, ie) {
        const He = new ke(ee.name, ie);
        return He.color = Me.c.FromArray(ee.color), He.alpha = ee.alpha, He
      }
    }
    ke.ForceGLSL = !1;
    class qe extends Fe.c {
      constructor(ee, ie) {
        super(ee, ie), this.intersectionThreshold = ie.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let fe = !1;

    function Te() {
      fe || (fe = !0, Ue.b._LinesMeshParser = (ee, ie) => ke.Parse(ee, ie))
    }(ye = ke.prototype).enableEdgesRendering ?? (ye.enableEdgesRendering = (0, Re.h)("LinesMesh", "enableEdgesRendering")), (be = qe.prototype).enableEdgesRendering ?? (be.enableEdgesRendering = (0, Re.h)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  39463: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me
    });
    var ye = He(39467);
    const be = (ee, ie, He) => ee ? ee.getClassName && "Mesh" === ee.getClassName() ? null : !ee.getClassName || "SubMesh" !== ee.getClassName() && "PhysicsBody" !== ee.getClassName() ? ee.clone ? ee.clone() : Array.isArray(ee) ? ee.slice() : He && "object" === typeof ee ? {
      ...ee
    } : null : ee.clone(ie) : null;
    class Me {
      static DeepCopy(ee, ie, He, Me) {
        let Ke = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ue = function(ee) {
          const ie = [];
          do {
            const He = Object.getOwnPropertyNames(ee);
            for (const ee of He) - 1 === ie.indexOf(ee) && ie.push(ee)
          } while (ee = Object.getPrototypeOf(ee));
          return ie
        }(ee);
        for (const Je of Ue) {
          if ("_" === Je[0] && (!Me || -1 === Me.indexOf(Je))) continue;
          if (Je.endsWith("Observable")) continue;
          if (He && -1 !== He.indexOf(Je)) continue;
          const Ue = ee[Je],
            oe = typeof Ue;
          if ("function" !== oe) try {
            if ("object" === oe)
              if (Ue instanceof Uint8Array) ie[Je] = Uint8Array.from(Ue);
              else if (Ue instanceof Array) {
              if (ie[Je] = [], Ue.length > 0)
                if ("object" == typeof Ue[0])
                  for (let ee = 0; ee < Ue.length; ee++) {
                    const He = be(Ue[ee], ie, Ke); - 1 === ie[Je].indexOf(He) && ie[Je].push(He)
                  } else ie[Je] = Ue.slice(0)
            } else ie[Je] = be(Ue, ie, Ke);
            else ie[Je] = Ue
          } catch (Fe) {
            ye.e.Warn(Fe.message)
          }
        }
      }
    }
  },
  38745: (ee, ie, He) => {
    function ye() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ee => {
        const ie = 16 * Math.random() | 0;
        return ("x" === ee ? ie : 3 & ie | 8).toString(16)
      }))
    }
    He.d(ie, {
      d: () => ye
    })
  },
  39467: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      static _CheckLimit(ee, ie) {
        let He = ye._LogLimitOutputs[ee];
        return He ? He.current++ : (He = {
          limit: ie,
          current: 1
        }, ye._LogLimitOutputs[ee] = He), He.current <= He.limit
      }
      static _GenerateLimitMessage(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const He = ye._LogLimitOutputs[ee];
        if (!He || !ye.MessageLimitReached) return;
        const be = this._Levels[ie];
        He.current === He.limit && ye[be.name](ye.MessageLimitReached.replace(/%LIMIT%/g, "" + He.limit).replace(/%TYPE%/g, be.name ?? ""))
      }
      static _AddLogEntry(ee) {
        ye._LogCache = ee + ye._LogCache, ye.OnNewCacheEntry && ye.OnNewCacheEntry(ee)
      }
      static _FormatMessage(ee) {
        const ie = ee => ee < 10 ? "0" + ee : "" + ee,
          He = new Date;
        return "[" + ie(He.getHours()) + ":" + ie(He.getMinutes()) + ":" + ie(He.getSeconds()) + "]: " + ee
      }
      static _LogDisabled(ee, ie) {}
      static _LogEnabled() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const be = Array.isArray(ie) ? ie[0] : ie;
        if (void 0 !== He && !ye._CheckLimit(be, He)) return;
        const Me = ye._FormatMessage(be),
          Ke = this._Levels[ee],
          Ue = Array.isArray(ie) ? ie.slice(1) : [];
        Ke.logFunc && Ke.logFunc("BJS - " + Me, ...Ue);
        const Fe = `<div style='color:${Ke.color}'>${Me}</div><br>`;
        ye._AddLogEntry(Fe), ye._GenerateLimitMessage(be, ee)
      }
      static get LogCache() {
        return ye._LogCache
      }
      static ClearLogCache() {
        ye._LogCache = "", ye._LogLimitOutputs = {}, ye.errorsCount = 0
      }
      static set LogLevels(ee) {
        ye.Log = ye._LogDisabled, ye.Warn = ye._LogDisabled, ye.Error = ye._LogDisabled;
        const ie = [ye.MessageLogLevel, ye.WarningLogLevel, ye.ErrorLogLevel];
        for (const He of ie)
          if ((ee & He) === He) {
            const ee = this._Levels[He];
            ye[ee.name] = ye._LogEnabled.bind(ye, He)
          }
      }
    }
    ye.NoneLogLevel = 0, ye.MessageLogLevel = 1, ye.WarningLogLevel = 2, ye.ErrorLogLevel = 4, ye.AllLogLevel = 7, ye.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ye._LogCache = "", ye._LogLimitOutputs = {}, ye._Levels = [{}, {
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
    }], ye.errorsCount = 0, ye.Log = ye._LogEnabled.bind(ye, ye.MessageLogLevel), ye.Warn = ye._LogEnabled.bind(ye, ye.WarningLogLevel), ye.Error = ye._LogEnabled.bind(ye, ye.ErrorLogLevel)
  },
  41195: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye.f
    });
    var ye = He(41199);
    (0, ye.d)()
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);