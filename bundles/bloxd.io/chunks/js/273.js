export const id = 273;
export const ids = [273];
export const modules = {
  40633: (BB, IB, ZB) => {
    ZB.d(IB, {
      $b: () => MB,
      $e: () => eZ,
      $f: () => tZ,
      Ab: () => UI,
      Ae: () => AZ,
      Bb: () => DB,
      Bc: () => hI,
      Bd: () => kB,
      Bf: () => SZ,
      C: () => fI,
      Cc: () => YB,
      Df: () => IT,
      E: () => FB,
      Ec: () => cI,
      Ee: () => jZ,
      Fb: () => BZ,
      Fd: () => nB,
      Ff: () => xZ,
      Gc: () => kI,
      H: () => lB,
      He: () => RZ,
      Hf: () => QZ,
      Ib: () => HB,
      Ic: () => ZI,
      Id: () => qI,
      Jf: () => qZ,
      Kf: () => EZ,
      L: () => oT,
      Lc: () => OB,
      Ld: () => tI,
      Le: () => PZ,
      Mb: () => VB,
      Md: () => eB,
      O: () => SI,
      Oe: () => DZ,
      Of: () => mZ,
      P: () => EB,
      Pb: () => KB,
      Pc: () => dB,
      Pf: () => XZ,
      Qd: () => zI,
      Qf: () => WZ,
      R: () => KI,
      Rc: () => TB,
      Rf: () => gZ,
      Sd: () => EI,
      Se: () => MZ,
      Tb: () => II,
      Tc: () => wB,
      Tf: () => rZ,
      U: () => VI,
      Ue: () => LZ,
      Vb: () => gI,
      Vc: () => GI,
      Wd: () => eI,
      We: () => HZ,
      Wf: () => sZ,
      Xe: () => fZ,
      Xf: () => dZ,
      Y: () => xB,
      Zb: () => bB,
      Zc: () => qB,
      Zd: () => BI,
      _e: () => uZ,
      ab: () => DI,
      ac: () => oI,
      ad: () => gB,
      be: () => SB,
      bg: () => UZ,
      c: () => oB,
      cc: () => UB,
      cf: () => JT,
      d: () => GB,
      db: () => XB,
      dd: () => NB,
      de: () => fB,
      dg: () => lZ,
      f: () => sB,
      fb: () => TZ,
      fc: () => WB,
      fd: () => oZ,
      g: () => mB,
      gb: () => JZ,
      ge: () => CB,
      gf: () => wZ,
      hg: () => zZ,
      if: () => pZ,
      ig: () => NZ,
      j: () => cZ,
      jc: () => nI,
      jd: () => GZ,
      k: () => vZ,
      kb: () => LB,
      kc: () => cB,
      ke: () => hB,
      kf: () => OZ,
      lf: () => aZ,
      mc: () => AI,
      me: () => kZ,
      mf: () => iZ,
      nd: () => QB,
      o: () => vB,
      ob: () => ZZ,
      oe: () => ZT,
      p: () => uI,
      pc: () => uB,
      pd: () => PB,
      pe: () => yZ,
      q: () => lI,
      qb: () => IZ,
      qf: () => YZ,
      r: () => AB,
      rf: () => TT,
      sb: () => FI,
      sd: () => jB,
      se: () => CZ,
      t: () => bI,
      tc: () => tB,
      u: () => zB,
      ud: () => rB,
      vb: () => vI,
      vc: () => xI,
      vd: () => RB,
      ve: () => FZ,
      vf: () => VZ,
      w: () => JI,
      x: () => iB,
      xe: () => bZ,
      xf: () => BT,
      y: () => aB,
      yb: () => JB,
      yf: () => KZ,
      z: () => pB,
      zb: () => yB,
      zc: () => TI,
      zd: () => NI
    });
    const TB = -2147483648,
      JB = 12,
      oB = 12,
      GB = 4095,
      vB = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      kB = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      cB = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      nB = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      hB = {
        Alive: 16
      },
      zB = 32,
      FB = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      NB = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      gB = 4294967295,
      qB = 0,
      yB = 4294967295,
      UB = 4,
      WB = 123,
      dB = -2147483648,
      CB = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      QB = 51,
      sB = 5,
      wB = 4294967295,
      OB = 4294967295,
      YB = 128,
      iB = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      pB = 16,
      aB = 255,
      HB = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      MB = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      jB = {
        Hotbar: 256,
        Drop: 257
      },
      PB = {
        Down: 1,
        Next: 2,
        Stack: 4,
        Repeat: 8
      },
      RB = {
        Rate: 0,
        Gyro: 1
      },
      rB = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      mB = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      XB = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      LB = {
        LookPointed: 1,
        Held: 2
      },
      eB = 3,
      uB = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      fB = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      lB = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      AB = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      tB = {
        Stackable: 1
      },
      bB = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      xB = {
        Detail: 1,
        RoomForOne: 2
      },
      EB = {
        HaveIngredients: 1,
        Listed: 2
      },
      DB = {
        HasOpts: 1
      },
      KB = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      VB = {
        Up: 1,
        Down: 2
      },
      SB = {
        TwoD: 1,
        Loop: 2
      },
      BI = {
        StopAfter: 1
      },
      II = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      ZI = {
        Pose: 1,
        Visible: 2
      },
      TI = 255,
      JI = 65535,
      oI = 255,
      GI = 65535,
      vI = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      kI = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      cI = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      nI = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      hI = 4294967295,
      zI = 4294967295,
      FI = 255,
      NI = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      gI = {
        critical: 123
      },
      qI = 4294967295,
      yI = {
        BYTES: 4,
        Iz: (BB, IB) => BB.getUint32(IB + 0, !0)
      },
      UI = {
        BYTES: 12,
        serverId: (BB, IB) => BB.getInt32(IB + 0, !0),
        index: (BB, IB) => BB.getUint32(IB + 4, !0),
        kind: (BB, IB) => BB.getUint16(IB + 8, !0)
      },
      WI = {
        BYTES: 20,
        pos: (BB, IB, ZB) => BB.getInt32(IB + 0 + 4 * ZB, !0),
        actual: (BB, IB) => BB.getUint32(IB + 12, !0),
        dataLen: (BB, IB) => BB.getUint32(IB + 16, !0)
      },
      dI = {
        BYTES: 20,
        what: (BB, IB) => BB.getUint8(IB + 0),
        value: (BB, IB) => BB.getInt16(IB + 2, !0),
        pos: (BB, IB, ZB) => BB.getInt32(IB + 4 + 4 * ZB, !0),
        block: (BB, IB) => BB.getUint32(IB + 16, !0)
      },
      CI = {
        BYTES: 4,
        item: (BB, IB) => BB.getUint16(IB + 0, !0),
        slot: (BB, IB) => BB.getUint8(IB + 2)
      },
      QI = {
        BYTES: 16,
        target: (BB, IB) => BB.getInt32(IB + 0, !0),
        damage: (BB, IB) => BB.getFloat32(IB + 4, !0),
        distance: (BB, IB) => BB.getFloat32(IB + 8, !0),
        crit: (BB, IB) => BB.getUint8(IB + 12)
      },
      sI = {
        BYTES: 4,
        slot: (BB, IB) => BB.getUint16(IB + 0, !0)
      },
      wI = {
        BYTES: 20,
        what: (BB, IB) => BB.getUint8(IB + 0),
        value: (BB, IB) => BB.getInt16(IB + 2, !0),
        pos: (BB, IB, ZB) => BB.getInt32(IB + 4 + 4 * ZB, !0),
        block: (BB, IB) => BB.getUint32(IB + 16, !0)
      },
      OI = {
        BYTES: 12,
        serverId: (BB, IB) => BB.getInt32(IB + 0, !0),
        index: (BB, IB) => BB.getUint32(IB + 4, !0),
        what: (BB, IB) => BB.getUint16(IB + 8, !0)
      },
      YI = {
        BYTES: 24,
        cx: (BB, IB) => BB.getInt32(IB + 0, !0),
        cy: (BB, IB) => BB.getInt32(IB + 4, !0),
        cz: (BB, IB) => BB.getInt32(IB + 8, !0),
        slot: (BB, IB) => BB.getUint32(IB + 12, !0),
        generation: (BB, IB) => BB.getUint32(IB + 16, !0),
        flags: (BB, IB) => BB.getUint32(IB + 20, !0)
      },
      iI = {
        BYTES: 44,
        pos: (BB, IB, ZB) => BB.getFloat64(IB + 0 + 8 * ZB, !0),
        sound: (BB, IB) => BB.getUint16(IB + 24, !0),
        flags: (BB, IB) => BB.getUint16(IB + 26, !0),
        handle: (BB, IB) => BB.getUint32(IB + 28, !0),
        volume: (BB, IB) => BB.getFloat32(IB + 32, !0),
        rate: (BB, IB) => BB.getFloat32(IB + 36, !0),
        refDist: (BB, IB) => BB.getFloat32(IB + 40, !0)
      },
      pI = {
        BYTES: 28,
        pos: (BB, IB, ZB) => BB.getFloat64(IB + 0 + 8 * ZB, !0),
        handle: (BB, IB) => BB.getUint32(IB + 24, !0)
      },
      aI = {
        BYTES: 16,
        handle: (BB, IB) => BB.getUint32(IB + 0, !0),
        volume: (BB, IB) => BB.getFloat32(IB + 4, !0),
        rate: (BB, IB) => BB.getFloat32(IB + 8, !0),
        refDist: (BB, IB) => BB.getFloat32(IB + 12, !0)
      },
      HI = {
        BYTES: 12,
        handle: (BB, IB) => BB.getUint32(IB + 0, !0),
        to: (BB, IB) => BB.getFloat32(IB + 4, !0),
        ms: (BB, IB) => BB.getUint16(IB + 8, !0),
        flags: (BB, IB) => BB.getUint16(IB + 10, !0)
      },
      MI = {
        BYTES: 4,
        handle: (BB, IB) => BB.getUint32(IB + 0, !0)
      },
      jI = {
        BYTES: 8,
        reason: (BB, IB) => BB.getUint8(IB + 0),
        code: (BB, IB) => BB.getUint8(IB + 1),
        version: (BB, IB) => BB.getUint32(IB + 4, !0)
      },
      PI = {
        BYTES: 4,
        key: (BB, IB) => BB.getUint8(IB + 0),
        tag: (BB, IB) => BB.getUint8(IB + 1)
      },
      RI = {
        BYTES: 16,
        save: (BB, IB) => BB.getUint32(IB + 0, !0),
        index: (BB, IB) => BB.getUint32(IB + 4, !0),
        ptr: (BB, IB) => BB.getUint32(IB + 8, !0),
        len: (BB, IB) => BB.getUint32(IB + 12, !0)
      },
      rI = {
        BYTES: 16,
        save: (BB, IB) => BB.getUint32(IB + 0, !0),
        kind: (BB, IB) => BB.getUint8(IB + 4),
        parts: (BB, IB) => BB.getUint32(IB + 8, !0),
        bytes: (BB, IB) => BB.getUint32(IB + 12, !0)
      },
      mI = {
        BYTES: 4,
        totalTicks: (BB, IB) => BB.getUint32(IB + 0, !0)
      },
      XI = {
        BYTES: 24,
        what: (BB, IB) => BB.getUint8(IB + 0),
        int: (BB, IB) => BB.getInt32(IB + 4, !0),
        x: (BB, IB) => BB.getFloat64(IB + 8, !0),
        y: (BB, IB) => BB.getFloat64(IB + 16, !0)
      },
      LI = {
        BYTES: 8,
        what: (BB, IB) => BB.getUint8(IB + 0),
        kind: (BB, IB) => BB.getUint8(IB + 1),
        save: (BB, IB) => BB.getUint32(IB + 4, !0)
      },
      eI = {
        BYTES: 4,
        Xn: (BB, IB) => BB.getUint16(IB + 0, !0)
      },
      uI = {
        BYTES: 360,
        eye: (BB, IB, ZB) => BB.getFloat64(IB + 0 + 8 * ZB, !0),
        localPos: (BB, IB, ZB) => BB.getFloat64(IB + 24 + 8 * ZB, !0),
        vIB: (BB, IB, ZB) => BB.getFloat64(IB + 48 + 8 * ZB, !0),
        viewProj: (BB, IB, ZB) => BB.getFloat32(IB + 72 + 4 * ZB, !0),
        origin: (BB, IB, ZB) => BB.getInt32(IB + 136 + 4 * ZB, !0),
        heading: (BB, IB) => BB.getFloat32(IB + 148, !0),
        pitch: (BB, IB) => BB.getFloat32(IB + 152, !0),
        tanHalfFovX: (BB, IB) => BB.getFloat32(IB + 156, !0),
        tanHalfFovY: (BB, IB) => BB.getFloat32(IB + 160, !0),
        viewportCss: (BB, IB, ZB) => BB.getFloat32(IB + 164 + 4 * ZB, !0),
        localVel: (BB, IB, ZB) => BB.getFloat32(IB + 172 + 4 * ZB, !0),
        actionDir: (BB, IB, ZB) => BB.getFloat32(IB + 184 + 4 * ZB, !0),
        localId: (BB, IB) => BB.getInt32(IB + 196, !0),
        playerFlags: (BB, IB) => BB.getUint32(IB + 200, !0),
        targetBlock: (BB, IB, ZB) => BB.getInt32(IB + 204 + 4 * ZB, !0),
        targetAdjacent: (BB, IB, ZB) => BB.getInt32(IB + 216 + 4 * ZB, !0),
        targetBlockId: (BB, IB) => BB.getUint32(IB + 228, !0),
        targetNormal: (BB, IB, ZB) => BB.getInt8(IB + 232 + 1 * ZB),
        targetFlags: (BB, IB) => BB.getUint8(IB + 235),
        pickedEntity: (BB, IB) => BB.getInt32(IB + 236, !0),
        breakingPos: (BB, IB, ZB) => BB.getInt32(IB + 240 + 4 * ZB, !0),
        breakingProgress: (BB, IB) => BB.getFloat32(IB + 252, !0),
        JC: (BB, IB) => BB.getUint16(IB + 256, !0),
        selectedSlot: (BB, IB) => BB.getUint8(IB + 258),
        heldFlags: (BB, IB) => BB.getUint8(IB + 259),
        heldAttrVersion: (BB, IB) => BB.getUint32(IB + 260, !0),
        inventoryVersion: (BB, IB) => BB.getUint32(IB + 264, !0),
        effectsVersion: (BB, IB) => BB.getUint32(IB + 268, !0),
        entitiesVersion: (BB, IB) => BB.getUint32(IB + 272, !0),
        entRenderPtr: (BB, IB) => BB.getUint32(IB + 276, !0),
        entCapacity: (BB, IB) => BB.getUint32(IB + 280, !0),
        frameMs: (BB, IB) => BB.getFloat32(IB + 284, !0),
        fps: (BB, IB) => BB.getFloat32(IB + 288, !0),
        entVisPtr: (BB, IB) => BB.getUint32(IB + 292, !0),
        momentumFrac: (BB, IB) => BB.getFloat32(IB + 296, !0),
        chunkSlotsPtr: (BB, IB) => BB.getUint32(IB + 300, !0),
        chunkSlotsLen: (BB, IB) => BB.getUint32(IB + 304, !0),
        walkThroughPtr: (BB, IB) => BB.getUint32(IB + 308, !0),
        walkThroughLen: (BB, IB) => BB.getUint32(IB + 312, !0),
        audioViewPtr: (BB, IB) => BB.getUint32(IB + 316, !0),
        inventoryViewPtr: (BB, IB) => BB.getUint32(IB + 320, !0),
        eventOverflowGen: (BB, IB) => BB.getUint32(IB + 324, !0),
        eventOverflowMask: (BB, IB) => BB.getUint32(IB + 328, !0),
        promptEntity: (BB, IB) => BB.getInt32(IB + 332, !0),
        replayViewPtr: (BB, IB) => BB.getUint32(IB + 336, !0),
        slotIcon: (BB, IB) => BB.getUint32(IB + 340, !0),
        localDeaths: (BB, IB) => BB.getUint32(IB + 344, !0),
        cameraFar: (BB, IB) => BB.getFloat32(IB + 348, !0),
        gliderBoostFuel: (BB, IB) => BB.getUint32(IB + 352, !0),
        interactLabel: (BB, IB) => BB.getUint16(IB + 356, !0),
        interactIcon: (BB, IB) => BB.getUint16(IB + 358, !0)
      },
      fI = {
        BYTES: 16,
        voxelsPtr: (BB, IB) => BB.getUint32(IB + 0, !0),
        version: (BB, IB) => BB.getUint32(IB + 4, !0),
        generation: (BB, IB) => BB.getUint32(IB + 8, !0),
        sv: (BB, IB) => BB.getUint32(IB + 12, !0)
      },
      lI = {
        BYTES: 56,
        listener: (BB, IB, ZB) => BB.getFloat64(IB + 0 + 8 * ZB, !0),
        forward: (BB, IB, ZB) => BB.getFloat32(IB + 24 + 4 * ZB, !0),
        up: (BB, IB, ZB) => BB.getFloat32(IB + 36 + 4 * ZB, !0),
        dropped: (BB, IB) => BB.getUint32(IB + 48, !0),
        unfollowed: (BB, IB) => BB.getUint32(IB + 52, !0)
      },
      AI = {
        BYTES: 8,
        item: (BB, IB) => BB.getUint16(IB + 0, !0),
        amount: (BB, IB) => BB.getUint16(IB + 2, !0),
        attrVersion: (BB, IB) => BB.getUint32(IB + 4, !0)
      },
      tI = {
        BYTES: 76,
        version: (BB, IB) => BB.getUint32(IB + 0, !0),
        state: (BB, IB) => BB.getUint8(IB + 4),
        cameraMode: (BB, IB) => BB.getUint8(IB + 5),
        Iz: (BB, IB) => BB.getUint32(IB + 8, !0),
        totalTicks: (BB, IB) => BB.getUint32(IB + 12, !0),
        speed: (BB, IB) => BB.getFloat32(IB + 16, !0),
        markIn: (BB, IB) => BB.getUint32(IB + 20, !0),
        markOut: (BB, IB) => BB.getUint32(IB + 24, !0),
        editVersion: (BB, IB) => BB.getUint32(IB + 28, !0),
        drops: (BB, IB, ZB) => BB.getUint32(IB + 32 + 4 * ZB, !0)
      },
      bI = {
        BYTES: 6,
        flags: (BB, IB) => BB.getUint8(IB + 0),
        harvestType: (BB, IB) => BB.getUint8(IB + 1),
        harvestLevel: (BB, IB) => BB.getUint8(IB + 2),
        attachedTop: (BB, IB) => BB.getUint16(IB + 4, !0)
      },
      xI = {
        BYTES: 3,
        flags: (BB, IB) => BB.getUint8(IB + 0),
        harvests: (BB, IB) => BB.getUint8(IB + 1),
        level: (BB, IB) => BB.getUint8(IB + 2)
      },
      EI = {
        BYTES: 12,
        item: (BB, IB) => BB.getUint32(IB + 0, !0),
        amount: (BB, IB) => BB.getFloat64(IB + 4, !0)
      },
      DI = {
        BYTES: 16,
        recipes: (BB, IB) => BB.getUint32(IB + 0, !0),
        ingredients: (BB, IB) => BB.getUint32(IB + 4, !0),
        craftAllTimes: (BB, IB) => BB.getUint32(IB + 8, !0),
        flags: (BB, IB) => BB.getUint32(IB + 12, !0)
      },
      KI = {
        BYTES: 10,
        item: (BB, IB) => BB.getUint16(IB + 0, !0),
        recipe: (BB, IB) => BB.getUint16(IB + 2, !0),
        produces: (BB, IB) => BB.getUint16(IB + 4, !0),
        requires: (BB, IB) => BB.getUint16(IB + 6, !0),
        flags: (BB, IB) => BB.getUint8(IB + 8)
      },
      VI = {
        BYTES: 4,
        amount: (BB, IB) => BB.getUint16(IB + 0, !0),
        items: (BB, IB) => BB.getUint16(IB + 2, !0)
      },
      SI = {
        BYTES: 8,
        amount: (BB, IB) => BB.getUint32(IB + 0, !0),
        item: (BB, IB) => BB.getUint16(IB + 4, !0),
        from: (BB, IB) => BB.getUint16(IB + 6, !0)
      },
      BZ = {
        BYTES: 16,
        serverId: (BB, IB) => BB.getInt32(IB + 0, !0),
        len: (BB, IB) => BB.getUint32(IB + 4, !0),
        kind: (BB, IB) => BB.getUint16(IB + 8, !0),
        variation: (BB, IB) => BB.getUint16(IB + 10, !0),
        pose: (BB, IB) => BB.getUint8(IB + 12),
        meta: (BB, IB) => BB.getUint8(IB + 13),
        mesh: (BB, IB) => BB.getUint8(IB + 14),
        flags: (BB, IB) => BB.getUint8(IB + 15)
      },
      IZ = {
        BYTES: 56,
        terrainOpaque: (BB, IB) => BB.getUint32(IB + 0, !0),
        terrainTransparent: (BB, IB) => BB.getUint32(IB + 4, !0),
        terrainPack: (BB, IB) => BB.getUint32(IB + 8, !0),
        earthSky: (BB, IB) => BB.getUint32(IB + 12, !0),
        skyMeshes: (BB, IB) => BB.getUint32(IB + 16, !0),
        regular: (BB, IB) => BB.getUint32(IB + 20, !0),
        thin: (BB, IB) => BB.getUint32(IB + 24, !0),
        line: (BB, IB) => BB.getUint32(IB + 28, !0),
        text: (BB, IB) => BB.getUint32(IB + 32, !0),
        particles: (BB, IB) => BB.getUint32(IB + 36, !0),
        terrainParts: (BB, IB) => BB.getUint32(IB + 40, !0),
        terrainCompiling: (BB, IB) => BB.getUint32(IB + 44, !0),
        ringCopiesMax: (BB, IB) => BB.getUint32(IB + 48, !0),
        ringBusyWrites: (BB, IB) => BB.getUint32(IB + 52, !0)
      },
      ZZ = {
        BYTES: 16,
        fov: (BB, IB) => BB.getFloat32(IB + 0, !0),
        baseFov: (BB, IB) => BB.getFloat32(IB + 4, !0),
        aspect: (BB, IB) => BB.getFloat32(IB + 8, !0),
        bodyHeading: (BB, IB) => BB.getFloat32(IB + 12, !0)
      },
      TZ = {
        BYTES: 32,
        eye: (BB, IB, ZB) => BB.getFloat64(IB + 0 + 8 * ZB, !0),
        heading: (BB, IB) => BB.getFloat32(IB + 24, !0),
        pitch: (BB, IB) => BB.getFloat32(IB + 28, !0)
      },
      JZ = {
        BYTES: 40,
        feet: (BB, IB, ZB) => BB.getFloat64(IB + 0 + 8 * ZB, !0),
        eyeHeight: (BB, IB) => BB.getFloat32(IB + 24, !0),
        heading: (BB, IB) => BB.getFloat32(IB + 28, !0),
        headingIsDrawn: (BB, IB) => BB.getUint32(IB + 32, !0)
      },
      oZ = 32,
      GZ = 63,
      vZ = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function kZ(BB, IB, ZB, TB, JB) {
      var oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB, OB, YB, iB, pB, aB;
      switch (BB) {
        case 32:
          return 4 === TB && (null === (oB = JB.tickEnd) || void 0 === oB || oB.call(JB, yI.Iz(IB, ZB)), !0);
        case 33:
          return 12 === TB && (null === (GB = JB.entitySpawned) || void 0 === GB || GB.call(JB, UI.serverId(IB, ZB), UI.index(IB, ZB), UI.kind(IB, ZB)), !0);
        case 34:
          return 12 === TB && (null === (vB = JB.entityDespawned) || void 0 === vB || vB.call(JB, UI.serverId(IB, ZB), UI.index(IB, ZB), UI.kind(IB, ZB)), !0);
        case 39:
          return !(TB < 20) && (null === (kB = JB.changeBlockFail) || void 0 === kB || kB.call(JB, WI.pos(IB, ZB, 0), WI.pos(IB, ZB, 1), WI.pos(IB, ZB, 2), WI.actual(IB, ZB), WI.dataLen(IB, ZB), ZB + 20, TB - 20), !0);
        case 46:
          return 0 === TB && (null === (cB = JB.changeBlockFailEnd) || void 0 === cB || cB.call(JB), !0);
        case 48:
          return 20 === TB && (null === (nB = JB.inventoryEvent) || void 0 === nB || nB.call(JB, dI.what(IB, ZB), dI.value(IB, ZB), dI.pos(IB, ZB, 0), dI.pos(IB, ZB, 1), dI.pos(IB, ZB, 2), dI.block(IB, ZB)), !0);
        case 49:
          return 4 === TB && (null === (hB = JB.heldItemChanged) || void 0 === hB || hB.call(JB, CI.item(IB, ZB), CI.slot(IB, ZB)), !0);
        case 50:
          return 16 === TB && (null === (zB = JB.shotDamage) || void 0 === zB || zB.call(JB, QI.target(IB, ZB), QI.damage(IB, ZB), QI.distance(IB, ZB), QI.crit(IB, ZB)), !0);
        case 51:
          return !(TB < 4) && (null === (FB = JB.enchantOffer) || void 0 === FB || FB.call(JB, sI.slot(IB, ZB), ZB + 4, TB - 4), !0);
        case 52:
          return !(TB < 20) && (null === (NB = JB.uiEvent) || void 0 === NB || NB.call(JB, wI.what(IB, ZB), wI.value(IB, ZB), wI.pos(IB, ZB, 0), wI.pos(IB, ZB, 1), wI.pos(IB, ZB, 2), wI.block(IB, ZB), ZB + 20, TB - 20), !0);
        case 53:
          return 12 === TB && (null === (gB = JB.entityInfoChanged) || void 0 === gB || gB.call(JB, OI.serverId(IB, ZB), OI.index(IB, ZB), OI.what(IB, ZB)), !0);
        case 55:
          return 24 === TB && (null === (qB = JB.chunkSlot) || void 0 === qB || qB.call(JB, YI.cx(IB, ZB), YI.cy(IB, ZB), YI.cz(IB, ZB), YI.slot(IB, ZB), YI.generation(IB, ZB), YI.flags(IB, ZB)), !0);
        case 40:
          return 44 === TB && (null === (yB = JB.playSound) || void 0 === yB || yB.call(JB, iI.pos(IB, ZB, 0), iI.pos(IB, ZB, 1), iI.pos(IB, ZB, 2), iI.sound(IB, ZB), iI.flags(IB, ZB), iI.handle(IB, ZB), iI.volume(IB, ZB), iI.rate(IB, ZB), iI.refDist(IB, ZB)), !0);
        case 41:
          return 28 === TB && (null === (UB = JB.soundPos) || void 0 === UB || UB.call(JB, pI.pos(IB, ZB, 0), pI.pos(IB, ZB, 1), pI.pos(IB, ZB, 2), pI.handle(IB, ZB)), !0);
        case 42:
          return 16 === TB && (null === (WB = JB.soundSet) || void 0 === WB || WB.call(JB, aI.handle(IB, ZB), aI.volume(IB, ZB), aI.rate(IB, ZB), aI.refDist(IB, ZB)), !0);
        case 43:
          return 12 === TB && (null === (dB = JB.soundFade) || void 0 === dB || dB.call(JB, HI.handle(IB, ZB), HI.to(IB, ZB), HI.ms(IB, ZB), HI.flags(IB, ZB)), !0);
        case 44:
          return 4 === TB && (null === (CB = JB.soundStop) || void 0 === CB || CB.call(JB, MI.handle(IB, ZB)), !0);
        case 45:
          return 0 === TB && (null === (QB = JB.soundReset) || void 0 === QB || QB.call(JB), !0);
        case 56:
          return 8 === TB && (null === (sB = JB.replayFailed) || void 0 === sB || sB.call(JB, jI.reason(IB, ZB), jI.code(IB, ZB), jI.version(IB, ZB)), !0);
        case 57:
          return !(TB < 4) && (null === (wB = JB.replayOption) || void 0 === wB || wB.call(JB, PI.key(IB, ZB), PI.tag(IB, ZB), ZB + 4, TB - 4), !0);
        case 58:
          return 16 === TB && (null === (OB = JB.replayFilePart) || void 0 === OB || OB.call(JB, RI.save(IB, ZB), RI.index(IB, ZB), RI.ptr(IB, ZB), RI.len(IB, ZB)), !0);
        case 59:
          return 16 === TB && (null === (YB = JB.replayFileReady) || void 0 === YB || YB.call(JB, rI.save(IB, ZB), rI.kind(IB, ZB), rI.parts(IB, ZB), rI.bytes(IB, ZB)), !0);
        case 60:
          return !(TB < 4) && (null === (iB = JB.replayOpened) || void 0 === iB || iB.call(JB, mI.totalTicks(IB, ZB), ZB + 4, TB - 4), !0);
        case 61:
          return !(TB < 24) && (null === (pB = JB.replayUiEvent) || void 0 === pB || pB.call(JB, XI.what(IB, ZB), XI.int(IB, ZB), XI.x(IB, ZB), XI.y(IB, ZB), ZB + 24, TB - 24), !0);
        case 62:
          return 8 === TB && (null === (aB = JB.recorderEvent) || void 0 === aB || aB.call(JB, LI.what(IB, ZB), LI.kind(IB, ZB), LI.save(IB, ZB)), !0);
        default:
          return !1
      }
    }
    const cZ = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let nZ = new Uint8Array(0);

    function hZ(BB) {
      return nZ.buffer !== BB.buffer && (nZ = new Uint8Array(BB.buffer)), nZ
    }

    function zZ(BB, IB, ZB) {
      const TB = BB.QF(66, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setUint8(TB + 0, ZB), !0
    }

    function FZ(BB, IB, ZB) {
      const TB = BB.QF(67, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setUint32(TB + 0, ZB, !0), !0
    }

    function NZ(BB, IB, ZB) {
      const TB = BB.QF(68, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setUint8(TB + 0, ZB), !0
    }

    function gZ(BB, IB, ZB, TB) {
      const JB = BB.QF(69, IB, 4 + TB.length);
      if (JB < 0) return !1;
      const oB = BB.view;
      return oB.setUint8(JB + 0, ZB), hZ(oB).set(TB, oB.byteOffset + JB + 4), !0
    }

    function qZ(BB, IB, ZB, TB, JB) {
      const oB = BB.QF(128, IB, 4 + JB.length);
      if (oB < 0) return !1;
      const GB = BB.view;
      return GB.setUint8(oB + 0, ZB), GB.setUint16(oB + 2, TB, !0), hZ(GB).set(JB, GB.byteOffset + oB + 4), !0
    }

    function yZ(BB, IB, ZB) {
      const TB = BB.QF(131, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setInt32(TB + 0, ZB, !0), !0
    }

    function UZ(BB, IB, ZB) {
      const TB = BB.QF(132, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setUint32(TB + 0, ZB, !0), !0
    }

    function WZ(BB, IB, ZB) {
      const TB = BB.QF(133, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setUint32(TB + 0, ZB, !0), !0
    }

    function dZ(BB, IB, ZB) {
      const TB = BB.QF(144, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setUint8(TB + 0, ZB), !0
    }

    function CZ(BB, IB, ZB, TB, JB) {
      const oB = BB.QF(145, IB, 12);
      if (oB < 0) return !1;
      const GB = BB.view;
      return GB.setInt32(oB + 0, ZB, !0), GB.setInt32(oB + 4, TB, !0), GB.setInt32(oB + 8, JB, !0), !0
    }

    function QZ(BB, IB, ZB, TB) {
      const JB = BB.QF(256, IB, 4 + TB.length);
      if (JB < 0) return !1;
      const oB = BB.view;
      return oB.setUint16(JB + 0, ZB, !0), hZ(oB).set(TB, oB.byteOffset + JB + 4), !0
    }

    function sZ(BB, IB, ZB) {
      const TB = BB.QF(258, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setUint8(TB + 0, ZB), !0
    }

    function wZ(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
      const cB = BB.QF(320, IB, 48 + kB.length);
      if (cB < 0) return !1;
      const nB = BB.view;
      nB.setUint32(cB + 0, ZB, !0), nB.setUint16(cB + 4, TB, !0), nB.setUint16(cB + 6, JB, !0), nB.setUint32(cB + 8, oB, !0);
      for (let hB = 0; hB < 3; hB++) nB.setFloat64(cB + 12 + 8 * hB, GB[hB], !0);
      for (let hB = 0; hB < 3; hB++) nB.setFloat32(cB + 36 + 4 * hB, vB[hB], !0);
      return hZ(nB).set(kB, nB.byteOffset + cB + 48), !0
    }

    function OZ(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
      const cB = BB.QF(321, IB, 48 + kB.length);
      if (cB < 0) return !1;
      const nB = BB.view;
      nB.setUint32(cB + 0, ZB, !0), nB.setInt32(cB + 4, TB, !0), nB.setUint16(cB + 8, JB, !0), nB.setUint16(cB + 10, oB, !0);
      for (let hB = 0; hB < 3; hB++) nB.setFloat64(cB + 12 + 8 * hB, GB[hB], !0);
      for (let hB = 0; hB < 3; hB++) nB.setFloat32(cB + 36 + 4 * hB, vB[hB], !0);
      return hZ(nB).set(kB, nB.byteOffset + cB + 48), !0
    }

    function YZ(BB, IB, ZB, TB, JB, oB, GB) {
      const vB = BB.QF(322, IB, 44 + GB.length);
      if (vB < 0) return !1;
      const kB = BB.view;
      kB.setUint32(vB + 0, ZB, !0), kB.setUint32(vB + 4, TB, !0);
      for (let cB = 0; cB < 3; cB++) kB.setFloat64(vB + 8 + 8 * cB, JB[cB], !0);
      for (let cB = 0; cB < 3; cB++) kB.setFloat32(vB + 32 + 4 * cB, oB[cB], !0);
      return hZ(kB).set(GB, kB.byteOffset + vB + 44), !0
    }

    function iZ(BB, IB, ZB) {
      const TB = BB.QF(323, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setUint32(TB + 0, ZB, !0), !0
    }

    function pZ(BB, IB, ZB, TB, JB, oB) {
      const GB = BB.QF(324, IB, 32 + oB.length);
      if (GB < 0) return !1;
      const vB = BB.view;
      vB.setUint32(GB + 0, ZB, !0), vB.setUint32(GB + 4, TB, !0);
      for (let kB = 0; kB < 3; kB++) vB.setFloat64(GB + 8 + 8 * kB, JB[kB], !0);
      return hZ(vB).set(oB, vB.byteOffset + GB + 32), !0
    }

    function aZ(BB, IB) {
      return !(BB.QF(325, IB, 0) < 0)
    }

    function HZ(BB, IB, ZB, TB, JB, oB) {
      const GB = BB.QF(384, IB, 16);
      if (GB < 0) return !1;
      const vB = BB.view;
      return vB.setUint32(GB + 0, ZB, !0), vB.setUint32(GB + 4, TB, !0), vB.setFloat32(GB + 8, JB, !0), vB.setFloat32(GB + 12, oB, !0), !0
    }

    function MZ(BB, IB, ZB, TB, JB, oB, GB) {
      const vB = BB.QF(385, IB, 36 + GB.length);
      if (vB < 0) return !1;
      const kB = BB.view;
      kB.setUint32(vB + 0, ZB, !0), kB.setUint32(vB + 4, TB, !0);
      for (let cB = 0; cB < 3; cB++) kB.setFloat64(vB + 8 + 8 * cB, JB[cB], !0);
      return kB.setUint32(vB + 32, oB, !0), hZ(kB).set(GB, kB.byteOffset + vB + 36), !0
    }

    function jZ(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
      const cB = BB.QF(386, IB, 56 + kB.length);
      if (cB < 0) return !1;
      const nB = BB.view;
      nB.setUint32(cB + 0, ZB, !0), nB.setUint8(cB + 4, TB);
      for (let hB = 0; hB < 4; hB++) nB.setFloat32(cB + 8 + 4 * hB, JB[hB], !0);
      for (let hB = 0; hB < 3; hB++) nB.setFloat64(cB + 24 + 8 * hB, oB[hB], !0);
      return nB.setUint32(cB + 48, GB, !0), nB.setUint32(cB + 52, vB, !0), hZ(nB).set(kB, nB.byteOffset + cB + 56), !0
    }

    function PZ(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
      const cB = BB.QF(387, IB, 56);
      if (cB < 0) return !1;
      const nB = BB.view;
      nB.setUint32(cB + 0, ZB, !0), nB.setUint16(cB + 4, TB, !0), nB.setUint8(cB + 6, JB);
      for (let hB = 0; hB < 3; hB++) nB.setFloat64(cB + 8 + 8 * hB, oB[hB], !0);
      for (let hB = 0; hB < 2; hB++) nB.setFloat32(cB + 32 + 4 * hB, GB[hB], !0);
      nB.setFloat32(cB + 40, vB, !0);
      for (let hB = 0; hB < 3; hB++) nB.setFloat32(cB + 44 + 4 * hB, kB[hB], !0);
      return !0
    }

    function RZ(BB, IB, ZB) {
      const TB = BB.QF(388, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setUint32(TB + 0, ZB, !0), !0
    }

    function rZ(BB, IB, ZB, TB) {
      const JB = BB.QF(389, IB, 8);
      if (JB < 0) return !1;
      const oB = BB.view;
      return oB.setInt32(JB + 0, ZB, !0), oB.setFloat32(JB + 4, TB, !0), !0
    }

    function mZ(BB, IB, ZB, TB) {
      const JB = BB.QF(390, IB, 8);
      if (JB < 0) return !1;
      const oB = BB.view;
      return oB.setInt32(JB + 0, ZB, !0), oB.setFloat32(JB + 4, TB, !0), !0
    }

    function XZ(BB, IB, ZB, TB, JB, oB) {
      const GB = BB.QF(391, IB, 12);
      if (GB < 0) return !1;
      const vB = BB.view;
      return vB.setFloat32(GB + 0, ZB, !0), vB.setFloat32(GB + 4, TB, !0), vB.setUint8(GB + 8, JB), vB.setUint8(GB + 9, oB), !0
    }

    function LZ(BB, IB, ZB) {
      const TB = BB.QF(392, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setUint32(TB + 0, ZB, !0), !0
    }

    function eZ(BB, IB, ZB, TB, JB) {
      const oB = BB.QF(393, IB, 12);
      if (oB < 0) return !1;
      const GB = BB.view;
      return GB.setUint32(oB + 0, ZB, !0), GB.setUint16(oB + 4, TB, !0), GB.setFloat32(oB + 8, JB, !0), !0
    }

    function uZ(BB, IB, ZB, TB, JB, oB, GB) {
      const vB = BB.QF(394, IB, 36);
      if (vB < 0) return !1;
      const kB = BB.view;
      kB.setUint32(vB + 0, ZB, !0), kB.setUint16(vB + 4, TB, !0), kB.setUint8(vB + 6, JB);
      for (let cB = 0; cB < 3; cB++) kB.setFloat64(vB + 8 + 8 * cB, oB[cB], !0);
      return kB.setFloat32(vB + 32, GB, !0), !0
    }

    function fZ(BB, IB, ZB) {
      const TB = BB.QF(398, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setUint32(TB + 0, ZB, !0), !0
    }

    function lZ(BB, IB, ZB) {
      const TB = BB.QF(448, IB, 4);
      if (TB < 0) return !1;
      return BB.view.setFloat32(TB + 0, ZB, !0), !0
    }

    function AZ(BB, IB, ZB, TB) {
      const JB = BB.QF(450, IB, 12);
      if (JB < 0) return !1;
      const oB = BB.view;
      for (let GB = 0; GB < 2; GB++) oB.setFloat32(JB + 0 + 4 * GB, ZB[GB], !0);
      return oB.setUint8(JB + 8, TB), !0
    }

    function tZ(BB, IB, ZB, TB) {
      const JB = BB.QF(452, IB, 8);
      if (JB < 0) return !1;
      const oB = BB.view;
      return oB.setFloat32(JB + 0, ZB, !0), oB.setUint8(JB + 4, TB), !0
    }

    function bZ(BB, IB, ZB, TB, JB) {
      const oB = BB.QF(454, IB, 4);
      if (oB < 0) return !1;
      const GB = BB.view;
      return GB.setUint8(oB + 0, ZB), GB.setUint8(oB + 1, TB), GB.setUint8(oB + 2, JB), !0
    }

    function xZ(BB, IB, ZB, TB) {
      const JB = BB.QF(455, IB, 40);
      if (JB < 0) return !1;
      const oB = BB.view;
      for (let GB = 0; GB < 9; GB++) oB.setInt32(JB + 0 + 4 * GB, ZB[GB], !0);
      return oB.setUint32(JB + 36, TB, !0), !0
    }

    function EZ(BB, IB, ZB, TB) {
      const JB = BB.QF(456, IB, 8);
      if (JB < 0) return !1;
      const oB = BB.view;
      return oB.setFloat32(JB + 0, ZB, !0), oB.setUint8(JB + 4, TB), !0
    }

    function DZ(BB, IB, ZB, TB, JB) {
      const oB = BB.QF(457, IB, 16);
      if (oB < 0) return !1;
      const GB = BB.view;
      for (let vB = 0; vB < 3; vB++) GB.setInt32(oB + 0 + 4 * vB, ZB[vB], !0);
      for (let vB = 0; vB < 3; vB++) GB.setInt8(oB + 12 + 1 * vB, TB[vB]);
      return GB.setUint8(oB + 15, JB), !0
    }

    function KZ(BB, IB, ZB, TB) {
      const JB = BB.QF(530, IB, 4 + TB.length);
      if (JB < 0) return !1;
      const oB = BB.view;
      return oB.setUint8(JB + 0, ZB), hZ(oB).set(TB, oB.byteOffset + JB + 4), !0
    }

    function VZ(BB, IB, ZB, TB, JB, oB) {
      const GB = BB.QF(531, IB, 12 + oB.length);
      if (GB < 0) return !1;
      const vB = BB.view;
      return vB.setFloat32(GB + 0, ZB, !0), vB.setFloat32(GB + 4, TB, !0), vB.setUint32(GB + 8, JB, !0), hZ(vB).set(oB, vB.byteOffset + GB + 12), !0
    }

    function SZ(BB, IB, ZB, TB, JB, oB) {
      const GB = BB.QF(532, IB, 12 + oB.length);
      if (GB < 0) return !1;
      const vB = BB.view;
      return vB.setInt32(GB + 0, ZB, !0), vB.setInt32(GB + 4, TB, !0), vB.setUint32(GB + 8, JB, !0), hZ(vB).set(oB, vB.byteOffset + GB + 12), !0
    }

    function BT(BB, IB, ZB, TB, JB) {
      const oB = BB.QF(533, IB, 8 + JB.length);
      if (oB < 0) return !1;
      const GB = BB.view;
      return GB.setInt32(oB + 0, ZB, !0), GB.setInt32(oB + 4, TB, !0), hZ(GB).set(JB, GB.byteOffset + oB + 8), !0
    }

    function IT(BB, IB) {
      return !(BB.QF(576, IB, 0) < 0)
    }

    function ZT(BB, IB, ZB, TB, JB, oB) {
      const GB = BB.QF(577, IB, 36 + oB.length);
      if (GB < 0) return !1;
      const vB = BB.view;
      vB.setUint8(GB + 0, ZB);
      for (let kB = 0; kB < 16; kB++) vB.setUint8(GB + 4 + 1 * kB, TB[kB]);
      for (let kB = 0; kB < 16; kB++) vB.setUint8(GB + 20 + 1 * kB, JB[kB]);
      return hZ(vB).set(oB, vB.byteOffset + GB + 36), !0
    }

    function TT(BB, IB, ZB, TB) {
      const JB = BB.QF(578, IB, 4 + TB.length);
      if (JB < 0) return !1;
      const oB = BB.view;
      return oB.setUint8(JB + 0, ZB), hZ(oB).set(TB, oB.byteOffset + JB + 4), !0
    }

    function JT(BB, IB, ZB, TB, JB, oB, GB, vB) {
      const kB = BB.QF(579, IB, 36);
      if (kB < 0) return !1;
      const cB = BB.view;
      return cB.setFloat64(kB + 0, ZB, !0), cB.setFloat64(kB + 8, TB, !0), cB.setFloat64(kB + 16, JB, !0), cB.setFloat64(kB + 24, oB, !0), cB.setUint16(kB + 32, GB, !0), cB.setUint8(kB + 34, vB), !0
    }
    class oT {
      constructor(BB, IB) {
        this.core = BB, this.afterCall = IB
      }
      canModify(BB, IB, ZB) {
        const TB = this.core.foB(BB, IB, ZB);
        return this.afterCall(), TB
      }
      terrainBlocked(BB, IB, ZB, TB, JB) {
        const oB = this.core.mGB(BB, IB, ZB, TB, JB);
        return this.afterCall(), oB
      }
      UH(BB, IB, ZB, TB) {
        const JB = this.core.kF(BB, IB, ZB, TB);
        return this.afterCall(), JB
      }
      blockData(BB, IB, ZB) {
        const TB = this.core.eoB(BB, IB, ZB);
        return this.afterCall(), TB
      }
      cameraSweep(BB, IB, ZB, TB, JB, oB, GB) {
        const vB = this.core.eJB(BB, IB, ZB, TB, JB, oB, GB);
        return this.afterCall(), vB
      }
      hasServerTarget(BB) {
        const IB = this.core.JGB(BB);
        return this.afterCall(), IB
      }
      entityInteractable(BB) {
        const IB = this.core.SoB(BB);
        return this.afterCall(), IB
      }
      entityCrouching(BB) {
        const IB = this.core.VoB(BB);
        return this.afterCall(), IB
      }
      predictServerPosition(BB, IB, ZB, TB) {
        const JB = this.core.gGB(BB, IB, ZB, TB);
        return this.afterCall(), JB
      }
      setOtherEntitySetting(BB, IB, ZB) {
        const TB = this.core.tJB(BB, IB, ZB);
        return this.afterCall(), TB
      }
      entityInfoBatch(BB) {
        const IB = this.core.EJB(BB);
        return this.afterCall(), IB
      }
      entityName(BB) {
        const IB = this.core.BGB(BB);
        return this.afterCall(), IB
      }
      hasEffect(BB, IB) {
        const ZB = this.core.TGB(BB, IB);
        return this.afterCall(), ZB
      }
      scratchPtr() {
        const BB = this.core.mJB();
        return this.afterCall(), BB
      }
      invSwap(BB, IB) {
        const ZB = this.core.nGB(BB, IB);
        return this.afterCall(), ZB
      }
      invMove(BB, IB, ZB) {
        const TB = this.core.vGB(BB, IB, ZB);
        return this.afterCall(), TB
      }
      invQuickMove(BB, IB, ZB, TB) {
        const JB = this.core.kGB(BB, IB, ZB, TB);
        return this.afterCall(), JB
      }
      invRemove(BB, IB, ZB) {
        const TB = this.core.cGB(BB, IB, ZB);
        return this.afterCall(), TB
      }
      invEnchant(BB, IB, ZB, TB, JB) {
        const oB = this.core.GGB(BB, IB, ZB, TB, JB);
        return this.afterCall(), oB
      }
      craft(BB, IB, ZB) {
        const TB = this.core.craft(BB, IB, ZB);
        return this.afterCall(), TB
      }
      salvage(BB, IB, ZB) {
        const TB = this.core.salvage(BB, IB, ZB);
        return this.afterCall(), TB
      }
      selectSlot(BB) {
        const IB = this.core.WGB(BB);
        return this.afterCall(), IB
      }
      closeChest() {
        const BB = this.core.boB();
        return this.afterCall(), BB
      }
      itemAttributesBatch(BB) {
        const IB = this.core.xJB(BB);
        return this.afterCall(), IB
      }
      itemNames() {
        const BB = this.core.kY();
        return this.afterCall(), BB
      }
      blockProps() {
        const BB = this.core.uoB();
        return this.afterCall(), BB
      }
      itemProps() {
        const BB = this.core.hGB();
        return this.afterCall(), BB
      }
      salvageRecipe(BB) {
        const IB = this.core.KJB(BB);
        return this.afterCall(), IB
      }
      craftingView(BB, IB, ZB) {
        const TB = this.core.bJB(BB, IB, ZB);
        return this.afterCall(), TB
      }
      directorView() {
        const BB = this.core.LJB();
        return this.afterCall(), BB
      }
      directorDefaultPose() {
        const BB = this.core.uJB();
        return this.afterCall(), BB
      }
      directorEntity(BB) {
        const IB = this.core.fJB(BB);
        return this.afterCall(), IB
      }
      directorPose(BB, IB, ZB, TB, JB, oB) {
        const GB = this.core.lJB(BB, IB, ZB, TB, JB, oB);
        return this.afterCall(), GB
      }
      passTimings(BB) {
        const IB = this.core.NGB(BB);
        return this.afterCall(), IB
      }
      drawCensus() {
        const BB = this.core.KoB();
        return this.afterCall(), BB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);