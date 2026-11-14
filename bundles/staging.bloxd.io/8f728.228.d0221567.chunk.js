export const id = 228;
export const ids = [228];
export const modules = {
  38194: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      d: () => ec,
      g: () => Pc,
      i: () => Mc
    });
    var Vc = nc(37985),
      Ic = nc(37191),
      rB = nc(38116),
      uc = nc(38017);
    class sc {
      get nPc() {
        return this._isDisposed
      }
      constructor(cB, Bc, nc) {
        let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          rB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          sc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Mc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Pc = arguments.length > 7 ? arguments[7] : void 0,
          qB = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, uc.b)(), cB && cB.knc ? this._engine = cB.knc().RV() : this._engine = cB, this._updatable = nc, this._instanced = sc, this._divisor = Pc || 1, this._label = qB, Bc instanceof Vc.e ? (this._data = null, this._buffer = Bc) : (this._data = Bc, this._buffer = null), this.byteStride = Mc ? Ic : Ic * Float32Array.BYTES_PER_ELEMENT, rB || this.create()
      }
      createVertexBuffer(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          uc = arguments.length > 6 ? arguments[6] : void 0;
        const sc = rB ? Bc : Bc * Float32Array.BYTES_PER_ELEMENT,
          Pc = Vc ? rB ? Vc : Vc * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new Mc(this._engine, this, cB, this._updatable, !0, Pc, void 0 === Ic ? this._instanced : Ic, sc, nc, void 0, void 0, !0, this._divisor || uc)
      }
      isUpdatable() {
        return this._updatable
      }
      getData() {
        return this._data
      }
      getBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT
      }
      create() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !cB && this._buffer || (cB = cB || this._data, cB && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, cB), this._data = cB) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(cB, this._label), this._data = cB) : this._buffer = this._engine.createVertexBuffer(cB, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.Qc > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.Qc, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.Qc, void 0, this._label));
          Ic.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(cB) {
        this.create(cB)
      }
      updateDirectly(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, cB, Vc ? Bc : Bc * Float32Array.BYTES_PER_ELEMENT, nc ? nc * this.byteStride : void 0), this._data = 0 === Bc && void 0 === nc ? cB : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class Mc {
      get nPc() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(cB) {
        const Bc = 0 != cB;
        this._instanceDivisor = cB, Bc !== this._instanced && (this._instanced = Bc, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const cB = this.getData();
        return cB ? Array.isArray(cB) ? cB.length / (this.byteStride / 4) - this.byteOffset / 4 : (cB.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(cB, Bc, nc, Vc, Ic, uc, Oc, Tc, fc, mB) {
        let ec, tB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Sc = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          yB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          zB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = cB, "object" === typeof Vc && null !== Vc ? (ec = Vc.updatable ?? !1, Ic = Vc.postponeInternalCreation, uc = Vc.stride, Oc = Vc.instanced, Tc = Vc.offset, fc = Vc.size, mB = Vc.type, tB = Vc.normalized ?? !1, Sc = Vc.useBytes ?? !1, yB = Vc.divisor ?? 1, zB = Vc.takeBufferOwnership ?? !1, this._label = Vc.label) : ec = !!Vc, Bc instanceof sc ? (this._buffer = Bc, this._ownsBuffer = zB) : (this._buffer = new sc(cB, Bc, ec, uc, Ic, Oc, Sc, yB, this._label), this._ownsBuffer = !0), this.uniqueId = Mc._Counter++, this._kind = nc, void 0 === mB) {
          const cB = this.getData();
          this.type = cB ? qB(cB) : Mc.FLOAT
        } else this.type = mB;
        const pc = (0, rB.q)(this.type);
        Sc ? (this._size = fc || (uc ? uc / pc : Pc(nc)), this.byteStride = uc || this._buffer.byteStride || this._size * pc, this.byteOffset = Tc || 0) : (this._size = fc || uc || Pc(nc), this.byteStride = uc ? uc * pc : this._buffer.byteStride || this._size * pc, this.byteOffset = (Tc || 0) * pc), this.normalized = tB, this._instanced = void 0 !== Oc && Oc, this._instanceDivisor = Oc ? yB : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(cB) {
        switch (cB) {
          case Mc.BYTE:
            return 0;
          case Mc.UNSIGNED_BYTE:
            return 1;
          case Mc.SHORT:
            return 2;
          case Mc.UNSIGNED_SHORT:
            return 3;
          case Mc.INT:
            return 4;
          case Mc.UNSIGNED_INT:
            return 5;
          case Mc.FLOAT:
            return 6;
          case Mc.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${cB}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (Mc._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
      }
      _rebuild() {
        this._buffer?._rebuild()
      }
      getKind() {
        return this._kind
      }
      isUpdatable() {
        return this._buffer.isUpdatable()
      }
      getData() {
        return this._buffer.getData()
      }
      getFloatData(cB, Bc) {
        const nc = this.getData();
        return nc ? (0, rB.m)(nc, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, cB, Bc) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, rB.q)(this.type)
      }
      JMc() {
        return this.byteOffset / (0, rB.q)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, rB.q)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(cB) {
        this._buffer.create(cB), this._alignBuffer()
      }
      update(cB) {
        this._buffer.update(cB), this._alignBuffer()
      }
      updateDirectly(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(cB, Bc, void 0, nc), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(cB, Bc) {
        (0, rB.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, cB, this.normalized, ((cB, nc) => {
          for (let Vc = 0; Vc < this._size; Vc++) Bc(cB[Vc], nc + Vc)
        }))
      }
      _alignBuffer() {}
    }

    function Pc(cB) {
      switch (cB) {
        case Mc.UVKind:
        case Mc.UV2Kind:
        case Mc.UV3Kind:
        case Mc.UV4Kind:
        case Mc.UV5Kind:
        case Mc.UV6Kind:
          return 2;
        case Mc.NormalKind:
        case Mc.PositionKind:
          return 3;
        case Mc.ColorKind:
        case Mc.ColorInstanceKind:
        case Mc.MatricesIndicesKind:
        case Mc.MatricesIndicesExtraKind:
        case Mc.MatricesWeightsKind:
        case Mc.MatricesWeightsExtraKind:
        case Mc.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + cB + "'")
      }
    }

    function qB(cB) {
      return cB instanceof Int8Array ? Mc.BYTE : cB instanceof Uint8Array ? Mc.UNSIGNED_BYTE : cB instanceof Int16Array ? Mc.SHORT : cB instanceof Uint16Array ? Mc.UNSIGNED_SHORT : cB instanceof Int32Array ? Mc.INT : cB instanceof Uint32Array ? Mc.UNSIGNED_INT : Mc.FLOAT
    }

    function Oc(cB) {
      return (0, rB.q)(cB)
    }

    function Tc(cB, Bc, nc, Vc, Ic, uc, sc, Mc) {
      (0, rB.j)(cB, Bc, nc, Vc, Ic, uc, sc, ((cB, Bc) => {
        for (let nc = 0; nc < Vc; nc++) Mc(cB[nc], Bc + nc)
      }))
    }

    function fc(cB, Bc, nc, Vc, Ic, uc, sc, Mc) {
      return (0, rB.m)(cB, Bc, nc, Vc, Ic, uc, sc, Mc)
    }
    Mc._Counter = 0, Mc.BYTE = 5120, Mc.UNSIGNED_BYTE = 5121, Mc.SHORT = 5122, Mc.UNSIGNED_SHORT = 5123, Mc.INT = 5124, Mc.UNSIGNED_INT = 5125, Mc.FLOAT = 5126, Mc.HALF_FLOAT = 5131, Mc.PositionKind = "position", Mc.NormalKind = "normal", Mc.TangentKind = "tangent", Mc.UVKind = "uv", Mc.UV2Kind = "uv2", Mc.UV3Kind = "uv3", Mc.UV4Kind = "uv4", Mc.UV5Kind = "uv5", Mc.UV6Kind = "uv6", Mc.ColorKind = "color", Mc.ColorInstanceKind = "instanceColor", Mc.MatricesIndicesKind = "matricesIndices", Mc.MatricesWeightsKind = "matricesWeights", Mc.MatricesIndicesExtraKind = "matricesIndicesExtra", Mc.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let mB = !1;

    function ec() {
      mB || (mB = !0, Mc.DeduceStride = Pc, Mc.GetDataType = qB, Mc.GetTypeByteLength = Oc, Mc.ForEach = Tc, Mc.GetFloatData = fc)
    }
  },
  37985: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    class Vc {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.Qc = 0, this.is32Bits = !1, this.uniqueId = Vc._Counter++
      }
    }
    Vc._Counter = 0
  },
  38187: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(35756),
      Ic = nc(38194);
    class rB {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || Bc && !this.pickedMesh.isVerticesDataPresent(Ic.i.NormalKind)) return null;
        let nc, rB = this.pickedMesh.Tfc();
        0 === rB?.length && (rB = null);
        const uc = Vc.i.KV[0],
          sc = Vc.i.KV[1],
          Mc = Vc.i.KV[2];
        if (Bc) {
          const cB = this.pickedMesh.getVerticesData(Ic.i.NormalKind);
          let Bc = rB ? Vc.p.FromArrayToRef(cB, 3 * rB[3 * this.faceId], uc) : uc.puc(cB[3 * this.faceId * 3], cB[3 * this.faceId * 3 + 1], cB[3 * this.faceId * 3 + 2]),
            Pc = rB ? Vc.p.FromArrayToRef(cB, 3 * rB[3 * this.faceId + 1], sc) : sc.puc(cB[3 * (3 * this.faceId + 1)], cB[3 * (3 * this.faceId + 1) + 1], cB[3 * (3 * this.faceId + 1) + 2]),
            qB = rB ? Vc.p.FromArrayToRef(cB, 3 * rB[3 * this.faceId + 2], Mc) : Mc.puc(cB[3 * (3 * this.faceId + 2)], cB[3 * (3 * this.faceId + 2) + 1], cB[3 * (3 * this.faceId + 2) + 2]);
          Bc = Bc.scale(this.bu), Pc = Pc.scale(this.bv), qB = qB.scale(1 - this.bu - this.bv), nc = new Vc.p(Bc.x + Pc.x + qB.x, Bc.y + Pc.y + qB.y, Bc.z + Pc.z + qB.z)
        } else {
          const cB = this.pickedMesh.getVerticesData(Ic.i.PositionKind),
            Bc = rB ? Vc.p.FromArrayToRef(cB, 3 * rB[3 * this.faceId], uc) : uc.puc(cB[3 * this.faceId * 3], cB[3 * this.faceId * 3 + 1], cB[3 * this.faceId * 3 + 2]),
            Pc = rB ? Vc.p.FromArrayToRef(cB, 3 * rB[3 * this.faceId + 1], sc) : sc.puc(cB[3 * (3 * this.faceId + 1)], cB[3 * (3 * this.faceId + 1) + 1], cB[3 * (3 * this.faceId + 1) + 2]),
            qB = rB ? Vc.p.FromArrayToRef(cB, 3 * rB[3 * this.faceId + 2], Mc) : Mc.puc(cB[3 * (3 * this.faceId + 2)], cB[3 * (3 * this.faceId + 2) + 1], cB[3 * (3 * this.faceId + 2) + 2]),
            Oc = Bc.subtract(Pc),
            Tc = qB.subtract(Pc);
          nc = Vc.p.Cross(Oc, Tc)
        }
        const Pc = (cB, Bc) => {
          if (-1 !== this.thinInstanceIndex) {
            const nc = cB._thinInstanceDataStorage.matrixData,
              Ic = this.thinInstanceIndex << 4;
            if (nc && nc.length > Ic) {
              const cB = Vc.i.Matrix[0];
              Vc.d.FromArrayToRef(nc, Ic, cB), Vc.p.TransformNormalToRef(Bc, cB, Bc)
            }
          }
          let nc = cB.getWorldMatrix();
          cB.nonUniformScaling && (Vc.i.Matrix[0].qqc(nc), nc = Vc.i.Matrix[0], nc.setTranslationFromFloats(0, 0, 0), nc.invert(), nc.transposeToRef(Vc.i.Matrix[1]), nc = Vc.i.Matrix[1]), Vc.p.TransformNormalToRef(Bc, nc, Bc)
        };
        if (cB && Pc(this.pickedMesh, nc), this.ray) {
          const Bc = Vc.i.KV[0].qqc(nc);
          cB || Pc(this.pickedMesh, Bc), Vc.p.Dot(Bc, this.ray.direction) > 0 && nc.negateInPlace()
        }
        return nc.normalize(), nc
      }
      getTextureCoordinates() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ic.i.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(cB)) return null;
        const Bc = this.pickedMesh.Tfc();
        if (!Bc) return null;
        const nc = this.pickedMesh.getVerticesData(cB);
        if (!nc) return null;
        let rB = Vc.m.FromArray(nc, 2 * Bc[3 * this.faceId]),
          uc = Vc.m.FromArray(nc, 2 * Bc[3 * this.faceId + 1]),
          sc = Vc.m.FromArray(nc, 2 * Bc[3 * this.faceId + 2]);
        return rB = rB.scale(this.bu), uc = uc.scale(this.bv), sc = sc.scale(1 - this.bu - this.bv), new Vc.m(rB.x + uc.x + sc.x, rB.y + uc.y + sc.y)
      }
    }
  },
  38017: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB
    });
    var Vc = nc(37911);
    let Ic = !1;

    function rB() {
      Ic || (Ic = !0, Vc.ThinEngine.prototype.updateDynamicIndexBuffer = function(cB, Bc) {
        let nc;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(cB), nc = cB.is32Bits ? Bc instanceof Uint32Array ? Bc : new Uint32Array(Bc) : Bc instanceof Uint16Array ? Bc : new Uint16Array(Bc), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, nc, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Vc.ThinEngine.prototype.updateDynamicVertexBuffer = function(cB, Bc, nc, Vc) {
        this.bindArrayBuffer(cB), void 0 === nc && (nc = 0);
        const Ic = Bc.byteLength || Bc.length;
        void 0 === Vc || Vc >= Ic && 0 === nc ? Bc instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, nc, new Float32Array(Bc)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, nc, Bc) : Bc instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, nc, new Float32Array(Bc).subarray(0, Vc / 4)) : (Bc = ArrayBuffer.isView(Bc) ? new Uint8Array(Bc.buffer, Bc.byteOffset, Vc) : new Uint8Array(Bc, 0, Vc), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, nc, Bc)), this._resetVertexBufferBinding()
      })
    }
  },
  37996: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc
    });
    class Vc {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Bc = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = Bc, !cB && (cB = Bc.createTexture(), !cB)) throw new Error("Unable to create webGL texture");
        this.set(cB)
      }
      setUsage() {}
      set(cB) {
        this._webGLTexture = cB
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(cB) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(cB)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const cB of this._MSAARenderBuffers) this._context.deleteRenderbuffer(cB);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[cB] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  37965: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => yB
    });
    var Vc = nc(35783),
      Ic = nc(37919),
      rB = nc(35780),
      uc = nc(37191),
      sc = nc(35774),
      Mc = nc(37968);
    class Pc {
      constructor() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, cB && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(cB) {
        this._zOffset !== cB && (this._zOffset = cB, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(cB) {
        this._zOffsetUnits !== cB && (this._zOffsetUnits = cB, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(cB) {
        this._cullFace !== cB && (this._cullFace = cB, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(cB) {
        this._cull !== cB && (this._cull = cB, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(cB) {
        this._depthFunc !== cB && (this._depthFunc = cB, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(cB) {
        this._depthMask !== cB && (this._depthMask = cB, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(cB) {
        this._depthTest !== cB && (this._depthTest = cB, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(cB) {
        this._frontFace !== cB && (this._frontFace = cB, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(cB) {
        this.isDirty && (this._isCullDirty && (this.cull ? cB.enable(cB.CULL_FACE) : cB.disable(cB.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (cB.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (cB.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? cB.enable(cB.DEPTH_TEST) : cB.disable(cB.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (cB.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (cB.enable(cB.POLYGON_OFFSET_FILL), cB.polygonOffset(this.zOffset, this.zOffsetUnits)) : cB.disable(cB.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (cB.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class qB {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(cB) {
        this._func !== cB && (this._func = cB, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(cB) {
        this._backFunc !== cB && (this._backFunc = cB, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(cB) {
        this._funcRef !== cB && (this._funcRef = cB, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(cB) {
        this._funcMask !== cB && (this._funcMask = cB, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(cB) {
        this._opStencilFail !== cB && (this._opStencilFail = cB, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(cB) {
        this._opDepthFail !== cB && (this._opDepthFail = cB, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(cB) {
        this._opStencilDepthPass !== cB && (this._opStencilDepthPass = cB, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(cB) {
        this._backOpStencilFail !== cB && (this._backOpStencilFail = cB, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(cB) {
        this._backOpDepthFail !== cB && (this._backOpDepthFail = cB, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(cB) {
        this._backOpStencilDepthPass !== cB && (this._backOpStencilDepthPass = cB, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(cB) {
        this._mask !== cB && (this._mask = cB, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(cB) {
        this._enabled !== cB && (this._enabled = cB, this._isStencilTestDirty = !0)
      }
      constructor() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, cB && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(cB) {
        if (!cB) return;
        const Bc = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = Bc ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = Bc ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = Bc ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = Bc ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = Bc ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = Bc ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = Bc ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = Bc ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = Bc ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = Bc ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = Bc ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = Bc ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? cB.enable(cB.STENCIL_TEST) : cB.disable(cB.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (cB.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (cB.stencilFuncSeparate(cB.FRONT, this.func, this.funcRef, this.funcMask), cB.stencilFuncSeparate(cB.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (cB.stencilOpSeparate(cB.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), cB.stencilOpSeparate(cB.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Oc {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Oc.ALWAYS, this.opStencilFail = Oc.KEEP, this.opDepthFail = Oc.KEEP, this.opStencilDepthPass = Oc.REPLACE, this.backFunc = Oc.ALWAYS, this.backOpStencilFail = Oc.KEEP, this.backOpDepthFail = Oc.KEEP, this.backOpStencilDepthPass = Oc.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(cB) {
        this.func = cB
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(cB) {
        this.backFunc = cB
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(cB) {
        this.funcRef = cB
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(cB) {
        this.funcMask = cB
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(cB) {
        this.opStencilFail = cB
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(cB) {
        this.opDepthFail = cB
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(cB) {
        this.opStencilDepthPass = cB
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(cB) {
        this.backOpStencilFail = cB
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(cB) {
        this.backOpDepthFail = cB
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(cB) {
        this.backOpStencilDepthPass = cB
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(cB) {
        this.mask = cB
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(cB) {
        this.enabled = cB
      }
    }
    Oc.ALWAYS = 519, Oc.KEEP = 7680, Oc.REPLACE = 7681;
    var Tc = nc(37972),
      fc = nc(37953),
      mB = nc(37895),
      ec = nc(37937),
      tB = nc(37945);

    function Sc(cB, Bc) {
      if (Bc) {
        const {
          requestAnimationFrame: nc
        } = Bc;
        if ("function" === typeof nc) return nc(cB)
      }
      if ((0, ec.k)()) {
        const {
          requestAnimationFrame: nc
        } = Bc || window;
        if ("function" === typeof nc) return nc(cB)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(cB);
      return setTimeout(cB, 16)
    }
    class yB {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(cB) {
        return this._shaderProcessor
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
      }
      get shaderPlatformName() {
        return this._shaderPlatformName
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null
      }
      get HPc() {
        return this._useReverseDepthBuffer
      }
      set HPc(cB) {
        cB !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = cB, this._depthCullingState.depthFunc = cB ? 518 : 515)
      }
      setColorWrite(cB) {
        cB !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = cB)
      }
      getColorWrite() {
        return this._colorWrite
      }
      get depthCullingState() {
        return this._depthCullingState
      }
      get alphaState() {
        return this._alphaState
      }
      get stencilState() {
        return this._stencilState
      }
      get stencilStateComposer() {
        return this._stencilStateComposer
      }
      _getGlobalDefines(cB) {
        if (cB) return this.isNDCHalfZRange ? cB.IS_NDC_HALF_ZRANGE = "" : delete cB.IS_NDC_HALF_ZRANGE, this.HPc ? cB.USE_REVERSE_DEPTHBUFFER = "" : delete cB.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? cB.USE_EXACT_SRGB_CONVERSIONS = "" : delete cB.USE_EXACT_SRGB_CONVERSIONS);
        {
          let cB = "";
          return this.isNDCHalfZRange && (cB += "#define IS_NDC_HALF_ZRANGE"), this.HPc && (cB && (cB += "\n"), cB += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (cB && (cB += "\n"), cB += "#define USE_EXACT_SRGB_CONVERSIONS"), cB
        }
      }
      _rebuildInternalTextures() {
        const cB = this._internalTexturesCache.slice();
        for (const Bc of cB) Bc._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const cB = this._renderTargetWrapperCache.slice();
        for (const Bc of cB) Bc.textures?.some((cB => 15 === cB.source)) || Bc._rebuild()
      }
      _rebuildEffects() {
        for (const cB in this._compiledEffects) {
          const Bc = this._compiledEffects[cB];
          Bc._pipelineContext = null, Bc._prepareEffect()
        }
        Ic.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        uc.c.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(cB) {
        setTimeout((() => {
          this._clearEmptyResources();
          const Bc = this._depthCullingState.depthTest,
            nc = this._depthCullingState.depthFunc,
            Vc = this._depthCullingState.depthMask,
            Ic = this._stencilState.stencilTest;
          cB(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = Bc, this._depthCullingState.depthFunc = nc, this._depthCullingState.depthMask = Vc, this._stencilState.stencilTest = Ic, this._flagContextRestored()
        }), 0)
      }
      get nPc() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(cB) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(cB) {}
      getClassName() {
        return "AbstractEngine"
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const cB = new Uint8Array(4),
            Bc = [cB, cB, cB, cB, cB, cB];
          this._emptyCubeTexture = this.createRawCubeTexture(Bc, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(cB) {
        this._framebufferDimensionsObject = cB
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(cB) {
        if (!cB) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const Bc = this._activeRenderLoops.indexOf(cB);
        Bc >= 0 && (this._activeRenderLoops.splice(Bc, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: cB
            } = this.customAnimationFrameRequester;
            cB && cB(this.customAnimationFrameRequester.xI), delete this.customAnimationFrameRequester.xI
          }
        } else if (0 !== this._frameHandler) {
          const cB = this._frameHandler;
          if (this._frameHandler = 0, (0, ec.k)()) {
            const {
              cancelAnimationFrame: Bc
            } = this.getHostWindow() || window;
            if ("function" === typeof Bc) return Bc(cB)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(cB);
          return clearTimeout(cB)
        }
      }
      sC() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      fC() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(cB) {
        this._maxFPS = cB, void 0 !== cB && (this._minFrameTime = cB <= 0 ? Number.MAX_VALUE : 1e3 / cB)
      }
      _isOverFrameTime(cB) {
        if (!cB || void 0 === this._maxFPS) return !1;
        const Bc = cB - this._lastFrameTime;
        return this._lastFrameTime = cB, this._renderAccumulator += Bc, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(cB) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(cB)) {
          let cB = !0;
          (this.nPc || !this.renderEvenInBackground && this._windowIsBackground) && (cB = !1), cB && (this.sC(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.fC())
        }
      }
      _renderLoop(cB) {
        this._processFrame(cB), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let cB = 0; cB < this._activeRenderLoops.length; cB++) {
          (0, this._activeRenderLoops[cB])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(cB, Bc) {
        return Sc(cB, Bc)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.xI = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.xI) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(cB) {
        -1 === this._activeRenderLoops.indexOf(cB) && (this._activeRenderLoops.push(cB), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(cB) {
        this._depthCullingState.depthTest = cB
      }
      setZOffset(cB) {
        this._depthCullingState.zOffset = this.HPc ? -cB : cB
      }
      getZOffset() {
        const cB = this._depthCullingState.zOffset;
        return this.HPc ? -cB : cB
      }
      setZOffsetUnits(cB) {
        this._depthCullingState.zOffsetUnits = this.HPc ? -cB : cB
      }
      getZOffsetUnits() {
        const cB = this._depthCullingState.zOffsetUnits;
        return this.HPc ? -cB : cB
      }
      getHostWindow() {
        return (0, ec.k)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(cB) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const cB of this.scenes) cB._rebuildTextures();
        for (const cB of this._virtualScenes) cB._rebuildTextures()
      }
      _releaseRenderTargetWrapper(cB) {
        const Bc = this._renderTargetWrapperCache.indexOf(cB); - 1 !== Bc && this._renderTargetWrapperCache.splice(Bc, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(cB, Bc, nc) {
        const Vc = Bc || this.getRenderWidth(),
          Ic = nc || this.getRenderHeight(),
          rB = cB.x || 0,
          uc = cB.y || 0;
        this._cachedViewport = cB, this._viewport(rB * Vc, uc * Ic, Vc * cB.width, Ic * cB.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(cB) {
        return new Path2D(cB)
      }
      get description() {
        let cB = this.name + this.version;
        return this._caps.parallelShaderCompile && (cB += " - Parallel shader compilation"), cB
      }
      _createTextureBase(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          sc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Mc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Pc = arguments.length > 7 ? arguments[7] : void 0,
          qB = arguments.length > 8 ? arguments[8] : void 0,
          Oc = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Tc = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          fc = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          ec = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          tB = arguments.length > 13 ? arguments[13] : void 0,
          Sc = arguments.length > 14 ? arguments[14] : void 0,
          zB = arguments.length > 15 ? arguments[15] : void 0;
        const pc = "data:" === (cB = cB || "").substring(0, 5),
          hc = "blob:" === cB.substring(0, 5),
          aB = pc && -1 !== cB.indexOf(";base64,"),
          lc = Tc || new mB.e(this, 1);
        lc !== Tc && (lc.label = cB.substring(0, 60));
        const Yc = cB;
        !this._transformTextureUrl || aB || Tc || Oc || (cB = this._transformTextureUrl(cB)), Yc !== cB && (lc._originalUrl = Yc);
        const Lc = cB.lastIndexOf(".");
        let gB = ec || (Lc > -1 ? cB.substring(Lc).toLowerCase() : "");
        gB.indexOf("?") > -1 && (gB = gB.split("?")[0]);
        const Uc = yB.GetCompatibleTextureLoader(gB, tB);
        Vc && Vc.addPendingData(lc), lc.url = cB, lc.generateMipMaps = !Bc, lc.samplingMode = Ic, lc.invertY = nc, lc._useSRGBBuffer = this._getUseSRGBBuffer(!!zB, Bc), this._doNotHandleContextLost || (lc._buffer = Oc);
        let bB = null;
        sc && !Tc && (bB = lc.onLoadedObservable.add(sc)), Tc || this._internalTexturesCache.push(lc);
        const Zc = (nc, Tc) => {
          Vc && Vc.removePendingData(lc), cB === Yc ? (bB && lc.onLoadedObservable.remove(bB), rB.d.UseFallbackTexture && cB !== rB.d.FallbackTexture && this._createTextureBase(rB.d.FallbackTexture, Bc, lc.invertY, Vc, Ic, null, Mc, Pc, qB, Oc, lc), nc = (nc || "Unknown error") + (rB.d.UseFallbackTexture ? " - Fallback texture was used" : ""), lc.onErrorObservable.notifyObservers({
            message: nc,
            exception: Tc
          }), Mc && Mc(nc, Tc)) : (uc.c.Warn(`Failed to load ${cB}, falling back to ${Yc}`), this._createTextureBase(Yc, Bc, lc.invertY, Vc, Ic, sc, Mc, Pc, qB, Oc, lc, fc, ec, tB, Sc, zB))
        };
        if (Uc) {
          const Bc = async cB => {
            (await Uc).loadData(cB, lc, ((cB, Bc, nc, rB, uc, sc) => {
              sc ? Zc("TextureLoader failed to load data") : Pc(lc, gB, Vc, {
                width: cB,
                height: Bc
              }, lc.invertY, !nc, rB, (() => (uc(), !1)), Ic)
            }), Sc)
          };
          if (Oc) {
            const cB = async cB => {
              try {
                await Bc(cB)
              } catch (nc) {
                Zc("Failed to parse texture data", nc)
              }
            };
            Oc instanceof ArrayBuffer ? cB(new Uint8Array(Oc)) : ArrayBuffer.isView(Oc) ? cB(Oc) : Mc && Mc("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(cB, (async cB => {
            try {
              await Bc(new Uint8Array(cB))
            } catch (nc) {
              Zc("Failed to parse texture data", nc)
            }
          }), void 0, Vc ? Vc.offlineProvider : void 0, !0, ((cB, Bc) => {
            Zc("Unable to load " + (cB && cB.responseURL, Bc))
          }))
        } else {
          const nc = cB => {
            hc && !this._doNotHandleContextLost && (lc._buffer = cB), Pc(lc, gB, Vc, cB, lc.invertY, Bc, !1, qB, Ic)
          };
          !pc || aB ? Oc && ("string" === typeof Oc.decoding || Oc.close) ? nc(Oc) : yB._FileToolsLoadImage(cB || "", nc, Zc, Vc ? Vc.offlineProvider : null, tB, lc.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Oc || Oc instanceof ArrayBuffer || ArrayBuffer.isView(Oc) || Oc instanceof Blob ? yB._FileToolsLoadImage(Oc, nc, Zc, Vc ? Vc.offlineProvider : null, tB, lc.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Oc && nc(Oc)
        }
        return lc
      }
      _rebuildBuffers() {
        for (const cB of this._uniformBuffers) cB._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, ec.f)() ? document : null
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0
      }
      getCaps() {
        return this._caps
      }
      resetTextureCache() {
        for (const cB in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, cB) && (this._boundTexturesCache[cB] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(cB) {
        this._name = cB
      }
      static get NpmPackage() {
        return "babylonjs@9.28.0"
      }
      static get Version() {
        return "9.28.0"
      }
      getRenderingCanvas() {
        return this._renderingCanvas
      }
      getAudioContext() {
        return this._audioContext
      }
      getAudioDestination() {
        return this._audioDestination
      }
      setHardwareScalingLevel(cB) {
        this._hardwareScalingLevel = cB, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(cB) {
        this._doNotHandleContextLost = cB
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(cB, Bc, nc) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Pc, this._stencilStateComposer = new qB, this._stencilState = new Oc, this._alphaState = new Tc.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Vc.c, this.onCanvasFocusObservable = new Vc.c, this.onNewSceneAddedObservable = new Vc.c, this.onResizeObservable = new Vc.c, this.onCanvasPointerOutObservable = new Vc.c, this.onEffectErrorObservable = new Vc.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Vc.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = cB => this._renderLoop(cB), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Vc.c, this.onAfterShaderCompilationObservable = new Vc.c, this.onBeginFrameObservable = new Vc.c, this.onEndFrameObservable = new Vc.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Vc.c, this.onContextRestoredObservable = new Vc.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.XBc = new Vc.c, this.onReleaseEffectsObservable = new Vc.c, rB.d.Instances.push(this), this.startTime = Mc.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, sc.d.SetMatrixPrecision(!!Bc.useLargeWorldRendering || !!Bc.useHighPrecisionMatrix), (0, ec.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), Bc.antialias = cB ?? Bc.antialias, Bc.deterministicLockstep = Bc.deterministicLockstep ?? !1, Bc.lockstepMaxSteps = Bc.lockstepMaxSteps ?? 4, Bc.timeStep = Bc.timeStep ?? 1 / 60, Bc.stencil = Bc.stencil ?? !0, this._audioContext = Bc.audioEngineOptions?.audioContext ?? null, this._audioDestination = Bc.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = Bc.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!Bc.doNotHandleContextLost, this._isStencilEnable = !!Bc.stencil, this.useExactSrgbConversions = Bc.useExactSrgbConversions ?? !1, this.canvasTabIndex = Bc.canvasTabIndex ?? this.canvasTabIndex;
        const Ic = (0, ec.k)() && window.devicePixelRatio || 1,
          uc = Bc.limitDeviceRatio || Ic;
        nc = nc || Bc.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = nc, this._hardwareScalingLevel = nc ? 1 / Math.min(uc, Ic) : 1, this._lastDevicePixelRatio = Ic, this._creationOptions = Bc
      }
      resize() {
        let cB, Bc, nc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const cB = (0, ec.k)() && window.devicePixelRatio || 1,
            Bc = this._lastDevicePixelRatio / cB;
          this._lastDevicePixelRatio = cB, this._hardwareScalingLevel *= Bc
        }
        if ((0, ec.k)() && (0, ec.f)())
          if (this._renderingCanvas) {
            const nc = this._renderingCanvas.getBoundingClientRect?.();
            cB = this._renderingCanvas.clientWidth || nc?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, Bc = this._renderingCanvas.clientHeight || nc?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else cB = window.innerWidth, Bc = window.innerHeight;
        else cB = this._renderingCanvas ? this._renderingCanvas.width : 100, Bc = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(cB / this._hardwareScalingLevel, Bc / this._hardwareScalingLevel, nc)
      }
      setSize(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (cB |= 0, Bc |= 0, !nc && this._renderingCanvas.width === cB && this._renderingCanvas.height === Bc) return !1;
        if (this._renderingCanvas.width = cB, this._renderingCanvas.height = Bc, this.scenes) {
          for (let cB = 0; cB < this.scenes.length; cB++) {
            const Bc = this.scenes[cB];
            for (let cB = 0; cB < Bc.cameras.length; cB++) {
              Bc.cameras[cB]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc) {
        throw (0, fc.k)("engine.rawTexture")
      }
      createRawCubeTexture(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        throw (0, fc.k)("engine.rawTexture")
      }
      createRawTexture3D(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB) {
        throw (0, fc.k)("engine.rawTexture")
      }
      createRawTexture2DArray(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc) {
        throw (0, fc.k)("engine.rawTexture")
      }
      _sharedInit(cB) {
        this._renderingCanvas = cB
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const cB = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== cB.indexOf("Mobile") || -1 !== cB.indexOf("Mac") && (0, ec.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, ec.k)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(cB) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(cB, !1)
      }
      getFps() {
        return this._fps
      }
      getDeltaTime() {
        return this._deltaTime
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps
      }
      getTimeStep() {
        return 1e3 * this._timeStep
      }
      _createImageBitmapFromSource(cB, Bc) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(cB, Bc) {
        return createImageBitmap(cB, Bc)
      }
      resizeImageBitmap(cB, Bc, nc) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(cB) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(cB, Bc) {
        if ("undefined" === typeof document) return new OffscreenCanvas(cB, Bc);
        const nc = document.createElement("canvas");
        return nc.width = cB, nc.height = Bc, nc
      }
      createCanvas(cB, Bc) {
        return yB._CreateCanvas(cB, Bc)
      }
      static _FileToolsLoadImage(cB, Bc, nc, Vc, Ic, rB, uc) {
        if (!tB.c.loadImage) throw (0, fc.k)("FileTools");
        return tB.c.loadImage(cB, Bc, nc, Vc, Ic, rB, uc)
      }
      _loadFile(cB, Bc, nc, Vc, Ic, rB) {
        const uc = (0, tB.o)(cB, Bc, nc, Vc, Ic, rB);
        return this._activeRequests.push(uc), uc.onCompleteObservable.add((() => {
          const cB = this._activeRequests.indexOf(uc); - 1 !== cB && this._activeRequests.splice(cB, 1)
        })), uc
      }
      static _FileToolsLoadFile(cB, Bc, nc, Vc, Ic, rB) {
        if (tB.c.loadFile) return tB.c.loadFile(cB, Bc, nc, Vc, Ic, rB);
        throw (0, fc.k)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Ic.c.ResetCache();
        for (const Bc of this._activeRequests) Bc.abort();
        this._boundRenderFunction = null, this.XBc.notifyObservers(this), this.XBc.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, ec.k)() && window.removeEventListener("resize", this._checkForMobile);
        const cB = rB.d.Instances.indexOf(this);
        cB >= 0 && rB.d.Instances.splice(cB, 1), rB.d.Instances.length || (rB.d.OnEnginesDisposedObservable.notifyObservers(this), rB.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(cB) {
        throw (0, fc.k)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(cB, Bc) {
        for (let nc = 0; nc < rB.d.Instances.length; nc++) {
          const Vc = rB.d.Instances[nc];
          for (let nc = 0; nc < Vc.scenes.length; nc++) Vc.scenes[nc].markAllMaterialsAsDirty(cB, Bc)
        }
      }
      static GetCompatibleTextureLoader(cB, Bc) {
        return null
      }
    }
    yB._RenderPassIdCounter = 0, yB._RescalePostProcessFactory = null, yB.CollisionsEpsilon = .001, yB.QueueNewFrame = Sc
  },
  37923: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc
    });
    class Vc {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Vc.ShadersRepository : Vc.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Vc.ShadersStore : Vc.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Vc.IncludesShadersStore : Vc.IncludesShadersStoreWGSL
      }
    }
    Vc.ShadersRepository = "src/Shaders/", Vc.ShadersStore = {}, Vc.IncludesShadersStore = {}, Vc.ShadersRepositoryWGSL = "src/ShadersWGSL/", Vc.ShadersStoreWGSL = {}, Vc.IncludesShadersStoreWGSL = {}
  },
  37939: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Tc,
      e: () => zB,
      g: () => mB,
      h: () => fc,
      k: () => ec,
      o: () => yB,
      s: () => Oc,
      w: () => Pc,
      z: () => qB,
      B: () => Mc,
      E: () => sc
    });
    class Vc {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(cB) {
        cB && this.program && cB(this.program)
      }
      setEngine(cB) {
        this.engine = cB
      }
      _fillEffectInformation(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        const Mc = this.engine;
        if (Mc.supportsUniformBuffers)
          for (const qB in Bc) cB.bindUniformBlock(qB, Bc[qB]);
        let Pc;
        for (this.engine.getUniforms(this, nc).forEach(((cB, Bc) => {
            Vc[nc[Bc]] = cB
          })), this._uniforms = Vc, Pc = 0; Pc < Ic.length; Pc++) {
          null == cB.getUniform(Ic[Pc]) && (Ic.splice(Pc, 1), Pc--)
        }
        Ic.forEach(((cB, Bc) => {
          rB[cB] = Bc
        }));
        for (const qB of Mc.getAttributes(this, uc)) sc.push(qB)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(cB, Bc) {
        const nc = this._valueCache[cB],
          Vc = Bc.updateFlag;
        if (void 0 !== nc && nc === Vc) return !1;
        const Ic = Bc.KPc();
        let rB = this._matrixValueCache[cB];
        if (void 0 !== nc && null !== nc && void 0 !== rB) {
          let Bc = !0;
          for (let cB = 15; cB >= 0; cB--)
            if (rB[cB] !== Ic[cB]) {
              Bc = !1;
              break
            } if (Bc) return this._valueCache[cB] = Vc, !1
        }
        return void 0 === rB && (rB = this._matrixValueCache[cB] = new Float32Array(16)), rB.set(Ic), this._valueCache[cB] = Vc, !0
      }
      _cacheFloat2(cB, Bc, nc) {
        let Vc = this._valueCache[cB];
        if (!Vc || 2 !== Vc.length) return Vc = [Bc, nc], this._valueCache[cB] = Vc, !0;
        let Ic = !1;
        return Vc[0] !== Bc && (Vc[0] = Bc, Ic = !0), Vc[1] !== nc && (Vc[1] = nc, Ic = !0), Ic
      }
      _cacheFloat3(cB, Bc, nc, Vc) {
        let Ic = this._valueCache[cB];
        if (!Ic || 3 !== Ic.length) return Ic = [Bc, nc, Vc], this._valueCache[cB] = Ic, !0;
        let rB = !1;
        return Ic[0] !== Bc && (Ic[0] = Bc, rB = !0), Ic[1] !== nc && (Ic[1] = nc, rB = !0), Ic[2] !== Vc && (Ic[2] = Vc, rB = !0), rB
      }
      _cacheFloat4(cB, Bc, nc, Vc, Ic) {
        let rB = this._valueCache[cB];
        if (!rB || 4 !== rB.length) return rB = [Bc, nc, Vc, Ic], this._valueCache[cB] = rB, !0;
        let uc = !1;
        return rB[0] !== Bc && (rB[0] = Bc, uc = !0), rB[1] !== nc && (rB[1] = nc, uc = !0), rB[2] !== Vc && (rB[2] = Vc, uc = !0), rB[3] !== Ic && (rB[3] = Ic, uc = !0), uc
      }
      setInt(cB, Bc) {
        const nc = this._valueCache[cB];
        void 0 !== nc && nc === Bc || this.engine.setInt(this._uniforms[cB], Bc) && (this._valueCache[cB] = Bc)
      }
      setInt2(cB, Bc, nc) {
        this._cacheFloat2(cB, Bc, nc) && (this.engine.setInt2(this._uniforms[cB], Bc, nc) || (this._valueCache[cB] = null))
      }
      setInt3(cB, Bc, nc, Vc) {
        this._cacheFloat3(cB, Bc, nc, Vc) && (this.engine.setInt3(this._uniforms[cB], Bc, nc, Vc) || (this._valueCache[cB] = null))
      }
      setInt4(cB, Bc, nc, Vc, Ic) {
        this._cacheFloat4(cB, Bc, nc, Vc, Ic) && (this.engine.setInt4(this._uniforms[cB], Bc, nc, Vc, Ic) || (this._valueCache[cB] = null))
      }
      setIntArray(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setIntArray(this._uniforms[cB], Bc)
      }
      setIntArray2(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setIntArray2(this._uniforms[cB], Bc)
      }
      setIntArray3(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setIntArray3(this._uniforms[cB], Bc)
      }
      setIntArray4(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setIntArray4(this._uniforms[cB], Bc)
      }
      setUInt(cB, Bc) {
        const nc = this._valueCache[cB];
        void 0 !== nc && nc === Bc || this.engine.setUInt(this._uniforms[cB], Bc) && (this._valueCache[cB] = Bc)
      }
      setUInt2(cB, Bc, nc) {
        this._cacheFloat2(cB, Bc, nc) && (this.engine.setUInt2(this._uniforms[cB], Bc, nc) || (this._valueCache[cB] = null))
      }
      setUInt3(cB, Bc, nc, Vc) {
        this._cacheFloat3(cB, Bc, nc, Vc) && (this.engine.setUInt3(this._uniforms[cB], Bc, nc, Vc) || (this._valueCache[cB] = null))
      }
      setUInt4(cB, Bc, nc, Vc, Ic) {
        this._cacheFloat4(cB, Bc, nc, Vc, Ic) && (this.engine.setUInt4(this._uniforms[cB], Bc, nc, Vc, Ic) || (this._valueCache[cB] = null))
      }
      setUIntArray(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setUIntArray(this._uniforms[cB], Bc)
      }
      setUIntArray2(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setUIntArray2(this._uniforms[cB], Bc)
      }
      setUIntArray3(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setUIntArray3(this._uniforms[cB], Bc)
      }
      setUIntArray4(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setUIntArray4(this._uniforms[cB], Bc)
      }
      setArray(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setArray(this._uniforms[cB], Bc)
      }
      setArray2(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setArray2(this._uniforms[cB], Bc)
      }
      setArray3(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setArray3(this._uniforms[cB], Bc)
      }
      setArray4(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setArray4(this._uniforms[cB], Bc)
      }
      setMatrices(cB, Bc) {
        Bc && (this._valueCache[cB] = null, this.engine.setMatrices(this._uniforms[cB], Bc))
      }
      setMatrix(cB, Bc) {
        this._cacheMatrix(cB, Bc) && (this.engine.setMatrices(this._uniforms[cB], Bc.KPc()) || (this._valueCache[cB] = null))
      }
      setMatrix3x3(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setMatrix3x3(this._uniforms[cB], Bc)
      }
      setMatrix2x2(cB, Bc) {
        this._valueCache[cB] = null, this.engine.setMatrix2x2(this._uniforms[cB], Bc)
      }
      setFloat(cB, Bc) {
        const nc = this._valueCache[cB];
        void 0 !== nc && nc === Bc || this.engine.setFloat(this._uniforms[cB], Bc) && (this._valueCache[cB] = Bc)
      }
      setVector2(cB, Bc) {
        this._cacheFloat2(cB, Bc.x, Bc.y) && (this.engine.setFloat2(this._uniforms[cB], Bc.x, Bc.y) || (this._valueCache[cB] = null))
      }
      setFloat2(cB, Bc, nc) {
        this._cacheFloat2(cB, Bc, nc) && (this.engine.setFloat2(this._uniforms[cB], Bc, nc) || (this._valueCache[cB] = null))
      }
      setVector3(cB, Bc) {
        this._cacheFloat3(cB, Bc.x, Bc.y, Bc.z) && (this.engine.setFloat3(this._uniforms[cB], Bc.x, Bc.y, Bc.z) || (this._valueCache[cB] = null))
      }
      setFloat3(cB, Bc, nc, Vc) {
        this._cacheFloat3(cB, Bc, nc, Vc) && (this.engine.setFloat3(this._uniforms[cB], Bc, nc, Vc) || (this._valueCache[cB] = null))
      }
      setVector4(cB, Bc) {
        this._cacheFloat4(cB, Bc.x, Bc.y, Bc.z, Bc.w) && (this.engine.setFloat4(this._uniforms[cB], Bc.x, Bc.y, Bc.z, Bc.w) || (this._valueCache[cB] = null))
      }
      setQuaternion(cB, Bc) {
        this._cacheFloat4(cB, Bc.x, Bc.y, Bc.z, Bc.w) && (this.engine.setFloat4(this._uniforms[cB], Bc.x, Bc.y, Bc.z, Bc.w) || (this._valueCache[cB] = null))
      }
      setFloat4(cB, Bc, nc, Vc, Ic) {
        this._cacheFloat4(cB, Bc, nc, Vc, Ic) && (this.engine.setFloat4(this._uniforms[cB], Bc, nc, Vc, Ic) || (this._valueCache[cB] = null))
      }
      setColor3(cB, Bc) {
        this._cacheFloat3(cB, Bc.r, Bc.g, Bc.b) && (this.engine.setFloat3(this._uniforms[cB], Bc.r, Bc.g, Bc.b) || (this._valueCache[cB] = null))
      }
      setColor4(cB, Bc, nc) {
        this._cacheFloat4(cB, Bc.r, Bc.g, Bc.b, nc) && (this.engine.setFloat4(this._uniforms[cB], Bc.r, Bc.g, Bc.b, nc) || (this._valueCache[cB] = null))
      }
      setDirectColor4(cB, Bc) {
        this._cacheFloat4(cB, Bc.r, Bc.g, Bc.b, Bc.a) && (this.engine.setFloat4(this._uniforms[cB], Bc.r, Bc.g, Bc.b, Bc.a) || (this._valueCache[cB] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Ic = nc(37945);
    const rB = new WeakMap,
      uc = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function sc(cB) {
      let Bc = rB.get(cB);
      if (!Bc) {
        if (!cB) return uc;
        Bc = {
          _webGLVersion: cB.TEXTURE_BINDING_3D ? 2 : 1,
          _context: cB,
          parallelShaderCompile: cB.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, rB.set(cB, Bc)
      }
      return Bc
    }

    function Mc(cB) {
      rB.delete(cB)
    }

    function Pc(cB, Bc, nc, Vc, Ic, rB) {
      const uc = sc(Vc);
      rB || (rB = uc._createShaderProgramInjection ?? Tc);
      return rB(cB, Sc(Bc, "vertex", Vc, uc._contextWasLost), Sc(nc, "fragment", Vc, uc._contextWasLost), Vc, Ic, uc.validateShaderPrograms)
    }

    function qB(cB, Bc, nc, Vc, Ic) {
      let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        uc = arguments.length > 6 ? arguments[6] : void 0;
      const Mc = sc(Ic);
      uc || (uc = Mc._createShaderProgramInjection ?? Tc);
      const Pc = Mc._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return uc(cB, tB(Bc, "vertex", Vc, Pc, Ic, Mc._contextWasLost), tB(nc, "fragment", Vc, Pc, Ic, Mc._contextWasLost), Ic, rB, Mc.validateShaderPrograms)
    }

    function Oc(cB, Bc) {
      const nc = new Vc,
        Ic = sc(cB);
      return Ic.parallelShaderCompile && !Ic.disableParallelShaderCompile && (nc.isParallelCompiled = !0), nc.context = Ic._context, nc
    }

    function Tc(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 5 ? arguments[5] : void 0;
      const rB = Vc.createProgram();
      if (cB.program = rB, !rB) throw new Error("Unable to create program");
      return Vc.attachShader(rB, Bc), Vc.attachShader(rB, nc), Vc.linkProgram(rB), cB.context = Vc, cB.vertexShader = Bc, cB.fragmentShader = nc, cB.isParallelCompiled || mB(cB, Vc, Ic), rB
    }

    function fc(cB, Bc, nc) {
      const Vc = cB;
      if (Vc._isDisposed) return !1;
      const Ic = sc(Bc);
      return !!(Ic && Ic.parallelShaderCompile && Ic.parallelShaderCompile.COMPLETION_STATUS_KHR && Vc.program && Bc.getProgramParameter(Vc.program, Ic.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (mB(Vc, Bc, nc), !0)
    }

    function mB(cB, Bc, nc) {
      const Vc = cB.context,
        Ic = cB.vertexShader,
        rB = cB.fragmentShader,
        uc = cB.program;
      if (!Vc.getProgramParameter(uc, Vc.LINK_STATUS)) {
        if (!Bc.getShaderParameter(Ic, Bc.COMPILE_STATUS)) {
          const nc = Bc.getShaderInfoLog(Ic);
          if (nc) throw cB.vertexCompilationError = nc, new Error("VERTEX SHADER " + nc)
        }
        if (!Bc.getShaderParameter(rB, Bc.COMPILE_STATUS)) {
          const nc = Bc.getShaderInfoLog(rB);
          if (nc) throw cB.fragmentCompilationError = nc, new Error("FRAGMENT SHADER " + nc)
        }
        const nc = Vc.getProgramInfoLog(uc);
        if (nc) throw cB.programLinkError = nc, new Error(nc)
      }
      if (nc) {
        Vc.validateProgram(uc);
        if (!Vc.getProgramParameter(uc, Vc.VALIDATE_STATUS)) {
          const Bc = Vc.getProgramInfoLog(uc);
          if (Bc) throw cB.programValidationError = Bc, new Error(Bc)
        }
      }
      Vc.deleteShader(Ic), Vc.deleteShader(rB), cB.vertexShader = void 0, cB.fragmentShader = void 0, cB.onCompiled && (cB.onCompiled(), cB.onCompiled = void 0)
    }

    function ec(cB, Bc, nc, Vc, Ic, rB, uc, Mc, Oc) {
      let Tc = arguments.length > 10 ? arguments[10] : void 0,
        fc = arguments.length > 11 ? arguments[11] : void 0,
        mB = arguments.length > 12 ? arguments[12] : void 0;
      const ec = sc(cB.context);
      fc || (fc = ec.createRawShaderProgramInjection ?? Pc), mB || (mB = ec.createShaderProgramInjection ?? qB);
      const tB = cB;
      tB.program = Vc ? fc(tB, Bc, nc, tB.context, Oc) : mB(tB, Bc, nc, Mc, tB.context, Oc), tB.program.__SPECTOR_rebuildProgram = uc, Tc()
    }

    function tB(cB, Bc, nc, Vc, rB, uc) {
      return Sc((0, Ic.g)(cB, nc, Vc), Bc, rB, uc)
    }

    function Sc(cB, Bc, nc, Vc) {
      const Ic = nc.createShader("vertex" === Bc ? nc.VERTEX_SHADER : nc.FRAGMENT_SHADER);
      if (!Ic) {
        let cB, Ic = nc.NO_ERROR;
        for (;
          (cB = nc.getError()) !== nc.NO_ERROR;) Ic = cB;
        throw new Error(`Something went wrong while creating a gl ${Bc} shader object. gl error=${Ic}, gl isContextLost=${nc.isContextLost()}, _contextWasLost=${Vc}`)
      }
      return nc.shaderSource(Ic, cB), nc.compileShader(Ic), Ic
    }

    function yB(cB, Bc) {
      Bc.useProgram(cB)
    }

    function zB(cB, Bc) {
      const nc = cB;
      if (!nc.isParallelCompiled) return void Bc(cB);
      const Vc = nc.onCompiled;
      nc.onCompiled = () => {
        Vc?.(), Bc(cB)
      }
    }
  },
  37911: (cB, Bc, nc) => {
    nc.d(Bc, {
      ThinEngine: () => hc
    });
    var Vc = nc(37919),
      Ic = nc(37939),
      rB = nc(37965),
      uc = nc(37981),
      sc = nc(37191),
      Mc = nc(37937);
    class Pc {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(cB, Bc, nc, Vc, Ic) {
        if (Ic.drawBuffersExtensionDisabled) {
          const Bc = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          cB = cB.replace(Bc, "")
        }
        return cB
      }
    }
    const qB = /(flat\s)?\s*varying\s*.*/;
    class Oc {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(cB) {
        return cB.replace("attribute", "in")
      }
      varyingCheck(cB, Bc) {
        return qB.test(cB)
      }
      varyingProcessor(cB, Bc) {
        return cB.replace("varying", Bc ? "in" : "out")
      }
      postProcessor(cB, Bc, nc) {
        const Vc = -1 !== cB.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (cB = (cB = cB.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), nc) {
          const nc = -1 !== cB.search(/layout *\(location *= *0\) *out/g),
            Ic = -1 !== Bc.indexOf("#define DUAL_SOURCE_BLENDING"),
            rB = Ic ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Ic && (cB = "#extension GL_EXT_blend_func_extended : require\n" + cB), cB = (cB = (cB = (cB = (cB = (cB = (cB = cB.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Vc || nc ? "" : rB) + "void main(")
        } else {
          Bc.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (cB = "invariant gl_Position;\n" + cB);
          if (-1 !== Bc.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + cB
        }
        return cB
      }
    }
    var Tc = nc(37983),
      fc = nc(37992),
      mB = nc(37996),
      ec = nc(37895),
      tB = nc(37945),
      Sc = nc(37928),
      yB = nc(38e3),
      zB = nc(37972);
    class pc {}
    class hc extends rB.e {
      get name() {
        return this._name
      }
      set name(cB) {
        this._name = cB
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Vc.c.ShadersRepository
      }
      static set ShadersRepository(cB) {
        Vc.c.ShadersRepository = cB
      }
      get supportsUniformBuffers() {
        return this.Tv > 1 && !this.disableUniformBuffers
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures
      }
      get _supportsHardwareTextureRescaling() {
        return !1
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1
      }
      constructor(cB, Bc, nc, Vc) {
        if (nc = nc || {}, super(Bc ?? nc.antialias, nc, Vc), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !cB) return;
        let rB;
        if (cB.getContext) {
          if (rB = cB, void 0 === nc.preserveDrawingBuffer && (nc.preserveDrawingBuffer = !1), void 0 === nc.xrCompatible && (nc.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const cB = navigator.userAgent;
            for (const Bc of hc.ExceptionList) {
              const Vc = Bc.key,
                Ic = Bc.targets;
              if (new RegExp(Vc).test(cB)) {
                if (Bc.capture && Bc.captureConstraint) {
                  const nc = Bc.capture,
                    Vc = Bc.captureConstraint,
                    Ic = new RegExp(nc).exec(cB);
                  if (Ic && Ic.length > 0) {
                    if (parseInt(Ic[Ic.length - 1]) >= Vc) continue
                  }
                }
                for (const cB of Ic) switch (cB) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    nc.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Ic.B)(this._gl)
            } : (this._onContextLost = cB => {
              cB.preventDefault(), this._contextWasLost = !0, (0, Ic.B)(this._gl), sc.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, rB.addEventListener("webglcontextrestored", this._onContextRestored, !1), nc.powerPreference = nc.powerPreference || "high-performance"), rB.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (nc.xrCompatible = !1), !nc.disableWebGL2Support) try {
            this._gl = rB.getContext("webgl2", nc) || rB.getContext("experimental-webgl2", nc), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (qB) {}
          if (!this._gl) {
            if (!rB) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = rB.getContext("webgl", nc) || rB.getContext("experimental-webgl", nc)
            } catch (qB) {
              throw new Error("WebGL not supported", {
                cause: qB
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = cB, rB = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const Bc = this._gl.getContextAttributes();
          Bc && (nc.stencil = Bc.stencil)
        }
        this._sharedInit(rB), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== nc.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = nc.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Ic = 0; Ic < this._caps.maxVertexAttribs; Ic++) this._currentBufferPointers[Ic] = new pc;
        this._shaderProcessor = this.Tv > 1 ? new Oc : new Pc;
        const uc = `Babylon.js v${hc.Version}`;
        sc.c.Log(uc + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", uc);
        const Mc = (0, Ic.E)(this._gl);
        Mc.validateShaderPrograms = this.validateShaderPrograms, Mc.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(cB) {
        return null
      }
      areAllEffectsReady() {
        for (const cB in this._compiledEffects) {
          if (!this._compiledEffects[cB].isReady()) return !1
        }
        return !0
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const cB = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != cB && (this._glRenderer = this._gl.getParameter(cB.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(cB.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const Bc = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!Bc, this._alphaState = new zB.c(this._caps.blendParametersPerTarget), Bc && (this._gl.blendEquationSeparateIndexed = Bc.blendEquationSeparateiOES.bind(Bc), this._gl.blendEquationIndexed = Bc.blendEquationiOES.bind(Bc), this._gl.blendFuncSeparateIndexed = Bc.blendFuncSeparateiOES.bind(Bc), this._gl.blendFuncIndexed = Bc.blendFunciOES.bind(Bc), this._gl.colorMaskIndexed = Bc.colorMaskiOES.bind(Bc), this._gl.disableIndexed = Bc.disableiOES.bind(Bc), this._gl.enableIndexed = Bc.enableiOES.bind(Bc)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const cB = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== cB) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = cB.drawBuffersWEBGL.bind(cB), this._caps.maxDrawBuffers = this._gl.getParameter(cB.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let Bc = 0; Bc < 16; Bc++) this._gl["COLOR_ATTACHMENT" + Bc + "_WEBGL"] = cB["COLOR_ATTACHMENT" + Bc + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const cB = this._gl.getExtension("WEBGL_depth_texture");
          null != cB && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = cB.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const cB = this._gl.getExtension("OES_vertex_array_object");
          null != cB && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = cB.createVertexArrayOES.bind(cB), this._gl.bindVertexArray = cB.bindVertexArrayOES.bind(cB), this._gl.deleteVertexArray = cB.deleteVertexArrayOES.bind(cB))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const cB = this._gl.getExtension("ANGLE_instanced_arrays");
          null != cB ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = cB.drawArraysInstancedANGLE.bind(cB), this._gl.drawElementsInstanced = cB.drawElementsInstancedANGLE.bind(cB), this._gl.vertexAttribDivisor = cB.vertexAttribDivisorANGLE.bind(cB)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const cB = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            Bc = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (cB && Bc && (this._caps.highPrecisionShaderSupported = 0 !== cB.precision && 0 !== Bc.precision, this._caps.shaderFloatPrecision = Math.min(cB.precision, Bc.precision)), !this._shouldUseHighPrecisionShader) {
            const cB = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              Bc = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            cB && Bc && (this._caps.shaderFloatPrecision = Math.min(cB.precision, Bc.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const cB = this._gl.getExtension("EXT_blend_minmax");
          null != cB && (this._caps.blendMinMax = !0, this._gl.MAX = cB.MAX_EXT, this._gl.MIN = cB.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const cB = this._gl.getExtension("EXT_sRGB");
            null != cB && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: cB.SRGB_EXT,
              SRGB8: cB.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: cB.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const cB = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== cB && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && cB)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let nc = 0; nc < this._maxSimultaneousTextures; nc++) this._nextFreeTextureSlots.push(nc);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }
      }
      get Tv() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const cB = this._workingCanvas.getContext("2d");
        cB && (this._workingContext = cB)
      }
      getInfo() {
        return this.getGlInfo()
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          renderer: this._glRenderer,
          version: this._glVersion
        }
      }
      extractDriverInfo() {
        const cB = this.getGlInfo();
        return cB && cB.renderer ? cB.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const rB = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = rB;
        let uc = 0;
        if (Bc && cB) {
          let Bc = !0;
          if (this._currentRenderTarget) {
            const nc = this._currentRenderTarget.texture?.format;
            if (void 0 !== nc && (0, yB.j)(nc)) {
              const nc = this._currentRenderTarget.texture?.type;
              void 0 !== nc && (0, yB.n)(nc) ? (hc._TempClearColorUint32[0] = 255 * cB.r, hc._TempClearColorUint32[1] = 255 * cB.g, hc._TempClearColorUint32[2] = 255 * cB.b, hc._TempClearColorUint32[3] = 255 * cB.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, hc._TempClearColorUint32), Bc = !1) : (hc._TempClearColorInt32[0] = 255 * cB.r, hc._TempClearColorInt32[1] = 255 * cB.g, hc._TempClearColorInt32[2] = 255 * cB.b, hc._TempClearColorInt32[3] = 255 * cB.a, this._gl.clearBufferiv(this._gl.COLOR, 0, hc._TempClearColorInt32), Bc = !1)
            }
          }
          Bc && (this._gl.clearColor(cB.r, cB.g, cB.b, void 0 !== cB.a ? cB.a : 1), uc |= this._gl.COLOR_BUFFER_BIT)
        }
        nc && (this.HPc ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), uc |= this._gl.DEPTH_BUFFER_BIT), Vc && (this._gl.clearStencil(Ic), uc |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(uc)
      }
      _clearColorAttachment(cB, Bc, nc, Vc) {
        if ((0, yB.j)(nc)) {
          const nc = (0, yB.n)(Vc),
            Ic = nc ? hc._TempClearColorUint32 : hc._TempClearColorInt32;
          return Ic[0] = Bc.r, Ic[1] = Bc.g, Ic[2] = Bc.b, Ic[3] = Bc.a, void(nc ? this._gl.clearBufferuiv(this._gl.COLOR, cB, Ic) : this._gl.clearBufferiv(this._gl.COLOR, cB, Ic))
        }
        hc._TempClearColorFloat32[0] = Bc.r, hc._TempClearColorFloat32[1] = Bc.g, hc._TempClearColorFloat32[2] = Bc.b, hc._TempClearColorFloat32[3] = Bc.a, this._gl.clearBufferfv(this._gl.COLOR, cB, hc._TempClearColorFloat32)
      }
      _viewport(cB, Bc, nc, Vc) {
        cB === this._viewportCached.x && Bc === this._viewportCached.y && nc === this._viewportCached.z && Vc === this._viewportCached.w || (this._viewportCached.x = cB, this._viewportCached.y = Bc, this._viewportCached.z = nc, this._viewportCached.w = Vc, this._gl.viewport(cB, Bc, nc, Vc))
      }
      fC() {
        super.fC(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0,
          Ic = arguments.length > 4 ? arguments[4] : void 0,
          rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Mc = cB;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = cB, this._integerMRTAttachmentsMask = !cB.isMulti && cB.texture && (0, yB.j)(cB.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Mc._framebuffer);
        const Pc = this._gl;
        cB.isMulti || (cB.is2DArray || cB.is3D ? (Pc.framebufferTextureLayer(Pc.FRAMEBUFFER, Pc.COLOR_ATTACHMENT0, cB.texture._hardwareTexture?.underlyingResource, rB, uc), Mc._currentLOD = rB) : cB.isCube ? Pc.framebufferTexture2D(Pc.FRAMEBUFFER, Pc.COLOR_ATTACHMENT0, Pc.TEXTURE_CUBE_MAP_POSITIVE_X + Bc, cB.texture._hardwareTexture?.underlyingResource, rB) : Mc._currentLOD !== rB && (Pc.framebufferTexture2D(Pc.FRAMEBUFFER, Pc.COLOR_ATTACHMENT0, Pc.TEXTURE_2D, cB.texture._hardwareTexture?.underlyingResource, rB), Mc._currentLOD = rB));
        const qB = cB._depthStencilTexture;
        if (qB) {
          cB.is3D && (cB.texture.width === qB.width && cB.texture.height === qB.height && cB.texture.depth === qB.depth || sc.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const nc = cB._depthStencilTextureWithStencil ? Pc.DEPTH_STENCIL_ATTACHMENT : Pc.DEPTH_ATTACHMENT;
          cB.is2DArray || cB.is3D ? Pc.framebufferTextureLayer(Pc.FRAMEBUFFER, nc, qB._hardwareTexture?.underlyingResource, rB, uc) : cB.isCube ? Pc.framebufferTexture2D(Pc.FRAMEBUFFER, nc, Pc.TEXTURE_CUBE_MAP_POSITIVE_X + Bc, qB._hardwareTexture?.underlyingResource, rB) : Pc.framebufferTexture2D(Pc.FRAMEBUFFER, nc, Pc.TEXTURE_2D, qB._hardwareTexture?.underlyingResource, rB)
        }
        Mc._MSAAFramebuffer && this._bindUnboundFramebuffer(Mc._MSAAFramebuffer), this._cachedViewport && !Ic ? this.setViewport(this._cachedViewport, nc, Vc) : (nc || (nc = cB.width, rB && (nc /= Math.pow(2, rB))), Vc || (Vc = cB.height, rB && (Vc /= Math.pow(2, rB))), this._viewport(0, 0, nc, Vc)), this.wipeCaches()
      }
      setStateCullFaceType(cB, Bc) {
        const nc = this.cullBackFaces ?? cB ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== nc || Bc) && (this._depthCullingState.cullFace = nc)
      }
      setState(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ic = arguments.length > 4 ? arguments[4] : void 0,
          rB = arguments.length > 5 ? arguments[5] : void 0,
          uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== cB || nc) && (this._depthCullingState.cull = cB), this.setStateCullFaceType(Ic, nc), this.setZOffset(Bc), this.setZOffsetUnits(uc);
        const sc = Vc ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== sc || nc) && (this._depthCullingState.frontFace = sc), this._stencilStateComposer.stencilMaterial = rB
      }
      _resolveAndGenerateMipMapsFramebuffer(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        cB.disableAutomaticMSAAResolve || (cB.isMulti ? this.resolveMultiFramebuffer(cB) : this.resolveFramebuffer(cB)), Bc || (cB.isMulti ? this.generateMipMapsMultiFramebuffer(cB) : this.generateMipMapsFramebuffer(cB))
      }
      _bindUnboundFramebuffer(cB) {
        this._currentFramebuffer !== cB && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, cB), this._currentFramebuffer = cB)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(cB) {
        const Bc = this._getTextureTarget(cB);
        this._bindTextureDirectly(Bc, cB, !0), this._gl.generateMipmap(Bc), this._bindTextureDirectly(Bc, null)
      }
      unBindFramebuffer(cB, Bc, nc) {
        const Vc = cB;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(cB, Bc), nc && (Vc._MSAAFramebuffer && this._bindUnboundFramebuffer(Vc._framebuffer), nc()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(cB) {
        cB.isMulti || !cB.texture?.generateMipMaps || cB.isCube || this.generateMipmaps(cB.texture)
      }
      resolveFramebuffer(cB) {
        const Bc = cB,
          nc = this._gl;
        if (!Bc._MSAAFramebuffer || Bc.isMulti) return;
        let Vc = Bc.resolveMSAAColors ? nc.COLOR_BUFFER_BIT : 0;
        Vc |= Bc._generateDepthBuffer && Bc.resolveMSAADepth ? nc.DEPTH_BUFFER_BIT : 0, Vc |= Bc._generateStencilBuffer && Bc.resolveMSAAStencil ? nc.STENCIL_BUFFER_BIT : 0, nc.bindFramebuffer(nc.READ_FRAMEBUFFER, Bc._MSAAFramebuffer), nc.bindFramebuffer(nc.DRAW_FRAMEBUFFER, Bc._framebuffer), nc.blitFramebuffer(0, 0, cB.width, cB.height, 0, 0, cB.width, cB.height, Vc, nc.NEAREST)
      }
      flushFramebuffer() {
        this._gl.flush()
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null
      }
      createVertexBuffer(cB, Bc, nc) {
        return this._createVertexBuffer(cB, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(cB, Bc) {
        const nc = this._gl.createBuffer();
        if (!nc) throw new Error("Unable to create vertex buffer");
        const Vc = new Tc.d(nc);
        return this.bindArrayBuffer(Vc), "number" !== typeof cB ? cB instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(cB), Bc), Vc.Qc = 4 * cB.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, cB, Bc), Vc.Qc = cB.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(cB), Bc), Vc.Qc = cB), this._resetVertexBufferBinding(), Vc.references = 1, Vc
      }
      createDynamicVertexBuffer(cB, Bc) {
        return this._createVertexBuffer(cB, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(cB, Bc, nc) {
        const Vc = this._gl.createBuffer(),
          Ic = new Tc.d(Vc);
        if (!Vc) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Ic);
        const rB = this._normalizeIndexData(cB);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, rB, Bc ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Ic.references = 1, Ic.is32Bits = 4 === rB.BYTES_PER_ELEMENT, Ic
      }
      _normalizeIndexData(cB) {
        if (2 === cB.BYTES_PER_ELEMENT) return cB;
        if (this._caps.uintIndices) {
          if (cB instanceof Uint32Array) return cB;
          for (let Bc = 0; Bc < cB.length; Bc++)
            if (cB[Bc] >= 65535) return new Uint32Array(cB);
          return new Uint16Array(cB)
        }
        return new Uint16Array(cB)
      }
      bindArrayBuffer(cB) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(cB, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(cB, Bc, nc) {
        const Vc = cB.program,
          Ic = this._gl.getUniformBlockIndex(Vc, Bc);
        this._gl.uniformBlockBinding(Vc, Ic, nc)
      }
      bindIndexBuffer(cB) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(cB, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(cB, Bc) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[Bc] !== cB) && (this._gl.bindBuffer(Bc, cB ? cB.underlyingResource : null), this._currentBoundBuffer[Bc] = cB)
      }
      updateArrayBuffer(cB) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, cB)
      }
      _vertexAttribPointer(cB, Bc, nc, Vc, Ic, rB, uc) {
        const sc = this._currentBufferPointers[Bc];
        if (!sc) return;
        let Mc = !1;
        sc.active ? (sc.buffer !== cB && (sc.buffer = cB, Mc = !0), sc.size !== nc && (sc.size = nc, Mc = !0), sc.type !== Vc && (sc.type = Vc, Mc = !0), sc.normalized !== Ic && (sc.normalized = Ic, Mc = !0), sc.stride !== rB && (sc.stride = rB, Mc = !0), sc.offset !== uc && (sc.offset = uc, Mc = !0)) : (Mc = !0, sc.active = !0, sc.index = Bc, sc.size = nc, sc.type = Vc, sc.normalized = Ic, sc.stride = rB, sc.offset = uc, sc.buffer = cB), (Mc || this._vaoRecordInProgress) && (this.bindArrayBuffer(cB), Vc === this._gl.UNSIGNED_INT || Vc === this._gl.INT ? this._gl.vertexAttribIPointer(Bc, nc, Vc, rB, uc) : this._gl.vertexAttribPointer(Bc, nc, Vc, Ic, rB, uc))
      }
      _bindIndexBufferWithCache(cB) {
        null != cB && this._cachedIndexBuffer !== cB && (this._cachedIndexBuffer = cB, this.bindIndexBuffer(cB), this._uintIndicesCurrentlySet = cB.is32Bits)
      }
      _bindVertexBuffersAttributes(cB, Bc, nc) {
        const Vc = Bc.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Ic = 0; Ic < Vc.length; Ic++) {
          const rB = Bc.getAttributeLocation(Ic);
          if (rB >= 0) {
            const Bc = Vc[Ic];
            let uc = null;
            if (nc && (uc = nc[Bc]), uc || (uc = cB[Bc]), !uc) continue;
            this._gl.enableVertexAttribArray(rB), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[rB] = !0);
            const sc = uc.getBuffer();
            sc && (this._vertexAttribPointer(sc, rB, uc.getSize(), uc.type, uc.normalized, uc.byteStride, uc.byteOffset), uc.getIsInstanced() && (this._gl.vertexAttribDivisor(rB, uc.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(rB), this._currentInstanceBuffers.push(sc))))
          }
        }
      }
      recordVertexArrayObject(cB, Bc, nc, Vc) {
        const Ic = this._gl.createVertexArray();
        if (!Ic) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Ic), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(cB, nc, Vc), this.bindIndexBuffer(Bc), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Ic
      }
      bindVertexArrayObject(cB, Bc) {
        this._cachedVertexArrayObject !== cB && (this._cachedVertexArrayObject = cB, this._gl.bindVertexArray(cB), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != Bc && Bc.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(cB, Bc, nc, Vc, Ic) {
        if (this._cachedVertexBuffers !== cB || this._cachedEffectForVertexBuffers !== Ic) {
          this._cachedVertexBuffers = cB, this._cachedEffectForVertexBuffers = Ic;
          const Bc = Ic.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let rB = 0;
          for (let uc = 0; uc < Bc; uc++)
            if (uc < nc.length) {
              const Bc = Ic.getAttributeLocation(uc);
              Bc >= 0 && (this._gl.enableVertexAttribArray(Bc), this._vertexAttribArraysEnabled[Bc] = !0, this._vertexAttribPointer(cB, Bc, nc[uc], this._gl.FLOAT, !1, Vc, rB)), rB += 4 * nc[uc]
            }
        }
        this._bindIndexBufferWithCache(Bc)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(cB, Bc, nc, Vc) {
        this._cachedVertexBuffers === cB && this._cachedEffectForVertexBuffers === nc || (this._cachedVertexBuffers = cB, this._cachedEffectForVertexBuffers = nc, this._bindVertexBuffersAttributes(cB, nc, Vc)), this._bindIndexBufferWithCache(Bc)
      }
      unbindInstanceAttributes() {
        let cB;
        for (let Bc = 0, nc = this._currentInstanceLocations.length; Bc < nc; Bc++) {
          const nc = this._currentInstanceBuffers[Bc];
          cB != nc && nc.references && (cB = nc, this.bindArrayBuffer(nc));
          const Vc = this._currentInstanceLocations[Bc];
          this._gl.vertexAttribDivisor(Vc, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(cB) {
        this._gl.deleteVertexArray(cB)
      }
      _releaseBuffer(cB) {
        return cB.references--, 0 === cB.references && (this._deleteBuffer(cB), !0)
      }
      _deleteBuffer(cB) {
        this._gl.deleteBuffer(cB.underlyingResource)
      }
      updateAndBindInstancesBuffer(cB, Bc, nc) {
        if (this.bindArrayBuffer(cB), Bc && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, Bc), void 0 !== nc[0].index) this.bindInstancesBuffer(cB, nc, !0);
        else
          for (let Vc = 0; Vc < 4; Vc++) {
            const Bc = nc[Vc];
            this._vertexAttribArraysEnabled[Bc] || (this._gl.enableVertexAttribArray(Bc), this._vertexAttribArraysEnabled[Bc] = !0), this._vertexAttribPointer(cB, Bc, 4, this._gl.FLOAT, !1, 64, 16 * Vc), this._gl.vertexAttribDivisor(Bc, 1), this._currentInstanceLocations.push(Bc), this._currentInstanceBuffers.push(cB)
          }
      }
      bindInstancesBuffer(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(cB);
        let Vc = 0;
        if (nc)
          for (let Ic = 0; Ic < Bc.length; Ic++) {
            Vc += 4 * Bc[Ic].attributeSize
          }
        for (let Ic = 0; Ic < Bc.length; Ic++) {
          const nc = Bc[Ic];
          void 0 === nc.index && (nc.index = this._currentEffect.getAttributeLocationByName(nc.attributeName)), nc.index < 0 || (this._vertexAttribArraysEnabled[nc.index] || (this._gl.enableVertexAttribArray(nc.index), this._vertexAttribArraysEnabled[nc.index] = !0), this._vertexAttribPointer(cB, nc.index, nc.attributeSize, nc.attributeType || this._gl.FLOAT, nc.normalized || !1, Vc, nc.offset), this._gl.vertexAttribDivisor(nc.index, void 0 === nc.divisor ? 1 : nc.divisor), this._currentInstanceLocations.push(nc.index), this._currentInstanceBuffers.push(cB))
        }
      }
      disableInstanceAttributeByName(cB) {
        if (!this._currentEffect) return;
        const Bc = this._currentEffect.getAttributeLocationByName(cB);
        this.disableInstanceAttribute(Bc)
      }
      disableInstanceAttribute(cB) {
        let Bc, nc = !1;
        for (; - 1 !== (Bc = this._currentInstanceLocations.indexOf(cB));) this._currentInstanceLocations.splice(Bc, 1), this._currentInstanceBuffers.splice(Bc, 1), nc = !0;
        nc && (this._gl.vertexAttribDivisor(cB, 0), this.disableAttributeByIndex(cB))
      }
      disableAttributeByIndex(cB) {
        this._gl.disableVertexAttribArray(cB), this._vertexAttribArraysEnabled[cB] = !1, this._currentBufferPointers[cB].active = !1
      }
      draw(cB, Bc, nc, Vc) {
        this.drawElementsType(cB ? 0 : 1, Bc, nc, Vc)
      }
      drawPointClouds(cB, Bc, nc) {
        this.drawArraysType(2, cB, Bc, nc)
      }
      drawUnIndexed(cB, Bc, nc, Vc) {
        this.drawArraysType(cB ? 0 : 1, Bc, nc, Vc)
      }
      drawElementsType(cB, Bc, nc, Vc) {
        this.applyStates(), this._reportDrawCall();
        const Ic = this._drawMode(cB),
          rB = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          uc = this._uintIndicesCurrentlySet ? 4 : 2;
        Vc ? this._gl.drawElementsInstanced(Ic, nc, rB, Bc * uc, Vc) : this._gl.drawElements(Ic, nc, rB, Bc * uc)
      }
      drawArraysType(cB, Bc, nc, Vc) {
        this.applyStates(), this._reportDrawCall();
        const Ic = this._drawMode(cB);
        Vc ? this._gl.drawArraysInstanced(Ic, Bc, nc, Vc) : this._gl.drawArrays(Ic, Bc, nc)
      }
      _drawMode(cB) {
        switch (cB) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN
        }
      }
      _releaseEffect(cB) {
        this._compiledEffects[cB._key] && delete this._compiledEffects[cB._key];
        const Bc = cB.getPipelineContext();
        Bc && this._deletePipelineContext(Bc)
      }
      _deletePipelineContext(cB) {
        const Bc = cB;
        Bc && Bc.program && (Bc.program.__SPECTOR_rebuildProgram = null, (0, Sc.j)(Bc), this._gl && (this._currentProgram === Bc.program && this._setProgram(null), this._gl.deleteProgram(Bc.program)))
      }
      _getGlobalDefines(cB) {
        return (0, tB.k)(cB, this.isNDCHalfZRange, this.HPc, this.useExactSrgbConversions)
      }
      createEffect(cB, Bc, nc, rB, uc, sc, Mc, Pc, qB) {
        let Oc = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Tc = arguments.length > 10 ? arguments[10] : void 0;
        const fc = "string" === typeof cB ? cB : cB.vertexToken || cB.vertexSource || cB.vertexElement || cB.vertex,
          mB = "string" === typeof cB ? cB : cB.fragmentToken || cB.fragmentSource || cB.fragmentElement || cB.fragment,
          ec = this._getGlobalDefines(),
          tB = void 0 !== Bc.attributes;
        let Sc = uc ?? Bc.defines ?? "";
        ec && (Sc += ec);
        const yB = fc + "+" + mB + "@" + Sc;
        if (this._compiledEffects[yB]) {
          const cB = this._compiledEffects[yB];
          return Mc && cB.isReady() && Mc(cB), cB._refCount++, cB
        }
        this._gl && (0, Ic.E)(this._gl);
        const zB = new Vc.c(cB, Bc, tB ? this : nc, rB, this, uc, sc, Mc, Pc, qB, yB, Bc.shaderLanguage ?? Oc, Bc.extraInitializationsAsync ?? Tc);
        return this._compiledEffects[yB] = zB, zB
      }
      _getShaderSource(cB) {
        return this._gl.getShaderSource(cB)
      }
      createRawShaderProgram(cB, Bc, nc, Vc) {
        let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const uc = (0, Ic.E)(this._gl);
        return uc._contextWasLost = this._contextWasLost, uc.validateShaderPrograms = this.validateShaderPrograms, (0, Ic.w)(cB, Bc, nc, Vc || this._gl, rB)
      }
      createShaderProgram(cB, Bc, nc, Vc, rB) {
        let uc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const sc = (0, Ic.E)(this._gl);
        return sc._contextWasLost = this._contextWasLost, sc.validateShaderPrograms = this.validateShaderPrograms, (0, Ic.z)(cB, Bc, nc, Vc, rB || this._gl, uc)
      }
      inlineShaderCode(cB) {
        return cB
      }
      createPipelineContext(cB) {
        if (this._gl) {
          (0, Ic.E)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const Bc = (0, Ic.s)(this._gl, cB);
        return Bc.engine = this, Bc
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(cB) {
        return (0, Ic.g)(cB, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(cB, Bc, nc, Vc, rB, uc, sc, Mc, Pc, qB, Oc) {
        const Tc = (0, Ic.E)(this._gl);
        return Tc._contextWasLost = this._contextWasLost, Tc.validateShaderPrograms = this.validateShaderPrograms, Tc._createShaderProgramInjection = this._createShaderProgram.bind(this), Tc.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Tc.createShaderProgramInjection = this.createShaderProgram.bind(this), Tc.loadFileInjection = this._loadFile.bind(this), (0, Ic.k)(cB, Bc, nc, Vc, rB, uc, sc, Mc, Pc, qB, Oc)
      }
      _createShaderProgram(cB, Bc, nc, Vc) {
        let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Ic.d)(cB, Bc, nc, Vc, rB)
      }
      _isRenderingStateCompiled(cB) {
        return !this._isDisposed && (0, Ic.h)(cB, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(cB, Bc) {
        (0, Ic.e)(cB, Bc)
      }
      getUniforms(cB, Bc) {
        const nc = new Array,
          Vc = cB;
        for (let Ic = 0; Ic < Bc.length; Ic++) nc.push(this._gl.getUniformLocation(Vc.program, Bc[Ic]));
        return nc
      }
      getAttributes(cB, Bc) {
        const nc = [],
          Vc = cB;
        for (let rB = 0; rB < Bc.length; rB++) try {
          nc.push(this._gl.getAttribLocation(Vc.program, Bc[rB]))
        } catch (Ic) {
          nc.push(-1)
        }
        return nc
      }
      enableEffect(cB) {
        (cB = null !== cB && (0, uc.e)(cB) ? cB.effect : cB) && cB !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(cB), this._currentEffect = cB, cB.onBind && cB.onBind(cB), cB._onBindObservable && cB._onBindObservable.notifyObservers(cB))
      }
      setInt(cB, Bc) {
        return !!cB && (this._gl.uniform1i(cB, Bc), !0)
      }
      setInt2(cB, Bc, nc) {
        return !!cB && (this._gl.uniform2i(cB, Bc, nc), !0)
      }
      setInt3(cB, Bc, nc, Vc) {
        return !!cB && (this._gl.uniform3i(cB, Bc, nc, Vc), !0)
      }
      setInt4(cB, Bc, nc, Vc, Ic) {
        return !!cB && (this._gl.uniform4i(cB, Bc, nc, Vc, Ic), !0)
      }
      setIntArray(cB, Bc) {
        return !!cB && (this._gl.uniform1iv(cB, Bc), !0)
      }
      setIntArray2(cB, Bc) {
        return !(!cB || Bc.length % 2 !== 0) && (this._gl.uniform2iv(cB, Bc), !0)
      }
      setIntArray3(cB, Bc) {
        return !(!cB || Bc.length % 3 !== 0) && (this._gl.uniform3iv(cB, Bc), !0)
      }
      setIntArray4(cB, Bc) {
        return !(!cB || Bc.length % 4 !== 0) && (this._gl.uniform4iv(cB, Bc), !0)
      }
      setUInt(cB, Bc) {
        return !!cB && (this._gl.uniform1ui(cB, Bc), !0)
      }
      setUInt2(cB, Bc, nc) {
        return !!cB && (this._gl.uniform2ui(cB, Bc, nc), !0)
      }
      setUInt3(cB, Bc, nc, Vc) {
        return !!cB && (this._gl.uniform3ui(cB, Bc, nc, Vc), !0)
      }
      setUInt4(cB, Bc, nc, Vc, Ic) {
        return !!cB && (this._gl.uniform4ui(cB, Bc, nc, Vc, Ic), !0)
      }
      setUIntArray(cB, Bc) {
        return !!cB && (this._gl.uniform1uiv(cB, Bc), !0)
      }
      setUIntArray2(cB, Bc) {
        return !(!cB || Bc.length % 2 !== 0) && (this._gl.uniform2uiv(cB, Bc), !0)
      }
      setUIntArray3(cB, Bc) {
        return !(!cB || Bc.length % 3 !== 0) && (this._gl.uniform3uiv(cB, Bc), !0)
      }
      setUIntArray4(cB, Bc) {
        return !(!cB || Bc.length % 4 !== 0) && (this._gl.uniform4uiv(cB, Bc), !0)
      }
      setArray(cB, Bc) {
        return !!cB && (!(Bc.length < 1) && (this._gl.uniform1fv(cB, Bc), !0))
      }
      setArray2(cB, Bc) {
        return !(!cB || Bc.length % 2 !== 0) && (this._gl.uniform2fv(cB, Bc), !0)
      }
      setArray3(cB, Bc) {
        return !(!cB || Bc.length % 3 !== 0) && (this._gl.uniform3fv(cB, Bc), !0)
      }
      setArray4(cB, Bc) {
        return !(!cB || Bc.length % 4 !== 0) && (this._gl.uniform4fv(cB, Bc), !0)
      }
      setMatrices(cB, Bc) {
        return !!cB && (this._gl.uniformMatrix4fv(cB, !1, Bc), !0)
      }
      setMatrix3x3(cB, Bc) {
        return !!cB && (this._gl.uniformMatrix3fv(cB, !1, Bc), !0)
      }
      setMatrix2x2(cB, Bc) {
        return !!cB && (this._gl.uniformMatrix2fv(cB, !1, Bc), !0)
      }
      setFloat(cB, Bc) {
        return !!cB && (this._gl.uniform1f(cB, Bc), !0)
      }
      setFloat2(cB, Bc, nc) {
        return !!cB && (this._gl.uniform2f(cB, Bc, nc), !0)
      }
      setFloat3(cB, Bc, nc, Vc) {
        return !!cB && (this._gl.uniform3f(cB, Bc, nc, Vc), !0)
      }
      setFloat4(cB, Bc, nc, Vc, Ic) {
        return !!cB && (this._gl.uniform4f(cB, Bc, nc, Vc, Ic), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const cB = this._colorWrite;
          this._gl.colorMask(cB, cB, cB, cB)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(cB) {
        this.preventCacheWipeBetweenFrames && !cB || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), cB && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(cB, Bc) {
        const nc = this._gl;
        let Vc = nc.NEAREST,
          Ic = nc.NEAREST,
          rB = !1;
        switch (cB) {
          case 11:
            Vc = nc.LINEAR, Ic = Bc ? nc.LINEAR_MIPMAP_NEAREST : nc.LINEAR;
            break;
          case 3:
            Vc = nc.LINEAR, rB = !0, Ic = Bc ? nc.LINEAR_MIPMAP_LINEAR : nc.LINEAR;
            break;
          case 8:
            rB = !0, Vc = nc.NEAREST, Ic = Bc ? nc.NEAREST_MIPMAP_LINEAR : nc.NEAREST;
            break;
          case 4:
            Vc = nc.NEAREST, Ic = Bc ? nc.NEAREST_MIPMAP_NEAREST : nc.NEAREST;
            break;
          case 5:
            Vc = nc.NEAREST, Ic = Bc ? nc.LINEAR_MIPMAP_NEAREST : nc.LINEAR;
            break;
          case 6:
            rB = !0, Vc = nc.NEAREST, Ic = Bc ? nc.LINEAR_MIPMAP_LINEAR : nc.LINEAR;
            break;
          case 7:
            Vc = nc.NEAREST, Ic = nc.LINEAR;
            break;
          case 1:
            Vc = nc.NEAREST, Ic = nc.NEAREST;
            break;
          case 9:
            Vc = nc.LINEAR, Ic = Bc ? nc.NEAREST_MIPMAP_NEAREST : nc.NEAREST;
            break;
          case 10:
            rB = !0, Vc = nc.LINEAR, Ic = Bc ? nc.NEAREST_MIPMAP_LINEAR : nc.NEAREST;
            break;
          case 2:
            Vc = nc.LINEAR, Ic = nc.LINEAR;
            break;
          case 12:
            Vc = nc.LINEAR, Ic = nc.NEAREST
        }
        return {
          min: Ic,
          mag: Vc,
          hasMipMaps: rB
        }
      }
      _createTexture() {
        const cB = this._gl.createTexture();
        if (!cB) throw new Error("Unable to create texture");
        return cB
      }
      _createHardwareTexture() {
        return new mB.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(cB, Bc) {
        let nc, Vc, Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          rB = !1,
          uc = 0,
          Mc = 3,
          Pc = 5,
          qB = !1,
          Oc = 1,
          Tc = !1,
          fc = 0,
          mB = !1;
        void 0 !== Bc && "object" === typeof Bc ? (nc = !!Bc.generateMipMaps, rB = !!Bc.createMipMaps, uc = void 0 === Bc.type ? 0 : Bc.type, Mc = void 0 === Bc.samplingMode ? 3 : Bc.samplingMode, Pc = void 0 === Bc.format ? 5 : Bc.format, qB = void 0 !== Bc.useSRGBBuffer && Bc.useSRGBBuffer, Oc = Bc.samples ?? 1, Vc = Bc.label, Tc = !!Bc.createMSAATexture, fc = Bc.comparisonFunction || 0, mB = !!Bc.isCube) : nc = !!Bc, qB && (qB = this._caps.supportSRGBBuffers && (this.Tv > 1 || this.isWebGPU)), (1 !== uc || this._caps.textureFloatLinearFiltering) && (2 !== uc || this._caps.textureHalfFloatLinearFiltering) || (Mc = 1), 1 !== uc || this._caps.textureFloat || (uc = 0, sc.c.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const tB = (0, yB.f)(Pc),
          Sc = (0, yB.b)(Pc),
          zB = this._gl,
          pc = new ec.e(this, Ic),
          hc = cB.width || cB,
          aB = cB.height || cB,
          lc = cB.depth || 0,
          Yc = cB.layers || 0,
          Lc = this._getSamplingParameters(Mc, (nc || rB) && !tB),
          gB = 0 !== Yc ? zB.TEXTURE_2D_ARRAY : 0 !== lc ? zB.TEXTURE_3D : mB ? zB.TEXTURE_CUBE_MAP : zB.TEXTURE_2D,
          Uc = tB ? this._getInternalFormatFromDepthTextureFormat(Pc, !0, Sc) : this._getRGBABufferInternalSizedFormat(uc, Pc, qB),
          bB = tB ? Sc ? zB.DEPTH_STENCIL : zB.DEPTH_COMPONENT : this._getInternalFormat(Pc),
          Zc = tB ? this._getWebGLTextureTypeFromDepthTextureFormat(Pc) : this._getWebGLTextureType(uc);
        if (this._bindTextureDirectly(gB, pc), 0 !== Yc) pc.is2DArray = !0, zB.texImage3D(gB, 0, Uc, hc, aB, Yc, 0, bB, Zc, null);
        else if (0 !== lc) pc.is3D = !0, zB.texImage3D(gB, 0, Uc, hc, aB, lc, 0, bB, Zc, null);
        else if (mB) {
          pc.isCube = !0;
          for (let cB = 0; cB < 6; cB++) zB.texImage2D(zB.TEXTURE_CUBE_MAP_POSITIVE_X + cB, 0, Uc, hc, aB, 0, bB, Zc, null)
        } else zB.texImage2D(gB, 0, Uc, hc, aB, 0, bB, Zc, null);
        if (zB.texParameteri(gB, zB.TEXTURE_MAG_FILTER, Lc.mag), zB.texParameteri(gB, zB.TEXTURE_MIN_FILTER, Lc.min), zB.texParameteri(gB, zB.TEXTURE_WRAP_S, zB.CLAMP_TO_EDGE), zB.texParameteri(gB, zB.TEXTURE_WRAP_T, zB.CLAMP_TO_EDGE), tB && this.Tv > 1 && (0 === fc ? (zB.texParameteri(gB, zB.TEXTURE_COMPARE_FUNC, 515), zB.texParameteri(gB, zB.TEXTURE_COMPARE_MODE, zB.NONE)) : (zB.texParameteri(gB, zB.TEXTURE_COMPARE_FUNC, fc), zB.texParameteri(gB, zB.TEXTURE_COMPARE_MODE, zB.COMPARE_REF_TO_TEXTURE))), (nc || rB) && this._gl.generateMipmap(gB), this._bindTextureDirectly(gB, null), pc._useSRGBBuffer = qB, pc.baseWidth = hc, pc.baseHeight = aB, pc.width = hc, pc.height = aB, pc.depth = Yc || lc, pc.isReady = !0, pc.samples = Oc, pc.generateMipMaps = nc, pc.samplingMode = Mc, pc.type = uc, pc.format = Pc, pc.label = Vc, pc.comparisonFunction = fc, this._internalTexturesCache.push(pc), Tc) {
          let cB;
          if (cB = (0, yB.f)(pc.format) ? this._setupFramebufferDepthAttachments((0, yB.b)(pc.format), 19 !== pc.format, pc.width, pc.height, Oc, pc.format, !0) : this._createRenderBuffer(pc.width, pc.height, Oc, -1, this._getRGBABufferInternalSizedFormat(pc.type, pc.format, pc._useSRGBBuffer), -1), !cB) throw new Error("Unable to create render buffer");
          pc._autoMSAAManagement = !0;
          let Bc = pc._hardwareTexture;
          Bc || (Bc = pc._hardwareTexture = this._createHardwareTexture()), Bc.addMSAARenderBuffer(cB)
        }
        return pc
      }
      _getUseSRGBBuffer(cB, Bc) {
        return cB && this._caps.supportSRGBBuffers && (this.Tv > 1 || Bc)
      }
      createTexture(cB, Bc, nc, Vc) {
        var Ic = this;
        let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          uc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          sc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Mc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Pc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          qB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Oc = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Tc = arguments.length > 11 ? arguments[11] : void 0,
          fc = arguments.length > 12 ? arguments[12] : void 0,
          mB = arguments.length > 13 ? arguments[13] : void 0,
          tB = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(cB, Bc, nc, Vc, rB, uc, sc, (function() {
          for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
          return Ic._prepareWebGLTexture(...Bc, qB)
        }), ((cB, Bc, nc, Ic, rB, uc) => {
          const sc = this._gl,
            Mc = nc.width === cB && nc.height === Bc;
          rB._creationFlags = mB ?? 0;
          const Pc = this._getTexImageParametersForCreateTexture(rB.format, rB._useSRGBBuffer);
          if (Mc) return sc.texImage2D(sc.TEXTURE_2D, 0, Pc.internalFormat, Pc.format, Pc.type, nc), !1;
          const qB = this._caps.maxTextureSize;
          if (nc.width > qB || nc.height > qB || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = cB, this._workingCanvas.height = Bc, this._workingContext.drawImage(nc, 0, 0, nc.width, nc.height, 0, 0, cB, Bc), sc.texImage2D(sc.TEXTURE_2D, 0, Pc.internalFormat, Pc.format, Pc.type, this._workingCanvas), rB.width = cB, rB.height = Bc, !1);
          {
            const cB = new ec.e(this, 2);
            this._bindTextureDirectly(sc.TEXTURE_2D, cB, !0), sc.texImage2D(sc.TEXTURE_2D, 0, Pc.internalFormat, Pc.format, Pc.type, nc), this._rescaleTexture(cB, rB, Vc, Pc.format, (() => {
              this._releaseTexture(cB), this._bindTextureDirectly(sc.TEXTURE_2D, rB, !0), uc()
            }))
          }
          return !0
        }), Mc, Pc, qB, Oc, Tc, fc, tB)
      }
      _getTexImageParametersForCreateTexture(cB, Bc) {
        let nc, Vc;
        return 1 === this.Tv ? (nc = this._getInternalFormat(cB, Bc), Vc = nc) : (nc = this._getInternalFormat(cB, !1), Vc = this._getRGBABufferInternalSizedFormat(0, cB, Bc)), {
          internalFormat: Vc,
          format: nc,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(cB, Bc, nc, Vc, Ic) {}
      _unpackFlipY(cB) {
        this._unpackFlipYCached !== cB && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, cB ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = cB))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(cB) {
        return cB.isCube ? this._gl.TEXTURE_CUBE_MAP : cB.is3D ? this._gl.TEXTURE_3D : cB.is2DArray || cB.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = this._getTextureTarget(Bc),
          Ic = this._getSamplingParameters(cB, Bc.useMipMaps || nc);
        this._setTextureParameterInteger(Vc, this._gl.TEXTURE_MAG_FILTER, Ic.mag, Bc), this._setTextureParameterInteger(Vc, this._gl.TEXTURE_MIN_FILTER, Ic.min), nc && Ic.hasMipMaps && (Bc.generateMipMaps = !0, this._gl.generateMipmap(Vc)), this._bindTextureDirectly(Vc, null), Bc.samplingMode = cB
      }
      updateTextureDimensions(cB, Bc, nc) {}
      updateTextureWrappingMode(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ic = this._getTextureTarget(cB);
        null !== Bc && (this._setTextureParameterInteger(Ic, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Bc), cB), cB._cachedWrapU = Bc), null !== nc && (this._setTextureParameterInteger(Ic, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(nc), cB), cB._cachedWrapV = nc), (cB.is2DArray || cB.is3D) && null !== Vc && (this._setTextureParameterInteger(Ic, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Vc), cB), cB._cachedWrapR = Vc), this._bindTextureDirectly(Ic, null)
      }
      _uploadCompressedDataToTextureDirectly(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const sc = this._gl;
        let Mc = sc.TEXTURE_2D;
        if (cB.isCube && (Mc = sc.TEXTURE_CUBE_MAP_POSITIVE_X + rB), cB._useSRGBBuffer) switch (Bc) {
          case 37492:
          case 36196:
            this._caps.etc2 ? Bc = sc.COMPRESSED_SRGB8_ETC2 : cB._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? Bc = sc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : cB._useSRGBBuffer = !1;
            break;
          case 36492:
            Bc = sc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            Bc = sc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? Bc = sc.COMPRESSED_SRGB_S3TC_DXT1_EXT : cB._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? Bc = sc.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : cB._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? Bc = sc.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : cB._useSRGBBuffer = !1;
            break;
          default:
            cB._useSRGBBuffer = !1
        }
        if (cB.generateMipMaps) {
          const rB = cB._hardwareTexture;
          rB.memoryAllocated || (sc.texStorage2D(cB.isCube ? sc.TEXTURE_CUBE_MAP : sc.TEXTURE_2D, Math.floor(Math.log2(Math.max(nc, Vc))) + 1, Bc, cB.width, cB.height), rB.memoryAllocated = !0), this._gl.compressedTexSubImage2D(Mc, uc, 0, 0, nc, Vc, Bc, Ic)
        } else this._gl.compressedTexImage2D(Mc, uc, Bc, nc, Vc, 0, Ic)
      }
      _uploadDataToTextureDirectly(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ic = arguments.length > 4 ? arguments[4] : void 0,
          rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const uc = this._gl,
          sc = this._getWebGLTextureType(cB.type),
          Mc = this._getInternalFormat(cB.format),
          Pc = void 0 === Ic ? this._getRGBABufferInternalSizedFormat(cB.type, cB.format, cB._useSRGBBuffer) : this._getInternalFormat(Ic, cB._useSRGBBuffer);
        this._unpackFlipY(cB.invertY);
        let qB = uc.TEXTURE_2D;
        cB.isCube && (qB = uc.TEXTURE_CUBE_MAP_POSITIVE_X + nc);
        const Oc = Math.round(Math.log(cB.width) * Math.LOG2E),
          Tc = Math.round(Math.log(cB.height) * Math.LOG2E),
          fc = rB ? cB.width : Math.pow(2, Math.max(Oc - Vc, 0)),
          mB = rB ? cB.height : Math.pow(2, Math.max(Tc - Vc, 0));
        uc.texImage2D(qB, Vc, Pc, fc, mB, 0, Mc, sc, Bc)
      }
      updateTextureData(cB, Bc, nc, Vc, Ic, rB) {
        let uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Mc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Pc = this._gl,
          qB = this._getWebGLTextureType(cB.type),
          Oc = this._getInternalFormat(cB.format);
        this._unpackFlipY(cB.invertY);
        let Tc = Pc.TEXTURE_2D,
          fc = Pc.TEXTURE_2D;
        cB.isCube && (fc = Pc.TEXTURE_CUBE_MAP_POSITIVE_X + uc, Tc = Pc.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Tc, cB, !0), Pc.texSubImage2D(fc, sc, nc, Vc, Ic, rB, Oc, qB, Bc), Mc && this._gl.generateMipmap(fc), this._bindTextureDirectly(Tc, null)
      }
      _uploadArrayBufferViewToTexture(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ic = this._gl,
          rB = cB.isCube ? Ic.TEXTURE_CUBE_MAP : Ic.TEXTURE_2D;
        this._bindTextureDirectly(rB, cB, !0), this._uploadDataToTextureDirectly(cB, Bc, nc, Vc), this._bindTextureDirectly(rB, null, !0)
      }
      _prepareWebGLTextureContinuation(cB, Bc, nc, Vc, Ic) {
        const rB = this._gl;
        if (!rB) return;
        const uc = this._getSamplingParameters(Ic, !nc);
        rB.texParameteri(rB.TEXTURE_2D, rB.TEXTURE_MAG_FILTER, uc.mag), rB.texParameteri(rB.TEXTURE_2D, rB.TEXTURE_MIN_FILTER, uc.min), nc || Vc || rB.generateMipmap(rB.TEXTURE_2D), this._bindTextureDirectly(rB.TEXTURE_2D, null), Bc && Bc.removePendingData(cB), cB.onLoadedObservable.notifyObservers(cB), cB.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
        const qB = this.getCaps().maxTextureSize,
          Oc = Math.min(qB, this.needPOTTextures ? (0, fc.f)(Vc.width, qB) : Vc.width),
          Tc = Math.min(qB, this.needPOTTextures ? (0, fc.f)(Vc.height, qB) : Vc.height),
          mB = this._gl;
        mB && (cB._hardwareTexture ? (this._bindTextureDirectly(mB.TEXTURE_2D, cB, !0), this._unpackFlipY(void 0 === Ic || !!Ic), cB.baseWidth = Vc.width, cB.baseHeight = Vc.height, cB.width = Oc, cB.height = Tc, cB.isReady = !0, cB.type = -1 !== cB.type ? cB.type : 0, cB.format = -1 !== cB.format ? cB.format : Pc ?? (".jpg" !== Bc || cB._useSRGBBuffer ? 5 : 4), sc(Oc, Tc, Vc, Bc, cB, (() => {
          this._prepareWebGLTextureContinuation(cB, nc, rB, uc, Mc)
        })) || this._prepareWebGLTextureContinuation(cB, nc, rB, uc, Mc)) : nc && nc.removePendingData(cB))
      }
      _getInternalFormatFromDepthTextureFormat(cB, Bc, nc) {
        const Vc = this._gl;
        if (!Bc) return Vc.STENCIL_INDEX8;
        let Ic = nc ? Vc.DEPTH_STENCIL : Vc.DEPTH_COMPONENT;
        return this.Tv > 1 ? 15 === cB ? Ic = Vc.DEPTH_COMPONENT16 : 16 === cB ? Ic = Vc.DEPTH_COMPONENT24 : 17 === cB || 13 === cB ? Ic = nc ? Vc.DEPTH24_STENCIL8 : Vc.DEPTH_COMPONENT24 : 14 === cB ? Ic = Vc.DEPTH_COMPONENT32F : 18 === cB && (Ic = nc ? Vc.DEPTH32F_STENCIL8 : Vc.DEPTH_COMPONENT32F) : Ic = Vc.DEPTH_COMPONENT16, Ic
      }
      _getWebGLTextureTypeFromDepthTextureFormat(cB) {
        const Bc = this._gl;
        let nc = Bc.UNSIGNED_INT;
        return 15 === cB ? nc = Bc.UNSIGNED_SHORT : 17 === cB || 13 === cB ? nc = Bc.UNSIGNED_INT_24_8 : 14 === cB ? nc = Bc.FLOAT : 18 === cB ? nc = Bc.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === cB && (nc = Bc.UNSIGNED_BYTE), nc
      }
      _setupFramebufferDepthAttachments(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          rB = arguments.length > 5 ? arguments[5] : void 0,
          uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const sc = this._gl;
        rB = rB ?? (cB ? 13 : 14);
        const Mc = this._getInternalFormatFromDepthTextureFormat(rB, Bc, cB);
        return cB && Bc ? this._createRenderBuffer(nc, Vc, Ic, sc.DEPTH_STENCIL, Mc, uc ? -1 : sc.DEPTH_STENCIL_ATTACHMENT) : Bc ? this._createRenderBuffer(nc, Vc, Ic, Mc, Mc, uc ? -1 : sc.DEPTH_ATTACHMENT) : cB ? this._createRenderBuffer(nc, Vc, Ic, Mc, Mc, uc ? -1 : sc.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(cB, Bc, nc, Vc, Ic, rB) {
        let uc = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const sc = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(sc, cB, Bc, nc, Vc, Ic, rB, uc)
      }
      _updateRenderBuffer(cB, Bc, nc, Vc, Ic, rB, uc) {
        let sc = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Mc = this._gl;
        return Mc.bindRenderbuffer(Mc.RENDERBUFFER, cB), Vc > 1 && Mc.renderbufferStorageMultisample ? Mc.renderbufferStorageMultisample(Mc.RENDERBUFFER, Vc, rB, Bc, nc) : Mc.renderbufferStorage(Mc.RENDERBUFFER, Ic, Bc, nc), -1 !== uc && Mc.framebufferRenderbuffer(Mc.FRAMEBUFFER, uc, Mc.RENDERBUFFER, cB), sc && Mc.bindRenderbuffer(Mc.RENDERBUFFER, null), cB
      }
      _releaseTexture(cB) {
        this._deleteTexture(cB._hardwareTexture), this.unbindAllTextures();
        const Bc = this._internalTexturesCache.indexOf(cB); - 1 !== Bc && this._internalTexturesCache.splice(Bc, 1), cB._lodTextureHigh && cB._lodTextureHigh.dispose(), cB._lodTextureMid && cB._lodTextureMid.dispose(), cB._lodTextureLow && cB._lodTextureLow.dispose(), cB._irradianceTexture && cB._irradianceTexture.dispose()
      }
      _deleteTexture(cB) {
        cB?.release()
      }
      _setProgram(cB) {
        this._currentProgram !== cB && ((0, Ic.o)(cB, this._gl), this._currentProgram = cB)
      }
      bindSamplers(cB) {
        const Bc = cB.getPipelineContext();
        this._setProgram(Bc.program);
        const nc = cB.getSamplers();
        for (let Vc = 0; Vc < nc.length; Vc++) {
          const Bc = cB.getUniform(nc[Vc]);
          Bc && (this._boundUniforms[Vc] = Bc)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ic = !1;
        const rB = Bc && Bc._associatedChannel > -1;
        nc && rB && (this._activeChannel = Bc._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== Bc || Vc) {
          if (this._activateCurrentTexture(), Bc && Bc.isMultiview) throw sc.c.Error(["_bindTextureDirectly called with a multiview texture!", cB, Bc]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(cB, Bc?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = Bc, Bc && (Bc._associatedChannel = this._activeChannel)
        } else nc && (Ic = !0, this._activateCurrentTexture());
        return rB && !nc && this._bindSamplerUniformToChannel(Bc._associatedChannel, this._activeChannel), Ic
      }
      _bindTexture(cB, Bc, nc) {
        if (void 0 === cB) return;
        Bc && (Bc._associatedChannel = cB), this._activeChannel = cB;
        const Vc = Bc ? this._getTextureTarget(Bc) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Vc, Bc)
      }
      unbindAllTextures() {
        for (let cB = 0; cB < this._maxSimultaneousTextures; cB++) this._activeChannel = cB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Tv > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(cB, Bc, nc, Vc) {
        void 0 !== cB && (Bc && (this._boundUniforms[cB] = Bc), this._setTexture(cB, nc))
      }
      _bindSamplerUniformToChannel(cB, Bc) {
        const nc = this._boundUniforms[cB];
        nc && nc._currentState !== Bc && (this._gl.uniform1i(nc, Bc), nc._currentState = Bc)
      }
      _getTextureWrapMode(cB) {
        switch (cB) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(cB, Bc) {
        let nc, Vc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ic = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Bc) return null != this._boundTexturesCache[cB] && (this._activeChannel = cB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Tv > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (Bc.video) {
          this._activeChannel = cB;
          const nc = Bc.getInternalTexture();
          nc && (nc._associatedChannel = cB), Bc.update()
        } else if (4 === Bc.delayLoadState) return Bc.delayLoad(), !1;
        nc = Ic ? Bc.depthStencilTexture : Bc.isReady() ? Bc.getInternalTexture() : Bc.isCube ? this.emptyCubeTexture : Bc.is3D ? this.emptyTexture3D : Bc.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Vc && nc && (nc._associatedChannel = cB);
        let rB = !0;
        this._boundTexturesCache[cB] === nc && (Vc || this._bindSamplerUniformToChannel(nc._associatedChannel, cB), rB = !1), this._activeChannel = cB;
        const uc = this._getTextureTarget(nc);
        if (rB && this._bindTextureDirectly(uc, nc, Vc), nc && !nc.isMultiview) {
          if (nc.isCube && nc._cachedCoordinatesMode !== Bc.coordinatesMode) {
            nc._cachedCoordinatesMode = Bc.coordinatesMode;
            const cB = 3 !== Bc.coordinatesMode && 5 !== Bc.coordinatesMode ? 1 : 0;
            Bc.wrapU = cB, Bc.wrapV = cB
          }
          nc._cachedWrapU !== Bc.wrapU && (nc._cachedWrapU = Bc.wrapU, this._setTextureParameterInteger(uc, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Bc.wrapU), nc)), nc._cachedWrapV !== Bc.wrapV && (nc._cachedWrapV = Bc.wrapV, this._setTextureParameterInteger(uc, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Bc.wrapV), nc)), nc.is3D && nc._cachedWrapR !== Bc.wrapR && (nc._cachedWrapR = Bc.wrapR, this._setTextureParameterInteger(uc, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Bc.wrapR), nc)), this._setAnisotropicLevel(uc, nc, Bc.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(cB, Bc, nc, Vc) {
        if (void 0 !== cB && Bc) {
          this._textureUnits && this._textureUnits.length === nc.length || (this._textureUnits = new Int32Array(nc.length));
          for (let Bc = 0; Bc < nc.length; Bc++) {
            const Vc = nc[Bc].getInternalTexture();
            Vc ? (this._textureUnits[Bc] = cB + Bc, Vc._associatedChannel = cB + Bc) : this._textureUnits[Bc] = -1
          }
          this._gl.uniform1iv(Bc, this._textureUnits);
          for (let cB = 0; cB < nc.length; cB++) this._setTexture(this._textureUnits[cB], nc[cB], !0)
        }
      }
      _setAnisotropicLevel(cB, Bc, nc) {
        const Vc = this._caps.textureAnisotropicFilterExtension;
        11 !== Bc.samplingMode && 3 !== Bc.samplingMode && 2 !== Bc.samplingMode && (nc = 1), Vc && Bc._cachedAnisotropicFilteringLevel !== nc && (this._setTextureParameterFloat(cB, Vc.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(nc, this._caps.maxAnisotropy), Bc), Bc._cachedAnisotropicFilteringLevel = nc)
      }
      _setTextureParameterFloat(cB, Bc, nc, Vc) {
        this._bindTextureDirectly(cB, Vc, !0, !0), this._gl.texParameterf(cB, Bc, nc)
      }
      _setTextureParameterInteger(cB, Bc, nc, Vc) {
        Vc && this._bindTextureDirectly(cB, Vc, !0, !0), this._gl.texParameteri(cB, Bc, nc)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let cB = 0; cB < this._caps.maxVertexAttribs; cB++) this.disableAttributeByIndex(cB)
        } else
          for (let cB = 0, Bc = this._vertexAttribArraysEnabled.length; cB < Bc; cB++) cB >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[cB] || this.disableAttributeByIndex(cB)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, Mc.k)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Ic.B)(this._gl)
      }
      attachContextLostEvent(cB) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", cB, !1)
      }
      attachContextRestoredEvent(cB) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", cB, !1)
      }
      getError() {
        return this._gl.getError()
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1)
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2)
      }
      _canRenderToFramebuffer(cB) {
        const Bc = this._gl;
        for (; Bc.getError() !== Bc.NO_ERROR;);
        let nc = !0;
        const Vc = Bc.createTexture();
        Bc.bindTexture(Bc.TEXTURE_2D, Vc), Bc.texImage2D(Bc.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(cB), 1, 1, 0, Bc.RGBA, this._getWebGLTextureType(cB), null), Bc.texParameteri(Bc.TEXTURE_2D, Bc.TEXTURE_MIN_FILTER, Bc.NEAREST), Bc.texParameteri(Bc.TEXTURE_2D, Bc.TEXTURE_MAG_FILTER, Bc.NEAREST);
        const Ic = Bc.createFramebuffer();
        Bc.bindFramebuffer(Bc.FRAMEBUFFER, Ic), Bc.framebufferTexture2D(Bc.FRAMEBUFFER, Bc.COLOR_ATTACHMENT0, Bc.TEXTURE_2D, Vc, 0);
        const rB = Bc.checkFramebufferStatus(Bc.FRAMEBUFFER);
        if (nc = nc && rB === Bc.FRAMEBUFFER_COMPLETE, nc = nc && Bc.getError() === Bc.NO_ERROR, nc && (Bc.clear(Bc.COLOR_BUFFER_BIT), nc = nc && Bc.getError() === Bc.NO_ERROR), nc) {
          Bc.bindFramebuffer(Bc.FRAMEBUFFER, null);
          const cB = Bc.RGBA,
            Vc = Bc.UNSIGNED_BYTE,
            Ic = new Uint8Array(4);
          Bc.readPixels(0, 0, 1, 1, cB, Vc, Ic), nc = nc && Bc.getError() === Bc.NO_ERROR
        }
        for (Bc.deleteTexture(Vc), Bc.deleteFramebuffer(Ic), Bc.bindFramebuffer(Bc.FRAMEBUFFER, null); !nc && Bc.getError() !== Bc.NO_ERROR;);
        return nc
      }
      _getWebGLTextureType(cB) {
        if (1 === this._webGLVersion) {
          switch (cB) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5
          }
          return this._gl.UNSIGNED_BYTE
        }
        switch (cB) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
        }
        return this._gl.UNSIGNED_BYTE
      }
      _getInternalFormat(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = Bc ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (cB) {
          case 0:
            nc = this._gl.ALPHA;
            break;
          case 1:
            nc = this._gl.LUMINANCE;
            break;
          case 2:
            nc = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            nc = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            nc = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            nc = Bc ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            nc = Bc ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (cB) {
          case 8:
            nc = this._gl.RED_INTEGER;
            break;
          case 9:
            nc = this._gl.RG_INTEGER;
            break;
          case 10:
            nc = this._gl.RGB_INTEGER;
            break;
          case 11:
            nc = this._gl.RGBA_INTEGER
        }
        return nc
      }
      _getRGBABufferInternalSizedFormat(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== Bc) switch (Bc) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return nc ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (cB) {
          case 3:
            switch (Bc) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM
            }
          case 0:
            switch (Bc) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return nc ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return nc ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8
            }
          case 4:
            switch (Bc) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I
            }
          case 5:
            switch (Bc) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI
            }
          case 6:
            switch (Bc) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I
            }
          case 7:
            switch (Bc) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI
            }
          case 1:
            switch (Bc) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F
            }
          case 2:
            switch (Bc) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (Bc) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return nc ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(cB, Bc, nc, Vc) {
        let Ic = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          rB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Mc = Ic ? 4 : 3,
          Pc = Ic ? this._gl.RGBA : this._gl.RGB,
          qB = nc * Vc * Mc;
        if (uc) {
          if (uc.length < qB) return sc.c.Error(`Data buffer is too small to store the read pixels (${uc.length} should be more than ${qB})`), Promise.resolve(uc)
        } else uc = new Uint8Array(qB);
        return rB && this.flushFramebuffer(), this._gl.readPixels(cB, Bc, nc, Vc, Pc, this._gl.UNSIGNED_BYTE, uc), Promise.resolve(uc)
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported())
      }
      static get IsSupported() {
        return this.isSupported()
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const cB = rB.e._CreateCanvas(1, 1),
            Bc = cB.getContext("webgl") || cB.getContext("experimental-webgl");
          this._IsSupported = null != Bc && !!globalThis.WebGLRenderingContext
        } catch (cB) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const cB = rB.e._CreateCanvas(1, 1),
            Bc = cB.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || cB.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !Bc
        } catch (cB) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    hc._TempClearColorUint32 = new Uint32Array(4), hc._TempClearColorInt32 = new Int32Array(4), hc._TempClearColorFloat32 = new Float32Array(4), hc.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], hc._ConcatenateShader = tB.g, hc._IsSupported = null, hc._HasMajorPerformanceCaveat = null
  },
  38227: (cB, Bc, nc) => {
    var Vc;
    nc.d(Bc, {
        c: () => Ic
      }),
      function(cB) {
        cB[cB.PointerMove = 0] = "PointerMove", cB[cB.PointerDown = 1] = "PointerDown", cB[cB.PointerUp = 2] = "PointerUp"
      }(Vc || (Vc = {}));
    class Ic {}
    Ic.DOM_DELTA_PIXEL = 0, Ic.DOM_DELTA_LINE = 1, Ic.DOM_DELTA_PAGE = 2
  },
  38221: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc,
      f: () => rB,
      i: () => Ic
    });
    class Vc {}
    Vc.KEYDOWN = 1, Vc.KEYUP = 2;
    class Ic {
      constructor(cB, Bc) {
        this.type = cB, this.event = Bc
      }
    }
    class rB extends Ic {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(cB) {
        this.skipOnKeyboardObservable = cB
      }
      constructor(cB, Bc) {
        super(cB, Bc), this.type = cB, this.event = Bc, this.skipOnKeyboardObservable = !1
      }
    }
  },
  38218: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic,
      g: () => uc,
      i: () => sc
    });
    var Vc = nc(35756);
    class Ic {}
    Ic.POINTERDOWN = 1, Ic.POINTERUP = 2, Ic.POINTERMOVE = 4, Ic.POINTERWHEEL = 8, Ic.POINTERPICK = 16, Ic.POINTERTAP = 32, Ic.POINTERDOUBLETAP = 64;
    class rB {
      constructor(cB, Bc) {
        this.type = cB, this.event = Bc
      }
    }
    class uc extends rB {
      constructor(cB, Bc, nc, Ic) {
        super(cB, Bc), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Vc.m(nc, Ic)
      }
    }
    class sc extends rB {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(cB, Bc), this._pickInfo = nc, this._inputManager = Vc
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  38232: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      static CompareLightsPriority(cB, Bc) {
        return cB.shadowEnabled !== Bc.shadowEnabled ? (Bc.shadowEnabled ? 1 : 0) - (cB.shadowEnabled ? 1 : 0) : Bc.renderPriority - cB.renderPriority
      }
    }
    Vc.FALLOFF_DEFAULT = 0, Vc.FALLOFF_PHYSICAL = 1, Vc.FALLOFF_GLTF = 2, Vc.FALLOFF_STANDARD = 3, Vc.LIGHTMAP_DEFAULT = 0, Vc.LIGHTMAP_SPECULAR = 1, Vc.LIGHTMAP_SHADOWSONLY = 2, Vc.INTENSITYMODE_AUTOMATIC = 0, Vc.INTENSITYMODE_LUMINOUSPOWER = 1, Vc.INTENSITYMODE_LUMINOUSINTENSITY = 2, Vc.INTENSITYMODE_ILLUMINANCE = 3, Vc.INTENSITYMODE_LUMINANCE = 4, Vc.LIGHTTYPEID_POINTLIGHT = 0, Vc.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Vc.LIGHTTYPEID_SPOTLIGHT = 2, Vc.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Vc.LIGHTTYPEID_RECT_AREALIGHT = 4, Vc.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  37895: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc, Ic = nc(35783),
      rB = nc(37903);
    ! function(cB) {
      cB[cB.Unknown = 0] = "Unknown", cB[cB.Url = 1] = "Url", cB[cB.Temp = 2] = "Temp", cB[cB.Raw = 3] = "Raw", cB[cB.Dynamic = 4] = "Dynamic", cB[cB.RenderTarget = 5] = "RenderTarget", cB[cB.MultiRenderTarget = 6] = "MultiRenderTarget", cB[cB.Cube = 7] = "Cube", cB[cB.CubeRaw = 8] = "CubeRaw", cB[cB.CubePrefiltered = 9] = "CubePrefiltered", cB[cB.Raw3D = 10] = "Raw3D", cB[cB.Raw2DArray = 11] = "Raw2DArray", cB[cB.DepthStencil = 12] = "DepthStencil", cB[cB.CubeRawRGBD = 13] = "CubeRawRGBD", cB[cB.Depth = 14] = "Depth", cB[cB.External = 15] = "External"
    }(Vc || (Vc = {}));
    class uc extends rB.c {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(cB) {
        this._useMipMaps = cB
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(cB) {
        this._uniqueId = cB
      }
      RV() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Ic.c, this.onErrorObservable = new Ic.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = cB, this._source = Bc, this._uniqueId = uc._Counter++, nc || (this._hardwareTexture = cB._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, cB, Bc, nc), this.width = cB, this.height = Bc, this.depth = nc, this.baseWidth = cB, this.baseHeight = Bc, this.baseDepth = nc, this._size = cB * Bc * nc
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const cB = this.onRebuildCallback(this),
            Bc = Bc => {
              Bc._swapAndDie(this, !1), this.isReady = cB.isReady
            };
          return void(cB.isAsync ? cB.proxy.then(Bc) : Bc(cB.proxy))
        }
        let cB;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(cB = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (cB => {
              cB._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (cB = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), cB._swapAndDie(this, !1), this._bufferViewArray)
              for (let cB = 0; cB < this._bufferViewArray.length; cB++) {
                const Bc = this._bufferViewArray[cB];
                Bc && this._engine.updateRawTexture(this, Bc, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, cB)
              }
            this.isReady = !0;
            break;
          case 10:
            cB = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), cB._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (cB = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), cB._swapAndDie(this, !1), this._bufferViewArray)
              for (let cB = 0; cB < this._bufferViewArray.length; cB++) {
                const Bc = this._bufferViewArray[cB];
                Bc && this._engine.updateRawTexture2DArray(this, Bc, this.format, this.invertY, this._compression, this.type, cB)
              }
            this.isReady = !0;
            break;
          case 4:
            cB = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), cB._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(cB = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              cB._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            cB = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), cB._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return cB = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (cB => {
              cB && cB._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(cB._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(cB._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), cB._hardwareTexture = this._hardwareTexture, cB._setUniqueId(uc._Counter++), Bc && (cB._isRGBD = this._isRGBD), this._lodTextureHigh && (cB._lodTextureHigh && cB._lodTextureHigh.dispose(), cB._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (cB._lodTextureMid && cB._lodTextureMid.dispose(), cB._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (cB._lodTextureLow && cB._lodTextureLow.dispose(), cB._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (cB._irradianceTexture && cB._irradianceTexture.dispose(), cB._irradianceTexture = this._irradianceTexture);
        const nc = this._engine.getLoadedTexturesCache();
        let Vc = nc.indexOf(this); - 1 !== Vc && nc.splice(Vc, 1), Vc = nc.indexOf(cB), -1 === Vc && nc.push(cB)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    uc._Counter = 0
  },
  38e3: (cB, Bc, nc) => {
    function Vc(cB) {
      return 13 === cB || 14 === cB || 15 === cB || 16 === cB || 17 === cB || 18 === cB || 19 === cB
    }

    function Ic(cB) {
      return 8 === cB || 9 === cB || 10 === cB || 11 === cB
    }

    function rB(cB) {
      return 0 === cB || 5 === cB || 7 === cB || 11 === cB
    }

    function uc(cB) {
      return 13 === cB || 17 === cB || 18 === cB || 19 === cB
    }
    nc.d(Bc, {
      b: () => uc,
      f: () => Vc,
      j: () => Ic,
      n: () => rB
    })
  },
  37903: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(cB) {
        this._cachedWrapU = cB
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(cB) {
        this._cachedWrapV = cB
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(cB) {
        this._cachedWrapR = cB
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(cB) {
        this._cachedAnisotropicFilteringLevel = cB
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(cB) {
        this._comparisonFunction = cB
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(cB) {
        this._useMipMaps = cB
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = cB, this._cachedWrapV = Bc, this._cachedWrapR = nc, this._cachedAnisotropicFilteringLevel = Vc, this.samplingMode = Ic, this._comparisonFunction = rB, this
      }
      compareSampler(cB) {
        return this._cachedWrapU === cB._cachedWrapU && this._cachedWrapV === cB._cachedWrapV && this._cachedWrapR === cB._cachedWrapR && this._cachedAnisotropicFilteringLevel === cB._cachedAnisotropicFilteringLevel && this.samplingMode === cB.samplingMode && this._comparisonFunction === cB._comparisonFunction && this._useMipMaps === cB._useMipMaps
      }
    }
  },
  38168: (cB, Bc, nc) => {
    function Vc(cB) {
      cB.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    nc.d(Bc, {
      b: () => Vc
    })
  },
  37981: (cB, Bc, nc) => {
    function Vc(cB) {
      return void 0 === cB.getPipelineContext
    }
    nc.d(Bc, {
      e: () => Vc
    })
  },
  38356: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic
    });
    var Vc = nc(37963);
    class Ic {
      static GetEffect(cB) {
        return void 0 === cB.getPipelineContext ? cB.effect : cB
      }
      constructor(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = cB.createDrawContext(), Bc && (this.materialContext = cB.createMaterialContext())
      }
      setEffect(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        nc || this.effect === cB || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = cB, void 0 !== Bc && (this.defines = Bc), nc && this.drawContext?.reset()
      }
      dispose() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const Bc = this.effect;
          cB ? Bc.dispose() : Vc.e.SetImmediate((() => {
            Bc.RV().onEndFrameObservable.addOnce((() => {
              Bc.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  37928: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Oc,
      e: () => fc,
      f: () => Pc,
      j: () => qB
    });
    var Vc = nc(37937),
      Ic = nc(37939),
      rB = nc(37923),
      uc = nc(37191),
      sc = nc(37959),
      Mc = nc(37945);

    function Pc(cB, Bc) {
      return (0, Ic.E)(Bc).cachedPipelines[cB]
    }

    function qB(cB) {
      const Bc = cB._name,
        nc = cB.context;
      if (Bc && nc) {
        const cB = (0, Ic.E)(nc),
          Vc = cB.cachedPipelines[Bc];
        Vc?.dispose(), delete cB.cachedPipelines[Bc]
      }
    }

    function Oc(cB, Bc, nc, Ic, rB, uc, Mc) {
      let Pc, qB;
      const Oc = (0, Vc.k)() ? uc?.getHostDocument() : null;
      Pc = "string" === typeof Bc ? Bc : "string" === typeof Bc.vertexSource ? "source:" + Bc.vertexSource : "string" === typeof Bc.vertexElement ? Oc?.getElementById(Bc.vertexElement) || Bc.vertexElement : Bc.vertex || Bc, qB = "string" === typeof Bc ? Bc : "string" === typeof Bc.fragmentSource ? "source:" + Bc.fragmentSource : "string" === typeof Bc.fragmentElement ? Oc?.getElementById(Bc.fragmentElement) || Bc.fragmentElement : Bc.fragment || Bc;
      const fc = [void 0, void 0],
        mB = () => {
          if (fc[0] && fc[1]) {
            const [Vc, Pc] = fc;
            (0, sc.e)(cB), (0, sc.j)(Vc, cB, ((Vc, qB) => {
              Mc && (Mc._vertexSourceCodeBeforeMigration = qB), nc && (Vc = nc("vertex", Vc)), cB.isFragment = !0, (0, sc.j)(Pc, cB, ((uc, Pc) => {
                Mc && (Mc._fragmentSourceCodeBeforeMigration = Pc), nc && (uc = nc("fragment", uc));
                const qB = (0, sc.c)(Vc, uc, cB);
                cB = null;
                const Oc = function(cB, Bc, nc, Vc) {
                  if (nc) {
                    return {
                      vertexSourceCode: (1 === Vc ? "//" : "") + "#define SHADER_NAME vertex:" + (nc.vertexElement || nc.vertex || nc.spectorName || nc) + "\n" + cB,
                      fragmentSourceCode: (1 === Vc ? "//" : "") + "#define SHADER_NAME fragment:" + (nc.fragmentElement || nc.fragment || nc.spectorName || nc) + "\n" + Bc
                    }
                  }
                  return {
                    vertexSourceCode: cB,
                    fragmentSourceCode: Bc
                  }
                }(qB.vertexCode, qB.fragmentCode, Bc, rB);
                Ic?.(Oc.vertexSourceCode, Oc.fragmentSourceCode)
              }), uc)
            }), uc)
          }
        };
      Tc(Pc, "Vertex", "", (cB => {
        Mc && (Mc._rawVertexSourceCode = cB), fc[0] = cB, mB()
      }), rB), Tc(qB, "Fragment", "Pixel", (cB => {
        Mc && (Mc._rawFragmentSourceCode = cB), fc[1] = cB, mB()
      }), rB)
    }

    function Tc(cB, Bc, nc, Ic, uc, sc) {
      if ("undefined" !== typeof HTMLElement && cB instanceof HTMLElement) {
        return void Ic((0, Vc.d)(cB))
      }
      if ("source:" === cB.substring(0, 7)) return void Ic(cB.substring(7));
      if ("base64:" === cB.substring(0, 7)) {
        return void Ic(window.atob(cB.substring(7)))
      }
      const Pc = rB.b.GetShadersStore(uc);
      if (Pc[cB + Bc + "Shader"]) return void Ic(Pc[cB + Bc + "Shader"]);
      if (nc && Pc[cB + nc + "Shader"]) return void Ic(Pc[cB + nc + "Shader"]);
      let qB;
      if (qB = "." === cB[0] || "/" === cB[0] || cB.indexOf("http") > -1 ? cB : rB.b.GetShadersRepository(uc) + cB, !(sc = sc || Mc.o)) throw new Error("loadFileInjection is not defined");
      sc(qB + "." + Bc.toLowerCase() + ".fx", Ic)
    }
    const fc = (cB, Bc, nc, Vc) => {
      try {
        const rB = cB.context ? (0, Ic.E)(cB.context) : null;
        rB && (rB.disableParallelShaderCompile = cB.disableParallelCompilation);
        const uc = cB.existingPipelineContext || Bc(cB.shaderProcessingContext);
        return uc._name = cB.name, cB.name && rB && (rB.cachedPipelines[cB.name] = uc), nc(uc, cB.vertex, cB.fragment, !!cB.createAsRaw, "", "", cB.rebuildRebind, cB.defines, cB.transformFeedbackVaryings, "", (() => {
          Vc(uc, (() => {
            cB.onRenderingStateCompiled?.(uc)
          }))
        })), uc
      } catch (rB) {
        throw uc.c.Error("Error compiling effect"), rB
      }
    }
  },
  37919: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Mc
    });
    var Vc = nc(35783),
      Ic = nc(37191),
      rB = nc(37923),
      uc = nc(37928),
      sc = nc(37963);
    class Mc {
      static get ShadersRepository() {
        return rB.b.ShadersRepository
      }
      static set ShadersRepository(cB) {
        rB.b.ShadersRepository = cB
      }
      get nPc() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Vc.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(cB, Bc, nc) {
        let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          rB = arguments.length > 4 ? arguments[4] : void 0,
          sc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Pc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          qB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Oc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Tc = arguments.length > 9 ? arguments[9] : void 0,
          fc = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          mB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          ec = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Vc.c, this.onErrorObservable = new Vc.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = cB, this._key = fc;
        const tB = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let Sc;
        if (Bc.attributes) {
          const cB = Bc;
          if (this._engine = nc, this._attributesNames = cB.attributes, this._uniformsNames = cB.uniformsNames.concat(cB.samplers), this._samplerList = cB.samplers.slice(), this.defines = cB.defines, this.onError = cB.onError, this.onCompiled = cB.onCompiled, this._fallbacks = cB.fallbacks, this._indexParameters = cB.indexParameters, this._transformFeedbackVaryings = cB.transformFeedbackVaryings || null, this._multiTarget = !!cB.multiTarget, this._shaderLanguage = cB.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!cB.disableParallelShaderCompilation, cB.uniformBuffersNames) {
            this._uniformBuffersNamesList = cB.uniformBuffersNames.slice();
            for (let Bc = 0; Bc < cB.uniformBuffersNames.length; Bc++) this._uniformBuffersNames[cB.uniformBuffersNames[Bc]] = Bc
          }
          this._processFinalCode = cB.processFinalCode ?? null, this._processCodeAfterIncludes = cB.processCodeAfterIncludes ?? void 0, ec = cB.extraInitializationsAsync, Sc = cB.existingPipelineContext
        } else this._engine = rB, this.defines = null == sc ? "" : sc, this._uniformsNames = nc.concat(Ic), this._samplerList = Ic ? Ic.slice() : [], this._attributesNames = Bc, this._uniformBuffersNamesList = [], this._shaderLanguage = mB, this.onError = Oc, this.onCompiled = qB, this._indexParameters = Tc, this._fallbacks = Pc;
        "WEBGL2" === this._engine.shaderPlatformName && (Sc = (0, uc.f)(tB, this._engine._gl) ?? Sc), this._attributeLocationByName = {}, this.uniqueId = Mc._UniqueIdSeed++, Sc ? (this._pipelineContext = Sc, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, ec).catch((cB => {
          const Bc = cB?.message ?? String(cB),
            nc = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Bc}`);
          cB && "string" === typeof cB.stack && (nc.stack = `${nc.message}\nCaused by: ${cB.stack}`), this._processCompilationErrors(nc)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.nPc || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        Vc && await Vc(), this._processingContext = nc || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Ic = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: cB ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: rB.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: rB.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          HPc: this._engine.HPc,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, uc.b)(Ic, this.name, this._processFinalCode, ((cB, nc) => {
          this._vertexSourceCode = cB, this._fragmentSourceCode = nc, this._prepareEffect(Bc)
        }), this._shaderLanguage, this._engine, this)
      }
      get key() {
        return this._key
      }
      isReady() {
        try {
          return this._isReadyInternal()
        } catch {
          return !1
        }
      }
      _isReadyInternal() {
        return !!this._engine.nPc || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      RV() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(cB) {
        return this._attributes[cB]
      }
      getAttributeLocationByName(cB) {
        return this._attributeLocationByName[cB]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(cB) {
        return this._uniformsNames.indexOf(cB)
      }
      getUniform(cB) {
        return this._uniforms[cB]
      }
      getSamplers() {
        return this._samplerList
      }
      getUniformNames() {
        return this._uniformsNames
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList
      }
      getIndexParameters() {
        return this._indexParameters
      }
      getCompilationError() {
        return this._compilationError
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed
      }
      async whenCompiledAsync() {
        return await new Promise((cB => {
          this.executeWhenCompiled(cB)
        }))
      }
      executeWhenCompiled(cB) {
        this.isReady() ? cB(this) : (this.onCompileObservable.add((Bc => {
          cB(Bc)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(cB) {
        (0, sc.h)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Bc => {
          this._processCompilationErrors(Bc, cB)
        }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
      }
      get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
      }
      get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            HPc: this._engine.HPc,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(cB, Bc, nc, Vc) {
        this._isReady = !1, this._vertexSourceCodeOverride = cB, this._fragmentSourceCodeOverride = Bc, this.onError = (cB, Bc) => {
          Vc && Vc(Bc)
        }, this.onCompiled = () => {
          const cB = this.RV().scenes;
          if (cB)
            for (let Bc = 0; Bc < cB.length; Bc++) cB[Bc].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(nc)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(cB) {
        if (this._pipelineContext = cB, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let Bc = 0; Bc < this._attributesNames.length; Bc++) {
            const cB = this._attributesNames[Bc];
            this._attributeLocationByName[cB] = this._attributes[Bc]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), Mc.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = this._pipelineContext;
        this._isReady = !1;
        try {
          const nc = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Vc = nc ? null : this.defines,
            Ic = nc ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            rB = nc ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            sc = this._engine;
          this._pipelineContext = (0, uc.e)({
            existingPipelineContext: cB ? Bc : null,
            vertex: Ic,
            fragment: rB,
            context: "WEBGL2" === sc.shaderPlatformName || "WEBGL1" === sc.shaderPlatformName ? sc._gl : void 0,
            rebuildRebind: (cB, Bc, nc, Vc) => this._rebuildProgram(cB, Bc, nc, Vc),
            defines: Vc,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: nc,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: nc => {
              Bc && !cB && this._engine._deletePipelineContext(Bc), nc && this._onRenderingStateCompiled(nc)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(Bc)
        } catch (nc) {
          this._processCompilationErrors(nc, Bc)
        }
      }
      _getShaderCodeAndErrorLine(cB, Bc, nc) {
        const Vc = nc ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Ic = null;
        if (Bc && cB) {
          const rB = Bc.match(Vc);
          if (rB && 2 === rB.length) {
            const Bc = parseInt(rB[1]),
              Vc = cB.split("\n", -1);
            Vc.length >= Bc && (Ic = `Offending line [${Bc}] in ${nc?"fragment":"vertex"} code: ${Vc[Bc-1]}`)
          }
        }
        return [cB, Ic]
      }
      _processCompilationErrors(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof cB?.stack ? cB.stack : cB?.message ?? String(cB);
        const nc = this._attributesNames,
          Vc = this._fallbacks;
        if (Ic.c.Error("Unable to compile effect:"), Ic.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Ic.c.Error(`Attributes: ${nc.join(" ")}`), Ic.c.Error("Defines:\n" + this.defines), Mc.LogShaderCodeOnCompilationError) {
          let cB, Bc = null,
            nc = null;
          this._pipelineContext?._getVertexShaderCode() && ([cB, Bc] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), cB && (Ic.c.Error("Vertex code:"), Ic.c.Error(cB))), this._pipelineContext?._getFragmentShaderCode() && ([cB, nc] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), cB && (Ic.c.Error("Fragment code:"), Ic.c.Error(cB))), Bc && Ic.c.Error(Bc), nc && Ic.c.Error(nc)
        }
        Ic.c.Error("Error: " + this._compilationError);
        const rB = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        Bc && (this._pipelineContext = Bc, this._isReady = !0, rB()), Vc ? (this._pipelineContext = null, Vc.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Ic.c.Error("Trying next fallback."), this.defines = Vc.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, rB(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, Bc || rB())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(cB, Bc) {
        this._engine._bindTexture(this._samplers[cB], Bc, cB)
      }
      setTexture(cB, Bc) {
        this._engine.setTexture(this._samplers[cB], this._uniforms[cB], Bc, cB)
      }
      setTextureArray(cB, Bc) {
        const nc = cB + "Ex";
        if (-1 === this._samplerList.indexOf(nc + "0")) {
          const Vc = this._samplerList.indexOf(cB);
          for (let cB = 1; cB < Bc.length; cB++) {
            const Bc = nc + (cB - 1).toString();
            this._samplerList.splice(Vc + cB, 0, Bc)
          }
          let Ic = 0;
          for (const cB of this._samplerList) this._samplers[cB] = Ic, Ic += 1
        }
        this._engine.setTextureArray(this._samplers[cB], this._uniforms[cB], Bc, cB)
      }
      bindUniformBuffer(cB, Bc) {
        const nc = this._uniformBuffersNames[Bc];
        void 0 === nc || Mc._BaseCache[nc] === cB && this._engine._features.useUBOBindingCache || (Mc._BaseCache[nc] = cB, this._engine.bindUniformBufferBase(cB, nc, Bc))
      }
      bindUniformBlock(cB, Bc) {
        this._engine.bindUniformBlock(this._pipelineContext, cB, Bc)
      }
      setInt(cB, Bc) {
        return this._pipelineContext.setInt(cB, Bc), this
      }
      setInt2(cB, Bc, nc) {
        return this._pipelineContext.setInt2(cB, Bc, nc), this
      }
      setInt3(cB, Bc, nc, Vc) {
        return this._pipelineContext.setInt3(cB, Bc, nc, Vc), this
      }
      setInt4(cB, Bc, nc, Vc, Ic) {
        return this._pipelineContext.setInt4(cB, Bc, nc, Vc, Ic), this
      }
      setIntArray(cB, Bc) {
        return this._pipelineContext.setIntArray(cB, Bc), this
      }
      setIntArray2(cB, Bc) {
        return this._pipelineContext.setIntArray2(cB, Bc), this
      }
      setIntArray3(cB, Bc) {
        return this._pipelineContext.setIntArray3(cB, Bc), this
      }
      setIntArray4(cB, Bc) {
        return this._pipelineContext.setIntArray4(cB, Bc), this
      }
      setUInt(cB, Bc) {
        return this._pipelineContext.setUInt(cB, Bc), this
      }
      setUInt2(cB, Bc, nc) {
        return this._pipelineContext.setUInt2(cB, Bc, nc), this
      }
      setUInt3(cB, Bc, nc, Vc) {
        return this._pipelineContext.setUInt3(cB, Bc, nc, Vc), this
      }
      setUInt4(cB, Bc, nc, Vc, Ic) {
        return this._pipelineContext.setUInt4(cB, Bc, nc, Vc, Ic), this
      }
      setUIntArray(cB, Bc) {
        return this._pipelineContext.setUIntArray(cB, Bc), this
      }
      setUIntArray2(cB, Bc) {
        return this._pipelineContext.setUIntArray2(cB, Bc), this
      }
      setUIntArray3(cB, Bc) {
        return this._pipelineContext.setUIntArray3(cB, Bc), this
      }
      setUIntArray4(cB, Bc) {
        return this._pipelineContext.setUIntArray4(cB, Bc), this
      }
      setFloatArray(cB, Bc) {
        return this._pipelineContext.setArray(cB, Bc), this
      }
      setFloatArray2(cB, Bc) {
        return this._pipelineContext.setArray2(cB, Bc), this
      }
      setFloatArray3(cB, Bc) {
        return this._pipelineContext.setArray3(cB, Bc), this
      }
      setFloatArray4(cB, Bc) {
        return this._pipelineContext.setArray4(cB, Bc), this
      }
      setArray(cB, Bc) {
        return this._pipelineContext.setArray(cB, Bc), this
      }
      setArray2(cB, Bc) {
        return this._pipelineContext.setArray2(cB, Bc), this
      }
      setArray3(cB, Bc) {
        return this._pipelineContext.setArray3(cB, Bc), this
      }
      setArray4(cB, Bc) {
        return this._pipelineContext.setArray4(cB, Bc), this
      }
      setMatrices(cB, Bc) {
        return this._pipelineContext.setMatrices(cB, Bc), this
      }
      setMatrix(cB, Bc) {
        return this._pipelineContext.setMatrix(cB, Bc), this
      }
      setMatrix3x3(cB, Bc) {
        return this._pipelineContext.setMatrix3x3(cB, Bc), this
      }
      setMatrix2x2(cB, Bc) {
        return this._pipelineContext.setMatrix2x2(cB, Bc), this
      }
      setFloat(cB, Bc) {
        return this._pipelineContext.setFloat(cB, Bc), this
      }
      setBool(cB, Bc) {
        return this._pipelineContext.setInt(cB, Bc ? 1 : 0), this
      }
      setVector2(cB, Bc) {
        return this._pipelineContext.setVector2(cB, Bc), this
      }
      setFloat2(cB, Bc, nc) {
        return this._pipelineContext.setFloat2(cB, Bc, nc), this
      }
      setVector3(cB, Bc) {
        return this._pipelineContext.setVector3(cB, Bc), this
      }
      setFloat3(cB, Bc, nc, Vc) {
        return this._pipelineContext.setFloat3(cB, Bc, nc, Vc), this
      }
      setVector4(cB, Bc) {
        return this._pipelineContext.setVector4(cB, Bc), this
      }
      setQuaternion(cB, Bc) {
        return this._pipelineContext.setQuaternion(cB, Bc), this
      }
      setFloat4(cB, Bc, nc, Vc, Ic) {
        return this._pipelineContext.setFloat4(cB, Bc, nc, Vc, Ic), this
      }
      setColor3(cB, Bc) {
        return this._pipelineContext.setColor3(cB, Bc), this
      }
      setColor4(cB, Bc, nc) {
        return this._pipelineContext.setColor4(cB, Bc, nc), this
      }
      setDirectColor4(cB, Bc) {
        return this._pipelineContext.setDirectColor4(cB, Bc), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (Mc.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, uc.j)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        Bc && (rB.b.GetShadersStore(Vc)[`${cB}PixelShader`] = Bc), nc && (rB.b.GetShadersStore(Vc)[`${cB}VertexShader`] = nc)
      }
      static ResetCache() {
        Mc._BaseCache = {}
      }
    }
    Mc.LogShaderCodeOnCompilationError = !0, Mc.PersistentMode = !1, Mc.AutomaticallyClearCodeCache = !1, Mc._UniqueIdSeed = 0, Mc._BaseCache = {}, Mc.ShadersStore = rB.b.ShadersStore, Mc.IncludesShadersStore = rB.b.IncludesShadersStore
  },
  38202: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => qB,
      e: () => lc,
      i: () => aB
    });
    var Vc = nc(37919),
      Ic = nc(35756),
      rB = nc(35792),
      uc = nc(38182);
    const sc = new Ic.d,
      Mc = new Ic.d,
      Pc = new Ic.d,
      qB = {
        knc: () => {},
        eyeAtCamera: !0
      };

    function Oc(cB, Bc, nc) {
      const Vc = nc.KPc(),
        Ic = Bc.KPc();
      for (let rB = 0; rB < 16; rB++) Vc[rB] = Ic[rB];
      return Vc[12] -= cB.x, Vc[13] -= cB.y, Vc[14] -= cB.z, nc.markAsUpdated(), nc
    }

    function Tc(cB, Bc, nc) {
      return (0, rB.h)(Bc, Mc), Oc(cB, Mc, Pc), (0, rB.h)(Pc, nc), nc
    }

    function fc(cB, Bc, nc) {
      if (!qB.eyeAtCamera) return Tc(cB, Bc, nc);
      const Vc = nc.KPc(),
        Ic = Bc.KPc();
      for (let rB = 0; rB < 16; rB++) Vc[rB] = Ic[rB];
      return Vc[12] = 0, Vc[13] = 0, Vc[14] = 0, nc.markAsUpdated(), nc
    }

    function mB(cB, Bc, nc, Vc) {
      return (0, rB.r)(fc(cB, Bc, Vc), nc, Vc), Vc
    }

    function ec(cB, Bc, nc, Vc) {
      return (0, rB.h)(nc, Mc), (0, rB.r)(Bc, Mc, Pc), Oc(cB, Pc, Mc), fc(cB, nc, Pc), (0, rB.r)(Mc, Pc, Vc), Vc
    }

    function tB(cB, Bc, nc, Vc, Ic, uc) {
      return (0, rB.h)(nc, Mc), (0, rB.r)(Bc, Mc, Pc), Oc(cB, Pc, Mc), mB(cB, Vc, Ic, Pc), (0, rB.r)(Mc, Pc, uc), uc
    }

    function Sc(cB, Bc) {
      const nc = qB.knc();
      if (!nc || sc === Bc) return Bc;
      sc.updateFlag = Bc.updateFlag;
      const Vc = nc.floatingOriginOffset;
      switch (cB) {
        case "world":
          return Oc(Vc, Bc, sc);
        case "view":
          return fc(Vc, Bc, sc);
        case "worldView":
          return ec(Vc, Bc, nc.getViewMatrix(), sc);
        case "viewProjection":
          return mB(Vc, nc.getViewMatrix(), nc.getProjectionMatrix(), sc);
        case "worldViewProjection":
          return tB(Vc, Bc, nc.getTransformMatrix(), nc.getViewMatrix(), nc.getProjectionMatrix(), sc);
        default:
          if (cB.startsWith("u_")) {
            const Ic = cB.toLowerCase();
            if (Ic.startsWith("u_worldviewprojection")) return tB(Vc, Bc, nc.getTransformMatrix(), nc.getViewMatrix(), nc.getProjectionMatrix(), sc);
            if (Ic.startsWith("u_viewprojection")) return mB(Vc, nc.getViewMatrix(), nc.getProjectionMatrix(), sc);
            if (Ic.startsWith("u_worldview")) return ec(Vc, Bc, nc.getViewMatrix(), sc);
            if (Ic.startsWith("u_world")) return Oc(Vc, Bc, sc);
            if (Ic.startsWith("u_view")) return fc(Vc, Bc, sc)
          }
          return Bc
      }
    }
    const yB = uc.c,
      zB = Vc.c,
      pc = yB.prototype._updateMatrixForUniform,
      hc = Vc.c.prototype.setMatrix;

    function aB() {
      Vc.c.prototype.setMatrix = hc, zB._setMatrixOverride = void 0, yB.prototype._updateMatrixForUniform = pc, yB.prototype._updateMatrixForUniformOverride = void 0
    }

    function lc() {
      zB.prototype._setMatrixOverride = hc, zB.prototype.setMatrix = function(cB, Bc) {
        return this._setMatrixOverride(cB, Sc(cB, Bc)), this
      }, yB.prototype._updateMatrixForUniformOverride = pc, yB.prototype._updateMatrixForUniform = function(cB, Bc) {
        this._updateMatrixForUniformOverride(cB, Sc(cB, Bc))
      }
    }
  },
  38175: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB,
      e: () => Ic
    });
    var Vc = nc(38168);

    function Ic(cB, Bc) {
      Bc.WHITEBALANCE && cB.push("whiteBalanceMatrix"), Bc.EXPOSURE && cB.push("exposureLinear"), Bc.CONTRAST && cB.push("contrast"), Bc.COLORGRADING && cB.push("colorTransformSettings"), (Bc.VIGNETTE || Bc.DITHER) && cB.push("vInverseScreenSize"), Bc.VIGNETTE && (cB.push("vignetteSettings1"), cB.push("vignetteSettings2")), Bc.COLORCURVES && (0, Vc.b)(cB), Bc.DITHER && cB.push("ditherIntensity")
    }

    function rB(cB, Bc) {
      Bc.COLORGRADING && cB.push("txColorTransform")
    }
  },
  38162: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => bB,
      d: () => Cc
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(35783),
      uc = nc(35815),
      sc = nc(35785),
      Mc = nc(35756);
    const Pc = [
        [0, .18006, .26352, -.24341],
        [10, .18066, .26589, -.25479],
        [20, .18133, .26846, -.26876],
        [30, .18208, .27119, -.28539],
        [40, .18293, .27407, -.3047],
        [50, .18388, .27709, -.32675],
        [60, .18494, .28021, -.35156],
        [70, .18611, .28342, -.37915],
        [80, .1874, .28668, -.40955],
        [90, .1888, .28997, -.44278],
        [100, .19032, .29326, -.47888],
        [125, .19462, .30141, -.58204],
        [150, .19962, .30921, -.70471],
        [175, .20525, .31647, -.84901],
        [200, .21142, .32312, -1.0182],
        [225, .21807, .32909, -1.2168],
        [250, .22511, .33439, -1.4512],
        [275, .23247, .33904, -1.7298],
        [300, .2401, .34308, -2.0637],
        [325, .24792, .34655, -2.4681],
        [350, .25591, .34951, -2.9641],
        [375, .264, .352, -3.5814],
        [400, .27218, .35407, -4.3633],
        [425, .28039, .35577, -5.3762],
        [450, .28863, .35714, -6.7262],
        [475, .29685, .35823, -8.5955],
        [500, .30505, .35907, -11.324],
        [525, .3132, .35968, -15.628],
        [550, .32129, .36011, -23.325],
        [575, .32931, .36038, -40.77],
        [600, .33724, .36051, -116.45]
      ],
      qB = 1e6 / Pc[Pc.length - 1][0],
      Oc = 150;

    function Tc(cB, Bc) {
      const nc = Number.isNaN(cB) ? qB : Math.max(cB, qB),
        Vc = (0, sc.Clamp)(1e6 / nc, Pc[0][0], Pc[Pc.length - 1][0]);
      let Ic = 0,
        rB = Pc.length - 1;
      for (; rB - Ic > 1;) {
        const cB = Ic + rB >> 1;
        Pc[cB][0] <= Vc ? Ic = cB : rB = cB
      }
      const uc = Ic,
        [Tc, fc, mB, ec] = Pc[uc],
        [tB, Sc, yB, zB] = Pc[uc + 1],
        pc = (Vc - Tc) / (tB - Tc),
        hc = Mc.m.Lerp(new Mc.m(fc, mB), new Mc.m(Sc, yB), pc),
        aB = Mc.m.Normalize(new Mc.m(1, ec)),
        lc = Mc.m.Normalize(new Mc.m(1, zB)),
        Yc = Mc.m.Normalize(Mc.m.Lerp(aB, lc, pc)),
        Lc = (0, sc.Clamp)(Bc, -150, Oc);
      hc.Tqc(Yc.scale(Lc / 3e3));
      const gB = 2 * hc.x - 8 * hc.y + 4,
        Uc = 3 * hc.x / gB,
        bB = 2 * hc.y / gB;
      return new Mc.p(Uc / bB, 1, (1 - Uc - bB) / bB)
    }
    const fc = Mc.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      mB = Mc.d.Invert(fc);

    function ec(cB, Bc) {
      const nc = Bc > 0 ? cB / Bc : 10;
      return (0, sc.Clamp)(nc, .1, 10)
    }

    function tB(cB, Bc) {
      const nc = Mc.p.TransformNormal(cB, fc),
        Vc = Mc.p.TransformNormal(Bc, fc),
        Ic = Mc.d.FromArray([ec(Vc.x, nc.x), 0, 0, 0, 0, ec(Vc.y, nc.y), 0, 0, 0, 0, ec(Vc.z, nc.z), 0, 0, 0, 0, 1]);
      return fc.multiply(Ic).multiply(mB)
    }
    const Sc = new Mc.p(.95047, 1, 1.08883),
      yB = Mc.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(tB(Sc, Tc(6500, 0))),
      zB = Mc.d.Invert(yB),
      pc = Mc.p.TransformNormal(new Mc.p(1, 1, 1), yB);
    var hc = nc(38068),
      aB = nc(38168);
    let lc = (() => {
      var cB;
      let Bc, nc, rB, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB = [],
        Sc = [],
        yB = [],
        zB = [],
        pc = [],
        lc = [],
        Yc = [],
        Lc = [],
        gB = [],
        Uc = [],
        bB = [],
        Zc = [],
        Qc = [],
        Cc = [],
        vB = [],
        Dc = [],
        Nc = [],
        Ec = [],
        oc = [],
        Wc = [],
        wc = [],
        kB = [],
        Xc = [],
        Hc = [];
      return cB = class {
        constructor() {
          this._dirty = !0, this._tempColor = new uc.g(0, 0, 0, 0), this._globalCurve = new uc.g(0, 0, 0, 0), this._highlightsCurve = new uc.g(0, 0, 0, 0), this._midtonesCurve = new uc.g(0, 0, 0, 0), this._shadowsCurve = new uc.g(0, 0, 0, 0), this._positiveCurve = new uc.g(0, 0, 0, 0), this._negativeCurve = new uc.g(0, 0, 0, 0), this._globalHue = (0, Vc.k)(this, tB, 30), this._globalDensity = ((0, Vc.k)(this, Sc), (0, Vc.k)(this, yB, 0)), this._globalSaturation = ((0, Vc.k)(this, zB), (0, Vc.k)(this, pc, 0)), this._globalExposure = ((0, Vc.k)(this, lc), (0, Vc.k)(this, Yc, 0)), this._highlightsHue = ((0, Vc.k)(this, Lc), (0, Vc.k)(this, gB, 30)), this._highlightsDensity = ((0, Vc.k)(this, Uc), (0, Vc.k)(this, bB, 0)), this._highlightsSaturation = ((0, Vc.k)(this, Zc), (0, Vc.k)(this, Qc, 0)), this._highlightsExposure = ((0, Vc.k)(this, Cc), (0, Vc.k)(this, vB, 0)), this._midtonesHue = ((0, Vc.k)(this, Dc), (0, Vc.k)(this, Nc, 30)), this._midtonesDensity = ((0, Vc.k)(this, Ec), (0, Vc.k)(this, oc, 0)), this._midtonesSaturation = ((0, Vc.k)(this, Wc), (0, Vc.k)(this, wc, 0)), this._midtonesExposure = ((0, Vc.k)(this, kB), (0, Vc.k)(this, Xc, 0)), this._shadowsHue = ((0, Vc.k)(this, Hc), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(cB) {
          this._globalHue = cB, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(cB) {
          this._globalDensity = cB, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(cB) {
          this._globalSaturation = cB, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(cB) {
          this._globalExposure = cB, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(cB) {
          this._highlightsHue = cB, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(cB) {
          this._highlightsDensity = cB, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(cB) {
          this._highlightsSaturation = cB, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(cB) {
          this._highlightsExposure = cB, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(cB) {
          this._midtonesHue = cB, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(cB) {
          this._midtonesDensity = cB, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(cB) {
          this._midtonesSaturation = cB, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(cB) {
          this._midtonesExposure = cB, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(cB) {
          this._shadowsHue = cB, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(cB) {
          this._shadowsDensity = cB, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(cB) {
          this._shadowsSaturation = cB, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(cB) {
          this._shadowsExposure = cB, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(Bc, nc, Vc, Ic, rB) {
          null != Bc && (Bc = cB._Clamp(Bc, 0, 360), nc = cB._Clamp(nc, -100, 100), Vc = cB._Clamp(Vc, -100, 100), Ic = cB._Clamp(Ic, -100, 100), nc = cB._ApplyColorGradingSliderNonlinear(nc), nc *= .5, Ic = cB._ApplyColorGradingSliderNonlinear(Ic), nc < 0 && (nc *= -1, Bc = (Bc + 180) % 360), cB._FromHSBToRef(Bc, nc, 50 + .25 * Ic, rB), rB.scaleToRef(2, rB), rB.a = 1 + .01 * Vc)
        }
        static _ApplyColorGradingSliderNonlinear(cB) {
          cB /= 100;
          let Bc = Math.abs(cB);
          return Bc = Math.pow(Bc, 2), cB < 0 && (Bc *= -1), Bc *= 100, Bc
        }
        static _FromHSBToRef(Bc, nc, Vc, Ic) {
          let rB = cB._Clamp(Bc, 0, 360);
          const uc = cB._Clamp(nc / 100, 0, 1),
            sc = cB._Clamp(Vc / 100, 0, 1);
          if (0 === uc) Ic.r = sc, Ic.g = sc, Ic.b = sc;
          else {
            rB /= 60;
            const cB = Math.floor(rB),
              Bc = rB - cB,
              nc = sc * (1 - uc),
              Vc = sc * (1 - uc * Bc),
              Mc = sc * (1 - uc * (1 - Bc));
            switch (cB) {
              case 0:
                Ic.r = sc, Ic.g = Mc, Ic.b = nc;
                break;
              case 1:
                Ic.r = Vc, Ic.g = sc, Ic.b = nc;
                break;
              case 2:
                Ic.r = nc, Ic.g = sc, Ic.b = Mc;
                break;
              case 3:
                Ic.r = nc, Ic.g = Vc, Ic.b = sc;
                break;
              case 4:
                Ic.r = Mc, Ic.g = nc, Ic.b = sc;
                break;
              default:
                Ic.r = sc, Ic.g = nc, Ic.b = Vc
            }
          }
          Ic.a = 1
        }
        static _Clamp(cB, Bc, nc) {
          return Math.min(Math.max(cB, Bc), nc)
        }
        clone() {
          return hc.e.Clone((() => new cB), this)
        }
        serialize() {
          return hc.e.Serialize(this)
        }
        _bind(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), cB && (cB.setFloat4(Bc, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), cB.setFloat4(nc, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), cB.setFloat4(Vc, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const uc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], rB = [(0, Ic.M)()], sc = [(0, Ic.M)()], Mc = [(0, Ic.M)()], Pc = [(0, Ic.M)()], qB = [(0, Ic.M)()], Oc = [(0, Ic.M)()], Tc = [(0, Ic.M)()], fc = [(0, Ic.M)()], mB = [(0, Ic.M)()], ec = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: cB => "_globalHue" in cB,
            get: cB => cB._globalHue,
            set: (cB, Bc) => {
              cB._globalHue = Bc
            }
          },
          metadata: uc
        }, tB, Sc), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "_globalDensity" in cB,
            get: cB => cB._globalDensity,
            set: (cB, Bc) => {
              cB._globalDensity = Bc
            }
          },
          metadata: uc
        }, yB, zB), (0, Vc.g)(null, null, rB, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: cB => "_globalSaturation" in cB,
            get: cB => cB._globalSaturation,
            set: (cB, Bc) => {
              cB._globalSaturation = Bc
            }
          },
          metadata: uc
        }, pc, lc), (0, Vc.g)(null, null, sc, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: cB => "_globalExposure" in cB,
            get: cB => cB._globalExposure,
            set: (cB, Bc) => {
              cB._globalExposure = Bc
            }
          },
          metadata: uc
        }, Yc, Lc), (0, Vc.g)(null, null, Mc, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: cB => "_highlightsHue" in cB,
            get: cB => cB._highlightsHue,
            set: (cB, Bc) => {
              cB._highlightsHue = Bc
            }
          },
          metadata: uc
        }, gB, Uc), (0, Vc.g)(null, null, Pc, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "_highlightsDensity" in cB,
            get: cB => cB._highlightsDensity,
            set: (cB, Bc) => {
              cB._highlightsDensity = Bc
            }
          },
          metadata: uc
        }, bB, Zc), (0, Vc.g)(null, null, qB, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: cB => "_highlightsSaturation" in cB,
            get: cB => cB._highlightsSaturation,
            set: (cB, Bc) => {
              cB._highlightsSaturation = Bc
            }
          },
          metadata: uc
        }, Qc, Cc), (0, Vc.g)(null, null, Oc, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: cB => "_highlightsExposure" in cB,
            get: cB => cB._highlightsExposure,
            set: (cB, Bc) => {
              cB._highlightsExposure = Bc
            }
          },
          metadata: uc
        }, vB, Dc), (0, Vc.g)(null, null, Tc, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: cB => "_midtonesHue" in cB,
            get: cB => cB._midtonesHue,
            set: (cB, Bc) => {
              cB._midtonesHue = Bc
            }
          },
          metadata: uc
        }, Nc, Ec), (0, Vc.g)(null, null, fc, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "_midtonesDensity" in cB,
            get: cB => cB._midtonesDensity,
            set: (cB, Bc) => {
              cB._midtonesDensity = Bc
            }
          },
          metadata: uc
        }, oc, Wc), (0, Vc.g)(null, null, mB, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: cB => "_midtonesSaturation" in cB,
            get: cB => cB._midtonesSaturation,
            set: (cB, Bc) => {
              cB._midtonesSaturation = Bc
            }
          },
          metadata: uc
        }, wc, kB), (0, Vc.g)(null, null, ec, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: cB => "_midtonesExposure" in cB,
            get: cB => cB._midtonesExposure,
            set: (cB, Bc) => {
              cB._midtonesExposure = Bc
            }
          },
          metadata: uc
        }, Xc, Hc), uc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uc
        })
      })(), cB.PrepareUniforms = aB.b, cB
    })();

    function Yc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      cB._bind(Bc, nc, Vc, Ic)
    }
    var Lc = nc(37992),
      gB = nc(38175),
      Uc = nc(35799);
    let bB = (() => {
        var cB;
        let Bc, nc, Pc, fc, mB, ec, Sc, aB, Uc, bB, Zc, Qc, Cc, vB, Dc, Nc, Ec, oc, Wc, wc, kB, Xc, Hc, Fc, Jc, jB, Rc, iB, Kc = [],
          xB = [],
          dc = [],
          Ac = [],
          Gc = [],
          cn = [],
          BB = [],
          nB = [],
          VB = [],
          IB = [],
          rn = [],
          uB = [],
          sB = [],
          MB = [],
          PB = [],
          qn = [],
          OB = [],
          TB = [],
          fB = [],
          mn = [],
          eB = [],
          tn = [],
          SB = [],
          yn = [],
          zn = [],
          pB = [],
          hB = [],
          an = [],
          lB = [],
          YB = [],
          LB = [],
          gn = [],
          UB = [],
          bn = [],
          ZB = [],
          QB = [],
          CB = [],
          vn = [],
          DB = [],
          NB = [],
          EB = [],
          oB = [],
          WB = [],
          wB = [],
          kn = [],
          XB = [],
          HB = [],
          FB = [],
          JB = [],
          jn = [],
          RB = [],
          KB = [],
          xn = [],
          dB = [],
          AB = [],
          GB = [];
        return cB = class {
          constructor() {
            this.colorCurves = (0, Vc.k)(this, Kc, new lc), this._colorCurvesEnabled = ((0, Vc.k)(this, xB), (0, Vc.k)(this, dc, !1)), this._colorGradingTexture = ((0, Vc.k)(this, Ac), (0, Vc.k)(this, Gc, void 0)), this._colorGradingEnabled = ((0, Vc.k)(this, cn), (0, Vc.k)(this, BB, !1)), this._colorGradingWithGreenDepth = ((0, Vc.k)(this, nB), (0, Vc.k)(this, VB, !0)), this._colorGradingBGR = ((0, Vc.k)(this, IB), (0, Vc.k)(this, rn, !0)), this._exposure = ((0, Vc.k)(this, uB), (0, Vc.k)(this, sB, 1)), this._toneMappingEnabled = ((0, Vc.k)(this, MB), (0, Vc.k)(this, PB, !1)), this._toneMappingType = ((0, Vc.k)(this, qn), (0, Vc.k)(this, OB, cB.TONEMAPPING_STANDARD)), this._contrast = ((0, Vc.k)(this, TB), (0, Vc.k)(this, fB, 1)), this._whiteBalanceEnabled = ((0, Vc.k)(this, mn), (0, Vc.k)(this, eB, !1)), this._temperature = ((0, Vc.k)(this, tn), (0, Vc.k)(this, SB, 6500)), this._tint = ((0, Vc.k)(this, yn), (0, Vc.k)(this, zn, 0)), this._whiteBalanceMatrix = ((0, Vc.k)(this, pB), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Vc.k)(this, hB, 0), this.vignetteCenterX = ((0, Vc.k)(this, an), (0, Vc.k)(this, lB, 0)), this.vignetteCenterY = ((0, Vc.k)(this, YB), (0, Vc.k)(this, LB, 0)), this.vignetteWeight = ((0, Vc.k)(this, gn), (0, Vc.k)(this, UB, 1.5)), this.vignetteColor = ((0, Vc.k)(this, bn), (0, Vc.k)(this, ZB, new uc.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Vc.k)(this, QB), (0, Vc.k)(this, CB, .5)), this._vignetteBlendMode = ((0, Vc.k)(this, vn), (0, Vc.k)(this, DB, cB.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Vc.k)(this, NB), (0, Vc.k)(this, EB, !1)), this._ditheringEnabled = ((0, Vc.k)(this, oB), (0, Vc.k)(this, WB, !1)), this._ditheringIntensity = ((0, Vc.k)(this, wB), (0, Vc.k)(this, kn, 1 / 255)), this._skipFinalColorClamp = ((0, Vc.k)(this, XB), (0, Vc.k)(this, HB, !1)), this._applyByPostProcess = ((0, Vc.k)(this, FB), (0, Vc.k)(this, JB, !1)), this._isEnabled = ((0, Vc.k)(this, jn), (0, Vc.k)(this, RB, !0)), this.outputTextureWidth = ((0, Vc.k)(this, KB), (0, Vc.k)(this, xn, 0)), this.outputTextureHeight = ((0, Vc.k)(this, dB), (0, Vc.k)(this, AB, 0)), this.onUpdateParameters = ((0, Vc.k)(this, GB), new rB.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(cB) {
            this._colorCurvesEnabled !== cB && (this._colorCurvesEnabled = cB, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(cB) {
            this._colorGradingTexture !== cB && (this._colorGradingTexture = cB, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(cB) {
            this._colorGradingEnabled !== cB && (this._colorGradingEnabled = cB, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(cB) {
            this._colorGradingWithGreenDepth !== cB && (this._colorGradingWithGreenDepth = cB, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(cB) {
            this._colorGradingBGR !== cB && (this._colorGradingBGR = cB, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(cB) {
            this._exposure !== cB && (this._exposure = cB, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(cB) {
            this._toneMappingEnabled !== cB && (this._toneMappingEnabled = cB, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(cB) {
            this._toneMappingType !== cB && (this._toneMappingType = cB, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(cB) {
            this._contrast !== cB && (this._contrast = cB, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(cB) {
            this._whiteBalanceEnabled !== cB && (this._whiteBalanceEnabled = cB, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(cB) {
            cB = Number.isNaN(cB) ? qB : Math.max(cB, qB), this._temperature !== cB && (this._temperature = cB, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(cB) {
            cB = (0, sc.Clamp)(cB, -150, Oc), this._tint !== cB && (this._tint = cB, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(cB, Bc) {
              const nc = tB(Tc(cB, Bc), pc),
                Vc = yB.multiply(nc).multiply(zB);
              return Mc.d.GetAsMatrix3x3(Vc)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(cB) {
            this.vignetteCenterY = cB
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(cB) {
            this.vignetteCenterX = cB
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(cB) {
            this._vignetteBlendMode !== cB && (this._vignetteBlendMode = cB, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(cB) {
            this._vignetteEnabled !== cB && (this._vignetteEnabled = cB, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(cB) {
            this._ditheringEnabled !== cB && (this._ditheringEnabled = cB, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(cB) {
            this._ditheringIntensity !== cB && (this._ditheringIntensity = cB, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(cB) {
            this._skipFinalColorClamp !== cB && (this._skipFinalColorClamp = cB, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(cB) {
            this._applyByPostProcess !== cB && (this._applyByPostProcess = cB, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(cB) {
            this._isEnabled !== cB && (this._isEnabled = cB, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(Bc) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return Bc.WHITEBALANCE = !1, Bc.VIGNETTE = !1, Bc.TONEMAPPING = 0, Bc.CONTRAST = !1, Bc.EXPOSURE = !1, Bc.COLORCURVES = !1, Bc.COLORGRADING = !1, Bc.COLORGRADING3D = !1, Bc.DITHER = !1, Bc.IMAGEPROCESSING = !1, Bc.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(Bc.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (Bc.WHITEBALANCE = this._whiteBalanceEnabled, Bc.VIGNETTE = this.vignetteEnabled, Bc.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === cB._VIGNETTEMODE_MULTIPLY, Bc.VIGNETTEBLENDMODEOPAQUE = !Bc.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case cB.TONEMAPPING_KHR_PBR_NEUTRAL:
                Bc.TONEMAPPING = 3;
                break;
              case cB.TONEMAPPING_ACES:
                Bc.TONEMAPPING = 2;
                break;
              default:
                Bc.TONEMAPPING = 1
            } else Bc.TONEMAPPING = 0;
            Bc.CONTRAST = 1 !== this.contrast, Bc.EXPOSURE = 1 !== this.exposure, Bc.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, Bc.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, Bc.COLORGRADING ? Bc.COLORGRADING3D = this.colorGradingTexture.is3D : Bc.COLORGRADING3D = !1, Bc.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, Bc.SAMPLER3DBGRMAP = this.colorGradingBGR, Bc.DITHER = this._ditheringEnabled, Bc.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, Bc.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, Bc.IMAGEPROCESSING = Bc.WHITEBALANCE || Bc.VIGNETTE || !!Bc.TONEMAPPING || Bc.CONTRAST || Bc.EXPOSURE || Bc.COLORCURVES || Bc.COLORGRADING || Bc.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(cB, Bc) {
            if (this._whiteBalanceEnabled && cB.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && Yc(this.colorCurves, cB), this._vignetteEnabled || this._ditheringEnabled) {
              const nc = 1 / (this.outputTextureWidth || cB.RV().getRenderWidth()),
                Vc = 1 / (this.outputTextureHeight || cB.RV().getRenderHeight());
              if (cB.setFloat2("vInverseScreenSize", nc, Vc), this._ditheringEnabled && cB.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Ic = null != Bc ? Bc : Vc / nc;
                let rB = Math.tan(.5 * this.vignetteCameraFov),
                  uc = rB * Ic;
                const sc = Math.sqrt(uc * rB);
                uc = (0, Lc.h)(uc, sc, this.vignetteStretch), rB = (0, Lc.h)(rB, sc, this.vignetteStretch), cB.setFloat4("vignetteSettings1", uc, rB, -uc * this.vignetteCenterX, -rB * this.vignetteCenterY);
                const Mc = -2 * this.vignetteWeight;
                cB.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, Mc)
              }
            }
            if (cB.setFloat("exposureLinear", this.exposure), cB.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              cB.setTexture("txColorTransform", this.colorGradingTexture);
              const Bc = this.colorGradingTexture.getSize().height;
              cB.setFloat4("colorTransformSettings", (Bc - 1) / Bc, .5 / Bc, Bc, this.colorGradingTexture.level)
            }
          }
          clone() {
            return hc.e.Clone((() => new cB), this)
          }
          serialize() {
            return hc.e.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bc = [(0, Ic.k)()], nc = [(0, Ic.M)()], Pc = [(0, Ic.F)("colorGradingTexture")], fc = [(0, Ic.M)()], mB = [(0, Ic.M)()], ec = [(0, Ic.M)()], Sc = [(0, Ic.M)()], aB = [(0, Ic.M)()], Uc = [(0, Ic.M)()], bB = [(0, Ic.M)()], Zc = [(0, Ic.M)()], Qc = [(0, Ic.M)()], Cc = [(0, Ic.M)()], vB = [(0, Ic.M)()], Dc = [(0, Ic.M)()], Nc = [(0, Ic.M)()], Ec = [(0, Ic.M)()], oc = [(0, Ic.q)()], Wc = [(0, Ic.M)()], wc = [(0, Ic.M)()], kB = [(0, Ic.M)()], Xc = [(0, Ic.M)()], Hc = [(0, Ic.M)()], Fc = [(0, Ic.M)()], Jc = [(0, Ic.M)()], jB = [(0, Ic.M)()], Rc = [(0, Ic.M)()], iB = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: cB => "colorCurves" in cB,
              get: cB => cB.colorCurves,
              set: (cB, Bc) => {
                cB.colorCurves = Bc
              }
            },
            metadata: rB
          }, Kc, xB), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: cB => "_colorCurvesEnabled" in cB,
              get: cB => cB._colorCurvesEnabled,
              set: (cB, Bc) => {
                cB._colorCurvesEnabled = Bc
              }
            },
            metadata: rB
          }, dc, Ac), (0, Vc.g)(null, null, Pc, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "_colorGradingTexture" in cB,
              get: cB => cB._colorGradingTexture,
              set: (cB, Bc) => {
                cB._colorGradingTexture = Bc
              }
            },
            metadata: rB
          }, Gc, cn), (0, Vc.g)(null, null, fc, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: cB => "_colorGradingEnabled" in cB,
              get: cB => cB._colorGradingEnabled,
              set: (cB, Bc) => {
                cB._colorGradingEnabled = Bc
              }
            },
            metadata: rB
          }, BB, nB), (0, Vc.g)(null, null, mB, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: cB => "_colorGradingWithGreenDepth" in cB,
              get: cB => cB._colorGradingWithGreenDepth,
              set: (cB, Bc) => {
                cB._colorGradingWithGreenDepth = Bc
              }
            },
            metadata: rB
          }, VB, IB), (0, Vc.g)(null, null, ec, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: cB => "_colorGradingBGR" in cB,
              get: cB => cB._colorGradingBGR,
              set: (cB, Bc) => {
                cB._colorGradingBGR = Bc
              }
            },
            metadata: rB
          }, rn, uB), (0, Vc.g)(null, null, Sc, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: cB => "_exposure" in cB,
              get: cB => cB._exposure,
              set: (cB, Bc) => {
                cB._exposure = Bc
              }
            },
            metadata: rB
          }, sB, MB), (0, Vc.g)(null, null, aB, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: cB => "_toneMappingEnabled" in cB,
              get: cB => cB._toneMappingEnabled,
              set: (cB, Bc) => {
                cB._toneMappingEnabled = Bc
              }
            },
            metadata: rB
          }, PB, qn), (0, Vc.g)(null, null, Uc, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: cB => "_toneMappingType" in cB,
              get: cB => cB._toneMappingType,
              set: (cB, Bc) => {
                cB._toneMappingType = Bc
              }
            },
            metadata: rB
          }, OB, TB), (0, Vc.g)(null, null, bB, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: cB => "_contrast" in cB,
              get: cB => cB._contrast,
              set: (cB, Bc) => {
                cB._contrast = Bc
              }
            },
            metadata: rB
          }, fB, mn), (0, Vc.g)(null, null, Zc, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: cB => "_whiteBalanceEnabled" in cB,
              get: cB => cB._whiteBalanceEnabled,
              set: (cB, Bc) => {
                cB._whiteBalanceEnabled = Bc
              }
            },
            metadata: rB
          }, eB, tn), (0, Vc.g)(null, null, Qc, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: cB => "_temperature" in cB,
              get: cB => cB._temperature,
              set: (cB, Bc) => {
                cB._temperature = Bc
              }
            },
            metadata: rB
          }, SB, yn), (0, Vc.g)(null, null, Cc, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: cB => "_tint" in cB,
              get: cB => cB._tint,
              set: (cB, Bc) => {
                cB._tint = Bc
              }
            },
            metadata: rB
          }, zn, pB), (0, Vc.g)(null, null, vB, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: cB => "vignetteStretch" in cB,
              get: cB => cB.vignetteStretch,
              set: (cB, Bc) => {
                cB.vignetteStretch = Bc
              }
            },
            metadata: rB
          }, hB, an), (0, Vc.g)(null, null, Dc, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: cB => "vignetteCenterX" in cB,
              get: cB => cB.vignetteCenterX,
              set: (cB, Bc) => {
                cB.vignetteCenterX = Bc
              }
            },
            metadata: rB
          }, lB, YB), (0, Vc.g)(null, null, Nc, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: cB => "vignetteCenterY" in cB,
              get: cB => cB.vignetteCenterY,
              set: (cB, Bc) => {
                cB.vignetteCenterY = Bc
              }
            },
            metadata: rB
          }, LB, gn), (0, Vc.g)(null, null, Ec, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: cB => "vignetteWeight" in cB,
              get: cB => cB.vignetteWeight,
              set: (cB, Bc) => {
                cB.vignetteWeight = Bc
              }
            },
            metadata: rB
          }, UB, bn), (0, Vc.g)(null, null, oc, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "vignetteColor" in cB,
              get: cB => cB.vignetteColor,
              set: (cB, Bc) => {
                cB.vignetteColor = Bc
              }
            },
            metadata: rB
          }, ZB, QB), (0, Vc.g)(null, null, Wc, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: cB => "vignetteCameraFov" in cB,
              get: cB => cB.vignetteCameraFov,
              set: (cB, Bc) => {
                cB.vignetteCameraFov = Bc
              }
            },
            metadata: rB
          }, CB, vn), (0, Vc.g)(null, null, wc, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: cB => "_vignetteBlendMode" in cB,
              get: cB => cB._vignetteBlendMode,
              set: (cB, Bc) => {
                cB._vignetteBlendMode = Bc
              }
            },
            metadata: rB
          }, DB, NB), (0, Vc.g)(null, null, kB, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: cB => "_vignetteEnabled" in cB,
              get: cB => cB._vignetteEnabled,
              set: (cB, Bc) => {
                cB._vignetteEnabled = Bc
              }
            },
            metadata: rB
          }, EB, oB), (0, Vc.g)(null, null, Xc, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: cB => "_ditheringEnabled" in cB,
              get: cB => cB._ditheringEnabled,
              set: (cB, Bc) => {
                cB._ditheringEnabled = Bc
              }
            },
            metadata: rB
          }, WB, wB), (0, Vc.g)(null, null, Hc, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: cB => "_ditheringIntensity" in cB,
              get: cB => cB._ditheringIntensity,
              set: (cB, Bc) => {
                cB._ditheringIntensity = Bc
              }
            },
            metadata: rB
          }, kn, XB), (0, Vc.g)(null, null, Fc, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: cB => "_skipFinalColorClamp" in cB,
              get: cB => cB._skipFinalColorClamp,
              set: (cB, Bc) => {
                cB._skipFinalColorClamp = Bc
              }
            },
            metadata: rB
          }, HB, FB), (0, Vc.g)(null, null, Jc, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: cB => "_applyByPostProcess" in cB,
              get: cB => cB._applyByPostProcess,
              set: (cB, Bc) => {
                cB._applyByPostProcess = Bc
              }
            },
            metadata: rB
          }, JB, jn), (0, Vc.g)(null, null, jB, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: cB => "_isEnabled" in cB,
              get: cB => cB._isEnabled,
              set: (cB, Bc) => {
                cB._isEnabled = Bc
              }
            },
            metadata: rB
          }, RB, KB), (0, Vc.g)(null, null, Rc, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: cB => "outputTextureWidth" in cB,
              get: cB => cB.outputTextureWidth,
              set: (cB, Bc) => {
                cB.outputTextureWidth = Bc
              }
            },
            metadata: rB
          }, xn, dB), (0, Vc.g)(null, null, iB, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: cB => "outputTextureHeight" in cB,
              get: cB => cB.outputTextureHeight,
              set: (cB, Bc) => {
                cB.outputTextureHeight = Bc
              }
            },
            metadata: rB
          }, AB, GB), rB && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rB
          })
        })(), cB.TONEMAPPING_STANDARD = 0, cB.TONEMAPPING_ACES = 1, cB.TONEMAPPING_KHR_PBR_NEUTRAL = 2, cB.PrepareUniforms = gB.e, cB.PrepareSamplers = gB.c, cB._VIGNETTEMODE_MULTIPLY = 0, cB._VIGNETTEMODE_OPAQUE = 1, cB
      })(),
      Zc = !1;

    function Qc(cB) {
      const Bc = hc.e.Parse((() => new bB), cB, null, null);
      return void 0 !== cB.vignetteCentreX && (Bc.vignetteCenterX = cB.vignetteCentreX), void 0 !== cB.vignetteCentreY && (Bc.vignetteCenterY = cB.vignetteCentreY), Bc
    }

    function Cc() {
      Zc || (Zc = !0, bB.Parse = Qc, hc.e._ImageProcessingConfigurationParser = Qc, (0, Uc.d)("BABYLON.ImageProcessingConfiguration", bB))
    }
  },
  38182: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(37191),
      Ic = nc(38146);
    class rB {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 ? arguments[3] : void 0,
          Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          rB = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = cB, this._noUBO = !cB.supportsUniformBuffers || Ic, this._dynamic = nc, this._name = Vc ?? "no-name", this._data = Bc || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === rB && this._engine._features.trackUbosInFrame || !0 === rB) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.Buc = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.Buc = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
      }
      get useUbo() {
        return !this._noUBO
      }
      get isSync() {
        return !this._needSync
      }
      isDynamic() {
        return this._dynamic
      }
      getData() {
        return this._bufferData
      }
      getBuffer() {
        return this._buffer
      }
      getUniformNames() {
        return this._uniformNames
      }
      _fillAlignment(cB) {
        let Bc;
        if (Bc = cB <= 2 ? cB : 4, this._uniformLocationPointer % Bc !== 0) {
          const cB = this._uniformLocationPointer;
          this._uniformLocationPointer += Bc - this._uniformLocationPointer % Bc;
          const nc = this._uniformLocationPointer - cB;
          for (let Bc = 0; Bc < nc; Bc++) this._data.push(0)
        }
      }
      addUniform(cB, Bc) {
        let nc, Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Vc > 0 && "number" === typeof Bc && (this._uniformArraySizes[cB] = {
            strideSize: Bc,
            arraySize: Vc
          }), void 0 === this._uniformLocations[cB] && (this._uniformNames.push(cB), !this._noUBO)) {
          if (Vc > 0) {
            if (Bc instanceof Array) throw "addUniform should not be use with Array in UBO: " + cB;
            if (this._fillAlignment(4), 16 == Bc) Bc *= Vc;
            else {
              Bc = Bc * Vc + (4 - Bc) * Vc
            }
            nc = [];
            for (let cB = 0; cB < Bc; cB++) nc.push(0)
          } else {
            if (Bc instanceof Array) nc = Bc, Bc = nc.length;
            else {
              nc = [];
              for (let cB = 0; cB < Bc; cB++) nc.push(0)
            }
            this._fillAlignment(Bc)
          }
          this._uniformSizes[cB] = Bc, this._uniformLocations[cB] = this._uniformLocationPointer, this._uniformLocationPointer += Bc;
          for (let cB = 0; cB < Bc; cB++) this._data.push(nc[cB]);
          this._needSync = !0
        }
      }
      addMatrix(cB, Bc) {
        this.addUniform(cB, Array.prototype.slice.call(Bc.KPc()))
      }
      addFloat2(cB, Bc, nc) {
        const Vc = [Bc, nc];
        this.addUniform(cB, Vc)
      }
      addFloat3(cB, Bc, nc, Vc) {
        const Ic = [Bc, nc, Vc];
        this.addUniform(cB, Ic)
      }
      addColor3(cB, Bc) {
        const nc = [Bc.r, Bc.g, Bc.b];
        this.addUniform(cB, nc)
      }
      addColor4(cB, Bc, nc) {
        const Vc = [Bc.r, Bc.g, Bc.b, nc];
        this.addUniform(cB, Vc)
      }
      addVector3(cB, Bc) {
        const nc = [Bc.x, Bc.y, Bc.z];
        this.addUniform(cB, nc)
      }
      addMatrix3x3(cB) {
        this.addUniform(cB, 12)
      }
      addMatrix2x2(cB) {
        this.addUniform(cB, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const cB = [];
        let Bc = 0;
        for (const nc in this._uniformLocations)
          if (cB.push(nc), 10 === ++Bc) break;
        return cB.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const cB of this._ownerListsBySlot.values()) this._removeOwnerBacklink(cB);
        this._ownerListsBySlot = new Map, this._slotByOwner = new WeakMap, this._slotFrameId = [], this._ownerCount = 0, this._freeSlots = [], this._slotGeneration = []
      }
      get _numBuffers() {
        return this._buffers.length
      }
      get _indexBuffer() {
        return this._bufferIndex
      }
      get name() {
        return this._name
      }
      set name(cB) {
        this._name = cB
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(cB, Bc) {
        for (let nc = 0; nc < cB.length; ++nc)
          if (cB[nc] !== Bc[nc]) return !1;
        return !0
      }
      _copyBuffer(cB, Bc) {
        for (let nc = 0; nc < cB.length; ++nc) Bc[nc] = cB[nc]
      }
      update() {
        if (!this._noUBO)
          if (this.bindUniformBuffer(), this._buffer)
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
              }
              this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
            } else this._createBufferOnWrite = this._trackUBOsInFrame;
        else this.create()
      }
      _updateOwnerKeyed(cB) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let Bc = this._slotByOwner.get(cB);
        if (void 0 === Bc && (Bc = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(cB, Bc), this._ownerCount++, cB._uniformBuffersWithOwnedSlot || (cB._uniformBuffersWithOwnedSlot = []), cB._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(Bc, cB._uniformBuffersWithOwnedSlot)), this._slotGeneration[Bc] === this._dataGeneration) return this._bufferIndex = Bc, this._buffer = this._buffers[Bc][0], this.bindUniformBuffer(), this._slotFrameId[Bc] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const nc = this._buffers[Bc][1];
        this._slotFrameId[Bc] === this._currentFrameId && nc && !this._buffersEqual(this._bufferData, nc) && (Bc = this._takeFreeSlot(!1)), this._bufferIndex = Bc, this._buffer = this._buffers[Bc][0], this.bindUniformBuffer();
        const Vc = this._buffers[Bc][1];
        Vc && this._buffersEqual(this._bufferData, Vc) || (Vc && this._copyBuffer(this._bufferData, Vc), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[Bc] = this._currentFrameId, this._slotGeneration[Bc] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(cB) {
        for (let nc = 0; nc < this._freeSlots.length; ++nc) {
          const Bc = this._freeSlots[nc];
          if (this._slotFrameId[Bc] !== this._currentFrameId) return cB && (this._freeSlots[nc] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), Bc
        }
        this._rebuild();
        const Bc = this._buffers.length - 1;
        return cB || this._freeSlots.push(Bc), Bc
      }
      _releaseOwnerSlot(cB) {
        const Bc = this._slotByOwner?.get(cB);
        if (void 0 === Bc) return;
        this._slotByOwner.delete(cB);
        const nc = this._ownerListsBySlot.get(Bc);
        nc && (this._removeOwnerBacklink(nc), this._ownerListsBySlot.delete(Bc)), this._ownerCount--, this._freeSlots.push(Bc)
      }
      _removeOwnerBacklink(cB) {
        const Bc = cB.indexOf(this); - 1 !== Bc && (cB[Bc] = cB[cB.length - 1], cB.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(cB, Bc, nc) {
        this._checkNewFrame();
        let Ic = this._uniformLocations[cB];
        if (void 0 === Ic) {
          if (this._buffer) return void Vc.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + cB);
          this.addUniform(cB, nc), Ic = this._uniformLocations[cB]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let cB = 0; cB < nc; cB++) this._bufferData[Ic + cB] = Bc[cB];
          this._dataGeneration++
        } else {
          let cB = !1;
          for (let Vc = 0; Vc < nc; Vc++)(16 === nc && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Ic + Vc] !== Math.fround(Bc[Vc])) && (cB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Ic + Vc] = Bc[Vc]);
          this._needSync = this._needSync || cB, cB && this._dataGeneration++
        }
      }
      updateUniformArray(cB, Bc, nc) {
        this._checkNewFrame();
        const rB = this._uniformLocations[cB];
        if (void 0 === rB) return void Vc.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const uc = this._uniformArraySizes[cB];
        if (this._dynamic) {
          for (let cB = 0; cB < nc; cB++) this._bufferData[rB + cB] = Bc[cB];
          this._dataGeneration++
        } else {
          let cB = !1,
            Vc = 0,
            sc = 0;
          for (let Mc = 0; Mc < nc; Mc++)
            if (this._bufferData[rB + 4 * sc + Vc] !== Ic.g.FloatRound(Bc[Mc]) && (cB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[rB + 4 * sc + Vc] = Bc[Mc]), Vc++, Vc === uc.strideSize) {
              for (; Vc < 4; Vc++) this._bufferData[rB + 4 * sc + Vc] = 0;
              Vc = 0, sc++
            } this._needSync = this._needSync || cB, cB && this._dataGeneration++
        }
      }
      _cacheMatrix(cB, Bc) {
        this._checkNewFrame();
        const nc = this._valueCache[cB],
          Vc = Bc.updateFlag;
        return (void 0 === nc || nc !== Vc) && (this._valueCache[cB] = Vc, !0)
      }
      _updateMatrix3x3ForUniform(cB, Bc) {
        for (let nc = 0; nc < 3; nc++) rB._TempBuffer[4 * nc] = Bc[3 * nc], rB._TempBuffer[4 * nc + 1] = Bc[3 * nc + 1], rB._TempBuffer[4 * nc + 2] = Bc[3 * nc + 2], rB._TempBuffer[4 * nc + 3] = 0;
        this.updateUniform(cB, rB._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(cB, Bc) {
        this._currentEffect.setMatrix3x3(cB, Bc)
      }
      _updateMatrix2x2ForEffect(cB, Bc) {
        this._currentEffect.setMatrix2x2(cB, Bc)
      }
      _updateMatrix2x2ForUniform(cB, Bc) {
        for (let nc = 0; nc < 2; nc++) rB._TempBuffer[4 * nc] = Bc[2 * nc], rB._TempBuffer[4 * nc + 1] = Bc[2 * nc + 1], rB._TempBuffer[4 * nc + 2] = 0, rB._TempBuffer[4 * nc + 3] = 0;
        this.updateUniform(cB, rB._TempBuffer, 8)
      }
      _updateFloatForEffect(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(cB + nc, Bc)
      }
      _updateFloatForUniform(cB, Bc) {
        rB._TempBuffer[0] = Bc, this.updateUniform(cB, rB._TempBuffer, 1)
      }
      _updateFloat2ForEffect(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(cB + Vc, Bc, nc)
      }
      _updateFloat2ForUniform(cB, Bc, nc) {
        rB._TempBuffer[0] = Bc, rB._TempBuffer[1] = nc, this.updateUniform(cB, rB._TempBuffer, 2)
      }
      _updateFloat3ForEffect(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(cB + Ic, Bc, nc, Vc)
      }
      _updateFloat3ForUniform(cB, Bc, nc, Vc) {
        rB._TempBuffer[0] = Bc, rB._TempBuffer[1] = nc, rB._TempBuffer[2] = Vc, this.updateUniform(cB, rB._TempBuffer, 3)
      }
      _updateFloat4ForEffect(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(cB + rB, Bc, nc, Vc, Ic)
      }
      _updateFloat4ForUniform(cB, Bc, nc, Vc, Ic) {
        rB._TempBuffer[0] = Bc, rB._TempBuffer[1] = nc, rB._TempBuffer[2] = Vc, rB._TempBuffer[3] = Ic, this.updateUniform(cB, rB._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[cB]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(cB + nc, Bc);
            break;
          case 3:
            this._currentEffect.setFloatArray3(cB + nc, Bc);
            break;
          case 4:
            this._currentEffect.setFloatArray4(cB + nc, Bc);
            break;
          default:
            this._currentEffect.setFloatArray(cB + nc, Bc)
        }
      }
      _updateFloatArrayForUniform(cB, Bc) {
        this.updateUniformArray(cB, Bc, Bc.length)
      }
      _updateArrayForEffect(cB, Bc) {
        this._currentEffect.setArray(cB, Bc)
      }
      _updateArrayForUniform(cB, Bc) {
        this.updateUniformArray(cB, Bc, Bc.length)
      }
      _updateIntArrayForEffect(cB, Bc) {
        this._currentEffect.setIntArray(cB, Bc)
      }
      _updateIntArrayForUniform(cB, Bc) {
        rB._TempBufferInt32View.set(Bc), this.updateUniformArray(cB, rB._TempBuffer, Bc.length)
      }
      _updateUIntArrayForEffect(cB, Bc) {
        this._currentEffect.setUIntArray(cB, Bc)
      }
      _updateUIntArrayForUniform(cB, Bc) {
        rB._TempBufferUInt32View.set(Bc), this.updateUniformArray(cB, rB._TempBuffer, Bc.length)
      }
      _updateMatrixForEffect(cB, Bc) {
        this._currentEffect.setMatrix(cB, Bc)
      }
      _updateMatrixForUniform(cB, Bc) {
        this._cacheMatrix(cB, Bc) && this.updateUniform(cB, Bc.KPc(), 16)
      }
      _updateMatricesForEffect(cB, Bc) {
        this._currentEffect.setMatrices(cB, Bc)
      }
      _updateMatricesForUniform(cB, Bc) {
        this.updateUniform(cB, Bc, Bc.length)
      }
      _updateVector3ForEffect(cB, Bc) {
        this._currentEffect.setVector3(cB, Bc)
      }
      _updateVector3ForUniform(cB, Bc) {
        rB._TempBuffer[0] = Bc.x, rB._TempBuffer[1] = Bc.y, rB._TempBuffer[2] = Bc.z, this.updateUniform(cB, rB._TempBuffer, 3)
      }
      _updateVector4ForEffect(cB, Bc) {
        this._currentEffect.setVector4(cB, Bc)
      }
      _updateVector4ForUniform(cB, Bc) {
        rB._TempBuffer[0] = Bc.x, rB._TempBuffer[1] = Bc.y, rB._TempBuffer[2] = Bc.z, rB._TempBuffer[3] = Bc.w, this.updateUniform(cB, rB._TempBuffer, 4)
      }
      _updateColor3ForEffect(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(cB + nc, Bc)
      }
      _updateColor3ForUniform(cB, Bc) {
        rB._TempBuffer[0] = Bc.r, rB._TempBuffer[1] = Bc.g, rB._TempBuffer[2] = Bc.b, this.updateUniform(cB, rB._TempBuffer, 3)
      }
      _updateColor4ForEffect(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(cB + Vc, Bc, nc)
      }
      _updateDirectColor4ForEffect(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(cB + nc, Bc)
      }
      _updateColor4ForUniform(cB, Bc, nc) {
        rB._TempBuffer[0] = Bc.r, rB._TempBuffer[1] = Bc.g, rB._TempBuffer[2] = Bc.b, rB._TempBuffer[3] = nc, this.updateUniform(cB, rB._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(cB, Bc) {
        rB._TempBuffer[0] = Bc.r, rB._TempBuffer[1] = Bc.g, rB._TempBuffer[2] = Bc.b, rB._TempBuffer[3] = Bc.a, this.updateUniform(cB, rB._TempBuffer, 4)
      }
      _updateIntForEffect(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(cB + nc, Bc)
      }
      _updateIntForUniform(cB, Bc) {
        rB._TempBufferInt32View[0] = Bc, this.updateUniform(cB, rB._TempBuffer, 1)
      }
      _updateInt2ForEffect(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(cB + Vc, Bc, nc)
      }
      _updateInt2ForUniform(cB, Bc, nc) {
        rB._TempBufferInt32View[0] = Bc, rB._TempBufferInt32View[1] = nc, this.updateUniform(cB, rB._TempBuffer, 2)
      }
      _updateInt3ForEffect(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(cB + Ic, Bc, nc, Vc)
      }
      _updateInt3ForUniform(cB, Bc, nc, Vc) {
        rB._TempBufferInt32View[0] = Bc, rB._TempBufferInt32View[1] = nc, rB._TempBufferInt32View[2] = Vc, this.updateUniform(cB, rB._TempBuffer, 3)
      }
      _updateInt4ForEffect(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(cB + rB, Bc, nc, Vc, Ic)
      }
      _updateInt4ForUniform(cB, Bc, nc, Vc, Ic) {
        rB._TempBufferInt32View[0] = Bc, rB._TempBufferInt32View[1] = nc, rB._TempBufferInt32View[2] = Vc, rB._TempBufferInt32View[3] = Ic, this.updateUniform(cB, rB._TempBuffer, 4)
      }
      _updateUIntForEffect(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(cB + nc, Bc)
      }
      _updateUIntForUniform(cB, Bc) {
        rB._TempBufferUInt32View[0] = Bc, this.updateUniform(cB, rB._TempBuffer, 1)
      }
      _updateUInt2ForEffect(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(cB + Vc, Bc, nc)
      }
      _updateUInt2ForUniform(cB, Bc, nc) {
        rB._TempBufferUInt32View[0] = Bc, rB._TempBufferUInt32View[1] = nc, this.updateUniform(cB, rB._TempBuffer, 2)
      }
      _updateUInt3ForEffect(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(cB + Ic, Bc, nc, Vc)
      }
      _updateUInt3ForUniform(cB, Bc, nc, Vc) {
        rB._TempBufferUInt32View[0] = Bc, rB._TempBufferUInt32View[1] = nc, rB._TempBufferUInt32View[2] = Vc, this.updateUniform(cB, rB._TempBuffer, 3)
      }
      _updateUInt4ForEffect(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(cB + rB, Bc, nc, Vc, Ic)
      }
      _updateUInt4ForUniform(cB, Bc, nc, Vc, Ic) {
        rB._TempBufferUInt32View[0] = Bc, rB._TempBufferUInt32View[1] = nc, rB._TempBufferUInt32View[2] = Vc, rB._TempBufferUInt32View[3] = Ic, this.updateUniform(cB, rB._TempBuffer, 4)
      }
      setTexture(cB, Bc) {
        this._currentEffect.setTexture(cB, Bc)
      }
      setTextureArray(cB, Bc) {
        this._currentEffect.setTextureArray(cB, Bc)
      }
      bindTexture(cB, Bc) {
        this._currentEffect._bindTexture(cB, Bc)
      }
      updateUniformDirectly(cB, Bc) {
        this.updateUniform(cB, Bc, Bc.length), this.update()
      }
      bindToEffect(cB, Bc) {
        this._currentEffect = cB, this._currentEffectName = Bc
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(cB) {
        if (!this._buffers) return this._buffer === cB;
        for (let Bc = 0; Bc < this._buffers.length; ++Bc) {
          if (this._buffers[Bc][0] === cB) return this._bufferIndex = Bc, this._buffer = cB, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[Bc][1] && (this._bufferData.set(this._buffers[Bc][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(cB) {
        return void 0 !== this._uniformLocations[cB]
      }
      dispose() {
        if (this._noUBO) return;
        const cB = this._engine._uniformBuffers,
          Bc = cB.indexOf(this);
        if (-1 !== Bc && (cB[Bc] = cB[cB.length - 1], cB.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let cB = 0; cB < this._buffers.length; ++cB) {
            const Bc = this._buffers[cB][0];
            this._engine._releaseBuffer(Bc)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    rB._MAX_UNIFORM_SIZE = 256, rB._TempBuffer = new Float32Array(rB._MAX_UNIFORM_SIZE), rB._TempBufferInt32View = new Int32Array(rB._TempBuffer.buffer), rB._TempBufferUInt32View = new Uint32Array(rB._TempBuffer.buffer)
  },
  37983: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    var Vc = nc(37985);
    class Ic extends Vc.e {
      constructor(cB) {
        super(), this._buffer = cB
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  38052: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Mc,
      g: () => Pc
    });
    const Vc = "__bjs_serializable__",
      Ic = new WeakMap;

    function rB(cB, Bc) {
      return Object.prototype.hasOwnProperty.call(cB, Bc)
    }
    const uc = function() {
      let cB = Symbol.metadata;
      return cB || (cB = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: cB
      })), cB
    }();

    function sc(cB) {
      return "function" === typeof cB ? cB : cB?.constructor
    }

    function Mc(cB) {
      if (!cB) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(uc)}) polyfill must run before decorated classes are evaluated.`);
      return rB(cB, Vc) || (cB[Vc] = {}), cB[Vc]
    }

    function Pc(cB) {
      const Bc = sc(cB),
        nc = Bc ? Bc[uc] : void 0;
      if (!nc) return {};
      const Mc = Ic.get(nc);
      if (Mc) return Mc;
      const Pc = {},
        qB = [];
      let Oc = nc;
      for (; Oc;) qB.push(Oc), Oc = Object.getPrototypeOf(Oc);
      for (const Ic of qB)
        if (rB(Ic, Vc)) {
          const cB = Ic[Vc];
          for (const Bc in cB) Pc[Bc] = cB[Bc]
        } return Ic.set(nc, Pc), Pc
    }
  },
  38043: (cB, Bc, nc) => {
    nc.d(Bc, {
      C: () => ec,
      F: () => sc,
      J: () => qB,
      L: () => Oc,
      M: () => uc,
      c: () => zB,
      d: () => rB,
      g: () => yB,
      k: () => fc,
      o: () => Mc,
      q: () => mB,
      s: () => Pc,
      w: () => tB,
      z: () => Tc
    });
    var Vc = nc(38052);

    function Ic(cB, Bc) {
      return (nc, Ic) => {
        if (!Ic.metadata) return;
        const rB = String(Ic.name),
          uc = (0, Vc.d)(Ic.metadata);
        uc[rB] || (uc[rB] = {
          type: cB,
          sourceName: Bc
        })
      }
    }

    function rB(cB) {
      return function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (nc, Vc) => {
          const Ic = Bc || "_" + String(Vc.name);
          return {
            init(cB) {
              return void 0 === cB && Ic in this || (this[Ic] = cB), cB
            },
            get() {
              return this[Ic]
            },
            set(Bc) {
              "function" === typeof this[Ic]?.equals && this[Ic].equals(Bc) || this[Ic] !== Bc && (this[Ic] = Bc, this[cB]())
            }
          }
        }
      }(cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function uc(cB) {
      return Ic(0, cB)
    }

    function sc(cB) {
      return Ic(1, cB)
    }

    function Mc(cB) {
      return Ic(2, cB)
    }

    function Pc(cB) {
      return Ic(3, cB)
    }

    function qB(cB) {
      return Ic(4, cB)
    }

    function Oc(cB) {
      return Ic(5, cB)
    }

    function Tc(cB) {
      return Ic(6, cB)
    }

    function fc(cB) {
      return Ic(7, cB)
    }

    function mB(cB) {
      return Ic(8, cB)
    }

    function ec(cB) {
      return Ic(10, cB)
    }

    function tB(cB) {
      return Ic(12, cB)
    }

    function Sc(cB, Bc, nc) {
      const Vc = String(Bc.name);
      let Ic = null;
      const rB = function() {
        if (null === Ic) {
          Ic = cB, "undefined" !== typeof _native && _native[Vc] && (Ic = nc(_native[Vc], cB));
          const uc = this && (Bc.static ? this : Object.getPrototypeOf(this));
          uc?.[Vc] === rB && (uc[Vc] = Ic)
        }
        for (var uc = arguments.length, sc = new Array(uc), Mc = 0; Mc < uc; Mc++) sc[Mc] = arguments[Mc];
        return Ic.apply(this, sc)
      };
      return rB
    }

    function yB(cB, Bc) {
      return Sc(cB, Bc, (cB => cB))
    }

    function zB(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (nc, Vc) => {
        const Ic = Bc || "_" + String(Vc.name);
        return {
          get() {
            return this[Ic]?.value
          },
          set(Bc) {
            "function" === typeof this[Ic]?.value?.equals && this[Ic].value.equals(Bc) || this[Ic].value !== Bc && (this[Ic].value = Bc, this[cB]())
          }
        }
      }
    }
    yB.filter = function(cB) {
      return (Bc, nc) => Sc(Bc, nc, ((Bc, nc) => function() {
        for (var Vc = arguments.length, Ic = new Array(Vc), rB = 0; rB < Vc; rB++) Ic[rB] = arguments[rB];
        return cB(...Ic) ? Bc(...Ic) : nc.apply(this, Ic)
      }))
    }
  },
  38068: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Pc
    });
    var Vc = nc(37953),
      Ic = nc(38075),
      rB = nc(35815),
      uc = nc(35756),
      sc = nc(38052);
    const Mc = function(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const rB = cB();
      Ic.c && Ic.c.HasTags(Bc) && Ic.c.AddTagsTo(rB, Ic.c.GetTags(Bc, !0));
      const uc = (0, sc.g)(rB),
        Mc = {};
      for (const Ic in uc) {
        const cB = uc[Ic],
          sc = Bc[Ic],
          qB = cB.type;
        if (void 0 !== sc && null !== sc && ("uniqueId" !== Ic || Pc.AllowLoadingUniqueId)) switch (qB) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof sc.slice ? rB[Ic] = sc.slice() : rB[Ic] = sc;
            break;
          case 1:
            Vc.cloneTexturesOnlyOnce && Mc[sc.uniqueId] ? rB[Ic] = Mc[sc.uniqueId] : (rB[Ic] = nc || sc.isRenderTarget ? sc : sc.clone(), Mc[sc.uniqueId] = rB[Ic]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            rB[Ic] = nc ? sc : sc.clone()
        }
      }
      return rB
    };
    class Pc {
      static AppendSerializedAnimations(cB, Bc) {
        if (cB.animations) {
          Bc.animations = [];
          for (let nc = 0; nc < cB.animations.length; nc++) {
            const Vc = cB.animations[nc];
            Bc.animations.push(Vc.serialize())
          }
        }
      }
      static Serialize(cB, Bc) {
        Bc || (Bc = {}), Ic.c && (Bc.tags = Ic.c.GetTags(cB));
        const nc = (0, sc.g)(cB);
        for (const Vc in nc) {
          const Ic = nc[Vc],
            rB = Ic.sourceName || Vc,
            uc = Ic.type,
            sc = cB[Vc];
          if (void 0 !== sc && null !== sc && ("uniqueId" !== Vc || Pc.AllowLoadingUniqueId)) switch (uc) {
            case 0:
              Array.isArray(sc) ? Bc[rB] = sc.slice() : Bc[rB] = sc;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              Bc[rB] = sc.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              Bc[rB] = sc.KPc();
              break;
            case 6:
            case 11:
              Bc[rB] = sc.id
          }
        }
        return Bc
      }
      static ParseProperties(cB, Bc, nc, Vc) {
        Vc || (Vc = "");
        const Ic = (0, sc.g)(Bc);
        for (const sc in Ic) {
          const Mc = Ic[sc],
            qB = cB[Mc.sourceName || sc],
            Oc = Mc.type;
          if (void 0 !== qB && null !== qB && ("uniqueId" !== sc || Pc.AllowLoadingUniqueId)) {
            const cB = Bc;
            switch (Oc) {
              case 0:
                cB[sc] = qB;
                break;
              case 1:
                nc && (cB[sc] = Pc._TextureParser(qB, nc, Vc));
                break;
              case 2:
                cB[sc] = rB.e.FromArray(qB);
                break;
              case 3:
                cB[sc] = Pc._FresnelParametersParser(qB);
                break;
              case 4:
                cB[sc] = uc.m.FromArray(qB);
                break;
              case 5:
                cB[sc] = uc.p.FromArray(qB);
                break;
              case 6:
                nc && (cB[sc] = nc.getLastMeshById(qB));
                break;
              case 7:
                cB[sc] = Pc._ColorCurvesParser(qB);
                break;
              case 8:
                cB[sc] = rB.g.FromArray(qB);
                break;
              case 9:
                cB[sc] = Pc._ImageProcessingConfigurationParser(qB);
                break;
              case 10:
                cB[sc] = uc.f.FromArray(qB);
                break;
              case 11:
                nc && (cB[sc] = nc.getCameraById(qB));
                break;
              case 12:
                cB[sc] = uc.d.FromArray(qB);
                break;
              case 13:
                cB[sc] = uc.t.FromArray(qB)
            }
          }
        }
      }
      static Parse(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const rB = cB();
        return Ic.c && Ic.c.AddTagsTo(rB, Bc.tags), Pc.ParseProperties(Bc, rB, nc, Vc), rB
      }
      static Clone(cB, Bc) {
        return Mc(cB, Bc, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(cB, Bc) {
        return Mc(cB, Bc, !0)
      }
    }
    Pc.AllowLoadingUniqueId = !1, Pc._ImageProcessingConfigurationParser = cB => {
      throw (0, Vc.k)("ImageProcessingConfiguration")
    }, Pc._FresnelParametersParser = cB => {
      throw (0, Vc.k)("FresnelParameters")
    }, Pc._ColorCurvesParser = cB => {
      throw (0, Vc.k)("ColorCurves")
    }, Pc._TextureParser = (cB, Bc, nc) => {
      throw (0, Vc.k)("Texture")
    }
  },
  38002: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic
    });
    var Vc = nc(37968);
    class Ic {
      get min() {
        return this._min
      }
      get max() {
        return this._max
      }
      get average() {
        return this._average
      }
      get lastSecAverage() {
        return this._lastSecAverage
      }
      get current() {
        return this._current
      }
      get total() {
        return this._totalAccumulated
      }
      get count() {
        return this._totalValueCount
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Ic.Enabled, this._lastSecValueCount++
      }
      addCount(cB, Bc) {
        Ic.Enabled && (this._current += cB, this._hasCurrentValue = !0, Bc && this._fetchResult())
      }
      beginMonitoring() {
        Ic.Enabled && (this._startMonitoringTime = Vc.c.Now)
      }
      endMonitoring() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Ic.Enabled) return;
        cB && this.fetchNewFrame();
        const Bc = Vc.c.Now;
        this._current = Bc - this._startMonitoringTime, this._hasCurrentValue = !0, cB && this._fetchResult()
      }
      fC() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const cB = Vc.c.Now;
        cB - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = cB, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Ic.Enabled = !0
  },
  38158: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      e: () => Vc
    });
    class Vc {
      constructor(cB) {
        this.length = 0, this.data = new Array(cB), this._id = Vc._GlobalId++
      }
      push(cB) {
        this.data[this.length++] = cB, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(cB) {
        for (let Bc = 0; Bc < this.length; Bc++) cB(this.data[Bc])
      }
      sort(cB) {
        this.data.sort(cB)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(cB) {
        if (0 !== cB.length) {
          this.length + cB.length > this.data.length && (this.data.length = 2 * (this.length + cB.length));
          for (let Bc = 0; Bc < cB.length; Bc++) this.data[this.length++] = (cB.data || cB)[Bc]
        }
      }
      indexOf(cB) {
        const Bc = this.data.indexOf(cB);
        return Bc >= this.length ? -1 : Bc
      }
      contains(cB) {
        return -1 !== this.indexOf(cB)
      }
    }
    Vc._GlobalId = 0;
    class Ic extends Vc {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(cB) {
        super.push(cB), cB.__smartArrayFlags || (cB.__smartArrayFlags = {}), cB.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(cB) {
        return (!cB.__smartArrayFlags || cB.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(cB), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(cB) {
        if (0 !== cB.length) {
          this.length + cB.length > this.data.length && (this.data.length = 2 * (this.length + cB.length));
          for (let Bc = 0; Bc < cB.length; Bc++) {
            const nc = (cB.data || cB)[Bc];
            this.pushNoDuplicate(nc)
          }
        }
      }
    }
  },
  38075: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    class Vc {
      static Eval(cB, Bc) {
        return "true" === (cB = cB.match(/\([^()]*\)/g) ? cB.replace(/\([^()]*\)/g, (cB => (cB = cB.slice(1, cB.length - 1), Vc._HandleParenthesisContent(cB, Bc)))) : Vc._HandleParenthesisContent(cB, Bc)) || "false" !== cB && Vc.Eval(cB, Bc)
      }
      static _HandleParenthesisContent(cB, Bc) {
        let nc;
        Bc = Bc || (cB => "true" === cB);
        const Ic = cB.split("||");
        for (const rB in Ic)
          if (Object.prototype.hasOwnProperty.call(Ic, rB)) {
            let cB = Vc._SimplifyNegation(Ic[rB].trim());
            const uc = cB.split("&&");
            if (uc.length > 1)
              for (let Ic = 0; Ic < uc.length; ++Ic) {
                const rB = Vc._SimplifyNegation(uc[Ic].trim());
                if (nc = "true" !== rB && "false" !== rB ? "!" === rB[0] ? !Bc(rB.substring(1)) : Bc(rB) : "true" === rB, !nc) {
                  cB = "false";
                  break
                }
              }
            if (nc || "true" === cB) {
              nc = !0;
              break
            }
            nc = "true" !== cB && "false" !== cB ? "!" === cB[0] ? !Bc(cB.substring(1)) : Bc(cB) : "true" === cB
          } return nc ? "true" : "false"
      }
      static _SimplifyNegation(cB) {
        return "!true" === (cB = (cB = cB.replace(/^[\s!]+/, (cB => (cB = cB.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? cB = "false" : "!false" === cB && (cB = "true"), cB
      }
    }
    class Ic {
      static EnableFor(cB) {
        cB._tags = cB._tags || {}, cB.hasTags = () => Ic.HasTags(cB), cB.addTags = Bc => Ic.AddTagsTo(cB, Bc), cB.removeTags = Bc => Ic.RemoveTagsFrom(cB, Bc), cB.matchesTagsQuery = Bc => Ic.MatchesQuery(cB, Bc)
      }
      static DisableFor(cB) {
        delete cB._tags, delete cB.hasTags, delete cB.addTags, delete cB.removeTags, delete cB.matchesTagsQuery
      }
      static HasTags(cB) {
        if (!cB._tags) return !1;
        const Bc = cB._tags;
        for (const nc in Bc)
          if (Object.prototype.hasOwnProperty.call(Bc, nc)) return !0;
        return !1
      }
      static GetTags(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!cB._tags) return null;
        if (Bc) {
          const Bc = [];
          for (const nc in cB._tags) Object.prototype.hasOwnProperty.call(cB._tags, nc) && !0 === cB._tags[nc] && Bc.push(nc);
          return Bc.join(" ")
        }
        return cB._tags
      }
      static AddTagsTo(cB, Bc) {
        if (!Bc) return;
        if ("string" !== typeof Bc) return;
        const nc = Bc.split(" ");
        for (const Vc of nc) Ic._AddTagTo(cB, Vc)
      }
      static _AddTagTo(cB, Bc) {
        "" !== (Bc = Bc.trim()) && "true" !== Bc && "false" !== Bc && (Bc.match(/[\s]/) || Bc.match(/^([!]|([|]|[&]){2})/) || (Ic.EnableFor(cB), cB._tags[Bc] = !0))
      }
      static RemoveTagsFrom(cB, Bc) {
        if (!Ic.HasTags(cB)) return;
        const nc = Bc.split(" ");
        for (const Vc in nc) Ic._RemoveTagFrom(cB, nc[Vc])
      }
      static _RemoveTagFrom(cB, Bc) {
        delete cB._tags[Bc]
      }
      static MatchesQuery(cB, Bc) {
        return void 0 === Bc || ("" === Bc ? Ic.HasTags(cB) : Vc.Eval(Bc, (Bc => Ic.HasTags(cB) && cB._tags[Bc])))
      }
    }
  },
  38197: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB
    });
    var Vc = nc(38194),
      Ic = nc(35783);
    class rB {
      constructor(cB) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Ic.c, this._scene = cB
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Vc.i.PositionKind]) return;
        const cB = [];
        cB.push(1, 1), cB.push(-1, 1), cB.push(-1, -1), cB.push(1, -1), this._vertexBuffers[Vc.i.PositionKind] = new Vc.i(this._scene.RV(), cB, Vc.i.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const cB = [];
        cB.push(0), cB.push(1), cB.push(2), cB.push(0), cB.push(2), cB.push(3), this._indexBuffer = this._scene.RV().createIndexBuffer(cB)
      }
      _getActivePostProcesses(cB) {
        const Bc = this._activePostProcesses;
        Bc.length = 0;
        for (let nc = 0; nc < cB.length; nc++) {
          const Vc = cB[nc];
          Vc && Bc.push(Vc)
        }
        return Bc
      }
      _rebuild() {
        const cB = this._vertexBuffers[Vc.i.PositionKind];
        cB && (cB._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const nc = this._scene.activeCamera;
        return !!nc && (Bc = Bc || this._getActivePostProcesses(nc._postProcesses), !(!Bc || 0 === Bc.length || !this._scene.postProcessesEnabled) && (Bc[0].activate(nc, cB, null !== Bc && void 0 !== Bc), !0))
      }
      directRender(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : cB.length;
        const sc = this._scene.RV();
        for (let Mc = 0; Mc < uc; Mc++) {
          Mc < cB.length - 1 ? cB[Mc + 1].activate(this._scene.activeCamera || this._scene, Bc?.texture) : (Bc ? sc.bindFramebuffer(Bc, Vc, void 0, void 0, nc, Ic) : rB || sc.restoreDefaultFramebuffer(), sc._debugInsertMarker?.(`post process ${cB[Mc].name} output`));
          const uc = cB[Mc],
            Pc = uc.apply();
          Pc && (uc.onBeforeRenderObservable.notifyObservers(Pc), this._prepareBuffers(), sc.bindBuffers(this._vertexBuffers, this._indexBuffer, Pc), sc.drawElementsType(0, 0, 6), uc.onAfterRenderObservable.notifyObservers(Pc))
        }
        sc.setDepthBuffer(!0), sc.setDepthWrite(!0)
      }
      _finalizeFrame(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const rB = this._scene.activeCamera;
        if (!rB) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Vc = Vc || this._getActivePostProcesses(rB._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const uc = this._scene.RV();
        for (let sc = 0, Mc = Vc.length; sc < Mc; sc++) {
          const Pc = Vc[sc];
          if (sc < Mc - 1 ? Pc._outputTexture = Vc[sc + 1].activate(rB, Bc?.texture) : (Bc ? (uc.bindFramebuffer(Bc, nc, void 0, void 0, Ic), Pc._outputTexture = Bc) : (uc.restoreDefaultFramebuffer(), Pc._outputTexture = null), uc._debugInsertMarker?.(`post process ${Vc[sc].name} output`)), cB) break;
          const qB = Pc.apply();
          qB && (Pc.onBeforeRenderObservable.notifyObservers(qB), this._prepareBuffers(), uc.bindBuffers(this._vertexBuffers, this._indexBuffer, qB), uc.drawElementsType(0, 0, 6), Pc.onAfterRenderObservable.notifyObservers(qB))
        }
        uc.setDepthBuffer(!0), uc.setDepthWrite(!0), uc.setAlphaMode(0)
      }
      dispose() {
        const cB = this._vertexBuffers[Vc.i.PositionKind];
        cB && (cB.dispose(), this._vertexBuffers[Vc.i.PositionKind] = null), this._indexBuffer && (this._scene.RV()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  38212: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(38158),
      Ic = nc(35756);
    class rB {
      set opaqueSortCompareFn(cB) {
        this._opaqueSortCompareFn = cB || rB.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(cB) {
        this._alphaTestSortCompareFn = cB || rB.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(cB) {
        this._transparentSortCompareFn = cB || rB.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = cB, this._opaqueSubMeshes = new Vc.e(256), this._transparentSubMeshes = new Vc.e(256), this._alphaTestSubMeshes = new Vc.e(256), this._depthOnlySubMeshes = new Vc.e(256), this._particleSystems = new Vc.e(256), this._spriteManagers = new Vc.e(256), this._empty = !0, this._edgesRenderers = new Vc.c(16), this.disableDepthPrePass = !1, this._scene = Bc, this.opaqueSortCompareFn = nc, this.alphaTestSortCompareFn = Ic, this.transparentSortCompareFn = rB
      }
      render(cB, Bc, nc, Vc) {
        let Ic = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          rB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          uc = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          sc = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Mc = arguments.length > 8 ? arguments[8] : void 0;
        if (cB) return void cB(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Pc = this._scene.RV();
        Ic && 0 !== this._depthOnlySubMeshes.length && (Pc.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Pc.setColorWrite(!0)), rB && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), uc && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const qB = Pc.getStencilBuffer();
        if (Pc.setStencilBuffer(!1), Bc && this._renderSprites(), nc && this._renderParticles(Vc), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), sc && (Mc || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Pc.setStencilBuffer(qB), Mc) Mc(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const cB = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            cB.length && this._renderTransparent(cB)
          } else this._renderTransparent(this._transparentSubMeshes);
          Pc.setAlphaMode(0)
        }
        if (Pc.setStencilBuffer(!1), rB && this._edgesRenderers.length) {
          for (let cB = 0; cB < this._edgesRenderers.length; cB++) this._edgesRenderers.data[cB].render();
          Pc.setAlphaMode(0)
        }
        Pc.setStencilBuffer(qB)
      }
      _renderOpaqueSorted(cB) {
        rB._RenderSorted(cB, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(cB) {
        rB._RenderSorted(cB, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(cB) {
        rB._RenderSorted(cB, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(cB, Bc, nc, Vc, uc) {
        let sc, Mc = 0;
        const Pc = nc ? nc.globalPosition : rB._ZeroVector;
        if (Vc && Bc !== rB.PainterSortCompare)
          for (; Mc < cB.length; Mc++) sc = cB.data[Mc], sc._alphaIndex = sc.getMesh().alphaIndex, sc._distanceToCamera = Ic.p.Distance(sc.qVc().tOc.centerWorld, Pc);
        const qB = cB.length === cB.data.length ? cB.data : cB.data.slice(0, cB.length);
        Bc && qB.sort(Bc);
        const Oc = qB[0].getMesh().knc();
        for (Mc = 0; Mc < qB.length; Mc++) {
          if (sc = qB[Mc], Oc._activeMeshesFrozenButKeepClipping && !sc.isInFrustum(Oc._frustumPlanes)) continue;
          let cB = !1;
          if (Vc) {
            const Bc = sc.AV();
            if (Bc && Bc.needDepthPrePass && !uc) {
              cB = !0;
              const nc = Bc.knc().RV();
              nc.setColorWrite(!1), nc.setAlphaMode(0), sc.render(!1), nc.setColorWrite(!0)
            }
          }
          const Bc = sc._renderingMesh;
          !cB && Bc._renderRunFollower(sc, Vc) || sc.render(Vc)
        }
      }
      static defaultTransparentSortCompare(cB, Bc) {
        return cB._alphaIndex > Bc._alphaIndex ? 1 : cB._alphaIndex < Bc._alphaIndex ? -1 : rB.backToFrontSortCompare(cB, Bc)
      }
      static backToFrontSortCompare(cB, Bc) {
        return cB._distanceToCamera < Bc._distanceToCamera ? 1 : cB._distanceToCamera > Bc._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(cB, Bc) {
        return cB._distanceToCamera < Bc._distanceToCamera ? -1 : cB._distanceToCamera > Bc._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(cB, Bc) {
        const nc = cB.getMesh(),
          Vc = Bc.getMesh();
        return nc.material && Vc.material ? nc.material.uniqueId - Vc.material.uniqueId : nc.uniqueId - Vc.uniqueId
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
      }
      prepareSprites() {
        this._spriteManagers.reset()
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
      }
      dispatch(cB, Bc, nc) {
        void 0 === Bc && (Bc = cB.getMesh()), void 0 === nc && (nc = cB.AV()), null !== nc && void 0 !== nc && (nc.needAlphaBlendingForMesh(Bc) ? this._transparentSubMeshes.push(cB) : nc.needAlphaTestingForMesh(Bc) ? (nc.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(cB), this._alphaTestSubMeshes.push(cB)) : (nc.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(cB), this._opaqueSubMeshes.push(cB)), Bc._renderingGroup = this, Bc._edgesRenderer && Bc.isEnabled() && Bc.isVisible && Bc._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(Bc._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(cB) {
        this._spriteManagers.push(cB), this._empty = !1
      }
      dispatchParticles(cB) {
        this._particleSystems.push(cB), this._empty = !1
      }
      _renderParticles(cB) {
        if (0 === this._particleSystems.length) return;
        const Bc = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let nc = 0; nc < this._particleSystems.length; nc++) {
          const Vc = this._particleSystems.data[nc];
          if (0 === (Bc && Bc.layerMask & Vc.layerMask)) continue;
          const Ic = Vc.emitter;
          Ic.position && cB && -1 === cB.indexOf(Ic) || this._scene._activeParticles.addCount(Vc.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const cB = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let Bc = 0; Bc < this._spriteManagers.length; Bc++) {
          const nc = this._spriteManagers.data[Bc];
          0 !== (cB && cB.layerMask & nc.layerMask) && nc.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    rB._ZeroVector = Ic.p.Zero()
  },
  38204: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(38212);
    class Ic {}
    class rB {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(cB) {
        this._disableDepthPrePass = cB;
        for (const Bc of this._renderingGroups) Bc.disableDepthPrePass = cB
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(cB) {
        cB !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = cB, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const cB of this._scene.meshes)
          if (cB.rD)
            for (const Bc of cB.rD) Bc._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const cB of this._scene.spriteManagers) cB._wasDispatched = !1;
        for (const cB of this._scene.qD) cB._wasDispatched = !1
      }
      constructor(cB) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Ic, this._maintainStateBetweenFrames = !1, this._scene = cB;
        for (let Bc = rB.MIN_RENDERINGGROUPS; Bc < rB.MAX_RENDERINGGROUPS; Bc++) this._autoClearDepthStencil[Bc] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(cB) {
        const Bc = cB || 0;
        return this._prepareRenderingGroup(Bc), this._renderingGroups[Bc]
      }
      _clearDepthStencilBuffer() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.RV().clear(null, !1, cB, Bc), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(cB, Bc, nc, Vc) {
        let Ic = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uc = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          sc = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Mc = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Pc = arguments.length > 8 ? arguments[8] : void 0,
          qB = arguments.length > 9 ? arguments[9] : void 0;
        const Oc = this._renderingGroupInfo;
        Oc.Ir = this._scene, Oc.camera = this._scene.activeCamera, Oc.renderingManager = this;
        const Tc = qB ?? this._scene.spriteManagers;
        if (Tc && Vc)
          for (let rB = 0; rB < Tc.length; rB++) {
            const cB = Tc[rB];
            this.dispatchSprites(cB)
          }
        for (let fc = rB.MIN_RENDERINGGROUPS; fc < rB.MAX_RENDERINGGROUPS; fc++) {
          this._depthStencilBufferAlreadyCleaned = fc === rB.MIN_RENDERINGGROUPS;
          const qB = this._renderingGroups[fc];
          if (!qB || qB._empty) continue;
          const Tc = 1 << fc;
          if (Oc.renderingGroupId = fc, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Oc, Tc), rB.AUTOCLEAR) {
            const cB = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(fc) : this._autoClearDepthStencil[fc];
            cB && cB.autoClear && this._clearDepthStencilBuffer(cB.depth, cB.stencil)
          }
          for (let cB = 0, Bc = this._scene._beforeRenderingGroupDrawStage; cB < Bc.length; cB++) {
            Bc[cB].action(fc)
          }
          qB.render(cB, Vc, nc, Bc, Ic, uc, sc, Mc, Pc);
          for (let cB = 0, Bc = this._scene._afterRenderingGroupDrawStage; cB < Bc.length; cB++) {
            Bc[cB].action(fc)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Oc, Tc)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let cB = rB.MIN_RENDERINGGROUPS; cB < rB.MAX_RENDERINGGROUPS; cB++) {
            const Bc = this._renderingGroups[cB];
            Bc && Bc.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let cB = rB.MIN_RENDERINGGROUPS; cB < rB.MAX_RENDERINGGROUPS; cB++) {
            const Bc = this._renderingGroups[cB];
            Bc && Bc.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let cB = rB.MIN_RENDERINGGROUPS; cB < rB.MAX_RENDERINGGROUPS; cB++) {
          const Bc = this._renderingGroups[cB];
          Bc && Bc.dispose()
        }
      }
      _prepareRenderingGroup(cB) {
        void 0 === this._renderingGroups[cB] && (this._renderingGroups[cB] = new Vc.c(cB, this._scene, this._customOpaqueSortCompareFn[cB], this._customAlphaTestSortCompareFn[cB], this._customTransparentSortCompareFn[cB]), this._renderingGroups[cB].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(cB) {
        this.maintainStateBetweenFrames && cB._wasDispatched || (cB._wasDispatched = !0, this.getRenderingGroup(cB.renderingGroupId).dispatchSprites(cB))
      }
      dispatchParticles(cB) {
        this.maintainStateBetweenFrames && cB._wasDispatched || (cB._wasDispatched = !0, this.getRenderingGroup(cB.renderingGroupId).dispatchParticles(cB))
      }
      dispatch(cB, Bc, nc) {
        void 0 === Bc && (Bc = cB.getMesh()), this.maintainStateBetweenFrames && cB._wasDispatched || (cB._wasDispatched = !0, this.getRenderingGroup(Bc.renderingGroupId).dispatch(cB, Bc, nc))
      }
      setRenderingOrder(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[cB] = Bc, this._customAlphaTestSortCompareFn[cB] = nc, this._customTransparentSortCompareFn[cB] = Vc, this._renderingGroups[cB]) {
          const Bc = this._renderingGroups[cB];
          Bc.opaqueSortCompareFn = this._customOpaqueSortCompareFn[cB], Bc.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[cB], Bc.transparentSortCompareFn = this._customTransparentSortCompareFn[cB]
        }
      }
      setRenderingAutoClearDepthStencil(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[cB] = {
          autoClear: Bc,
          depth: nc,
          stencil: Vc
        }
      }
      getAutoClearDepthStencilSetup(cB) {
        return this._autoClearDepthStencil[cB]
      }
    }
    rB.MAX_RENDERINGGROUPS = 4, rB.MIN_RENDERINGGROUPS = 0, rB.AUTOCLEAR = !0
  },
  37972: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      constructor(cB) {
        this._supportBlendParametersPerTarget = cB, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(cB) {
        this.setAlphaBlend(cB)
      }
      setAlphaBlend(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[Bc] !== cB && (cB ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[Bc] = cB, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(cB, Bc, nc, Vc) {
        this._blendConstants[0] === cB && this._blendConstants[1] === Bc && this._blendConstants[2] === nc && this._blendConstants[3] === Vc || (this._blendConstants[0] = cB, this._blendConstants[1] = Bc, this._blendConstants[2] = nc, this._blendConstants[3] = Vc, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(cB, Bc, nc, Vc) {
        const Ic = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Ic + 0] === cB && this._blendFunctionParameters[Ic + 1] === Bc && this._blendFunctionParameters[Ic + 2] === nc && this._blendFunctionParameters[Ic + 3] === Vc || (this._blendFunctionParameters[Ic + 0] = cB, this._blendFunctionParameters[Ic + 1] = Bc, this._blendFunctionParameters[Ic + 2] = nc, this._blendFunctionParameters[Ic + 3] = Vc, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(cB, Bc) {
        const nc = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[nc + 0] === cB && this._blendEquationParameters[nc + 1] === Bc || (this._blendEquationParameters[nc + 0] = cB, this._blendEquationParameters[nc + 1] = Bc, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== Bc && (this._numTargets = Bc, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== nc && (this._blendDisabledTargetsMask = nc, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (cB.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === Bc || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (Bc > 1 && 0 !== nc && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & nc) ? cB.enable(cB.BLEND) : cB.disable(cB.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (cB.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (cB.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Vc = cB;
        if (this._isAlphaBlendDirty) {
          for (let Ic = 0; Ic < Bc; Ic++) {
            const Bc = Ic < this._numTargetEnabled ? Ic : 0;
            this._alphaBlend[Bc] && 0 === (nc & 1 << Ic) ? Vc.enableIndexed(cB.BLEND, Ic) : Vc.disableIndexed(cB.BLEND, Ic)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let cB = 0; cB < Bc; cB++) {
            const Bc = cB < this._numTargetEnabled ? 4 * cB : 0;
            Vc.blendFuncSeparateIndexed(cB, this._blendFunctionParameters[Bc + 0], this._blendFunctionParameters[Bc + 1], this._blendFunctionParameters[Bc + 2], this._blendFunctionParameters[Bc + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let cB = 0; cB < Bc; cB++) {
            const Bc = cB < this._numTargetEnabled ? 2 * cB : 0;
            Vc.blendEquationSeparateIndexed(cB, this._blendEquationParameters[Bc + 0], this._blendEquationParameters[Bc + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(cB, Bc) {
        let nc = 32774;
        switch (cB) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, Bc);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, Bc);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, Bc);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, Bc);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, Bc);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, Bc);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, Bc);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, Bc);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, Bc);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, Bc);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Bc);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, Bc);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, Bc);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, Bc);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, Bc);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, Bc);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Bc), nc = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Bc), nc = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, Bc);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, Bc)
        }
        this.setAlphaEquationParameters(nc, nc, Bc)
      }
    }
  },
  38229: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    class Vc {}
    Vc._IsPickingAvailable = !1
  },
  38141: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Mn,
      h: () => un
    });
    var Vc = nc(38146),
      Ic = nc(37963),
      rB = nc(37968),
      uc = nc(35783),
      sc = nc(38158);
    class Mc {
      constructor() {
        this._count = 0, this._data = {}
      }
      qqc(cB) {
        this.clear(), cB.forEach(((cB, Bc) => this.add(cB, Bc)))
      }
      get(cB) {
        const Bc = this._data[cB];
        if (void 0 !== Bc) return Bc
      }
      getOrAddWithFactory(cB, Bc) {
        let nc = this.get(cB);
        return void 0 !== nc || (nc = Bc(cB), nc && this.add(cB, nc)), nc
      }
      getOrAdd(cB, Bc) {
        const nc = this.get(cB);
        return void 0 !== nc ? nc : (this.add(cB, Bc), Bc)
      }
      contains(cB) {
        return void 0 !== this._data[cB]
      }
      add(cB, Bc) {
        return void 0 === this._data[cB] && (this._data[cB] = Bc, ++this._count, !0)
      }
      set(cB, Bc) {
        return void 0 !== this._data[cB] && (this._data[cB] = Bc, !0)
      }
      getAndRemove(cB) {
        const Bc = this.get(cB);
        return void 0 !== Bc ? (delete this._data[cB], --this._count, Bc) : null
      }
      remove(cB) {
        return !!this.contains(cB) && (delete this._data[cB], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(cB) {
        for (const Bc in this._data) {
          cB(Bc, this._data[Bc])
        }
      }
      first(cB) {
        for (const Bc in this._data) {
          const nc = cB(Bc, this._data[Bc]);
          if (nc) return nc
        }
        return null
      }
    }
    var Pc = nc(38075),
      qB = nc(35756),
      Oc = nc(38162),
      Tc = nc(38182),
      fc = nc(38187);
    class mB {
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        this.source = cB, this.pointerX = Bc, this.pointerY = nc, this.meshUnderPointer = Vc, this.sourceEvent = Ic, this.additionalData = rB
      }
      static CreateNew(cB, Bc, nc) {
        const Vc = cB.knc();
        return new mB(cB, Vc.pointerX, Vc.pointerY, Vc.meshUnderPointer || cB, Bc, nc)
      }
      static CreateNewFromSprite(cB, Bc, nc, Vc) {
        return new mB(cB, Bc.pointerX, Bc.pointerY, Bc.meshUnderPointer, nc, Vc)
      }
      static CreateNewFromScene(cB, Bc) {
        return new mB(null, cB.pointerX, cB.pointerY, cB.meshUnderPointer, Bc)
      }
      static CreateNewFromPrimitive(cB, Bc, nc, Vc) {
        return new mB(cB, Bc.x, Bc.y, null, nc, Vc)
      }
    }
    var ec = nc(38197),
      tB = nc(38202),
      Sc = nc(38204),
      yB = nc(38214),
      zB = nc(37937),
      pc = nc(35780),
      hc = nc(37953),
      aB = nc(38218);
    class lc {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const cB in lc.Triggers)
          if (Object.prototype.hasOwnProperty.call(lc.Triggers, cB)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const cB in lc.Triggers)
          if (Object.prototype.hasOwnProperty.call(lc.Triggers, cB)) {
            const Bc = parseInt(cB);
            if (Bc >= 1 && Bc <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(cB) {
        for (const Bc in lc.Triggers)
          if (Object.prototype.hasOwnProperty.call(lc.Triggers, Bc)) {
            if (parseInt(Bc) === cB) return !0
          } return !1
      }
    }
    lc.Triggers = {};
    var Yc, Lc, gB, Uc, bB, Zc, Qc, Cc = nc(38221);
    ! function(cB) {
      cB[cB.Generic = 0] = "Generic", cB[cB.Keyboard = 1] = "Keyboard", cB[cB.Mouse = 2] = "Mouse", cB[cB.Touch = 3] = "Touch", cB[cB.DualShock = 4] = "DualShock", cB[cB.Xbox = 5] = "Xbox", cB[cB.Switch = 6] = "Switch", cB[cB.DualSense = 7] = "DualSense"
    }(Yc || (Yc = {})),
    function(cB) {
      cB[cB.Horizontal = 0] = "Horizontal", cB[cB.Vertical = 1] = "Vertical", cB[cB.LeftClick = 2] = "LeftClick", cB[cB.MiddleClick = 3] = "MiddleClick", cB[cB.RightClick = 4] = "RightClick", cB[cB.BrowserBack = 5] = "BrowserBack", cB[cB.BrowserForward = 6] = "BrowserForward", cB[cB.MouseWheelX = 7] = "MouseWheelX", cB[cB.MouseWheelY = 8] = "MouseWheelY", cB[cB.MouseWheelZ = 9] = "MouseWheelZ", cB[cB.Move = 12] = "Move"
    }(Lc || (Lc = {})),
    function(cB) {
      cB[cB.Horizontal = 0] = "Horizontal", cB[cB.Vertical = 1] = "Vertical", cB[cB.LeftClick = 2] = "LeftClick", cB[cB.MiddleClick = 3] = "MiddleClick", cB[cB.RightClick = 4] = "RightClick", cB[cB.BrowserBack = 5] = "BrowserBack", cB[cB.BrowserForward = 6] = "BrowserForward", cB[cB.MouseWheelX = 7] = "MouseWheelX", cB[cB.MouseWheelY = 8] = "MouseWheelY", cB[cB.MouseWheelZ = 9] = "MouseWheelZ", cB[cB.DeltaHorizontal = 10] = "DeltaHorizontal", cB[cB.DeltaVertical = 11] = "DeltaVertical"
    }(gB || (gB = {})),
    function(cB) {
      cB[cB.Cross = 0] = "Cross", cB[cB.Circle = 1] = "Circle", cB[cB.Square = 2] = "Square", cB[cB.Triangle = 3] = "Triangle", cB[cB.L1 = 4] = "L1", cB[cB.R1 = 5] = "R1", cB[cB.L2 = 6] = "L2", cB[cB.R2 = 7] = "R2", cB[cB.Share = 8] = "Share", cB[cB.Options = 9] = "Options", cB[cB.L3 = 10] = "L3", cB[cB.R3 = 11] = "R3", cB[cB.DPadUp = 12] = "DPadUp", cB[cB.DPadDown = 13] = "DPadDown", cB[cB.DPadLeft = 14] = "DPadLeft", cB[cB.DPadRight = 15] = "DPadRight", cB[cB.Home = 16] = "Home", cB[cB.TouchPad = 17] = "TouchPad", cB[cB.LStickXAxis = 18] = "LStickXAxis", cB[cB.LStickYAxis = 19] = "LStickYAxis", cB[cB.RStickXAxis = 20] = "RStickXAxis", cB[cB.RStickYAxis = 21] = "RStickYAxis"
    }(Uc || (Uc = {})),
    function(cB) {
      cB[cB.Cross = 0] = "Cross", cB[cB.Circle = 1] = "Circle", cB[cB.Square = 2] = "Square", cB[cB.Triangle = 3] = "Triangle", cB[cB.L1 = 4] = "L1", cB[cB.R1 = 5] = "R1", cB[cB.L2 = 6] = "L2", cB[cB.R2 = 7] = "R2", cB[cB.Create = 8] = "Create", cB[cB.Options = 9] = "Options", cB[cB.L3 = 10] = "L3", cB[cB.R3 = 11] = "R3", cB[cB.DPadUp = 12] = "DPadUp", cB[cB.DPadDown = 13] = "DPadDown", cB[cB.DPadLeft = 14] = "DPadLeft", cB[cB.DPadRight = 15] = "DPadRight", cB[cB.Home = 16] = "Home", cB[cB.TouchPad = 17] = "TouchPad", cB[cB.LStickXAxis = 18] = "LStickXAxis", cB[cB.LStickYAxis = 19] = "LStickYAxis", cB[cB.RStickXAxis = 20] = "RStickXAxis", cB[cB.RStickYAxis = 21] = "RStickYAxis"
    }(bB || (bB = {})),
    function(cB) {
      cB[cB.A = 0] = "A", cB[cB.B = 1] = "B", cB[cB.X = 2] = "X", cB[cB.Y = 3] = "Y", cB[cB.LB = 4] = "LB", cB[cB.RB = 5] = "RB", cB[cB.LT = 6] = "LT", cB[cB.RT = 7] = "RT", cB[cB.Back = 8] = "Back", cB[cB.Start = 9] = "Start", cB[cB.LS = 10] = "LS", cB[cB.RS = 11] = "RS", cB[cB.DPadUp = 12] = "DPadUp", cB[cB.DPadDown = 13] = "DPadDown", cB[cB.DPadLeft = 14] = "DPadLeft", cB[cB.DPadRight = 15] = "DPadRight", cB[cB.Home = 16] = "Home", cB[cB.LStickXAxis = 17] = "LStickXAxis", cB[cB.LStickYAxis = 18] = "LStickYAxis", cB[cB.RStickXAxis = 19] = "RStickXAxis", cB[cB.RStickYAxis = 20] = "RStickYAxis"
    }(Zc || (Zc = {})),
    function(cB) {
      cB[cB.B = 0] = "B", cB[cB.A = 1] = "A", cB[cB.Y = 2] = "Y", cB[cB.X = 3] = "X", cB[cB.L = 4] = "L", cB[cB.R = 5] = "R", cB[cB.ZL = 6] = "ZL", cB[cB.ZR = 7] = "ZR", cB[cB.Minus = 8] = "Minus", cB[cB.Plus = 9] = "Plus", cB[cB.LS = 10] = "LS", cB[cB.RS = 11] = "RS", cB[cB.DPadUp = 12] = "DPadUp", cB[cB.DPadDown = 13] = "DPadDown", cB[cB.DPadLeft = 14] = "DPadLeft", cB[cB.DPadRight = 15] = "DPadRight", cB[cB.Home = 16] = "Home", cB[cB.Capture = 17] = "Capture", cB[cB.LStickXAxis = 18] = "LStickXAxis", cB[cB.LStickYAxis = 19] = "LStickYAxis", cB[cB.RStickXAxis = 20] = "RStickXAxis", cB[cB.RStickYAxis = 21] = "RStickYAxis"
    }(Qc || (Qc = {}));
    var vB = nc(38227);
    class Dc {
      static CreateDeviceEvent(cB, Bc, nc, Vc, Ic, rB, uc) {
        switch (cB) {
          case Yc.Keyboard:
            return this._CreateKeyboardEvent(nc, Vc, Ic, rB);
          case Yc.Mouse:
            if (nc === Lc.MouseWheelX || nc === Lc.MouseWheelY || nc === Lc.MouseWheelZ) return this._CreateWheelEvent(cB, Bc, nc, Vc, Ic, rB);
          case Yc.Touch:
            return this._CreatePointerEvent(cB, Bc, nc, Vc, Ic, rB, uc);
          default:
            throw `Unable to generate event for device ${Yc[cB]}`
        }
      }
      static _CreatePointerEvent(cB, Bc, nc, Vc, Ic, rB, uc) {
        const sc = this._CreateMouseEvent(cB, Bc, nc, Vc, Ic, rB);
        cB === Yc.Mouse ? (sc.deviceType = Yc.Mouse, sc.pointerId = 1, sc.pointerType = "mouse") : (sc.deviceType = Yc.Touch, sc.pointerId = uc ?? Bc, sc.pointerType = "touch");
        let Mc = 0;
        return Mc += Ic.pollInput(cB, Bc, Lc.LeftClick), Mc += 2 * Ic.pollInput(cB, Bc, Lc.RightClick), Mc += 4 * Ic.pollInput(cB, Bc, Lc.MiddleClick), sc.buttons = Mc, nc === Lc.Move ? sc.type = "pointermove" : nc >= Lc.LeftClick && nc <= Lc.RightClick && (sc.type = 1 === Vc ? "pointerdown" : "pointerup", sc.button = nc - 2), sc
      }
      static _CreateWheelEvent(cB, Bc, nc, Vc, Ic, rB) {
        const uc = this._CreateMouseEvent(cB, Bc, nc, Vc, Ic, rB);
        switch (uc.pointerId = 1, uc.type = "wheel", uc.deltaMode = vB.c.DOM_DELTA_PIXEL, uc.deltaX = 0, uc.deltaY = 0, uc.deltaZ = 0, nc) {
          case Lc.MouseWheelX:
            uc.deltaX = Vc;
            break;
          case Lc.MouseWheelY:
            uc.deltaY = Vc;
            break;
          case Lc.MouseWheelZ:
            uc.deltaZ = Vc
        }
        return uc
      }
      static _CreateMouseEvent(cB, Bc, nc, Vc, Ic, rB) {
        const uc = this._CreateEvent(rB),
          sc = Ic.pollInput(cB, Bc, Lc.Horizontal),
          Mc = Ic.pollInput(cB, Bc, Lc.Vertical);
        return rB ? (uc.movementX = 0, uc.movementY = 0, uc.offsetX = uc.movementX - rB.getBoundingClientRect().x, uc.offsetY = uc.movementY - rB.getBoundingClientRect().y) : (uc.movementX = Ic.pollInput(cB, Bc, 10), uc.movementY = Ic.pollInput(cB, Bc, 11), uc.offsetX = 0, uc.offsetY = 0), this._CheckNonCharacterKeys(uc, Ic), uc.clientX = sc, uc.clientY = Mc, uc.x = sc, uc.y = Mc, uc.deviceType = cB, uc.deviceSlot = Bc, uc.inputIndex = nc, uc
      }
      static _CreateKeyboardEvent(cB, Bc, nc, Vc) {
        const Ic = this._CreateEvent(Vc);
        return this._CheckNonCharacterKeys(Ic, nc), Ic.deviceType = Yc.Keyboard, Ic.deviceSlot = 0, Ic.inputIndex = cB, Ic.type = 1 === Bc ? "keydown" : "keyup", Ic.key = String.fromCharCode(cB), Ic.keyCode = cB, Ic
      }
      static _CheckNonCharacterKeys(cB, Bc) {
        const nc = Bc.isDeviceAvailable(Yc.Keyboard),
          Vc = nc && 1 === Bc.pollInput(Yc.Keyboard, 0, 18),
          Ic = nc && 1 === Bc.pollInput(Yc.Keyboard, 0, 17),
          rB = nc && (1 === Bc.pollInput(Yc.Keyboard, 0, 91) || 1 === Bc.pollInput(Yc.Keyboard, 0, 92) || 1 === Bc.pollInput(Yc.Keyboard, 0, 93)),
          uc = nc && 1 === Bc.pollInput(Yc.Keyboard, 0, 16);
        cB.altKey = Vc, cB.ctrlKey = Ic, cB.metaKey = rB, cB.shiftKey = uc
      }
      static _CreateEvent(cB) {
        const Bc = {
          preventDefault: () => {}
        };
        return Bc.target = cB, Bc
      }
    }
    class Nc {
      constructor(cB, Bc, nc) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(cB, Bc, ((cB, Bc, Vc, Ic) => {
          const rB = Dc.CreateDeviceEvent(cB, Bc, Vc, Ic, this);
          nc(cB, Bc, rB)
        })) : this._createDummyNativeInput()
      }
      pollInput(cB, Bc, nc) {
        return this._nativeInput.pollInput(cB, Bc, nc)
      }
      isDeviceAvailable(cB) {
        return cB === Yc.Mouse || cB === Yc.Touch
      }
      dispose() {
        this._nativeInput.dispose()
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        }
      }
    }
    const Ec = Object.keys(Lc).length / 2;
    class oc {
      constructor(cB, Bc, nc, Ic) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Vc.g.IsSafari(), this._usingMacOs = (0, zB.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = cB => {}, this._keyboardUpEvent = cB => {}, this._keyboardBlurEvent = cB => {}, this._pointerMoveEvent = cB => {}, this._pointerDownEvent = cB => {}, this._pointerUpEvent = cB => {}, this._pointerCancelEvent = cB => {}, this._pointerCancelTouch = cB => {}, this._pointerLeaveEvent = cB => {}, this._pointerWheelEvent = cB => {}, this._pointerBlurEvent = cB => {}, this._pointerMacOsChromeOutEvent = cB => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, zB.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, zB.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = cB => {}, this._gamepadDisconnectedEvent = cB => {}, this._eventPrefix = Vc.g.GetPointerPrefix(cB), this._engine = cB, this._onDeviceConnected = Bc, this._onDeviceDisconnected = nc, this._onInputChanged = Ic, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(cB, Bc, nc) {
        const Ic = this._inputs[cB][Bc];
        if (!Ic) throw `Unable to find device ${Yc[cB]}`;
        cB >= Yc.DualShock && cB <= Yc.DualSense && this._updateDevice(cB, Bc, nc);
        const rB = Ic[nc];
        if (void 0 === rB) throw `Unable to find input ${nc} for device ${Yc[cB]} in slot ${Bc}`;
        return nc === Lc.Move && Vc.g.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), rB
      }
      isDeviceAvailable(cB) {
        return void 0 !== this._inputs[cB]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const cB = this?._engine.getInputElement();
        if (cB && (!this._eventsAttached || this._elementToAttachTo !== cB)) {
          if (this._disableEvents(), this._inputs)
            for (const cB of this._inputs)
              if (cB)
                for (const Bc in cB) {
                  const nc = cB[+Bc];
                  if (nc)
                    for (let cB = 0; cB < nc.length; cB++) nc[cB] = 0
                }
          this._elementToAttachTo = cB, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "OV", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const cB = navigator.getGamepads();
          for (const Bc of cB) Bc && this._addGamePad(Bc)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(Yc.Mouse, 0, 0, 0)
      }
      _addGamePad(cB) {
        const Bc = this._getGamepadDeviceType(cB.id),
          nc = cB.index;
        this._gamepads = this._gamepads || new Array(cB.index + 1), this._registerDevice(Bc, nc, cB.buttons.length + cB.axes.length), this._gamepads[nc] = Bc
      }
      _addPointerDevice(cB, Bc, nc, Vc) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(cB, Bc, Ec);
        const Ic = this._inputs[cB][Bc];
        Ic[0] = nc, Ic[1] = Vc
      }
      _registerDevice(cB, Bc, nc) {
        if (void 0 === Bc) throw `Unable to register device ${Yc[cB]} to undefined slot.`;
        if (this._inputs[cB] || (this._inputs[cB] = {}), !this._inputs[cB][Bc]) {
          const Vc = new Array(nc);
          Vc.fill(0), this._inputs[cB][Bc] = Vc, this._onDeviceConnected(cB, Bc)
        }
      }
      _unregisterDevice(cB, Bc) {
        this._inputs[cB][Bc] && (delete this._inputs[cB][Bc], this._onDeviceDisconnected(cB, Bc))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = cB => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Yc.Keyboard, 0, 255));
          const Bc = this._inputs[Yc.Keyboard][0];
          if (Bc) {
            Bc[cB.keyCode] = 1;
            const nc = cB;
            nc.inputIndex = cB.keyCode, this._usingMacOs && cB.metaKey && "Meta" !== cB.key && (this._metaKeys.includes(cB.keyCode) || this._metaKeys.push(cB.keyCode)), this._onInputChanged(Yc.Keyboard, 0, nc)
          }
        }, this._keyboardUpEvent = cB => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Yc.Keyboard, 0, 255));
          const Bc = this._inputs[Yc.Keyboard][0];
          if (Bc) {
            Bc[cB.keyCode] = 0;
            const nc = cB;
            if (nc.inputIndex = cB.keyCode, this._usingMacOs && "Meta" === cB.key && this._metaKeys.length > 0) {
              for (const cB of this._metaKeys) {
                const nc = Dc.CreateDeviceEvent(Yc.Keyboard, 0, cB, 0, this, this._elementToAttachTo);
                Bc[cB] = 0, this._onInputChanged(Yc.Keyboard, 0, nc)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(Yc.Keyboard, 0, nc)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const cB = this._inputs[Yc.Keyboard][0];
            for (let Bc = 0; Bc < cB.length; Bc++)
              if (0 !== cB[Bc]) {
                cB[Bc] = 0;
                const nc = Dc.CreateDeviceEvent(Yc.Keyboard, 0, Bc, 0, this, this._elementToAttachTo);
                this._onInputChanged(Yc.Keyboard, 0, nc)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, zB.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Vc = 0; Vc < this._maxTouchPoints; Vc++) this._activeTouchIds[Vc] = -1;
        this._pointerMoveEvent = cB => {
          const Bc = this._getPointerType(cB);
          let nc = Bc === Yc.Mouse ? 0 : this._activeTouchIds.indexOf(cB.pointerId);
          if (Bc === Yc.Touch && -1 === nc) {
            if (0 === cB.buttons) return;
            const Ic = this._activeTouchIds.indexOf(-1);
            if (!(Ic >= 0)) return void Vc.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            nc = Ic, this._activeTouchIds[Ic] = cB.pointerId, this._onDeviceConnected(Bc, nc)
          }
          this._inputs[Bc] || (this._inputs[Bc] = {}), this._inputs[Bc][nc] || this._addPointerDevice(Bc, nc, cB.clientX, cB.clientY);
          const Ic = this._inputs[Bc][nc];
          if (Ic) {
            const Vc = cB;
            Vc.inputIndex = Lc.Move, Ic[Lc.Horizontal] = cB.clientX, Ic[Lc.Vertical] = cB.clientY, Bc === Yc.Touch && 0 === Ic[Lc.LeftClick] && (Ic[Lc.LeftClick] = 1), void 0 === cB.pointerId && (cB.pointerId = this._mouseId), this._onInputChanged(Bc, nc, Vc), this._usingSafari || -1 === cB.button || (Vc.inputIndex = cB.button + 2, Ic[cB.button + 2] = Ic[cB.button + 2] ? 0 : 1, this._onInputChanged(Bc, nc, Vc))
          }
        }, this._pointerDownEvent = cB => {
          const Bc = this._getPointerType(cB);
          let nc = Bc === Yc.Mouse ? 0 : cB.pointerId;
          if (Bc === Yc.Touch) {
            let Bc = this._activeTouchIds.indexOf(cB.pointerId);
            if (-1 === Bc && (Bc = this._activeTouchIds.indexOf(-1)), !(Bc >= 0)) return void Vc.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            nc = Bc, this._activeTouchIds[Bc] = cB.pointerId
          }
          this._inputs[Bc] || (this._inputs[Bc] = {}), this._inputs[Bc][nc] ? Bc === Yc.Touch && this._onDeviceConnected(Bc, nc) : this._addPointerDevice(Bc, nc, cB.clientX, cB.clientY);
          const Ic = this._inputs[Bc][nc];
          if (Ic) {
            const Vc = Ic[Lc.Horizontal],
              uc = Ic[Lc.Vertical];
            if (Bc === Yc.Mouse) {
              if (void 0 === cB.pointerId && (cB.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (rB) {}
            } else if (cB.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(cB.pointerId)
            } catch (rB) {}
            Ic[Lc.Horizontal] = cB.clientX, Ic[Lc.Vertical] = cB.clientY, Ic[cB.button + 2] = 1;
            const sc = cB;
            sc.inputIndex = cB.button + 2, this._onInputChanged(Bc, nc, sc), Vc === cB.clientX && uc === cB.clientY || (sc.inputIndex = Lc.Move, this._onInputChanged(Bc, nc, sc))
          }
        }, this._pointerUpEvent = cB => {
          const Bc = this._getPointerType(cB),
            nc = Bc === Yc.Mouse ? 0 : this._activeTouchIds.indexOf(cB.pointerId);
          if (Bc === Yc.Touch) {
            if (-1 === nc) return;
            this._activeTouchIds[nc] = -1
          }
          const Vc = this._inputs[Bc]?.[nc];
          let Ic = cB.button,
            rB = Vc && 0 !== Vc[Ic + 2];
          if (!rB && this._isUsingFirefox && this._usingMacOs && Vc && (Ic = 2 === Ic ? 0 : 2, rB = 0 !== Vc[Ic + 2]), rB) {
            const rB = Vc[Lc.Horizontal],
              uc = Vc[Lc.Vertical];
            Vc[Lc.Horizontal] = cB.clientX, Vc[Lc.Vertical] = cB.clientY, Vc[Ic + 2] = 0;
            const sc = cB;
            void 0 === cB.pointerId && (cB.pointerId = this._mouseId), rB === cB.clientX && uc === cB.clientY || (sc.inputIndex = Lc.Move, this._onInputChanged(Bc, nc, sc)), sc.inputIndex = Ic + 2, Bc === Yc.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : cB.pointerId && this._elementToAttachTo.hasPointerCapture?.(cB.pointerId) && this._elementToAttachTo.releasePointerCapture(cB.pointerId), this._onInputChanged(Bc, nc, sc), Bc === Yc.Touch && this._onDeviceDisconnected(Bc, nc)
          }
        }, this._pointerCancelTouch = cB => {
          const Bc = this._activeTouchIds.indexOf(cB);
          if (-1 === Bc) return;
          this._elementToAttachTo.hasPointerCapture?.(cB) && this._elementToAttachTo.releasePointerCapture(cB), this._inputs[Yc.Touch][Bc][Lc.LeftClick] = 0;
          const nc = Dc.CreateDeviceEvent(Yc.Touch, Bc, Lc.LeftClick, 0, this, this._elementToAttachTo, cB);
          this._onInputChanged(Yc.Touch, Bc, nc), this._activeTouchIds[Bc] = -1, this._onDeviceDisconnected(Yc.Touch, Bc)
        }, this._pointerCancelEvent = cB => {
          if ("mouse" === cB.pointerType) {
            const cB = this._inputs[Yc.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Bc = Lc.LeftClick; Bc <= Lc.BrowserForward; Bc++)
              if (1 === cB[Bc]) {
                cB[Bc] = 0;
                const nc = Dc.CreateDeviceEvent(Yc.Mouse, 0, Bc, 0, this, this._elementToAttachTo);
                this._onInputChanged(Yc.Mouse, 0, nc)
              }
          } else this._pointerCancelTouch(cB.pointerId)
        }, this._pointerLeaveEvent = cB => {
          "pen" === cB.pointerType && this._pointerCancelTouch(cB.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let cB = !1;
        const Bc = function() {};
        try {
          const nc = Object.defineProperty({}, "passive", {
            get: function() {
              cB = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", Bc, nc), this._elementToAttachTo.removeEventListener("test", Bc, nc)
        } catch (nc) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(Yc.Mouse)) {
            const cB = this._inputs[Yc.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Bc = Lc.LeftClick; Bc <= Lc.BrowserForward; Bc++)
              if (1 === cB[Bc]) {
                cB[Bc] = 0;
                const nc = Dc.CreateDeviceEvent(Yc.Mouse, 0, Bc, 0, this, this._elementToAttachTo);
                this._onInputChanged(Yc.Mouse, 0, nc)
              }
          }
          if (this.isDeviceAvailable(Yc.Touch)) {
            const cB = this._inputs[Yc.Touch];
            for (let Bc = 0; Bc < this._activeTouchIds.length; Bc++) {
              const nc = this._activeTouchIds[Bc];
              if (this._elementToAttachTo.hasPointerCapture?.(nc) && this._elementToAttachTo.releasePointerCapture(nc), -1 !== nc && 1 === cB[Bc]?.[Lc.LeftClick]) {
                cB[Bc][Lc.LeftClick] = 0;
                const Vc = Dc.CreateDeviceEvent(Yc.Touch, Bc, Lc.LeftClick, 0, this, this._elementToAttachTo, nc);
                this._onInputChanged(Yc.Touch, Bc, Vc), this._activeTouchIds[Bc] = -1, this._onDeviceDisconnected(Yc.Touch, Bc)
              }
            }
          }
        }, this._pointerWheelEvent = cB => {
          const Bc = Yc.Mouse;
          this._inputs[Bc] || (this._inputs[Bc] = []), this._inputs[Bc][0] || (this._pointerActive = !0, this._registerDevice(Bc, 0, Ec));
          const nc = this._inputs[Bc][0];
          if (nc) {
            nc[Lc.MouseWheelX] = cB.deltaX || 0, nc[Lc.MouseWheelY] = cB.deltaY || cB.wheelDelta || 0, nc[Lc.MouseWheelZ] = cB.deltaZ || 0;
            const Vc = cB;
            void 0 === cB.pointerId && (cB.pointerId = this._mouseId), 0 !== nc[Lc.MouseWheelX] && (Vc.inputIndex = Lc.MouseWheelX, this._onInputChanged(Bc, 0, Vc)), 0 !== nc[Lc.MouseWheelY] && (Vc.inputIndex = Lc.MouseWheelY, this._onInputChanged(Bc, 0, Vc)), 0 !== nc[Lc.MouseWheelZ] && (Vc.inputIndex = Lc.MouseWheelZ, this._onInputChanged(Bc, 0, Vc))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = cB => {
          cB.buttons > 1 && this._pointerCancelEvent(cB)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "OV", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!cB && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(Yc.Mouse)) {
            const cB = this._inputs[Yc.Mouse][0];
            cB[Lc.MouseWheelX] = 0, cB[Lc.MouseWheelY] = 0, cB[Lc.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = cB => {
          this._addGamePad(cB.gamepad)
        }, this._gamepadDisconnectedEvent = cB => {
          if (this._gamepads) {
            const Bc = this._getGamepadDeviceType(cB.gamepad.id),
              nc = cB.gamepad.index;
            this._unregisterDevice(Bc, nc), delete this._gamepads[nc]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(cB, Bc, nc) {
        const Vc = navigator.getGamepads()[Bc];
        if (Vc && cB === this._gamepads[Bc]) {
          const Ic = this._inputs[cB][Bc];
          nc >= Vc.buttons.length ? Ic[nc] = Vc.axes[nc - Vc.buttons.length].valueOf() : Ic[nc] = Vc.buttons[nc].value
        }
      }
      _getGamepadDeviceType(cB) {
        return -1 !== cB.indexOf("054c") ? -1 !== cB.indexOf("0ce6") ? Yc.DualSense : Yc.DualShock : -1 !== cB.indexOf("Xbox One") || -1 !== cB.search("Xbox 360") || -1 !== cB.search("xinput") || -1 !== cB.indexOf("045e") && -1 === cB.indexOf("Surface Dock") ? Yc.Xbox : -1 !== cB.indexOf("057e") ? Yc.Switch : Yc.Generic
      }
      _getPointerType(cB) {
        let Bc = Yc.Mouse;
        return ("touch" === cB.pointerType || "pen" === cB.pointerType || cB.touches) && (Bc = Yc.Touch), Bc
      }
    }
    class Wc {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = Bc, this.deviceSlot = nc, this.onInputChangedObservable = new uc.c, this._deviceInputSystem = cB
      }
      getInput(cB) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, cB)
      }
    }
    class wc {
      constructor(cB) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = cB => {
          for (let Bc = 0; Bc < this._devices.length; Bc++) {
            const nc = this._devices[Bc];
            for (const Vc in nc) {
              const nc = +Vc;
              cB._addDevice(new Wc(this._deviceInputSystem, Bc, nc))
            }
          }
          this._registeredManagers.push(cB)
        }, this.unregisterManager = cB => {
          const Bc = this._registeredManagers.indexOf(cB);
          Bc > -1 && this._registeredManagers.splice(Bc, 1)
        };
        const Bc = Object.keys(Yc).length / 2;
        this._devices = new Array(Bc);
        const nc = (cB, Bc) => {
            this._devices[cB] || (this._devices[cB] = new Array), this._devices[cB][Bc] || (this._devices[cB][Bc] = Bc);
            for (const nc of this._registeredManagers) {
              const Vc = new Wc(this._deviceInputSystem, cB, Bc);
              nc._addDevice(Vc)
            }
          },
          Vc = (cB, Bc) => {
            this._devices[cB]?.[Bc] && delete this._devices[cB][Bc];
            for (const nc of this._registeredManagers) nc._removeDevice(cB, Bc)
          },
          Ic = (cB, Bc, nc) => {
            if (nc)
              for (const Vc of this._registeredManagers) Vc._onInputChanged(cB, Bc, nc)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new Nc(nc, Vc, Ic) : this._deviceInputSystem = new oc(cB, nc, Vc, Ic)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class kB {
      getDeviceSource(cB, Bc) {
        if (void 0 === Bc) {
          if (void 0 === this._firstDevice[cB]) return null;
          Bc = this._firstDevice[cB]
        }
        return this._devices[cB] && void 0 !== this._devices[cB][Bc] ? this._devices[cB][Bc] : null
      }
      getDeviceSources(cB) {
        return this._devices[cB] ? this._devices[cB].filter((cB => !!cB)) : []
      }
      constructor(cB) {
        const Bc = Object.keys(Yc).length / 2;
        this._devices = new Array(Bc), this._firstDevice = new Array(Bc), this._engine = cB, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new wc(cB)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new uc.c((cB => {
          for (const Bc of this._devices)
            if (Bc)
              for (const nc of Bc) nc && this.onDeviceConnectedObservable.notifyObserver(cB, nc)
        })), this.onDeviceDisconnectedObservable = new uc.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = cB.XBc.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.XBc.remove(this._onDisposeObserver)
      }
      _addDevice(cB) {
        this._devices[cB.deviceType] || (this._devices[cB.deviceType] = []), this._devices[cB.deviceType][cB.deviceSlot] || (this._devices[cB.deviceType][cB.deviceSlot] = cB, this._updateFirstDevices(cB.deviceType)), this.onDeviceConnectedObservable.notifyObservers(cB)
      }
      _removeDevice(cB, Bc) {
        const nc = this._devices[cB]?.[Bc];
        this.onDeviceDisconnectedObservable.notifyObservers(nc), this._devices[cB]?.[Bc] && delete this._devices[cB][Bc], this._updateFirstDevices(cB)
      }
      _onInputChanged(cB, Bc, nc) {
        this._devices[cB]?.[Bc]?.onInputChangedObservable.notifyObservers(nc)
      }
      _updateFirstDevices(cB) {
        switch (cB) {
          case Yc.Keyboard:
          case Yc.Mouse:
            this._firstDevice[cB] = 0;
            break;
          case Yc.Touch:
          case Yc.DualSense:
          case Yc.DualShock:
          case Yc.Xbox:
          case Yc.Switch:
          case Yc.Generic: {
            delete this._firstDevice[cB];
            const Bc = this._devices[cB];
            if (Bc)
              for (let nc = 0; nc < Bc.length; nc++)
                if (Bc[nc]) {
                  this._firstDevice[cB] = nc;
                  break
                } break
          }
        }
      }
    }
    var Xc = nc(38229);
    class Hc {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get lq() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(cB) {
        this._singleClick = cB
      }
      set lq(cB) {
        this._doubleClick = cB
      }
      set hasSwiped(cB) {
        this._hasSwiped = cB
      }
      set ignore(cB) {
        this._ignore = cB
      }
    }
    class Fc {
      constructor(cB) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new qB.m(0, 0), this._previousStartingPointerPosition = new qB.m(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = cB || pc.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(cB) {
        return this._meshUnderPointerId[cB] || null
      }
      get unTranslatedPointer() {
        return new qB.m(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(cB) {
        this._pointerX = cB
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(cB) {
        this._pointerY = cB
      }
      _updatePointerPosition(cB) {
        const Bc = this._scene.RV().getInputElementClientRect();
        Bc && (this._pointerX = cB.clientX - Bc.left, this._pointerY = cB.clientY - Bc.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(cB, Bc) {
        const nc = this._scene,
          Vc = nc.RV(),
          Ic = Vc.getInputElement();
        Ic && (Ic.tabIndex = Vc.canvasTabIndex, nc.doNotHandleCursors || (Ic.style.cursor = nc.defaultCursor)), this._setCursorAndPointerOverMesh(cB, Bc, nc);
        for (const sc of nc._pointerMoveStage) {
          cB = cB || this._pickMove(Bc);
          const nc = !!cB?.pickedMesh;
          cB = sc.action(this._unTranslatedPointerX, this._unTranslatedPointerY, cB, nc, Ic)
        }
        const rB = Bc.inputIndex >= Lc.MouseWheelX && Bc.inputIndex <= Lc.MouseWheelZ ? aB.d.POINTERWHEEL : aB.d.POINTERMOVE;
        let uc;
        nc.onPointerMove && (cB = cB || this._pickMove(Bc), nc.onPointerMove(Bc, cB, rB)), cB ? (uc = new aB.i(rB, Bc, cB), this._setRayOnPointerInfo(cB, Bc)) : (uc = new aB.i(rB, Bc, null, this), this._movePointerInfo = uc), nc.onPointerObservable.hasObservers() && nc.onPointerObservable.notifyObservers(uc, rB)
      }
      _setRayOnPointerInfo(cB, Bc) {
        const nc = this._scene;
        cB && Xc.e._IsPickingAvailable && (cB.ray || (cB.ray = nc.createPickingRay(Bc.offsetX, Bc.offsetY, qB.d.Identity(), nc.activeCamera)))
      }
      _addCameraPointerObserver(cB, Bc) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(cB, Bc)
      }
      _removeCameraPointerObserver(cB) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(cB)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(cB, Bc, nc) {
        const Vc = this._scene,
          Ic = new aB.g(nc, Bc, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return cB && (Ic.originalPickingInfo = cB, Ic.ray = cB.ray, "xr-near" === Bc.pointerType && cB.originMesh && (Ic.nearInteractionPickingInfo = cB)), Vc.onPrePointerObservable.notifyObservers(Ic, nc), !!Ic.skipOnPointerObservable
      }
      _pickMove(cB) {
        const Bc = this._scene,
          nc = Bc.Vn(this._unTranslatedPointerX, this._unTranslatedPointerY, Bc.pointerMovePredicate, Bc.pointerMoveFastCheck, Bc.cameraToUseForPointers, Bc.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(nc, cB, Bc), nc
      }
      _updateMeshUnderPointer() {
        const cB = this._scene;
        if (!cB.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || cB.skipPointerMovePicking || !cB.cameraToUseForPointers && !cB.activeCamera) return;
        this._ensurePointerMovePredicate();
        const Bc = this._pointerX,
          nc = this._pointerY,
          Vc = this._unTranslatedPointerX,
          Ic = this._unTranslatedPointerY;
        for (const rB of this._latestPointerMoveEvents.values()) this._pointerX = rB.pointerX, this._pointerY = rB.pointerY, this._unTranslatedPointerX = rB.unTranslatedPointerX, this._unTranslatedPointerY = rB.unTranslatedPointerY, this._pickMove(rB.event);
        this._pointerX = Bc, this._pointerY = nc, this._unTranslatedPointerX = Vc, this._unTranslatedPointerY = Ic
      }
      _ensurePointerMovePredicate() {
        const cB = this._scene;
        cB.pointerMovePredicate || (cB.pointerMovePredicate = Bc => (Bc._isPointerMovePickable ?? Bc.ur) && Bc.isVisible && Bc.isReady() && Bc.isEnabled() && (Bc.enablePointerMoveEvents || cB.constantlyUpdateMeshUnderPointer || null !== Bc._getActionManagerForTrigger()) && (!cB.cameraToUseForPointers || 0 !== (cB.cameraToUseForPointers.layerMask & Bc.layerMask)))
      }
      _setCursorAndPointerOverMesh(cB, Bc, nc) {
        const Vc = nc.RV().getInputElement();
        if (cB?.pickedMesh) {
          if (this.setPointerOverMesh(cB.pickedMesh, Bc.pointerId, cB, Bc), !nc.doNotHandleCursors && Vc && this._pointerOverMesh) {
            const cB = this._pointerOverMesh._getActionManagerForTrigger();
            cB && cB.hasPointerTriggers && (Vc.style.cursor = cB.hoverCursor || nc.hoverCursor)
          }
        } else this.setPointerOverMesh(null, Bc.pointerId, cB, Bc)
      }
      simulatePointerMove(cB, Bc) {
        const nc = new PointerEvent("pointermove", Bc);
        nc.inputIndex = Lc.Move, this._checkPrePointerObservable(cB, nc, aB.d.POINTERMOVE) || this._processPointerMove(cB, nc)
      }
      simulatePointerDown(cB, Bc) {
        const nc = new PointerEvent("pointerdown", Bc);
        nc.inputIndex = nc.button + 2, this._checkPrePointerObservable(cB, nc, aB.d.POINTERDOWN) || this._processPointerDown(cB, nc)
      }
      _processPointerDown(cB, Bc) {
        const nc = this._scene;
        if (cB?.pickedMesh) {
          this._pickedDownMesh = cB.pickedMesh;
          const Vc = cB.pickedMesh._getActionManagerForTrigger();
          if (Vc) {
            if (Vc.hasPickTriggers) switch (Vc.processTrigger(5, new mB(cB.pickedMesh, nc.pointerX, nc.pointerY, cB.pickedMesh, Bc, cB)), Bc.button) {
              case 0:
                Vc.processTrigger(2, new mB(cB.pickedMesh, nc.pointerX, nc.pointerY, cB.pickedMesh, Bc, cB));
                break;
              case 1:
                Vc.processTrigger(4, new mB(cB.pickedMesh, nc.pointerX, nc.pointerY, cB.pickedMesh, Bc, cB));
                break;
              case 2:
                Vc.processTrigger(3, new mB(cB.pickedMesh, nc.pointerX, nc.pointerY, cB.pickedMesh, Bc, cB))
            }
            Vc.hasSpecificTrigger(8) && window.setTimeout((() => {
              const cB = nc.Vn(this._unTranslatedPointerX, this._unTranslatedPointerY, (cB => cB.ur && cB.isVisible && cB.isReady() && cB.actionManager && cB.actionManager.hasSpecificTrigger(8) && cB === this._pickedDownMesh), !1, nc.cameraToUseForPointers);
              cB?.pickedMesh && Vc && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > Fc.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Vc.processTrigger(8, mB.CreateNew(cB.pickedMesh, Bc)))
            }), Fc.LongPressDelay)
          }
        } else
          for (const rB of nc._pointerDownStage) cB = rB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, cB, Bc, !1);
        let Vc;
        const Ic = aB.d.POINTERDOWN;
        cB ? (nc.onPointerDown && nc.onPointerDown(Bc, cB, Ic), Vc = new aB.i(Ic, Bc, cB), this._setRayOnPointerInfo(cB, Bc)) : Vc = new aB.i(Ic, Bc, null, this), nc.onPointerObservable.hasObservers() && nc.onPointerObservable.notifyObservers(Vc, Ic)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(cB, Bc, nc) {
        const Vc = new PointerEvent("pointerup", Bc);
        Vc.inputIndex = Lc.Move;
        const Ic = new Hc;
        nc ? Ic.lq = !0 : Ic.singleClick = !0, this._checkPrePointerObservable(cB, Vc, aB.d.POINTERUP) || this._processPointerUp(cB, Vc, Ic)
      }
      _processPointerUp(cB, Bc, nc) {
        const Vc = this._scene;
        if (cB?.pickedMesh) {
          if (this._pickedUpMesh = cB.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Vc.onPointerPick && Vc.onPointerPick(Bc, cB), nc.singleClick && !nc.ignore && Vc.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const nc = aB.d.POINTERPICK,
              Ic = new aB.i(nc, Bc, cB);
            this._setRayOnPointerInfo(cB, Bc), Vc.onPointerObservable.notifyObservers(Ic, nc)
          }
          const Ic = cB.pickedMesh._getActionManagerForTrigger();
          if (Ic && !nc.ignore) {
            Ic.processTrigger(7, mB.CreateNew(cB.pickedMesh, Bc, cB)), !nc.hasSwiped && nc.singleClick && Ic.processTrigger(1, mB.CreateNew(cB.pickedMesh, Bc, cB));
            const Vc = cB.pickedMesh._getActionManagerForTrigger(6);
            nc.lq && Vc && Vc.processTrigger(6, mB.CreateNew(cB.pickedMesh, Bc, cB))
          }
        } else if (!nc.ignore)
          for (const Ic of Vc._pointerUpStage) cB = Ic.action(this._unTranslatedPointerX, this._unTranslatedPointerY, cB, Bc, nc.lq);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const cB = this._pickedDownMesh._getActionManagerForTrigger(16);
          cB && cB.processTrigger(16, mB.CreateNew(this._pickedDownMesh, Bc))
        }
        if (!nc.ignore) {
          const Ic = new aB.i(aB.d.POINTERUP, Bc, cB);
          if (this._setRayOnPointerInfo(cB, Bc), Vc.onPointerObservable.notifyObservers(Ic, aB.d.POINTERUP), Vc.onPointerUp && Vc.onPointerUp(Bc, cB, aB.d.POINTERUP), !nc.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Ic = 0;
            if (nc.singleClick ? Ic = aB.d.POINTERTAP : nc.lq && (Ic = aB.d.POINTERDOUBLETAP), Ic) {
              const nc = new aB.i(Ic, Bc, cB);
              Vc.onPointerObservable.hasObservers() && Vc.onPointerObservable.hasSpecificMask(Ic) && Vc.onPointerObservable.notifyObservers(nc, Ic)
            }
          }
        }
      }
      isPointerCaptured() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[cB]
      }
      attachControl() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ic = this._scene,
          rB = Ic.RV();
        Vc || (Vc = rB.getInputElement()), this._alreadyAttached && this.detachControl(), Vc && (this._alreadyAttachedTo = Vc), this._deviceSourceManager = new kB(rB), this._initActionManager = cB => {
          if (!this._meshPickProceed) {
            const Bc = Ic.skipPointerUpPicking || 0 === Ic._registeredActions && !this._checkForPicking() && !Ic.onPointerUp ? null : Ic.Vn(this._unTranslatedPointerX, this._unTranslatedPointerY, Ic.pointerUpPredicate, Ic.pointerUpFastCheck, Ic.cameraToUseForPointers, Ic.pointerUpTrianglePredicate);
            this._currentPickResult = Bc, Bc && (cB = Bc.hit && Bc.pickedMesh ? Bc.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return cB
        }, this._delayedSimpleClick = (cB, Bc, nc) => {
          if ((Date.now() - this._previousStartingPointerTime > Fc.DoubleClickDelay && !this._doubleClickOccured || cB !== this._previousButtonPressed) && (this._doubleClickOccured = !1, Bc.singleClick = !0, Bc.ignore = !1, this._delayedClicks[cB])) {
            const Bc = this._delayedClicks[cB].evt,
              nc = aB.d.POINTERTAP,
              Vc = new aB.i(nc, Bc, this._currentPickResult);
            Ic.onPointerObservable.hasObservers() && Ic.onPointerObservable.hasSpecificMask(nc) && Ic.onPointerObservable.notifyObservers(Vc, nc), this._delayedClicks[cB] = null
          }
        }, this._initClickEvent = (cB, Bc, nc, Vc) => {
          const Ic = new Hc;
          this._currentPickResult = null;
          let rB = null,
            uc = cB.hasSpecificMask(aB.d.POINTERPICK) || Bc.hasSpecificMask(aB.d.POINTERPICK) || cB.hasSpecificMask(aB.d.POINTERTAP) || Bc.hasSpecificMask(aB.d.POINTERTAP) || cB.hasSpecificMask(aB.d.POINTERDOUBLETAP) || Bc.hasSpecificMask(aB.d.POINTERDOUBLETAP);
          !uc && lc && (rB = this._initActionManager(rB, Ic), rB && (uc = rB.hasPickTriggers));
          let sc = !1;
          if (uc = uc && !this._isMultiTouchGesture, uc) {
            const uc = nc.button;
            if (Ic.hasSwiped = this._isPointerSwiping(), !Ic.hasSwiped) {
              let Mc = !Fc.ExclusiveDoubleClickMode;
              if (Mc || (Mc = !cB.hasSpecificMask(aB.d.POINTERDOUBLETAP) && !Bc.hasSpecificMask(aB.d.POINTERDOUBLETAP), Mc && !lc.HasSpecificTrigger(6) && (rB = this._initActionManager(rB, Ic), rB && (Mc = !rB.hasSpecificTrigger(6)))), Mc)(Date.now() - this._previousStartingPointerTime > Fc.DoubleClickDelay || uc !== this._previousButtonPressed) && (Ic.singleClick = !0, Vc(Ic, this._currentPickResult), sc = !0);
              else {
                const cB = {
                  evt: nc,
                  clickInfo: Ic,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, uc, Ic, Vc), Fc.DoubleClickDelay)
                };
                this._delayedClicks[uc] = cB
              }
              let Pc = cB.hasSpecificMask(aB.d.POINTERDOUBLETAP) || Bc.hasSpecificMask(aB.d.POINTERDOUBLETAP);
              !Pc && lc.HasSpecificTrigger(6) && (rB = this._initActionManager(rB, Ic), rB && (Pc = rB.hasSpecificTrigger(6))), Pc && (uc === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < Fc.DoubleClickDelay && !this._doubleClickOccured ? (Ic.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = uc, Fc.ExclusiveDoubleClickMode ? (this._delayedClicks[uc] && (clearTimeout(this._delayedClicks[uc]?.timeoutId), this._delayedClicks[uc] = null), Vc(Ic, this._previousPickResult)) : Vc(Ic, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Ic.lq = !0, Ic.ignore = !1, Fc.ExclusiveDoubleClickMode && this._delayedClicks[uc] && (clearTimeout(this._delayedClicks[uc]?.timeoutId), this._delayedClicks[uc] = null), Vc(Ic, this._currentPickResult)), sc = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = uc))
            }
          }
          sc || Vc(Ic, this._currentPickResult)
        }, this._onPointerMove = cB => {
          if (this._updatePointerPosition(cB), this._latestPointerMoveEvents.set(cB.pointerId, {
              event: cB,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > Fc.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > Fc.DragMovementThreshold), rB.isPointerLock && rB._verifyPointerLock(), this._checkPrePointerObservable(null, cB, cB.inputIndex >= Lc.MouseWheelX && cB.inputIndex <= Lc.MouseWheelZ ? aB.d.POINTERWHEEL : aB.d.POINTERMOVE)) return;
          if (!Ic.cameraToUseForPointers && !Ic.activeCamera) return;
          if (Ic.skipPointerMovePicking) return void this._processPointerMove(new fc.c, cB);
          this._ensurePointerMovePredicate();
          const Bc = Ic._registeredActions > 0 || Ic.constantlyUpdateMeshUnderPointer ? this._pickMove(cB) : null;
          this._processPointerMove(Bc, cB)
        }, this._onPointerDown = cB => {
          const Bc = this._activePointerIds.indexOf(-1);
          if (-1 === Bc ? this._activePointerIds.push(cB.pointerId) : this._activePointerIds[Bc] = cB.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, Fc.ExclusiveDoubleClickMode)
            for (let Vc = 0; Vc < this._delayedClicks.length; Vc++)
              if (this._delayedClicks[Vc])
                if (cB.button === Vc) clearTimeout(this._delayedClicks[Vc]?.timeoutId);
                else {
                  const cB = this._delayedClicks[Vc].clickInfo;
                  this._doubleClickOccured = !1, cB.singleClick = !0, cB.ignore = !1;
                  const Bc = this._delayedClicks[Vc].evt,
                    nc = aB.d.POINTERTAP,
                    rB = new aB.i(nc, Bc, this._currentPickResult);
                  Ic.onPointerObservable.hasObservers() && Ic.onPointerObservable.hasSpecificMask(nc) && Ic.onPointerObservable.notifyObservers(rB, nc), this._delayedClicks[Vc] = null
                } if (this._updatePointerPosition(cB), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = cB.button), Ic.preventDefaultOnPointerDown && Vc && (cB.preventDefault(), Vc.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, cB, aB.d.POINTERDOWN)) return;
          if (!Ic.cameraToUseForPointers && !Ic.activeCamera) return;
          let nc;
          this._pointerCaptures[cB.pointerId] = !0, Ic.pointerDownPredicate || (Ic.pointerDownPredicate = cB => cB.ur && cB.isVisible && cB.isReady() && cB.isEnabled() && (!Ic.cameraToUseForPointers || 0 !== (Ic.cameraToUseForPointers.layerMask & cB.layerMask))), this._pickedDownMesh = null, nc = Ic.skipPointerDownPicking || 0 === Ic._registeredActions && !this._checkForPicking() && !Ic.onPointerDown ? new fc.c : Ic.Vn(this._unTranslatedPointerX, this._unTranslatedPointerY, Ic.pointerDownPredicate, Ic.pointerDownFastCheck, Ic.cameraToUseForPointers, Ic.pointerDownTrianglePredicate), this._processPointerDown(nc, cB)
        }, this._onPointerUp = cB => {
          const Bc = this._activePointerIds.indexOf(cB.pointerId); - 1 !== Bc && (this._activePointerIds[Bc] = -1, this._activePointerIdsCount--, "touch" === cB.pointerType && this._latestPointerMoveEvents.delete(cB.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(cB), Ic.preventDefaultOnPointerUp && Vc && (cB.preventDefault(), Vc.focus()), this._initClickEvent(Ic.onPrePointerObservable, Ic.onPointerObservable, cB, ((Bc, nc) => {
            if (Ic.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !Bc.ignore)) {
              if (this._checkPrePointerObservable(null, cB, aB.d.POINTERUP)) return this._swipeButtonPressed === cB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === cB.buttons && (this._pointerCaptures[cB.pointerId] = !1));
              Bc.hasSwiped || (Bc.singleClick && Ic.onPrePointerObservable.hasSpecificMask(aB.d.POINTERTAP) && this._checkPrePointerObservable(null, cB, aB.d.POINTERTAP) && (this._skipPointerTap = !0), Bc.lq && Ic.onPrePointerObservable.hasSpecificMask(aB.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, cB, aB.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[cB.pointerId] ? (0 === cB.buttons && (this._pointerCaptures[cB.pointerId] = !1), (Ic.cameraToUseForPointers || Ic.activeCamera) && (Ic.pointerUpPredicate || (Ic.pointerUpPredicate = cB => cB.ur && cB.isVisible && cB.isReady() && cB.isEnabled() && (!Ic.cameraToUseForPointers || 0 !== (Ic.cameraToUseForPointers.layerMask & cB.layerMask))), !this._meshPickProceed && (lc && lc.HasTriggers || this._checkForPicking() || Ic.onPointerUp) && this._initActionManager(null, Bc), nc || (nc = this._currentPickResult), this._processPointerUp(nc, cB, Bc), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === cB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === cB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = cB => {
          const Bc = Cc.c.KEYDOWN;
          if (Ic.onPreKeyboardObservable.hasObservers()) {
            const nc = new Cc.f(Bc, cB);
            if (Ic.onPreKeyboardObservable.notifyObservers(nc, Bc), nc.skipOnKeyboardObservable) return
          }
          if (Ic.onKeyboardObservable.hasObservers()) {
            const nc = new Cc.i(Bc, cB);
            Ic.onKeyboardObservable.notifyObservers(nc, Bc)
          }
          Ic.actionManager && Ic.actionManager.processTrigger(14, mB.CreateNewFromScene(Ic, cB))
        }, this._onKeyUp = cB => {
          const Bc = Cc.c.KEYUP;
          if (Ic.onPreKeyboardObservable.hasObservers()) {
            const nc = new Cc.f(Bc, cB);
            if (Ic.onPreKeyboardObservable.notifyObservers(nc, Bc), nc.skipOnKeyboardObservable) return
          }
          if (Ic.onKeyboardObservable.hasObservers()) {
            const nc = new Cc.i(Bc, cB);
            Ic.onKeyboardObservable.notifyObservers(nc, Bc)
          }
          Ic.actionManager && Ic.actionManager.processTrigger(15, mB.CreateNewFromScene(Ic, cB))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Vc => {
          Vc.deviceType === Yc.Mouse ? Vc.onInputChangedObservable.add((Ic => {
            this._originMouseEvent = Ic, Ic.inputIndex === Lc.LeftClick || Ic.inputIndex === Lc.MiddleClick || Ic.inputIndex === Lc.RightClick || Ic.inputIndex === Lc.BrowserBack || Ic.inputIndex === Lc.BrowserForward ? Bc && 1 === Vc.getInput(Ic.inputIndex) ? this._onPointerDown(Ic) : cB && 0 === Vc.getInput(Ic.inputIndex) && this._onPointerUp(Ic) : nc && (Ic.inputIndex === Lc.Move ? this._onPointerMove(Ic) : Ic.inputIndex !== Lc.MouseWheelX && Ic.inputIndex !== Lc.MouseWheelY && Ic.inputIndex !== Lc.MouseWheelZ || this._onPointerMove(Ic))
          })) : Vc.deviceType === Yc.Touch ? Vc.onInputChangedObservable.add((Ic => {
            Ic.inputIndex === Lc.LeftClick && (Bc && 1 === Vc.getInput(Ic.inputIndex) ? (this._onPointerDown(Ic), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : cB && 0 === Vc.getInput(Ic.inputIndex) && (this._onPointerUp(Ic), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), nc && Ic.inputIndex === Lc.Move && this._onPointerMove(Ic)
          })) : Vc.deviceType === Yc.Keyboard && Vc.onInputChangedObservable.add((cB => {
            "keydown" === cB.type ? this._onKeyDown(cB) : "keyup" === cB.type && this._onKeyUp(cB)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[Bc] === cB && (!cB || !cB._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Ic = this._meshUnderPointerId[Bc];
        let rB;
        Ic && (rB = Ic._getActionManagerForTrigger(10), rB && rB.processTrigger(10, new mB(Ic, this._pointerX, this._pointerY, cB, Vc, {
          pointerId: Bc
        }))), cB ? (this._meshUnderPointerId[Bc] = cB, this._pointerOverMesh = cB, rB = cB._getActionManagerForTrigger(9), rB && rB.processTrigger(9, new mB(cB, this._pointerX, this._pointerY, cB, Vc, {
          pointerId: Bc,
          pickResult: nc
        }))) : (delete this._meshUnderPointerId[Bc], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: cB,
          pointerId: Bc
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(cB) {
        this._pointerOverMesh === cB && (this._pointerOverMesh = null), this._pickedDownMesh === cB && (this._pickedDownMesh = null), this._pickedUpMesh === cB && (this._pickedUpMesh = null);
        for (const Bc in this._meshUnderPointerId) this._meshUnderPointerId[Bc] === cB && delete this._meshUnderPointerId[Bc]
      }
    }
    Fc.DragMovementThreshold = 10, Fc.LongPressDelay = 500, Fc.DoubleClickDelay = 300, Fc.ExclusiveDoubleClickMode = !1;
    var Jc = nc(38002),
      jB = nc(35815),
      Rc = nc(36327);
    class iB {
      static get UniqueId() {
        const cB = this._UniqueIdCounter;
        return this._UniqueIdCounter++, cB
      }
    }
    iB._UniqueIdCounter = 1;
    var Kc = nc(38090),
      xB = nc(38232),
      dc = nc(35768);
    class Ac {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var Gc, cn, BB, nB, VB, IB, rn, uB, sB, MB, PB, qn, OB, TB, fB, mn, eB, tn, SB, yn, zn, pB, hB, an, lB, YB, LB, gn, UB, bn, ZB, QB, CB, vn, DB, NB, EB, oB, WB, wB, kn, XB, HB, FB, JB, jn, RB, KB, xn, dB, AB, GB, cV, Bn = nc(37191),
      nn = nc(35799);
    const Vn = new qB.t,
      In = new qB.t;
    var rV;
    ! function(cB) {
      cB[cB.BackwardCompatible = 0] = "BackwardCompatible", cB[cB.Intermediate = 1] = "Intermediate", cB[cB.Aggressive = 2] = "Aggressive"
    }(rV || (rV = {}));
    class un {
      static DefaultMaterialFactory(cB) {
        throw (0, hc.k)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, hc.k)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(cB) {
        cB !== this._clearColor && (this._clearColor = cB, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(cB) {
        if (cB !== this._performancePriority) {
          switch (this._performancePriority = cB, cB) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(cB)
        }
      }
      set forceWireframe(cB) {
        this._forceWireframe !== cB && (this._forceWireframe = cB, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(cB) {
        this._skipFrustumClipping !== cB && (this._skipFrustumClipping = cB)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(cB) {
        this._forcePointsCloud !== cB && (this._forcePointsCloud = cB, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(cB) {
        this._environmentTexture !== cB && (this._environmentTexture = cB, this.onEnvironmentTextureChangedObservable.notifyObservers(cB), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let cB = [];
        cB = cB.concat(this.meshes), cB = cB.concat(this.lights), cB = cB.concat(this.cameras), cB = cB.concat(this.transformNodes);
        for (const Bc of this.skeletons) cB = cB.concat(Bc.bones);
        return cB
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(cB) {
        this._animationPropertiesOverride = cB
      }
      set onDispose(cB) {
        this._onDisposeObserver && this.XBc.remove(this._onDisposeObserver), this._onDisposeObserver = this.XBc.add(cB)
      }
      set beforeRender(cB) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), cB && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(cB))
      }
      set afterRender(cB) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), cB && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(cB))
      }
      set beforeCameraRender(cB) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(cB)
      }
      set afterCameraRender(cB) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(cB)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(cB) {
        this._pointerPickingConfiguration.pointerDownPredicate = cB
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(cB) {
        this._pointerPickingConfiguration.pointerUpPredicate = cB
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(cB) {
        this._pointerPickingConfiguration.pointerMovePredicate = cB
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(cB) {
        this._pointerPickingConfiguration.pointerDownFastCheck = cB
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(cB) {
        this._pointerPickingConfiguration.pointerUpFastCheck = cB
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(cB) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = cB
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(cB) {
        this._pointerPickingConfiguration.skipPointerMovePicking = cB
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(cB) {
        this._pointerPickingConfiguration.skipPointerDownPicking = cB
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(cB) {
        this._pointerPickingConfiguration.skipPointerUpPicking = cB
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return Fc.DragMovementThreshold
      }
      static set DragMovementThreshold(cB) {
        Fc.DragMovementThreshold = cB
      }
      static get LongPressDelay() {
        return Fc.LongPressDelay
      }
      static set LongPressDelay(cB) {
        Fc.LongPressDelay = cB
      }
      static get DoubleClickDelay() {
        return Fc.DoubleClickDelay
      }
      static set DoubleClickDelay(cB) {
        Fc.DoubleClickDelay = cB
      }
      static get ExclusiveDoubleClickMode() {
        return Fc.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(cB) {
        Fc.ExclusiveDoubleClickMode = cB
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? qB.p.ZeroReadOnly
      }
      bindEyePosition(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = this._eyePosition,
          Ic = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          rB = this.floatingOriginOffset,
          uc = Vn.set(Vc.x, Vc.y, Vc.z, Ic ? -1 : 1),
          sc = uc.subtractFromFloatsToRef(rB.x, rB.y, rB.z, 0, In);
        return cB && (nc ? cB.setFloat3(Bc, sc.x, sc.y, sc.z) : cB.setVector4(Bc, sc)), uc
      }
      finalizeSceneUbo() {
        const cB = this.getSceneUniformBuffer(),
          Bc = this.bindEyePosition(null),
          nc = this.floatingOriginOffset;
        return cB.updateFloat4("vEyePosition", Bc.x - nc.x, Bc.y - nc.y, Bc.z - nc.z, Bc.w), cB.update(), cB
      }
      set useRightHandedSystem(cB) {
        this._useRightHandedSystem !== cB && (this._useRightHandedSystem = cB, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(cB) {
        this._currentStepId = cB
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(cB) {
        this._fogEnabled !== cB && (this._fogEnabled = cB, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(cB) {
        this._fogMode !== cB && (this._fogMode = cB, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(cB) {
        this._shadowsEnabled !== cB && (this._shadowsEnabled = cB, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(cB) {
        this._lightsEnabled !== cB && (this._lightsEnabled = cB, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(cB) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), cB && (this._unObserveActiveCameras = (0, dc.i)(cB, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = cB
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(cB) {
        cB !== this._activeCamera && (this._activeCamera = cB, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return un.DefaultMaterialFactory !== un._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = un.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(cB) {
        this._defaultMaterial = cB
      }
      set texturesEnabled(cB) {
        this._texturesEnabled !== cB && (this._texturesEnabled = cB, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(cB) {
        if (this._frameGraph) return this._frameGraph = cB, void(cB || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = cB, cB && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(cB) {
        this._skeletonsEnabled !== cB && (this._skeletonsEnabled = cB, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = un.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const cB of this._transientComponents) cB.register();
          this._transientComponents.length = 0
        }
      }
      bqc(cB) {
        this._components.push(cB), this._transientComponents.push(cB);
        const Bc = cB;
        Bc.addFromContainer && Bc.serialize && this._serializableComponents.push(Bc)
      }
      _getComponent(cB) {
        for (const Bc of this._components)
          if (Bc.name === cB) return Bc;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(cB, Bc) {
        this._inputManager = new Fc(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new jB.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new uc.c, this.ambientColor = new jB.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new uc.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.qD = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.XBc = new uc.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new uc.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new uc.c, this.onAfterRenderCameraObservable = new uc.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new uc.c, this.onAfterAnimationsObservable = new uc.c, this.onBeforeDrawPhaseObservable = new uc.c, this.onAfterDrawPhaseObservable = new uc.c, this.onReadyObservable = new uc.c, this.onBeforeCameraRenderObservable = new uc.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new uc.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new uc.c, this.onAfterActiveMeshesEvaluationObservable = new uc.c, this.onBeforeParticlesRenderingObservable = new uc.c, this.onAfterParticlesRenderingObservable = new uc.c, this.onDataLoadedObservable = new uc.c, this.onNewCameraAddedObservable = new uc.c, this.onCameraRemovedObservable = new uc.c, this.onNewLightAddedObservable = new uc.c, this.onLightRemovedObservable = new uc.c, this.onNewGeometryAddedObservable = new uc.c, this.onGeometryRemovedObservable = new uc.c, this.onNewTransformNodeAddedObservable = new uc.c, this.onTransformNodeRemovedObservable = new uc.c, this.onNewMeshAddedObservable = new uc.c, this.onMeshRemovedObservable = new uc.c, this.onNewSkeletonAddedObservable = new uc.c, this.onSkeletonRemovedObservable = new uc.c, this.onNewParticleSystemAddedObservable = new uc.c, this.onParticleSystemRemovedObservable = new uc.c, this.onNewAnimationGroupAddedObservable = new uc.c, this.onAnimationGroupRemovedObservable = new uc.c, this.onNewMaterialAddedObservable = new uc.c, this.onNewMultiMaterialAddedObservable = new uc.c, this.onMaterialRemovedObservable = new uc.c, this.onMultiMaterialRemovedObservable = new uc.c, this.onNewTextureAddedObservable = new uc.c, this.onTextureRemovedObservable = new uc.c, this.onNewFrameGraphAddedObservable = new uc.c, this.onFrameGraphRemovedObservable = new uc.c, this.onNewObjectRendererAddedObservable = new uc.c, this.onObjectRendererRemovedObservable = new uc.c, this.onNewPostProcessAddedObservable = new uc.c, this.onPostProcessRemovedObservable = new uc.c, this.onNewEffectLayerAddedObservable = new uc.c, this.onEffectLayerRemovedObservable = new uc.c, this.onBeforeRenderTargetsRenderObservable = new uc.c, this.onAfterRenderTargetsRenderObservable = new uc.c, this.onBeforeStepObservable = new uc.c, this.onAfterStepObservable = new uc.c, this.onActiveCameraChanged = new uc.c, this.onActiveCamerasChanged = new uc.c, this.onBeforeRenderingGroupObservable = new uc.c, this.onAfterRenderingGroupObservable = new uc.c, this.onMeshImportedObservable = new uc.c, this.onAnimationFileImportedObservable = new uc.c, this.onEnvironmentTextureChangedObservable = new uc.c, this.onMeshUnderPointerUpdatedObservable = new uc.c, this._registeredForLateAnimationBindings = new sc.c(256), this._pointerPickingConfiguration = new Ac, this.onPrePointerObservable = new uc.c, this.onPointerObservable = new uc.c, this.onPreKeyboardObservable = new uc.c, this.onKeyboardObservable = new uc.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = un.FOGMODE_NONE, this.fogColor = new jB.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.Wnc = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new qB.p(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new sc.c(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new Jc.e, this._activeIndices = new Jc.e, this._activeParticles = new Jc.e, this._activeBones = new Jc.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new sc.e(256), this._processedMaterials = new sc.e(256), this._renderTargets = new sc.c(256), this._materialsRenderTargets = new sc.c(256), this._activeParticleSystems = new sc.e(256), this._activeSkeletons = new sc.c(32), this._softwareSkinnedMeshes = new sc.c(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = qB.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = yB.e.Create(), this._beforeClearStage = yB.e.Create(), this._beforeRenderTargetClearStage = yB.e.Create(), this._gatherRenderTargetsStage = yB.e.Create(), this._gatherActiveCameraRenderTargetsStage = yB.e.Create(), this._isReadyForMeshStage = yB.e.Create(), this._beforeEvaluateActiveMeshStage = yB.e.Create(), this._evaluateSubMeshStage = yB.e.Create(), this._preActiveMeshStage = yB.e.Create(), this._cameraDrawRenderTargetStage = yB.e.Create(), this._beforeCameraDrawStage = yB.e.Create(), this._beforeRenderTargetDrawStage = yB.e.Create(), this._beforeRenderingGroupDrawStage = yB.e.Create(), this._beforeRenderingMeshStage = yB.e.Create(), this._afterRenderingMeshStage = yB.e.Create(), this._afterRenderingGroupDrawStage = yB.e.Create(), this._afterCameraDrawStage = yB.e.Create(), this._afterCameraPostProcessStage = yB.e.Create(), this._afterRenderTargetDrawStage = yB.e.Create(), this._afterRenderTargetPostProcessStage = yB.e.Create(), this._afterRenderStage = yB.e.Create(), this._pointerMoveStage = yB.e.Create(), this._pointerDownStage = yB.e.Create(), this._pointerUpStage = yB.e.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new uc.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const nc = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...Bc
        };
        this.defaultCameraLayerMask = nc.defaultCameraLayerMask, this.defaultRenderableLayerMask = nc.defaultRenderableLayerMask, cB = this._engine = cB || pc.d.LastCreatedEngine, nc.virtual ? cB._virtualScenes.push(this) : (pc.d._LastCreatedScene = this, cB.scenes.push(this)), (cB.getCreationOptions().useLargeWorldRendering || Bc?.useFloatingOrigin) && ((0, tB.e)(), this._floatingOriginScene = this, tB.d.knc = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new Sc.c(this), ec.d && (this.postProcessManager = new ec.d(this)), (0, zB.k)() && this.attachControl(), this._createUbo(), Oc.c && (this._imageProcessingConfiguration = new Oc.c), this.setDefaultCandidateProviders(), nc.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = nc.useMaterialMeshMap, this.useClonedMeshMap = nc.useClonedMeshMap, Bc && Bc.virtual || cB.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(cB) {
        return this._defaultSubMeshCandidates.data = cB.rD, this._defaultSubMeshCandidates.length = cB.rD.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = cB => this._getDefaultSubMeshCandidates(cB), this.getIntersectingSubMeshCandidates = (cB, Bc) => this._getDefaultSubMeshCandidates(cB), this.getCollidingSubMeshCandidates = (cB, Bc) => this._getDefaultSubMeshCandidates(cB)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(cB) {
        this._inputManager.pointerX = cB
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(cB) {
        this._inputManager.pointerY = cB
      }
      getCachedMaterial() {
        return this._cachedMaterial
      }
      getCachedEffect() {
        return this._cachedEffect
      }
      getCachedVisibility() {
        return this._cachedVisibility
      }
      isCachedMaterialInvalid(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== Bc || this._cachedMaterial !== cB || this._cachedVisibility !== nc
      }
      RV() {
        return this._engine
      }
      getTotalVertices() {
        return this._totalVertices.current
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices
      }
      getActiveIndices() {
        return this._activeIndices.current
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices
      }
      getActiveParticles() {
        return this._activeParticles.current
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles
      }
      getActiveBones() {
        return this._activeBones.current
      }
      get activeBonesPerfCounter() {
        return this._activeBones
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1
      }
      getRenderId() {
        return this._renderId
      }
      getFrameId() {
        return this._frameId
      }
      incrementRenderId() {
        this._renderId++
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer())
      }
      simulatePointerMove(cB, Bc) {
        return this._inputManager.simulatePointerMove(cB, Bc), this
      }
      simulatePointerDown(cB, Bc) {
        return this._inputManager.simulatePointerDown(cB, Bc), this
      }
      simulatePointerUp(cB, Bc, nc) {
        return this._inputManager.simulatePointerUp(cB, Bc, nc), this
      }
      isPointerCaptured() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(cB)
      }
      attachControl() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(cB, Bc, nc)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let cB, Bc = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const nc = this.RV(),
          Vc = nc.currentRenderPassId;
        nc.currentRenderPassId = this.activeCamera?.renderPassId ?? Vc;
        let Ic = !0;
        for (this._pendingData.length > 0 && (Ic = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Ic && (Ic = this.depthPeelingRenderer.isReady()), Bc && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), cB = 0; cB < this.meshes.length; cB++) {
          const Vc = this.meshes[cB];
          if (!Vc.rD || 0 === Vc.rD.length) continue;
          if (!Vc.isReady(!0)) {
            Ic = !1;
            continue
          }
          const rB = Vc.hasThinInstances || "InstancedMesh" === Vc.getClassName() || "InstancedLinesMesh" === Vc.getClassName() || nc.getCaps().instancedArrays && Vc.instances.length > 0;
          for (let cB = 0, Bc = this._isReadyForMeshStage; cB < Bc.length; cB++) {
            Bc[cB].action(Vc, rB) || (Ic = !1)
          }
          if (!Bc) continue;
          const uc = Vc.material || this.defaultMaterial;
          if (uc)
            if (uc._storeEffectOnSubMeshes)
              for (const cB of Vc.rD) {
                const Bc = cB.AV();
                Bc && Bc.hasRenderTargetTextures && null != Bc.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Bc) && (this._processedMaterials.push(Bc), this._materialsRenderTargets.concatWithNoDuplicate(Bc.getRenderTargetTextures()))
              } else uc.hasRenderTargetTextures && null != uc.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(uc) && (this._processedMaterials.push(uc), this._materialsRenderTargets.concatWithNoDuplicate(uc.getRenderTargetTextures()))
        }
        if (Bc) {
          for (cB = 0; cB < this._materialsRenderTargets.length; ++cB) {
            this._materialsRenderTargets.data[cB].isReadyForRendering() || (Ic = !1)
          }
          for (cB = 0; cB < this.customRenderTargets.length; ++cB) {
            this.customRenderTargets[cB].isReadyForRendering() || (Ic = !1)
          }
        }
        for (cB = 0; cB < this.geometries.length; cB++) {
          2 === this.geometries[cB].delayLoadState && (Ic = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const rB of this.activeCameras) rB.isReady(!0) || (Ic = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Ic = !1));
        for (const rB of this.qD) rB.isReady() || (Ic = !1);
        if (this.proceduralTexturesEnabled)
          for (const rB of this.proceduralTextures) rB.isReady() || (Ic = !1);
        if (this.layers)
          for (const rB of this.layers) rB.isReady() || (Ic = !1);
        if (this.effectLayers)
          for (const rB of this.effectLayers) rB.isLayerReady() || (Ic = !1);
        for (const rB of this._isReadyChecks) rB.isReady() || (Ic = !1);
        return nc.areAllEffectsReady() || (Ic = !1), nc.currentRenderPassId = Vc, Ic
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(cB) {
        this.onBeforeRenderObservable.add(cB)
      }
      unregisterBeforeRender(cB) {
        this.onBeforeRenderObservable.removeCallback(cB)
      }
      registerAfterRender(cB) {
        this.onAfterRenderObservable.add(cB)
      }
      unregisterAfterRender(cB) {
        this.onAfterRenderObservable.removeCallback(cB)
      }
      _executeOnceBeforeRender(cB) {
        const Bc = () => {
          cB(), setTimeout((() => {
            this.unregisterBeforeRender(Bc)
          }))
        };
        this.registerBeforeRender(Bc)
      }
      executeOnceBeforeRender(cB, Bc) {
        void 0 !== Bc ? setTimeout((() => {
          this._executeOnceBeforeRender(cB)
        }), Bc) : this._executeOnceBeforeRender(cB)
      }
      addPendingData(cB) {
        this._pendingData.push(cB)
      }
      removePendingData(cB) {
        const Bc = this.isLoading,
          nc = this._pendingData.indexOf(cB); - 1 !== nc && this._pendingData.splice(nc, 1), Bc && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(cB) {
        -1 === this._isReadyChecks.indexOf(cB) && this._isReadyChecks.push(cB)
      }
      removeIsReadyCheck(cB) {
        const Bc = this._isReadyChecks.indexOf(cB); - 1 !== Bc && this._isReadyChecks.splice(Bc, 1)
      }
      executeWhenReady(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(cB), null === this._executeWhenReadyTimeoutId && this._checkIsReady(Bc)
      }
      async whenReadyAsync() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((Bc => {
          this.executeWhenReady((() => {
            Bc()
          }), cB)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = rB.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && rB.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(cB)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(cB)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = rB.c.Now
      }
      getViewMatrix() {
        return this._viewMatrix
      }
      getProjectionMatrix() {
        return this._projectionMatrix
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix
      }
      getTransformMatrix() {
        return this._transformMatrix
      }
      setTransformMatrix(cB, Bc, nc, Vc) {
        this._multiviewSceneUboIsActive = !!(nc && Vc && this._multiviewSceneUbo), this._viewUpdateFlag === cB.updateFlag && this._projectionUpdateFlag === Bc.updateFlag || (this._viewUpdateFlag = cB.updateFlag, this._projectionUpdateFlag = Bc.updateFlag, this._viewMatrix = cB, this._projectionMatrix = Bc, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new qB.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? Rc.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Rc.b.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(nc, Vc) : this._sceneUbo.useUbo && (this._sceneUbo.Buc("viewProjection", this._transformMatrix), this._sceneUbo.Buc("view", this._viewMatrix), this._sceneUbo.Buc("projection", this._projectionMatrix), this._sceneUbo.Buc("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(cB, Bc) {
        const nc = "boolean" === typeof Bc ? Bc : Bc?.trackUBOsInFrame,
          Vc = new Tc.c(this._engine, void 0, !1, cB ?? "Ir", void 0, nc);
        return Vc.addUniform("viewProjection", 16), Vc.addUniform("view", 16), Vc.addUniform("projection", 16), Vc.addUniform("vEyePosition", 4), Vc.addUniform("inverseProjection", 16), Vc
      }
      setSceneUniformBuffer(cB) {
        this._sceneUbo = cB, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : qB.p.ZeroReadOnly
      }
      getUniqueId() {
        return iB.UniqueId
      }
      JPc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(cB), cB._resyncLightSources(), cB.parent || cB._addToSceneRootNodes(), Ic.e.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(cB)
          })), Bc)) {
          const Bc = cB.getChildMeshes();
          for (const cB of Bc) this.JPc(cB)
        }
      }
      xnc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = this.meshes.indexOf(cB);
        if (-1 !== nc && (this.meshes.splice(nc, 1), cB.parent || cB._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(cB), this.onMeshRemovedObservable.notifyObservers(cB), Bc) {
          const Bc = cB.getChildMeshes();
          for (const cB of Bc) this.xnc(cB)
        }
        return nc
      }
      addTransformNode(cB) {
        this._blockEntityCollection || cB.knc() === this && -1 !== cB._indexInSceneTransformNodesArray || (cB._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(cB), cB.parent || cB._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(cB))
      }
      removeTransformNode(cB) {
        const Bc = cB._indexInSceneTransformNodesArray;
        if (-1 !== Bc) {
          if (Bc !== this.transformNodes.length - 1) {
            const cB = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[Bc] = cB, cB._indexInSceneTransformNodesArray = Bc
          }
          cB._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), cB.parent || cB._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(cB), Bc
      }
      removeSkeleton(cB) {
        const Bc = this.skeletons.indexOf(cB);
        return -1 !== Bc && (this.skeletons.splice(Bc, 1), this.onSkeletonRemovedObservable.notifyObservers(cB), this._executeActiveContainerCleanup(this._activeSkeletons)), Bc
      }
      removeMorphTargetManager(cB) {
        const Bc = this.morphTargetManagers.indexOf(cB);
        return -1 !== Bc && this.morphTargetManagers.splice(Bc, 1), Bc
      }
      removeLight(cB) {
        const Bc = this.lights.indexOf(cB);
        if (-1 !== Bc) {
          for (const Bc of this.meshes) Bc._removeLightSource(cB, !1);
          this.lights.splice(Bc, 1), this.sortLightsByPriority(), cB.parent || cB._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(cB)
        }
        return Bc
      }
      removeCamera(cB) {
        const Bc = this.cameras.indexOf(cB);
        if (-1 !== Bc && (this.cameras.splice(Bc, 1), cB.parent || cB._removeFromSceneRootNodes()), this.activeCameras) {
          const Bc = this.activeCameras.indexOf(cB); - 1 !== Bc && this.activeCameras.splice(Bc, 1)
        }
        return this.activeCamera === cB && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(cB), Bc
      }
      removeParticleSystem(cB) {
        const Bc = this.qD.indexOf(cB);
        return -1 !== Bc && (this.qD.splice(Bc, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(cB), Bc
      }
      removeAnimation(cB) {
        const Bc = this.animations.indexOf(cB);
        return -1 !== Bc && this.animations.splice(Bc, 1), Bc
      }
      stopAnimation(cB, Bc, nc) {}
      removeAnimationGroup(cB) {
        const Bc = this.animationGroups.indexOf(cB);
        return -1 !== Bc && this.animationGroups.splice(Bc, 1), this.onAnimationGroupRemovedObservable.notifyObservers(cB), Bc
      }
      removeMultiMaterial(cB) {
        const Bc = this.multiMaterials.indexOf(cB);
        return -1 !== Bc && this.multiMaterials.splice(Bc, 1), this.onMultiMaterialRemovedObservable.notifyObservers(cB), Bc
      }
      removeMaterial(cB) {
        const Bc = cB._indexInSceneMaterialArray;
        if (-1 !== Bc && Bc < this.materials.length) {
          if (Bc !== this.materials.length - 1) {
            const cB = this.materials[this.materials.length - 1];
            this.materials[Bc] = cB, cB._indexInSceneMaterialArray = Bc
          }
          cB._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(cB), Bc
      }
      removeActionManager(cB) {
        const Bc = this.actionManagers.indexOf(cB);
        return -1 !== Bc && this.actionManagers.splice(Bc, 1), Bc
      }
      removeTexture(cB) {
        const Bc = this.textures.indexOf(cB);
        return -1 !== Bc && this.textures.splice(Bc, 1), this.onTextureRemovedObservable.notifyObservers(cB), Bc
      }
      removeFrameGraph(cB) {
        const Bc = this.frameGraphs.indexOf(cB);
        return -1 !== Bc && this.frameGraphs.splice(Bc, 1), this.onFrameGraphRemovedObservable.notifyObservers(cB), Bc
      }
      removeObjectRenderer(cB) {
        const Bc = this.objectRenderers.indexOf(cB);
        return -1 !== Bc && this.objectRenderers.splice(Bc, 1), this.onObjectRendererRemovedObservable.notifyObservers(cB), Bc
      }
      removePostProcess(cB) {
        const Bc = this.postProcesses.indexOf(cB);
        return -1 !== Bc && this.postProcesses.splice(Bc, 1), this.onPostProcessRemovedObservable.notifyObservers(cB), Bc
      }
      removeEffectLayer(cB) {
        const Bc = this.effectLayers.indexOf(cB);
        return -1 !== Bc && this.effectLayers.splice(Bc, 1), this.onEffectLayerRemovedObservable.notifyObservers(cB), Bc
      }
      addLight(cB) {
        if (!this._blockEntityCollection) {
          this.lights.push(cB), this.sortLightsByPriority(), cB.parent || cB._addToSceneRootNodes();
          for (const Bc of this.meshes) - 1 === Bc.lightSources.indexOf(cB) && (Bc.lightSources.push(cB), Bc._resyncLightSources());
          Ic.e.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(cB)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(xB.c.CompareLightsPriority)
      }
      addCamera(cB) {
        this._blockEntityCollection || (this.cameras.push(cB), Ic.e.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(cB)
        })), cB.parent || cB._addToSceneRootNodes())
      }
      addSkeleton(cB) {
        this._blockEntityCollection || (this.skeletons.push(cB), Ic.e.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(cB)
        })))
      }
      addParticleSystem(cB) {
        this._blockEntityCollection || (this.qD.push(cB), Ic.e.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(cB)
        })))
      }
      addAnimation(cB) {
        this._blockEntityCollection || this.animations.push(cB)
      }
      addAnimationGroup(cB) {
        this._blockEntityCollection || (this.animationGroups.push(cB), Ic.e.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(cB)
        })))
      }
      addMultiMaterial(cB) {
        this._blockEntityCollection || (this.multiMaterials.push(cB), Ic.e.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(cB)
        })))
      }
      addMaterial(cB) {
        this._blockEntityCollection || cB.knc() === this && -1 !== cB._indexInSceneMaterialArray || (cB._indexInSceneMaterialArray = this.materials.length, this.materials.push(cB), Ic.e.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(cB)
        })))
      }
      addMorphTargetManager(cB) {
        this._blockEntityCollection || this.morphTargetManagers.push(cB)
      }
      addGeometry(cB) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[cB.uniqueId] = this.geometries.length), this.geometries.push(cB))
      }
      addActionManager(cB) {
        this.actionManagers.push(cB)
      }
      addTexture(cB) {
        this._blockEntityCollection || (this.textures.push(cB), this.onNewTextureAddedObservable.notifyObservers(cB))
      }
      addFrameGraph(cB) {
        this.frameGraphs.push(cB), Ic.e.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(cB)
        }))
      }
      addObjectRenderer(cB) {
        this.objectRenderers.push(cB), Ic.e.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(cB)
        }))
      }
      addPostProcess(cB) {
        this._blockEntityCollection || (this.postProcesses.push(cB), Ic.e.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(cB)
        })))
      }
      addEffectLayer(cB) {
        this._blockEntityCollection || (this.effectLayers.push(cB), Ic.e.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(cB)
        })))
      }
      switchActiveCamera(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = cB, Bc && cB.attachControl())
      }
      setActiveCameraById(cB) {
        const Bc = this.getCameraById(cB);
        return Bc ? (this.activeCamera = Bc, Bc) : null
      }
      setActiveCameraByName(cB) {
        const Bc = this.getCameraByName(cB);
        return Bc ? (this.activeCamera = Bc, Bc) : null
      }
      getAnimationGroupByName(cB) {
        for (let Bc = 0; Bc < this.animationGroups.length; Bc++)
          if (this.animationGroups[Bc].name === cB) return this.animationGroups[Bc];
        return null
      }
      _getMaterial(cB, Bc) {
        for (let nc = 0; nc < this.materials.length; nc++) {
          const cB = this.materials[nc];
          if (Bc(cB)) return cB
        }
        if (cB)
          for (let nc = 0; nc < this.multiMaterials.length; nc++) {
            const cB = this.multiMaterials[nc];
            if (Bc(cB)) return cB
          }
        return null
      }
      getMaterialByUniqueID(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(cB, Bc)
      }
      getMaterialByUniqueId(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Bc, (Bc => Bc.uniqueId === cB))
      }
      getMaterialById(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Bc, (Bc => Bc.id === cB))
      }
      getMaterialByName(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Bc, (Bc => Bc.name === cB))
      }
      getLastMaterialById(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let nc = this.materials.length - 1; nc >= 0; nc--)
          if (this.materials[nc].id === cB) return this.materials[nc];
        if (Bc)
          for (let nc = this.multiMaterials.length - 1; nc >= 0; nc--)
            if (this.multiMaterials[nc].id === cB) return this.multiMaterials[nc];
        return null
      }
      getTextureByUniqueId(cB) {
        for (let Bc = 0; Bc < this.textures.length; Bc++)
          if (this.textures[Bc].uniqueId === cB) return this.textures[Bc];
        return null
      }
      getTextureByName(cB) {
        for (let Bc = 0; Bc < this.textures.length; Bc++)
          if (this.textures[Bc].name === cB) return this.textures[Bc];
        return null
      }
      getCameraById(cB) {
        for (let Bc = 0; Bc < this.cameras.length; Bc++)
          if (this.cameras[Bc].id === cB) return this.cameras[Bc];
        return null
      }
      getCameraByUniqueId(cB) {
        for (let Bc = 0; Bc < this.cameras.length; Bc++)
          if (this.cameras[Bc].uniqueId === cB) return this.cameras[Bc];
        return null
      }
      getCameraByName(cB) {
        for (let Bc = 0; Bc < this.cameras.length; Bc++)
          if (this.cameras[Bc].name === cB) return this.cameras[Bc];
        return null
      }
      getBoneById(cB) {
        for (let Bc = 0; Bc < this.skeletons.length; Bc++) {
          const nc = this.skeletons[Bc];
          for (let Bc = 0; Bc < nc.bones.length; Bc++)
            if (nc.bones[Bc].id === cB) return nc.bones[Bc]
        }
        return null
      }
      getBoneByName(cB) {
        for (let Bc = 0; Bc < this.skeletons.length; Bc++) {
          const nc = this.skeletons[Bc];
          for (let Bc = 0; Bc < nc.bones.length; Bc++)
            if (nc.bones[Bc].name === cB) return nc.bones[Bc]
        }
        return null
      }
      getLightByName(cB) {
        for (let Bc = 0; Bc < this.lights.length; Bc++)
          if (this.lights[Bc].name === cB) return this.lights[Bc];
        return null
      }
      getLightById(cB) {
        for (let Bc = 0; Bc < this.lights.length; Bc++)
          if (this.lights[Bc].id === cB) return this.lights[Bc];
        return null
      }
      getLightByUniqueId(cB) {
        for (let Bc = 0; Bc < this.lights.length; Bc++)
          if (this.lights[Bc].uniqueId === cB) return this.lights[Bc];
        return null
      }
      getParticleSystemById(cB) {
        for (let Bc = 0; Bc < this.qD.length; Bc++)
          if (this.qD[Bc].id === cB) return this.qD[Bc];
        return null
      }
      getGeometryById(cB) {
        for (let Bc = 0; Bc < this.geometries.length; Bc++)
          if (this.geometries[Bc].id === cB) return this.geometries[Bc];
        return null
      }
      _getGeometryByUniqueId(cB) {
        if (this._geometriesByUniqueId) {
          const Bc = this._geometriesByUniqueId[cB];
          if (void 0 !== Bc) return this.geometries[Bc]
        } else
          for (let Bc = 0; Bc < this.geometries.length; Bc++)
            if (this.geometries[Bc].uniqueId === cB) return this.geometries[Bc];
        return null
      }
      getFrameGraphByName(cB) {
        for (let Bc = 0; Bc < this.frameGraphs.length; Bc++)
          if (this.frameGraphs[Bc].name === cB) return this.frameGraphs[Bc];
        return null
      }
      pushGeometry(cB, Bc) {
        return !(!Bc && this._getGeometryByUniqueId(cB.uniqueId)) && (this.addGeometry(cB), Ic.e.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(cB)
        })), !0)
      }
      removeGeometry(cB) {
        let Bc;
        if (this._geometriesByUniqueId) {
          if (Bc = this._geometriesByUniqueId[cB.uniqueId], void 0 === Bc) return !1
        } else if (Bc = this.geometries.indexOf(cB), Bc < 0) return !1;
        if (Bc !== this.geometries.length - 1) {
          const cB = this.geometries[this.geometries.length - 1];
          cB && (this.geometries[Bc] = cB, this._geometriesByUniqueId && (this._geometriesByUniqueId[cB.uniqueId] = Bc))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[cB.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(cB), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(cB) {
        for (let Bc = 0; Bc < this.meshes.length; Bc++)
          if (this.meshes[Bc].id === cB) return this.meshes[Bc];
        return null
      }
      getMeshesById(cB) {
        return this.meshes.filter((function(Bc) {
          return Bc.id === cB
        }))
      }
      getTransformNodeById(cB) {
        for (let Bc = 0; Bc < this.transformNodes.length; Bc++)
          if (this.transformNodes[Bc].id === cB) return this.transformNodes[Bc];
        return null
      }
      getTransformNodeByUniqueId(cB) {
        for (let Bc = 0; Bc < this.transformNodes.length; Bc++)
          if (this.transformNodes[Bc].uniqueId === cB) return this.transformNodes[Bc];
        return null
      }
      getTransformNodesById(cB) {
        return this.transformNodes.filter((function(Bc) {
          return Bc.id === cB
        }))
      }
      getMeshByUniqueId(cB) {
        for (let Bc = 0; Bc < this.meshes.length; Bc++)
          if (this.meshes[Bc].uniqueId === cB) return this.meshes[Bc];
        return null
      }
      getLastMeshById(cB) {
        for (let Bc = this.meshes.length - 1; Bc >= 0; Bc--)
          if (this.meshes[Bc].id === cB) return this.meshes[Bc];
        return null
      }
      getLastTransformNodeById(cB) {
        for (let Bc = this.transformNodes.length - 1; Bc >= 0; Bc--)
          if (this.transformNodes[Bc].id === cB) return this.transformNodes[Bc];
        return null
      }
      getLastEntryById(cB) {
        let Bc;
        for (Bc = this.meshes.length - 1; Bc >= 0; Bc--)
          if (this.meshes[Bc].id === cB) return this.meshes[Bc];
        for (Bc = this.transformNodes.length - 1; Bc >= 0; Bc--)
          if (this.transformNodes[Bc].id === cB) return this.transformNodes[Bc];
        for (Bc = this.cameras.length - 1; Bc >= 0; Bc--)
          if (this.cameras[Bc].id === cB) return this.cameras[Bc];
        for (Bc = this.lights.length - 1; Bc >= 0; Bc--)
          if (this.lights[Bc].id === cB) return this.lights[Bc];
        for (Bc = this.skeletons.length - 1; Bc >= 0; Bc--) {
          const nc = this.skeletons[Bc];
          for (let Bc = nc.bones.length - 1; Bc >= 0; Bc--)
            if (nc.bones[Bc].id === cB) return nc.bones[Bc]
        }
        return null
      }
      getNodeById(cB) {
        const Bc = this.getMeshById(cB);
        if (Bc) return Bc;
        const nc = this.getTransformNodeById(cB);
        if (nc) return nc;
        const Vc = this.getLightById(cB);
        if (Vc) return Vc;
        const Ic = this.getCameraById(cB);
        if (Ic) return Ic;
        const rB = this.getBoneById(cB);
        return rB || null
      }
      getNodeByName(cB) {
        const Bc = this.getMeshByName(cB);
        if (Bc) return Bc;
        const nc = this.getTransformNodeByName(cB);
        if (nc) return nc;
        const Vc = this.getLightByName(cB);
        if (Vc) return Vc;
        const Ic = this.getCameraByName(cB);
        if (Ic) return Ic;
        const rB = this.getBoneByName(cB);
        return rB || null
      }
      getMeshByName(cB) {
        for (let Bc = 0; Bc < this.meshes.length; Bc++)
          if (this.meshes[Bc].name === cB) return this.meshes[Bc];
        return null
      }
      getTransformNodeByName(cB) {
        for (let Bc = 0; Bc < this.transformNodes.length; Bc++)
          if (this.transformNodes[Bc].name === cB) return this.transformNodes[Bc];
        return null
      }
      getLastSkeletonById(cB) {
        for (let Bc = this.skeletons.length - 1; Bc >= 0; Bc--)
          if (this.skeletons[Bc].id === cB) return this.skeletons[Bc];
        return null
      }
      getSkeletonByUniqueId(cB) {
        for (let Bc = 0; Bc < this.skeletons.length; Bc++)
          if (this.skeletons[Bc].uniqueId === cB) return this.skeletons[Bc];
        return null
      }
      getSkeletonById(cB) {
        for (let Bc = 0; Bc < this.skeletons.length; Bc++)
          if (this.skeletons[Bc].id === cB) return this.skeletons[Bc];
        return null
      }
      getSkeletonByName(cB) {
        for (let Bc = 0; Bc < this.skeletons.length; Bc++)
          if (this.skeletons[Bc].name === cB) return this.skeletons[Bc];
        return null
      }
      getMorphTargetManagerById(cB) {
        for (let Bc = 0; Bc < this.morphTargetManagers.length; Bc++)
          if (this.morphTargetManagers[Bc].uniqueId === cB) return this.morphTargetManagers[Bc];
        return null
      }
      getMorphTargetById(cB) {
        for (let Bc = 0; Bc < this.morphTargetManagers.length; ++Bc) {
          const nc = this.morphTargetManagers[Bc];
          for (let Bc = 0; Bc < nc.numTargets; ++Bc) {
            const Vc = nc.getTarget(Bc);
            if (Vc.id === cB) return Vc
          }
        }
        return null
      }
      getMorphTargetByName(cB) {
        for (let Bc = 0; Bc < this.morphTargetManagers.length; ++Bc) {
          const nc = this.morphTargetManagers[Bc];
          for (let Bc = 0; Bc < nc.numTargets; ++Bc) {
            const Vc = nc.getTarget(Bc);
            if (Vc.name === cB) return Vc
          }
        }
        return null
      }
      getPostProcessByName(cB) {
        for (let Bc = 0; Bc < this.postProcesses.length; ++Bc) {
          const nc = this.postProcesses[Bc];
          if (nc.name === cB) return nc
        }
        return null
      }
      isActiveMesh(cB) {
        return -1 !== this._activeMeshes.indexOf(cB)
      }
      get uid() {
        return this._uid || (this._uid = Vc.g.RandomId()), this._uid
      }
      addExternalData(cB, Bc) {
        return this._externalData || (this._externalData = new Mc), this._externalData.add(cB, Bc)
      }
      getExternalData(cB) {
        return this._externalData ? this._externalData.get(cB) : null
      }
      getOrAddExternalDataWithFactory(cB, Bc) {
        return this._externalData || (this._externalData = new Mc), this._externalData.getOrAddWithFactory(cB, Bc)
      }
      removeExternalData(cB) {
        return this._externalData.remove(cB)
      }
      _evaluateSubMesh(cB, Bc, nc, Vc) {
        if (Vc || cB.isInFrustum(this._frustumPlanes)) {
          for (let Vc = 0, Ic = this._evaluateSubMeshStage; Vc < Ic.length; Vc++) {
            Ic[Vc].action(Bc, cB)
          }
          const nc = cB.AV();
          null !== nc && void 0 !== nc && (nc.hasRenderTargetTextures && null != nc.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(nc) && (this._processedMaterials.push(nc), this._materialsRenderTargets.concatWithNoDuplicate(nc.getRenderTargetTextures())), this._renderingManager.dispatch(cB, Bc, nc))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(cB) {
        this._preventFreeActiveMeshesAndRenderingGroups !== cB && (cB && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = cB)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let cB = 0; cB < this.activeCameras.length; cB++) {
            const Bc = this.activeCameras[cB];
            Bc && Bc._activeMeshes && Bc._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let cB = 0; cB < this.textures.length; cB++) {
            const Bc = this.textures[cB];
            Bc && Bc.renderList && Bc.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          rB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const uc = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const cB of uc) cB.objectRenderer._freezeActiveMeshes(Vc);
          return this._freezeActiveMeshesCancel = (0, Ic.h)((() => {
            let cB = !0,
              Bc = !0;
            for (const nc of uc) cB && (cB = nc.objectRenderer._isFrozen), Bc && (Bc = null !== nc.objectRenderer._freezeActiveMeshesCancel);
            if (cB) return !0;
            if (!Bc) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = rB, this._skipEvaluateActiveMeshesCompletely = cB, Bc?.()
          }), ((cB, Bc) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), Bc) {
              const Bc = "Scene: Timeout while waiting for meshes to be frozen.";
              nc ? nc(Bc) : (Bn.c.Error(Bc), cB && Bn.c.Error(cB))
            } else {
              const Bc = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              nc ? nc(Bc) : (Bn.c.Error(Bc), cB && (Bn.c.Error(cB), cB.stack && Bn.c.Error(cB.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = rB, this._skipEvaluateActiveMeshesCompletely = cB, Vc)
              for (let cB = 0; cB < this._activeMeshes.length; cB++) this._activeMeshes.data[cB]._freeze();
            Bc && Bc()
          } else nc && nc("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let cB = 0; cB < this.meshes.length; cB++) {
          const Bc = this.meshes[cB];
          Bc._internalAbstractMeshDataInfo && (Bc._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const cB = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const Bc of cB) Bc.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let cB = 0; cB < this._activeMeshes.length; cB++) this._activeMeshes.data[cB]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(cB) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => cB.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const cB = this._activeMeshes.length;
            for (let Bc = 0; Bc < cB; Bc++) {
              this._activeMeshes.data[Bc].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const cB = this._activeParticleSystems.length;
            for (let Bc = 0; Bc < cB; Bc++) this._activeParticleSystems.data[Bc].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Ic = 0, rB = this._beforeEvaluateActiveMeshStage; Ic < rB.length; Ic++) {
          rB[Ic].action()
        }
        const cB = this.getActiveMeshCandidates(),
          Bc = cB.length,
          nc = Jc.e.Enabled,
          Vc = this.customLODSelector;
        for (let Ic = 0; Ic < Bc; Ic++) {
          const Bc = cB.data[Ic],
            rB = !Vc && !Bc.HBc && !Bc._internalMeshDataInfo?._LODLevels.length;
          let uc, sc;
          if ((rB || (uc = Bc._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), uc ? uc[1] = -1 : (uc = [Bc, -1], Bc._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, uc))), !Bc.isBlocked) && (nc && this._totalVertices.addCount(Bc.getTotalVertices(), !1), Bc.isReady() && Bc.isEnabled() && !Bc.Su.hasAZeroComponent)) {
            if (Bc.computeWorldMatrix(), Bc.actionManager && Bc.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Bc), rB) sc = Bc;
            else if (sc = Vc ? Vc(Bc, this.activeCamera) : Bc.getLOD(this.activeCamera), uc[0] = sc, uc[1] = this._frameId, void 0 === sc || null === sc) continue;
            if (sc !== Bc && 0 !== sc.billboardMode && sc.computeWorldMatrix(), Bc._preActivate(), Bc.isVisible && Bc.visibility > 0 && 0 !== (Bc.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || Bc.iI || Bc.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(Bc), this.activeCamera._activeMeshes.push(Bc), sc !== Bc && sc._activate(this._renderId, !1);
              for (let cB = 0, nc = this._preActiveMeshStage; cB < nc.length; cB++) {
                nc[cB].action(Bc)
              }
              Bc._activate(this._renderId, !1) && (Bc.HBc ? Bc._internalAbstractMeshDataInfo._actAsRegularMesh && (sc = Bc) : sc._internalAbstractMeshDataInfo._onlyForInstances = !1, sc._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(Bc, sc)), Bc._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let cB = 0; cB < this.qD.length; cB++) {
            const Bc = this.qD[cB];
            if (!Bc.isStarted() || !Bc.emitter) continue;
            const nc = Bc.emitter;
            nc.position && !nc.isEnabled() || (this._activeParticleSystems.push(Bc), Bc.animate(), this._renderingManager.dispatchParticles(Bc))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(cB) {
        this._skeletonsEnabled && cB.skeleton && (this._activeSkeletons.pushNoDuplicate(cB.skeleton) && (cB.skeleton.prepare(), this._activeBones.addCount(cB.skeleton.bones.length, !1)), cB.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(cB) && this.frameGraph && cB.applySkeleton(cB.skeleton))
      }
      _activeMesh(cB, Bc) {
        this._prepareSkeleton(Bc);
        let nc = cB.Wqc || cB.HBc || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || Bc.iI;
        if (Bc && Bc.rD && Bc.rD.length > 0) {
          const Vc = this.getActiveSubMeshCandidates(Bc),
            Ic = Vc.length;
          nc = nc || 1 === Ic;
          for (let rB = 0; rB < Ic; rB++) {
            const Ic = Vc.data[rB];
            this._evaluateSubMesh(Ic, Bc, cB, nc)
          }
        }
      }
      updateTransformMatrix(cB) {
        const Bc = this.activeCamera;
        if (Bc)
          if (Bc._renderingMultiview) {
            const nc = Bc._rigCameras[0],
              Vc = Bc._rigCameras[1];
            this.setTransformMatrix(nc.getViewMatrix(), nc.getProjectionMatrix(cB), Vc.getViewMatrix(), Vc.getProjectionMatrix(cB))
          } else this.setTransformMatrix(Bc.getViewMatrix(), Bc.getProjectionMatrix(cB))
      }
      _bindFrameBuffer(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (cB && cB._multiviewTexture ? cB._multiviewTexture._bindFrameBuffer() : cB && cB.outputRenderTarget ? cB.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), Bc && this._clearFrameBuffer(cB)
      }
      _clearFrameBuffer(cB) {
        if (cB && cB._multiviewTexture);
        else if (cB && cB.outputRenderTarget && !cB._renderingMultiview) {
          const Bc = cB.outputRenderTarget;
          Bc.onClearObservable.hasObservers() ? Bc.onClearObservable.notifyObservers(this._engine) : Bc.skipInitialClear || cB.isRightCamera || (this.autoClear && this._engine.clear(Bc.clearColor || this._clearColor, !Bc._cleared, !0, !0), Bc._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (cB && cB._skipRendering) return;
        const Ic = this._engine;
        if (this._activeCamera = cB, !this.activeCamera) throw new Error("Active camera not set");
        if (Ic.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && nc) {
          let Bc = !0;
          cB._renderingMultiview && cB.outputRenderTarget && (Bc = cB.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, cB.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), cB._renderingMultiview && cB.outputRenderTarget && (cB.outputRenderTarget.skipInitialClear = Bc)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = cB.outputRenderTarget?.renderPassId ?? cB.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Vc = 0; Vc < this._softwareSkinnedMeshes.length; Vc++) {
          const cB = this._softwareSkinnedMeshes.data[Vc];
          cB.applySkeleton(cB.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), cB.customRenderTargets && cB.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(cB.customRenderTargets), Bc && Bc.customRenderTargets && Bc.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(Bc.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Vc = 0, sc = this._gatherActiveCameraRenderTargetsStage; Vc < sc.length; Vc++) {
          sc[Vc].action(this._renderTargets)
        }
        let rB = !1;
        if (this.renderTargetsEnabled) {
          let cB;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Vc.g.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const Bc = this.getBoundingBoxRenderer?.();
            for (let nc = 0; nc < this._renderTargets.length; nc++) {
              const Vc = this._renderTargets.data[nc];
              if (Vc._shouldRender()) {
                this._renderId++;
                const nc = Vc.activeCamera && Vc.activeCamera !== this.activeCamera;
                Bc && !cB && (cB = Bc.renderList.length > 0 ? Bc.renderList.data.slice() : [], cB.length = Bc.renderList.length), Vc.render(nc, this.dumpNextRenderTargets), rB = !0
              }
            }
            Bc && cB && (Bc.renderList.data = cB, Bc.renderList.length = cB.length), Vc.g.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const Bc = this.getBoundingBoxRenderer?.();
            Bc && !cB && (cB = Bc.renderList.length > 0 ? Bc.renderList.data.slice() : [], cB.length = Bc.renderList.length);
            for (let cB = 0, nc = this._cameraDrawRenderTargetStage; cB < nc.length; cB++) {
              rB = nc[cB].action(this.activeCamera) || rB
            }
            Bc && cB && (Bc.renderList.data = cB, Bc.renderList.length = cB.length)
          }
          this._intermediateRendering = !1
        }
        rB && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || cB._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Vc = 0, sc = this._beforeCameraDrawStage; Vc < sc.length; Vc++) {
          sc[Vc].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const uc = Ic.snapshotRendering && 1 === Ic.snapshotRenderingMode;
        uc && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !uc), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Vc = 0, sc = this._afterCameraDrawStage; Vc < sc.length; Vc++) {
          sc[Vc].action(this.activeCamera)
        }
        if (this.postProcessManager && !cB._multiviewTexture) {
          const Bc = cB.outputRenderTarget ? cB.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(cB.isIntermediate, Bc)
        }
        for (let Vc = 0, sc = this._afterCameraPostProcessStage; Vc < sc.length; Vc++) {
          sc[Vc].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === cB.cameraRigMode || cB._renderingMultiview) return cB._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(cB, void 0, Bc), void this.onAfterRenderCameraObservable.notifyObservers(cB);
        if (cB._useMultiviewToSingleView) this._renderMultiviewToSingleView(cB);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(cB);
          for (let Bc = 0; Bc < cB._rigCameras.length; Bc++) this._renderForCamera(cB._rigCameras[Bc], cB)
        }
        this._activeCamera = cB, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(cB)
      }
      _checkIntersections() {
        for (let cB = 0; cB < this._meshesForIntersections.length; cB++) {
          const Bc = this._meshesForIntersections.data[cB];
          if (Bc.actionManager)
            for (let cB = 0; Bc.actionManager && cB < Bc.actionManager.actions.length; cB++) {
              const nc = Bc.actionManager.actions[cB];
              if (12 === nc.trigger || 13 === nc.trigger) {
                const cB = nc.getTriggerParameter(),
                  Vc = cB.mesh ? cB.mesh : cB,
                  Ic = Vc.Cqc(Bc, cB.usePreciseIntersection),
                  rB = Bc._intersectionsInProgress.indexOf(Vc);
                Ic && -1 === rB ? 12 === nc.trigger ? (nc._executeCurrent(mB.CreateNew(Bc, void 0, Vc)), Bc._intersectionsInProgress.push(Vc)) : 13 === nc.trigger && Bc._intersectionsInProgress.push(Vc) : !Ic && rB > -1 && (13 === nc.trigger && nc._executeCurrent(mB.CreateNew(Bc, void 0, Vc)), Bc.actionManager.hasSpecificTrigger(13, (cB => {
                  const Bc = cB.mesh ? cB.mesh : cB;
                  return Vc === Bc
                })) && 13 !== nc.trigger || Bc._intersectionsInProgress.splice(rB, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(cB) {}
      _animate(cB) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let cB = Math.max(un.MinDeltaTime, Math.min(this._engine.getDeltaTime(), un.MaxDeltaTime)) + this._timeAccumulator;
          const Bc = this._engine.getTimeStep(),
            nc = 1e3 / Bc / 1e3;
          let Vc = 0;
          const Ic = this._engine.getLockstepMaxSteps();
          let rB = Math.floor(cB / Bc);
          for (rB = Math.min(rB, Ic); cB > 0 && Vc < rB;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Bc * nc, this._animate(Bc), this.onAfterAnimationsObservable.notifyObservers(this), this.Wnc && this._advancePhysicsEngineStep(Bc), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Vc++, cB -= Bc;
          this._timeAccumulator = cB < 0 ? 0 : cB
        } else {
          const cB = this.useConstantAnimationDeltaTime ? 16 : Math.max(un.MinDeltaTime, Math.min(this._engine.getDeltaTime(), un.MaxDeltaTime));
          this._animationRatio = .06 * cB, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.Wnc && this._advancePhysicsEngineStep(cB)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(cB) {
        if (cB?.outputRenderTarget && !cB?.isRigCamera && (cB.outputRenderTarget._cleared = !1), cB?.rigCameras?.length)
          for (let Bc = 0; Bc < cB.rigCameras.length; ++Bc) {
            const nc = cB.rigCameras[Bc].outputRenderTarget;
            nc && (nc._cleared = !1)
          }
      }
      resetDrawCache(cB) {
        if (this.meshes)
          for (const Bc of this.meshes) Bc.resetDrawCache(cB)
      }
      _renderWithFrameGraph() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Bc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, cB)
          for (const nc of this.cameras)
            if (nc.update(), 0 !== nc.cameraRigMode)
              for (let cB = 0; cB < nc._rigCameras.length; cB++) nc._rigCameras[cB].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(Bc)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(cB) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const Bc = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Vc.g.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let cB = 0; cB < this._renderTargets.length; cB++) {
            const nc = this._renderTargets.data[cB],
              Vc = nc.activeCamera || Bc;
            this._renderRenderTarget(nc, Vc, !0, this.dumpNextRenderTargets)
          }
          Vc.g.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let nc = 0, Vc = this._beforeClearStage; nc < Vc.length; nc++) {
          Vc[nc].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const Bc = this.getActiveMeshCandidates(),
            nc = Bc.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let cB = 0; cB < nc; cB++) {
                const nc = Bc.data[cB];
                nc._internalAbstractMeshDataInfo._wasActiveLastFrame && nc.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const cB = this._activeParticleSystems.length;
              for (let Bc = 0; Bc < cB; Bc++) this._activeParticleSystems.data[Bc].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Vc = 0; Vc < nc; Vc++) {
              const nc = Bc.data[Vc];
              nc._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, nc.isBlocked || (this._totalVertices.addCount(nc.getTotalVertices(), !1), nc.isReady() && nc.isEnabled() && !nc.Su.hasAZeroComponent && (nc.computeWorldMatrix(cB), nc.actionManager && nc.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(nc)))
            }
            if (this.particlesEnabled)
              for (let cB = 0; cB < this.qD.length; cB++) {
                const Bc = this.qD[cB];
                if (!Bc.isStarted() || !Bc.emitter) continue;
                const nc = Bc.emitter;
                nc.position && !nc.isEnabled() || (this._activeParticleSystems.push(Bc), Bc.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, cB._shouldRender()) {
          if (this._renderId++, this.activeCamera = Bc, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), cB.render(nc, Vc)
        }
        this._intermediateRendering = !1
      }
      render() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.nPc) return;
        const nc = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(cB, Bc)
        } finally {
          this._renderingMeshEvaluationDepth = nc
        }
      }
      _renderFrame(cB, Bc) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), tB.d.knc = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const nc of this.activeCameras) this._checkCameraRenderTarget(nc);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), Bc || this.animate();
        for (let nc = 0, Vc = this._beforeCameraUpdateStage; nc < Vc.length; nc++) {
          Vc[nc].action()
        }
        if (cB)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let nc = 0; nc < this.activeCameras.length; nc++) {
              const cB = this.activeCameras[nc];
              if (cB.update(), 0 !== cB.cameraRigMode)
                for (let Bc = 0; Bc < cB._rigCameras.length; Bc++) cB._rigCameras[Bc].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let nc = 0; nc < this.activeCamera._rigCameras.length; nc++) this.activeCamera._rigCameras[nc].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(cB, Bc);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const cB = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Vc.g.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let Bc = 0; Bc < this.customRenderTargets.length; Bc++) {
              const nc = this.customRenderTargets[Bc],
                Vc = nc.activeCamera || this.activeCamera;
              this._renderRenderTarget(nc, Vc, cB !== Vc, this.dumpNextRenderTargets)
            }
            Vc.g.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = cB?.renderPassId ?? 0, this.activeCamera = cB, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let Bc = 0, nc = this._beforeClearStage; Bc < nc.length; Bc++) {
            nc[Bc].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let Bc = 0, nc = this._gatherRenderTargetsStage; Bc < nc.length; Bc++) {
            nc[Bc].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Bc = 0; Bc < this.activeCameras.length; Bc++) this._processSubCameras(this.activeCameras[Bc], Bc > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let nc = 0, Vc = this._afterRenderStage; nc < Vc.length; nc++) {
          Vc[nc].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let cB = 0; cB < this._toBeDisposed.length; cB++) {
            const Bc = this._toBeDisposed[cB];
            Bc && Bc.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let cB = 0; cB < this.materials.length; cB++) this.materials[cB].freeze()
      }
      unfreezeMaterials() {
        for (let cB = 0; cB < this.materials.length; cB++) this.materials[cB].unfreeze()
      }
      dispose() {
        if (this.nPc) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, hc.c)(this.stopAllAnimations)) {
          for (const cB of this._activeAnimatables) cB.onAnimationEndObservable.clear(), cB.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const cB = this._activeRequests.slice();
        for (const rB of cB) rB.abort();
        this._activeRequests.length = 0;
        try {
          this.XBc.notifyObservers(this)
        } catch (Ic) {
          Bn.c.Error("An error occurred while calling onDisposeObservable!", Ic)
        }
        this.detachControl();
        const Bc = this._engine.getInputElement?.();
        if (Bc)
          for (let rB = 0; rB < this.cameras.length; rB++) this.cameras[rB].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (cB => cB.dispose(!0))), this._disposeList(this.transformNodes, (cB => cB.dispose(!0)));
        const nc = this.cameras;
        this._disposeList(nc), this._disposeList(this.qD), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Vc = this._engine.scenes.indexOf(this);
        if (Vc > -1 && this._engine.scenes.splice(Vc, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, tB.i)(), pc.d._LastCreatedScene === this) {
          pc.d._LastCreatedScene = null;
          let cB = pc.d.Instances.length - 1;
          for (; cB >= 0;) {
            const Bc = pc.d.Instances[cB];
            if (Bc.scenes.length > 0) {
              pc.d._LastCreatedScene = Bc.scenes[this._engine.scenes.length - 1];
              break
            }
            cB--
          }
        }
        Vc = this._engine._virtualScenes.indexOf(this), Vc > -1 && this._engine._virtualScenes.splice(Vc, 1), this._engine.wipeCaches(!0), this.XBc.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(cB, Bc) {
        const nc = cB.slice(0);
        Bc = Bc ?? (cB => cB.dispose());
        for (const Vc of nc) Bc(Vc);
        cB.length = 0
      }
      get nPc() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let cB = 0; cB < this.meshes.length; cB++) {
          const Bc = this.meshes[cB].geometry;
          Bc && Bc.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const cB of this.textures) {
          cB._buffer && (cB._buffer = null)
        }
      }
      getWorldExtends(cB) {
        const Bc = new qB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          nc = new qB.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        cB = cB || (() => !0);
        const Vc = this.meshes.filter(cB);
        for (const Ic of Vc) {
          if (Ic.computeWorldMatrix(!0), !Ic.rD || 0 === Ic.rD.length || Ic.infiniteDistance) continue;
          const cB = Ic.qVc(),
            Vc = cB.boundingBox.minimumWorld,
            rB = cB.boundingBox.maximumWorld;
          qB.p.CheckExtends(Vc, Bc, nc), qB.p.CheckExtends(rB, Bc, nc)
        }
        return Bc.x === Number.MAX_VALUE ? {
          min: qB.p.Zero(),
          max: qB.p.Zero()
        } : {
          min: Bc,
          max: nc
        }
      }
      createPickingRay(cB, Bc, nc, Vc) {
        throw (0, hc.k)("Ray")
      }
      createPickingRayToRef(cB, Bc, nc, Vc, Ic) {
        throw (0, hc.k)("Ray")
      }
      createPickingRayInCameraSpace(cB, Bc, nc) {
        throw (0, hc.k)("Ray")
      }
      createPickingRayInCameraSpaceToRef(cB, Bc, nc, Vc) {
        throw (0, hc.k)("Ray")
      }
      Vn(cB, Bc, nc, Vc, Ic, rB) {
        const uc = (0, hc.k)("Ray", !0);
        return uc && Bn.c.Warn(uc), new fc.c
      }
      pickWithBoundingInfo(cB, Bc, nc, Vc, Ic) {
        const rB = (0, hc.k)("Ray", !0);
        return rB && Bn.c.Warn(rB), new fc.c
      }
      pickWithRay(cB, Bc, nc, Vc) {
        throw (0, hc.k)("Ray")
      }
      multiPick(cB, Bc, nc, Vc, Ic) {
        throw (0, hc.k)("Ray")
      }
      multiPickWithRay(cB, Bc, nc) {
        throw (0, hc.k)("Ray")
      }
      setPointerOverMesh(cB, Bc, nc) {
        this._inputManager.setPointerOverMesh(cB, Bc, nc)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const cB of this.geometries) cB._rebuild();
        for (const cB of this.meshes) cB._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const cB of this._components) cB.rebuild();
        for (const cB of this.qD) cB.rebuild();
        if (this.spriteManagers)
          for (const cB of this.spriteManagers) cB.rebuild()
      }
      _rebuildTextures() {
        for (const cB of this.textures) cB._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(cB, Bc, nc) {
        if (void 0 === Bc) return cB;
        const Vc = [];
        for (const Ic in cB) {
          const rB = cB[Ic];
          Pc.c && Pc.c.MatchesQuery(rB, Bc) && (!nc || nc(rB)) && Vc.push(rB)
        }
        return Vc
      }
      getMeshesByTags(cB, Bc) {
        return this._getByTags(this.meshes, cB, Bc)
      }
      getCamerasByTags(cB, Bc) {
        return this._getByTags(this.cameras, cB, Bc)
      }
      getLightsByTags(cB, Bc) {
        return this._getByTags(this.lights, cB, Bc)
      }
      getMaterialByTags(cB, Bc) {
        return this._getByTags(this.materials, cB, Bc).concat(this._getByTags(this.multiMaterials, cB, Bc))
      }
      getTransformNodesByTags(cB, Bc) {
        return this._getByTags(this.transformNodes, cB, Bc)
      }
      setRenderingOrder(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(cB, Bc, nc, Vc)
      }
      setRenderingAutoClearDepthStencil(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(cB, Bc, nc, Vc)
      }
      getAutoClearDepthStencilSetup(cB) {
        return this._renderingManager.getAutoClearDepthStencilSetup(cB)
      }
      _forceBlockMaterialDirtyMechanism(cB) {
        this._blockMaterialDirtyMechanism = cB
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(cB) {
        this._blockMaterialDirtyMechanism !== cB && (this._blockMaterialDirtyMechanism = cB, cB || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(cB, Bc) {
        if (!this._blockMaterialDirtyMechanism)
          for (const nc of this.materials) Bc && !Bc(nc) || nc.SMc(cB)
      }
      _loadFile(cB, Bc, nc, Vc, Ic, rB, uc) {
        const sc = (0, Kc.n)(cB, Bc, nc, Vc ? this.offlineProvider : void 0, Ic, rB, uc);
        return this._activeRequests.push(sc), sc.onCompleteObservable.add((cB => {
          this._activeRequests.splice(this._activeRequests.indexOf(cB), 1)
        })), sc
      }
      async _loadFileAsync(cB, Bc, nc, Vc, Ic) {
        return await new Promise(((rB, uc) => {
          this._loadFile(cB, (cB => {
            rB(cB)
          }), Bc, nc, Vc, ((cB, Bc) => {
            uc(Bc)
          }), Ic)
        }))
      }
      async _loadDelayedFileAsync(cB, Bc, nc) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Vc = `${cB}|${Bc?"binary":"string"}`;
        let Ic = this._delayedFileRequests.get(Vc);
        if (!Ic) {
          Ic = Bc ? this._loadFileAsync(cB, void 0, nc, !0) : this._loadFileAsync(cB, void 0, nc, !1);
          const rB = Ic;
          (async () => {
            try {
              await rB
            } catch {}
            this._delayedFileRequests?.delete(Vc)
          })(), this._delayedFileRequests.set(Vc, Ic)
        }
        return await Ic
      }
      _requestFile(cB, Bc, nc, Vc, Ic, rB, uc) {
        const sc = (0, Kc.w)(cB, Bc, nc, Vc ? this.offlineProvider : void 0, Ic, rB, uc);
        return this._activeRequests.push(sc), sc.onCompleteObservable.add((cB => {
          this._activeRequests.splice(this._activeRequests.indexOf(cB), 1)
        })), sc
      }
      async _requestFileAsync(cB, Bc, nc, Vc, Ic) {
        return await new Promise(((rB, uc) => {
          this._requestFile(cB, (cB => {
            rB(cB)
          }), Bc, nc, Vc, (cB => {
            uc(cB)
          }), Ic)
        }))
      }
      _readFile(cB, Bc, nc, Vc, Ic) {
        const rB = (0, Kc.q)(cB, Bc, nc, Vc, Ic);
        return this._activeRequests.push(rB), rB.onCompleteObservable.add((cB => {
          this._activeRequests.splice(this._activeRequests.indexOf(cB), 1)
        })), rB
      }
      async _readFileAsync(cB, Bc, nc) {
        return await new Promise(((Vc, Ic) => {
          this._readFile(cB, (cB => {
            Vc(cB)
          }), Bc, nc, (cB => {
            Ic(cB)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, hc.k)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(cB) {
        return this.setActiveCameraById(cB)
      }
      getMaterialByID(cB) {
        return this.getMaterialById(cB)
      }
      getLastMaterialByID(cB) {
        return this.getLastMaterialById(cB)
      }
      getTextureByUniqueID(cB) {
        return this.getTextureByUniqueId(cB)
      }
      getCameraByID(cB) {
        return this.getCameraById(cB)
      }
      getCameraByUniqueID(cB) {
        return this.getCameraByUniqueId(cB)
      }
      getBoneByID(cB) {
        return this.getBoneById(cB)
      }
      getLightByID(cB) {
        return this.getLightById(cB)
      }
      getLightByUniqueID(cB) {
        return this.getLightByUniqueId(cB)
      }
      getParticleSystemByID(cB) {
        return this.getParticleSystemById(cB)
      }
      getGeometryByID(cB) {
        return this.getGeometryById(cB)
      }
      getMeshByID(cB) {
        return this.getMeshById(cB)
      }
      getMeshByUniqueID(cB) {
        return this.getMeshByUniqueId(cB)
      }
      getLastMeshByID(cB) {
        return this.getLastMeshById(cB)
      }
      getMeshesByID(cB) {
        return this.getMeshesById(cB)
      }
      getTransformNodeByID(cB) {
        return this.getTransformNodeById(cB)
      }
      getTransformNodeByUniqueID(cB) {
        return this.getTransformNodeByUniqueId(cB)
      }
      getTransformNodesByID(cB) {
        return this.getTransformNodesById(cB)
      }
      getNodeByID(cB) {
        return this.getNodeById(cB)
      }
      getLastEntryByID(cB) {
        return this.getLastEntryById(cB)
      }
      getLastSkeletonByID(cB) {
        return this.getLastSkeletonById(cB)
      }
    }
    un.FOGMODE_NONE = 0, un.FOGMODE_EXP = 1, un.FOGMODE_EXP2 = 2, un.FOGMODE_LINEAR = 3, un.MinDeltaTime = 1, un.MaxDeltaTime = 1e3, un._OriginalDefaultMaterialFactory = un.DefaultMaterialFactory;
    let sn = !1;

    function Mn() {
      sn || (sn = !0, (0, nn.d)("BABYLON.Scene", un))
    }(Gc = un.prototype).sortActiveAnimatables ?? (Gc.sortActiveAnimatables = (0, hc.h)("Scene", "sortActiveAnimatables")), (cn = un.prototype).beginWeightedAnimation ?? (cn.beginWeightedAnimation = (0, hc.h)("Scene", "beginWeightedAnimation")), (BB = un.prototype).beginAnimation ?? (BB.beginAnimation = (0, hc.h)("Scene", "beginAnimation")), (nB = un.prototype).beginHierarchyAnimation ?? (nB.beginHierarchyAnimation = (0, hc.h)("Scene", "beginHierarchyAnimation")), (VB = un.prototype).beginDirectAnimation ?? (VB.beginDirectAnimation = (0, hc.h)("Scene", "beginDirectAnimation")), (IB = un.prototype).beginDirectHierarchyAnimation ?? (IB.beginDirectHierarchyAnimation = (0, hc.h)("Scene", "beginDirectHierarchyAnimation")), (rn = un.prototype).getAnimatableByTarget ?? (rn.getAnimatableByTarget = (0, hc.h)("Scene", "getAnimatableByTarget")), (uB = un.prototype).getAllAnimatablesByTarget ?? (uB.getAllAnimatablesByTarget = (0, hc.h)("Scene", "getAllAnimatablesByTarget")), (sB = un.prototype).stopAllAnimations ?? (sB.stopAllAnimations = (0, hc.h)("Scene", "stopAllAnimations")), (MB = un.prototype).getSoundByName ?? (MB.getSoundByName = (0, hc.h)("Scene", "getSoundByName")), (PB = un.prototype).createOrUpdateSelectionOctree ?? (PB.createOrUpdateSelectionOctree = (0, hc.h)("Scene", "createOrUpdateSelectionOctree")), (qn = un.prototype).createDefaultLight ?? (qn.createDefaultLight = (0, hc.h)("Scene", "createDefaultLight")), (OB = un.prototype).createDefaultCamera ?? (OB.createDefaultCamera = (0, hc.h)("Scene", "createDefaultCamera")), (TB = un.prototype).createDefaultCameraOrLight ?? (TB.createDefaultCameraOrLight = (0, hc.h)("Scene", "createDefaultCameraOrLight")), (fB = un.prototype).createDefaultSkybox ?? (fB.createDefaultSkybox = (0, hc.h)("Scene", "createDefaultSkybox")), (mn = un.prototype).createDefaultEnvironment ?? (mn.createDefaultEnvironment = (0, hc.h)("Scene", "createDefaultEnvironment")), (eB = un.prototype).createDefaultVRExperience ?? (eB.createDefaultVRExperience = (0, hc.h)("Scene", "createDefaultVRExperience")), (tn = un.prototype).createDefaultXRExperienceAsync ?? (tn.createDefaultXRExperienceAsync = (0, hc.h)("Scene", "createDefaultXRExperienceAsync")), (SB = un.prototype).getGlowLayerByName ?? (SB.getGlowLayerByName = (0, hc.h)("Scene", "getGlowLayerByName")), (yn = un.prototype).getHighlightLayerByName ?? (yn.getHighlightLayerByName = (0, hc.h)("Scene", "getHighlightLayerByName")), (zn = un.prototype).getSelectionOutlineLayerByName ?? (zn.getSelectionOutlineLayerByName = (0, hc.h)("Scene", "getSelectionOutlineLayerByName")), (pB = un.prototype).removeLensFlareSystem ?? (pB.removeLensFlareSystem = (0, hc.h)("Scene", "removeLensFlareSystem")), (hB = un.prototype).addLensFlareSystem ?? (hB.addLensFlareSystem = (0, hc.h)("Scene", "addLensFlareSystem")), (an = un.prototype).getLensFlareSystemByName ?? (an.getLensFlareSystemByName = (0, hc.h)("Scene", "getLensFlareSystemByName")), (lB = un.prototype).getLensFlareSystemByID ?? (lB.getLensFlareSystemByID = (0, hc.h)("Scene", "getLensFlareSystemByID")), (YB = un.prototype).getLensFlareSystemById ?? (YB.getLensFlareSystemById = (0, hc.h)("Scene", "getLensFlareSystemById")), (LB = un.prototype).getPhysicsEngine ?? (LB.getPhysicsEngine = (0, hc.h)("Scene", "getPhysicsEngine")), (gn = un.prototype).enablePhysics ?? (gn.enablePhysics = (0, hc.h)("Scene", "enablePhysics")), (UB = un.prototype).disablePhysicsEngine ?? (UB.disablePhysicsEngine = (0, hc.h)("Scene", "disablePhysicsEngine")), (bn = un.prototype).isPhysicsEnabled ?? (bn.isPhysicsEnabled = (0, hc.h)("Scene", "isPhysicsEnabled")), (ZB = un.prototype).deleteCompoundImpostor ?? (ZB.deleteCompoundImpostor = (0, hc.h)("Scene", "deleteCompoundImpostor")), (QB = un.prototype).removeReflectionProbe ?? (QB.removeReflectionProbe = (0, hc.h)("Scene", "removeReflectionProbe")), (CB = un.prototype).addReflectionProbe ?? (CB.addReflectionProbe = (0, hc.h)("Scene", "addReflectionProbe")), (vn = un.prototype).getBoundingBoxRenderer ?? (vn.getBoundingBoxRenderer = (0, hc.h)("Scene", "getBoundingBoxRenderer")), (DB = un.prototype).enableDepthRenderer ?? (DB.enableDepthRenderer = (0, hc.h)("Scene", "enableDepthRenderer")), (NB = un.prototype).disableDepthRenderer ?? (NB.disableDepthRenderer = (0, hc.h)("Scene", "disableDepthRenderer")), (EB = un.prototype).enableFluidRenderer ?? (EB.enableFluidRenderer = (0, hc.h)("Scene", "enableFluidRenderer")), (oB = un.prototype).disableFluidRenderer ?? (oB.disableFluidRenderer = (0, hc.h)("Scene", "disableFluidRenderer")), (WB = un.prototype).enableGeometryBufferRenderer ?? (WB.enableGeometryBufferRenderer = (0, hc.h)("Scene", "enableGeometryBufferRenderer")), (wB = un.prototype).disableGeometryBufferRenderer ?? (wB.disableGeometryBufferRenderer = (0, hc.h)("Scene", "disableGeometryBufferRenderer")), (kn = un.prototype).enableIblCdfGenerator ?? (kn.enableIblCdfGenerator = (0, hc.h)("Scene", "enableIblCdfGenerator")), (XB = un.prototype).disableIblCdfGenerator ?? (XB.disableIblCdfGenerator = (0, hc.h)("Scene", "disableIblCdfGenerator")), (HB = un.prototype).getOutlineRenderer ?? (HB.getOutlineRenderer = (0, hc.h)("Scene", "getOutlineRenderer")), (FB = un.prototype).enablePrePassRenderer ?? (FB.enablePrePassRenderer = (0, hc.h)("Scene", "enablePrePassRenderer")), (JB = un.prototype).disablePrePassRenderer ?? (JB.disablePrePassRenderer = (0, hc.h)("Scene", "disablePrePassRenderer")), (jn = un.prototype).enableSubSurfaceForPrePass ?? (jn.enableSubSurfaceForPrePass = (0, hc.h)("Scene", "enableSubSurfaceForPrePass")), (RB = un.prototype).disableSubSurfaceForPrePass ?? (RB.disableSubSurfaceForPrePass = (0, hc.h)("Scene", "disableSubSurfaceForPrePass")), (KB = un.prototype).pickSprite ?? (KB.pickSprite = (0, hc.h)("Scene", "pickSprite")), (xn = un.prototype).pickSpriteWithRay ?? (xn.pickSpriteWithRay = (0, hc.h)("Scene", "pickSpriteWithRay")), (dB = un.prototype).multiPickSprite ?? (dB.multiPickSprite = (0, hc.h)("Scene", "multiPickSprite")), (AB = un.prototype).multiPickSpriteWithRay ?? (AB.multiPickSpriteWithRay = (0, hc.h)("Scene", "multiPickSpriteWithRay")), (GB = un.prototype).setPointerOverSprite ?? (GB.setPointerOverSprite = (0, hc.h)("Scene", "setPointerOverSprite")), (cV = un.prototype).getPointerOverSprite ?? (cV.getPointerOverSprite = (0, hc.h)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(un.prototype, "mainSoundTrack") || Object.defineProperty(un.prototype, "mainSoundTrack", (0, hc.e)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(un.prototype, "soundTracks") || Object.defineProperty(un.prototype, "soundTracks", (0, hc.e)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(un.prototype, "audioEnabled") || Object.defineProperty(un.prototype, "audioEnabled", (0, hc.e)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(un.prototype, "headphone") || Object.defineProperty(un.prototype, "headphone", (0, hc.e)("Scene", "headphone")), Object.getOwnPropertyDescriptor(un.prototype, "audioListenerPositionProvider") || Object.defineProperty(un.prototype, "audioListenerPositionProvider", (0, hc.e)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(un.prototype, "audioListenerRotationProvider") || Object.defineProperty(un.prototype, "audioListenerRotationProvider", (0, hc.e)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(un.prototype, "audioPositioningRefreshRate") || Object.defineProperty(un.prototype, "audioPositioningRefreshRate", (0, hc.e)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(un.prototype, "selectionOctree") || Object.defineProperty(un.prototype, "selectionOctree", (0, hc.e)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(un.prototype, "debugLayer") || Object.defineProperty(un.prototype, "debugLayer", (0, hc.e)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(un.prototype, "gamepadManager") || Object.defineProperty(un.prototype, "gamepadManager", (0, hc.e)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(un.prototype, "simplificationQueue") || Object.defineProperty(un.prototype, "simplificationQueue", (0, hc.e)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(un.prototype, "onBeforePhysicsObservable") || Object.defineProperty(un.prototype, "onBeforePhysicsObservable", (0, hc.e)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(un.prototype, "onAfterPhysicsObservable") || Object.defineProperty(un.prototype, "onAfterPhysicsObservable", (0, hc.e)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(un.prototype, "reflectionProbes") || Object.defineProperty(un.prototype, "reflectionProbes", (0, hc.e)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(un.prototype, "forceShowBoundingBoxes") || Object.defineProperty(un.prototype, "forceShowBoundingBoxes", (0, hc.e)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(un.prototype, "depthPeelingRenderer") || Object.defineProperty(un.prototype, "depthPeelingRenderer", (0, hc.e)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(un.prototype, "useOrderIndependentTransparency") || Object.defineProperty(un.prototype, "useOrderIndependentTransparency", (0, hc.e)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(un.prototype, "fluidRenderer") || Object.defineProperty(un.prototype, "fluidRenderer", (0, hc.e)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(un.prototype, "geometryBufferRenderer") || Object.defineProperty(un.prototype, "geometryBufferRenderer", (0, hc.e)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(un.prototype, "iblCdfGenerator") || Object.defineProperty(un.prototype, "iblCdfGenerator", (0, hc.e)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(un.prototype, "prePassRenderer") || Object.defineProperty(un.prototype, "prePassRenderer", (0, hc.e)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(un.prototype, "subSurfaceConfiguration") || Object.defineProperty(un.prototype, "subSurfaceConfiguration", (0, hc.e)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(un.prototype, "spriteManagers") || Object.defineProperty(un.prototype, "spriteManagers", (0, hc.e)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(un.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(un.prototype, "onBeforeSpritesRenderingObservable", (0, hc.e)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(un.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(un.prototype, "onAfterSpritesRenderingObservable", (0, hc.e)("Scene", "onAfterSpritesRenderingObservable"))
  },
  38214: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      e: () => Ic
    });
    class Vc {}
    Vc.NAME_EFFECTLAYER = "EffectLayer", Vc.NAME_LAYER = "Layer", Vc.NAME_LENSFLARESYSTEM = "LensFlareSystem", Vc.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Vc.NAME_PARTICLESYSTEM = "ParticleSystem", Vc.NAME_GAMEPAD = "Gamepad", Vc.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Vc.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Vc.NAME_PREPASSRENDERER = "PrePassRenderer", Vc.NAME_DEPTHRENDERER = "DepthRenderer", Vc.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Vc.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Vc.NAME_SPRITE = "Sprite", Vc.NAME_SUBSURFACE = "SubSurface", Vc.NAME_OUTLINERENDERER = "Outline", Vc.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Vc.NAME_SHADOWGENERATOR = "ShadowGenerator", Vc.NAME_OCTREE = "nqc", Vc.NAME_PHYSICSENGINE = "PhysicsEngine", Vc.NAME_AUDIO = "Audio", Vc.NAME_FLUIDRENDERER = "FluidRenderer", Vc.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Vc.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Vc.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Vc.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Vc.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Vc.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Vc.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Vc.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Vc.STEP_BEFORECAMERADRAW_PREPASS = 0, Vc.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Vc.STEP_BEFORECAMERADRAW_LAYER = 2, Vc.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Vc.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Vc.STEP_BEFORERENDERINGMESH_PREPASS = 0, Vc.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Vc.STEP_AFTERRENDERINGMESH_PREPASS = 0, Vc.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Vc.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Vc.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Vc.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Vc.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Vc.STEP_BEFORECLEAR_PREPASS = 1, Vc.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Vc.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Vc.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Vc.STEP_AFTERCAMERADRAW_PREPASS = 0, Vc.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Vc.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Vc.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Vc.STEP_AFTERCAMERADRAW_LAYER = 4, Vc.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Vc.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Vc.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Vc.STEP_AFTERRENDER_AUDIO = 0, Vc.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Vc.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Vc.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Vc.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Vc.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Vc.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Vc.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Vc.STEP_POINTERMOVE_SPRITE = 0, Vc.STEP_POINTERDOWN_SPRITE = 0, Vc.STEP_POINTERUP_SPRITE = 0;
    class Ic extends Array {
      constructor(cB) {
        super(...cB)
      }
      static Create() {
        return Object.create(Ic.prototype)
      }
      registerStep(cB, Bc, nc) {
        let Vc, Ic = 0;
        for (; Ic < this.length; Ic++) {
          if (Vc = this[Ic].index, cB < Vc) break
        }
        this.splice(Ic, 0, {
          index: cB,
          component: Bc,
          action: nc.bind(Bc)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  38035: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc,
      f: () => sc,
      g: () => Vc,
      k: () => Ic,
      n: () => rB
    });

    function Vc(cB, Bc, nc, Vc, Ic, rB) {
      function uc(cB) {
        if (void 0 !== cB && "function" !== typeof cB) throw new TypeError("Function expected");
        return cB
      }
      for (var sc, Mc = Vc.kind, Pc = "getter" === Mc ? "get" : "setter" === Mc ? "set" : "value", qB = !Bc && cB ? Vc.static ? cB : cB.prototype : null, Oc = Bc || (qB ? Object.getOwnPropertyDescriptor(qB, Vc.name) : {}), Tc = !1, fc = nc.length - 1; fc >= 0; fc--) {
        var mB = {};
        for (var ec in Vc) mB[ec] = "access" === ec ? {} : Vc[ec];
        for (var ec in Vc.access) mB.access[ec] = Vc.access[ec];
        mB.addInitializer = function(cB) {
          if (Tc) throw new TypeError("Cannot add initializers after decoration has completed");
          rB.push(uc(cB || null))
        };
        var tB = (0, nc[fc])("accessor" === Mc ? {
          get: Oc.get,
          set: Oc.set
        } : Oc[Pc], mB);
        if ("accessor" === Mc) {
          if (void 0 === tB) continue;
          if (null === tB || "object" !== typeof tB) throw new TypeError("Object expected");
          (sc = uc(tB.get)) && (Oc.get = sc), (sc = uc(tB.set)) && (Oc.set = sc), (sc = uc(tB.init)) && Ic.unshift(sc)
        } else(sc = uc(tB)) && ("field" === Mc ? Ic.unshift(sc) : Oc[Pc] = sc)
      }
      qB && Object.defineProperty(qB, Vc.name, Oc), Tc = !0
    }

    function Ic(cB, Bc, nc) {
      for (var Vc = arguments.length > 2, Ic = 0; Ic < Bc.length; Ic++) nc = Vc ? Bc[Ic].call(cB, nc) : Bc[Ic].call(cB);
      return Vc ? nc : void 0
    }

    function rB(cB, Bc, nc) {
      return "symbol" === typeof Bc && (Bc = Bc.description ? "[".concat(Bc.description, "]") : ""), Object.defineProperty(cB, "name", {
        configurable: !0,
        value: nc ? "".concat(nc, " ", Bc) : Bc
      })
    }
    Object.create;
    Object.create;

    function uc(cB, Bc, nc, Vc) {
      if ("a" === nc && !Vc) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Bc ? cB !== Bc || !Vc : !Bc.has(cB)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === nc ? Vc : "a" === nc ? Vc.call(cB) : Vc ? Vc.value : Bc.get(cB)
    }

    function sc(cB, Bc, nc, Vc, Ic) {
      if ("m" === Vc) throw new TypeError("Private method is not writable");
      if ("a" === Vc && !Ic) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Bc ? cB !== Bc || !Ic : !Bc.has(cB)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Vc ? Ic.call(cB, nc) : Ic ? Ic.value = nc : Bc.set(cB, nc), nc
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);